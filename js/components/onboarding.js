// ============================================
// DutchPath - Onboarding Component
// Mode selection + optional placement test
// ============================================

const OnboardingComponent = {
    step: 1,
    selectedMode: null,
    placementAnswers: [],
    placementQuestions: [
        { question: 'What does "Hallo, hoe gaat het?" mean?', options: ['Hello, what time is it?', 'Hello, how are you?', 'Hello, where are you?', 'Hello, who are you?'], answer: 1, level: 'A1' },
        { question: 'Choose the correct article: "___ huis"', options: ['de', 'het', 'een', 'geen'], answer: 1, level: 'A1' },
        { question: '"Ik heb twee kinderen." means:', options: ['I have two cats', 'I have two children', 'I see two children', 'I want two children'], answer: 1, level: 'A1' },
        { question: 'What is the past participle of "werken"?', options: ['gewerken', 'gewerkt', 'werkde', 'gewerkd'], answer: 1, level: 'A2' },
        { question: '"Ik moet naar de huisarts" — what is a huisarts?', options: ['Dentist', 'Pharmacist', 'General practitioner', 'Specialist'], answer: 2, level: 'A2' },
        { question: 'Complete: "Ik weet dat hij in Amsterdam ___." (wonen)', options: ['woon', 'woont', 'wonen', 'woonde'], answer: 1, level: 'B1' },
        { question: 'What does "Er zijn veel mensen op straat" mean?', options: ['They are many people', 'There are many people on the street', 'Many people are here', 'People are everywhere'], answer: 1, level: 'B1' },
        { question: '"Het huis wordt gebouwd" is an example of:', options: ['Present tense', 'Past tense', 'Passive voice', 'Conditional'], answer: 2, level: 'B2' },
    ],

    render() {
        const container = document.getElementById('onboarding-content');
        switch (this.step) {
            case 1: this.renderWelcome(container); break;
            case 2: this.renderModeSelect(container); break;
            case 3: this.renderPlacement(container); break;
            case 4: this.renderResult(container); break;
        }
    },

    renderWelcome(container) {
        container.innerHTML = `
            <div class="onboarding-step">
                <span class="hero-emoji">🇳🇱</span>
                <h2>Welkom bij DutchPath!</h2>
                <p>Your personal Dutch language learning app, designed to prepare you for the <strong>Dutch Integration Exam</strong> (Staatsexamen NT2 + KNM).</p>
                <p style="color: var(--text-muted); font-size: var(--text-base);">From zero to B2 — at your own pace.</p>
                <button class="btn btn-primary btn-lg mt-xl" onclick="OnboardingComponent.step = 2; OnboardingComponent.render();">
                    Let's Get Started →
                </button>
            </div>
        `;
    },

    renderModeSelect(container) {
        container.innerHTML = `
            <div class="onboarding-step">
                <span class="hero-emoji">⏱️</span>
                <h2>Choose Your Study Mode</h2>
                <p>Select the pace that fits your schedule. You can change this later.</p>

                <div class="mode-cards">
                    <div class="mode-card ${this.selectedMode === 'speed' ? 'selected' : ''}" onclick="OnboardingComponent.selectMode('speed')">
                        <span class="mode-icon">🚀</span>
                        <div class="mode-info">
                            <h3>Speed Mode</h3>
                            <p>Intensive 4-month sprint to B2. Maximum efficiency, daily commitment required.</p>
                            <div class="mode-meta">
                                <span>📅 16 weeks</span>
                                <span>⏰ ~2.5 hrs/day</span>
                                <span>🎯 B2 target</span>
                            </div>
                        </div>
                    </div>

                    <div class="mode-card ${this.selectedMode === 'accelerated' ? 'selected' : ''}" onclick="OnboardingComponent.selectMode('accelerated')">
                        <span class="mode-icon">⚡</span>
                        <div class="mode-info">
                            <h3>Accelerated Mode</h3>
                            <p>8-month focused plan. Solid B2 preparation with sustainable daily study.</p>
                            <div class="mode-meta">
                                <span>📅 32 weeks</span>
                                <span>⏰ ~2 hrs/day</span>
                                <span>🎯 B2 target</span>
                            </div>
                        </div>
                    </div>

                    <div class="mode-card ${this.selectedMode === 'standard' ? 'selected' : ''}" onclick="OnboardingComponent.selectMode('standard')">
                        <span class="mode-icon">📚</span>
                        <div class="mode-info">
                            <h3>Standard Mode</h3>
                            <p>12-month steady journey. Perfect for busy schedules, 1 hour per day.</p>
                            <div class="mode-meta">
                                <span>📅 52 weeks</span>
                                <span>⏰ ~1 hr/day</span>
                                <span>🎯 B2 target</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: var(--space-md); justify-content: center;">
                    <button class="btn btn-ghost" onclick="OnboardingComponent.step = 1; OnboardingComponent.render();">← Back</button>
                    <button class="btn btn-primary btn-lg" ${!this.selectedMode ? 'disabled' : ''} onclick="OnboardingComponent.step = 3; OnboardingComponent.placementAnswers = []; OnboardingComponent.render();">
                        Continue →
                    </button>
                </div>
            </div>
        `;
    },

    selectMode(mode) {
        this.selectedMode = mode;
        this.render();
    },

    renderPlacement(container) {
        const qIndex = this.placementAnswers.length;

        if (qIndex >= this.placementQuestions.length) {
            this.step = 4;
            this.render();
            return;
        }

        const q = this.placementQuestions[qIndex];

        container.innerHTML = `
            <div class="onboarding-step">
                <span class="hero-emoji">📝</span>
                <h2>Quick Placement Check</h2>
                <p>Answer what you can — it's OK to guess or skip! This helps us find your starting point.</p>

                <div class="placement-progress">
                    ${this.placementQuestions.map((_, i) => `
                        <div class="placement-dot ${i < qIndex ? 'done' : ''} ${i === qIndex ? 'active' : ''}"></div>
                    `).join('')}
                </div>

                <div class="placement-question">
                    <span class="q-number">Question ${qIndex + 1} of ${this.placementQuestions.length} — ${q.level}</span>
                    <h3>${q.question}</h3>
                    <div class="placement-options">
                        ${q.options.map((opt, i) => `
                            <div class="placement-option" onclick="OnboardingComponent.answerPlacement(${i})">${opt}</div>
                        `).join('')}
                    </div>
                </div>

                <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-lg);">
                    <button class="btn btn-ghost" onclick="OnboardingComponent.answerPlacement(-1)">Skip this question</button>
                </div>
            </div>
        `;
    },

    answerPlacement(answerIndex) {
        this.placementAnswers.push(answerIndex);
        this.render();
    },

    calculatePlacement() {
        let correct = 0;
        this.placementAnswers.forEach((ans, i) => {
            if (ans === this.placementQuestions[i].answer) correct++;
        });

        const score = correct / this.placementQuestions.length;
        let startWeek = 1;
        let level = 'A1';

        if (score >= 0.75) { startWeek = 13; level = 'B2'; }
        else if (score >= 0.5) { startWeek = 9; level = 'B1'; }
        else if (score >= 0.3) { startWeek = 5; level = 'A2'; }
        else { startWeek = 1; level = 'A1'; }

        return { correct, total: this.placementQuestions.length, score, startWeek, level };
    },

    renderResult(container) {
        const result = this.calculatePlacement();
        const config = DutchStorage.getModeConfig(this.selectedMode);
        const startDate = new Date().toISOString().split('T')[0];
        const examDate = new Date();
        examDate.setDate(examDate.getDate() + config.totalWeeks * 7);

        container.innerHTML = `
            <div class="onboarding-step">
                <span class="hero-emoji">🎉</span>
                <h2>You're All Set!</h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin: var(--space-xl) 0; text-align: left;">
                    <div class="card">
                        <div class="card-subtitle">Study Mode</div>
                        <div style="font-size: var(--text-xl); font-weight: 700; margin-top: var(--space-xs);">
                            ${config.emoji} ${config.name}
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-subtitle">Starting Level</div>
                        <div style="font-size: var(--text-xl); font-weight: 700; margin-top: var(--space-xs);">
                            <span class="level-badge ${result.level.toLowerCase()}">${result.level}</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-subtitle">Placement Score</div>
                        <div style="font-size: var(--text-xl); font-weight: 700; margin-top: var(--space-xs);">
                            ${result.correct}/${result.total} correct
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-subtitle">Target Exam Date</div>
                        <div style="font-size: var(--text-xl); font-weight: 700; margin-top: var(--space-xs);">
                            ${examDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </div>

                <p style="color: var(--text-secondary);">
                    You scored ${result.correct} out of ${result.total}, placing you at <strong>${result.level}</strong>.
                    Your ${config.totalWeeks}-week journey starts today!
                </p>

                <button class="btn btn-primary btn-lg mt-xl" onclick="OnboardingComponent.complete()">
                    🚀 Start Learning Dutch!
                </button>
            </div>
        `;
    },

    complete() {
        const result = this.calculatePlacement();
        const config = DutchStorage.getModeConfig(this.selectedMode);
        const startDate = new Date().toISOString().split('T')[0];

        DutchStorage.update(data => {
            data.onboarded = true;
            data.mode = this.selectedMode;
            data.startDate = startDate;
            data.currentWeek = result.startWeek;
            data.currentDay = 1;
            data.placementScore = result.correct;
            data.settings.dailyGoalMinutes = config.hoursPerDay * 60;
        });

        DutchStorage.updateStreak();

        // Hide onboarding, show app
        document.getElementById('onboarding-overlay').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');

        // Initialize app
        App.init();
    }
};
