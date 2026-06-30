// ============================================
// DutchPath - Lesson Component
// ============================================

const LessonComponent = {
    currentSection: 0,

    render() {
        const container = document.getElementById('view-lesson');
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const weekData = CurriculumData.getWeek(currWeek);
        const vocabWords = VocabularyData.getByWeek(currWeek);
        const grammarLessons = weekData.grammarIds.map(id => GrammarData.getById(id)).filter(Boolean);
        const readings = weekData.readingIds.map(id => ReadingData.getById(id)).filter(Boolean);
        const level = DutchStorage.getCurrentLevel();
        const skillPractice = CurriculumData.getSkillPractice(currWeek);

        container.innerHTML = `
            <div class="lesson-header">
                <div>
                    <h2>📖 Week ${data.currentWeek}: ${weekData.titleEn}</h2>
                    <div class="lesson-breadcrumb">
                        <span class="level-badge ${level.toLowerCase()}">${level}</span>
                        ${weekData.focus}
                    </div>
                </div>
            </div>

            <!-- Vocabulary Section -->
            ${vocabWords.length > 0 ? `
            <div class="lesson-section">
                <h3><span class="section-icon">📖</span> New Vocabulary (${vocabWords.length} words)</h3>
                <div class="vocab-grid">
                    ${vocabWords.map(w => `
                        <div class="vocab-card" onclick="DutchSpeech.speak('${w.dutch.replace(/'/g, "\\'")}')">
                            <div class="vocab-dutch">
                                ${w.dutch}
                                ${w.gender ? `<span class="vocab-gender ${w.gender}">${w.gender}</span>` : ''}
                                <button class="speak-btn" onclick="event.stopPropagation(); DutchSpeech.speak('${w.dutch.replace(/'/g, "\\'")}')">🔊</button>
                            </div>
                            <div class="vocab-english">${w.english}</div>
                            ${w.example ? `<div class="vocab-example">${w.example}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-primary" onclick="App.navigate('flashcards')">🃏 Practice with Flashcards</button>
                </div>
            </div>` : ''}

            <!-- Grammar Sections -->
            ${grammarLessons.map(lesson => `
            <div class="lesson-section">
                <h3><span class="section-icon">📝</span> ${lesson.title}</h3>
                <div class="grammar-content">
                    ${this.renderMarkdown(lesson.explanation)}
                </div>
                <div style="margin-top: var(--space-lg);">
                    <h4 style="margin-bottom: var(--space-md);">Examples:</h4>
                    ${lesson.examples.map(ex => `
                        <div class="grammar-example">
                            <div class="grammar-dutch">${ex.dutch} <button class="speak-btn" onclick="DutchSpeech.speak('${ex.dutch.replace(/'/g, "\\'")}')">🔊</button></div>
                            <div class="grammar-english">${ex.english}</div>
                        </div>
                    `).join('')}
                </div>
                <div style="text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-primary" onclick="QuizComponent.startGrammarQuiz('${lesson.id}')">📝 Practice Exercises</button>
                </div>
            </div>
            `).join('')}

            <!-- Reading Sections -->
            ${readings.map(passage => `
            <div class="lesson-section">
                <h3><span class="section-icon">📕</span> Reading: ${passage.titleEn}</h3>
                <div class="reading-text">${passage.text}</div>
                <div style="text-align: center;">
                    <button class="btn btn-primary" onclick="ReadingComponent.startReading('${passage.id}')">📕 Answer Questions</button>
                </div>
            </div>
            `).join('')}

            <!-- Exam Skills Practice -->
            <div class="lesson-section">
                <h3><span class="section-icon">🎧</span> Listening Practice</h3>
                <p>${skillPractice.listening}</p>
                <div style="display: flex; gap: var(--space-md); flex-wrap: wrap; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary" onclick="LessonComponent.playListeningPractice(${currWeek})">🔊 Play Practice Text</button>
                    <button class="btn btn-primary" onclick="LessonComponent.completeSkillPractice('listening', 15)">Mark Listening Complete</button>
                </div>
            </div>

            <div class="lesson-section">
                <h3><span class="section-icon">🎙️</span> Speaking Practice</h3>
                <p>${skillPractice.speaking}</p>
                <div style="display: flex; gap: var(--space-md); flex-wrap: wrap; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary" onclick="LessonComponent.playSpeakingPrompt(${currWeek})">🔊 Hear Prompt</button>
                    <button class="btn btn-primary" onclick="LessonComponent.completeSkillPractice('speaking', 15)">Mark Speaking Complete</button>
                </div>
            </div>

            <div class="lesson-section">
                <h3><span class="section-icon">✍️</span> Writing Practice</h3>
                <p>${skillPractice.writing}</p>
                <textarea id="writing-practice-text" placeholder="Write your Dutch answer here..." style="width: 100%; min-height: 160px; margin-top: var(--space-md); padding: var(--space-md); border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-secondary); color: var(--text-primary);"></textarea>
                <div style="margin-top: var(--space-md); color: var(--text-muted); font-size: var(--text-sm);">
                    Checklist: clear topic sentence, week vocabulary, correct verb position, and polite/formal tone when needed.
                </div>
                <div style="text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-primary" onclick="LessonComponent.completeSkillPractice('writing', 15)">Mark Writing Complete</button>
                </div>
            </div>

            <!-- Navigation -->
            <div style="display: flex; justify-content: space-between; margin-top: var(--space-xl);">
                <button class="btn btn-secondary" onclick="LessonComponent.prevWeek()" ${data.currentWeek <= 1 ? 'disabled' : ''}>
                    ← Previous Week
                </button>
                <button class="btn btn-primary" onclick="LessonComponent.nextWeek()">
                    Next Week →
                </button>
            </div>
        `;

    },

    playListeningPractice(weekNum) {
        const weekData = CurriculumData.getWeek(weekNum);
        const vocab = VocabularyData.getByWeek(weekNum).slice(0, 8).map(w => w.dutch).join(', ');
        DutchSpeech.speak(`${weekData.title}. ${weekData.focus}. Woorden: ${vocab}.`);
    },

    playSpeakingPrompt(weekNum) {
        const practice = CurriculumData.getSkillPractice(weekNum);
        DutchSpeech.speak(practice.speaking);
    },

    completeSkillPractice(type, minutes) {
        DutchStorage.markActivityComplete(type, minutes);
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} practice completed. Great work!`);
        if (App.currentView === 'dashboard') DashboardComponent.render();
    },

    renderMarkdown(text) {
        // Simple markdown to HTML
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n\|(.+)/g, (match) => {
                // Table handling
                return match;
            })
            .replace(/^## (.+)/gm, '<h4>$1</h4>')
            .replace(/^- (.+)/gm, '<li>$1</li>')
            .split('\n').map(line => {
                if (line.startsWith('|')) return line; // skip table lines for now
                return line;
            }).join('\n')
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            .replace(/<\/ul>\s*<ul>/g, '');
    },

    nextWeek() {
        const data = DutchStorage.load();
        const config = DutchStorage.getModeConfig(data.mode);
        if (data.currentWeek < config.totalWeeks) {
            DutchStorage.markLessonComplete(data.currentWeek);
            DutchStorage.set('currentWeek', data.currentWeek + 1);
            this.render();
            window.scrollTo(0, 0);
        }
    },

    prevWeek() {
        const data = DutchStorage.load();
        if (data.currentWeek > 1) {
            DutchStorage.set('currentWeek', data.currentWeek - 1);
            this.render();
            window.scrollTo(0, 0);
        }
    }
};
