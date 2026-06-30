// ============================================
// DutchPath - Dashboard Component
// ============================================

const DashboardComponent = {
    render() {
        const container = document.getElementById('view-dashboard');
        const data = DutchStorage.load();
        const config = DutchStorage.getModeConfig(data.mode);
        const level = DutchStorage.getCurrentLevel();
        const todayProgress = DutchStorage.getTodayProgress();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const weekData = CurriculumData.getWeek(currWeek);
        const dailyPlan = CurriculumData.getDailyPlan(currWeek, { mode: data.mode });
        const planProgress = DutchStorage.getDailyPlanProgress(dailyPlan);
        const examDate = DutchStorage.getExamDate();
        const daysLeft = examDate ? Math.max(0, Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24))) : 0;
        const totalVocab = VocabularyData.getIdsUpToWeek(currWeek);
        const vocabMastery = SRS.getMasteryPercent(totalVocab);

        // Skills data
        const skills = this.calculateSkills(data, currWeek);

        container.innerHTML = `
            <div class="dashboard-header">
                <h2>Goedemorgen! 🌅</h2>
                <p class="greeting">
                    ${config.emoji} ${config.name} — Week ${data.currentWeek} of ${config.totalWeeks}
                    • Day ${data.currentDay || 1} of 7
                    <span class="level-badge ${level.toLowerCase()}" style="margin-left: 8px;">${level}</span>
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="stats-grid">
                <div class="stat-card primary">
                    <div class="stat-value">${data.streak.count}</div>
                    <div class="stat-label">Day Streak 🔥</div>
                    <div class="stat-meta">Keep it going!</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-value">${vocabMastery}%</div>
                    <div class="stat-label">Vocabulary Mastery</div>
                    <div class="stat-meta">${totalVocab.length} words available</div>
                </div>
                <div class="stat-card accent">
                    <div class="stat-value">${daysLeft}</div>
                    <div class="stat-label">Days Until Exam</div>
                    <div class="stat-meta">${examDate ? examDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Not set'}</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-value">${planProgress.completedMinutes}</div>
                    <div class="stat-label">Minutes Today</div>
                    <div class="stat-meta">${planProgress.targetMinutes} min daily target</div>
                </div>
            </div>

            <!-- Timeline -->
            <div class="card card-glow timeline-container">
                <div class="card-header">
                    <div class="card-title">📅 Your Learning Journey</div>
                    <div class="card-subtitle">${config.totalWeeks} weeks total</div>
                </div>
                <div class="timeline-bar">
                    ${this.renderTimeline(data, config)}
                </div>
                <div class="timeline-level-labels">
                    <span style="flex: ${config.a0Weeks}; color: #A78BFA;">A0</span>
                    <span style="flex: ${config.a1Weeks}; color: #48CAE4;">A1</span>
                    <span style="flex: ${config.a2Weeks}; color: var(--success);">A2</span>
                    <span style="flex: ${config.b1Weeks}; color: var(--warning);">B1</span>
                    <span style="flex: ${config.b2Weeks}; color: var(--primary);">B2</span>
                </div>
            </div>

            <!-- Today's Plan -->
            <div class="card card-glow mt-lg">
                <div class="card-header">
                    <div class="card-title">📋 Today's Study Plan</div>
                    <div class="card-subtitle">
                        ${weekData ? weekData.titleEn : 'Review'} •
                        ${planProgress.completed}/${planProgress.total} activities •
                        ${planProgress.completedMinutes}/${planProgress.targetMinutes} min complete
                    </div>
                </div>
                <div style="padding: 0 var(--space-lg) var(--space-lg);">
                    <div class="lesson-progress-bar">
                        <div class="lesson-progress-fill" style="width: ${Math.min(100, Math.round((planProgress.completedMinutes / planProgress.targetMinutes) * 100))}%"></div>
                    </div>
                    <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-sm);">
                        Planned today: ${planProgress.plannedMinutes} minutes. Extra review is added automatically when core lessons are shorter than your goal.
                    </p>
                </div>
            </div>
            <div class="today-plan mt-md">
                ${dailyPlan.map(item => `
                    <div class="plan-item ${todayProgress[item.type] ? 'completed' : ''}" onclick="DashboardComponent.openPlanItem('${item.type}', '${item.data?.lessonId || item.data?.passageId || item.data?.topicId || item.data?.examType || ''}')">
                        <span class="plan-icon">${item.icon}</span>
                        <div class="plan-info">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                            <span class="plan-time">${item.duration}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Skills -->
            <div class="card card-glow mt-lg">
                <div class="card-header">
                    <div class="card-title">🎯 Skill Progress</div>
                </div>
                <div class="skill-radar-container">
                    <div class="skill-legend">
                        ${skills.map(s => `
                            <div class="skill-legend-item">
                                <div class="skill-dot" style="background: ${s.color};"></div>
                                <span class="skill-name">${s.name}</span>
                                <div class="skill-bar-container">
                                    <div class="skill-bar-fill" style="width: ${s.value}%; background: ${s.color};"></div>
                                </div>
                                <span class="skill-percent">${s.value}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderTimeline(data, config) {
        const totalWeeks = config.totalWeeks;
        const maxDisplay = Math.min(totalWeeks, 52); // Cap display at 52
        const step = totalWeeks > 52 ? Math.ceil(totalWeeks / 52) : 1;
        let html = '';

        for (let w = 1; w <= totalWeeks; w += step) {
            let cls = '';
            let levelCls = '';

            if (w < data.currentWeek) cls = 'completed';
            else if (w === data.currentWeek) cls = 'current';

            // Determine level
            if (w <= config.a0Weeks) levelCls = 'a0';
            else if (w <= config.a0Weeks + config.a1Weeks) levelCls = 'a1';
            else if (w <= config.a0Weeks + config.a1Weeks + config.a2Weeks) levelCls = 'a2';
            else if (w <= config.a0Weeks + config.a1Weeks + config.a2Weeks + config.b1Weeks) levelCls = 'b1';
            else levelCls = 'b2';

            const label = (totalWeeks <= 20 || w % Math.ceil(totalWeeks / 20) === 1) ? w : '';
            html += `<div class="timeline-week ${cls} ${levelCls}" title="Week ${w}">${label}</div>`;
        }

        return html;
    },

    calculateSkills(data, currWeek) {
        const vocabIds = VocabularyData.getIdsUpToWeek(currWeek);
        const vocabMastery = SRS.getMasteryPercent(vocabIds);

        // Grammar progress
        const allGrammar = GrammarData.getByWeek(currWeek);
        const grammarDone = allGrammar.filter(g => data.grammarProgress[g.id] >= 80).length;
        const grammarPct = allGrammar.length ? Math.round((grammarDone / allGrammar.length) * 100) : 0;

        // Reading progress
        const allReading = ReadingData.getByWeek(currWeek);
        const readingDone = allReading.filter(r => data.readingProgress[r.id]?.completed).length;
        const readingPct = allReading.length ? Math.round((readingDone / allReading.length) * 100) : 0;

        // KNM progress
        const knmTopics = KNMData.getAllTopics();
        const knmDone = knmTopics.filter(t => {
            const p = data.knmProgress[t.id];
            return p && p.quizScores && p.quizScores.length > 0;
        }).length;
        const knmPct = Math.round((knmDone / knmTopics.length) * 100);

        const today = DutchStorage.getTodayProgress();
        const skillPracticePct = Math.round((['listening', 'speaking', 'writing'].filter(k => today[k]).length / 3) * 100);

        // Overall
        const overall = Math.round((vocabMastery + grammarPct + readingPct + knmPct + skillPracticePct) / 5);

        return [
            { name: 'Vocabulary', value: vocabMastery, color: '#FF6B00' },
            { name: 'Grammar', value: grammarPct, color: '#00B4D8' },
            { name: 'Reading', value: readingPct, color: '#06D6A0' },
            { name: 'KNM', value: knmPct, color: '#FFD166' },
            { name: 'Listening/Speaking/Writing', value: skillPracticePct, color: '#EF476F' },
            { name: 'Overall', value: overall, color: '#A78BFA' }
        ];
    },

    openPlanItem(type, id) {
        if (type === 'flashcards') return App.navigate('flashcards');
        if (type === 'knm') {
            App.navigate('knm');
            if (id) setTimeout(() => KNMComponent.openTopic(id), 0);
            return;
        }
        if (type === 'reading') {
            App.navigate('reading');
            if (id) setTimeout(() => ReadingComponent.startReading(id), 0);
            return;
        }
        if (type === 'grammar') {
            if (id) {
                App.navigate('grammar');
                setTimeout(() => GrammarBrowserComponent.openLesson(id), 0);
                return;
            }
            return App.navigate('grammar');
        }
        if (type === 'vocabulary') return App.navigate('vocabulary');
        if (type === 'exam') return App.navigate('exam');
        return App.navigate('lesson');
    }
};
