// ============================================
// DutchPath - Reading Browser Component
// ============================================

const ReadingComponent = {
    selectedPassage: null,
    quizMode: false,
    quizAnswers: [],
    currentQuestion: 0,

    render() {
        const container = document.getElementById('view-reading');
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const passages = ReadingData.getByWeek(currWeek);

        container.innerHTML = `
            <div class="page-header">
                <h2>📕 Reading Practice</h2>
                <p>Graded Dutch texts with comprehension questions</p>
            </div>

            <div class="browse-list">
                ${passages.map(p => {
                    const done = data.readingProgress[p.id]?.completed;
                    const score = data.readingProgress[p.id]?.score;
                    return `
                    <div class="browse-item" onclick="ReadingComponent.startReading('${p.id}')">
                        <div class="browse-item-info">
                            <h4>
                                <span class="level-badge ${p.level.toLowerCase()}" style="margin-right: 8px;">${p.level}</span>
                                ${p.title}
                            </h4>
                            <p>${p.titleEn} • ${p.questions.length} questions</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: var(--space-md);">
                            ${done ? `<span style="color: var(--success); font-size: var(--text-sm);">${score}%</span>` : ''}
                            <span class="browse-item-arrow">→</span>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>

            ${passages.length === 0 ? `
                <div class="empty-state">
                    <div class="empty-icon">📕</div>
                    <h3>No readings available yet</h3>
                    <p>Progress further in your lessons to unlock reading passages.</p>
                </div>
            ` : ''}
        `;
    },

    startReading(passageId) {
        this.selectedPassage = ReadingData.getById(passageId);
        if (!this.selectedPassage) return;
        this.quizMode = false;
        this.quizAnswers = [];
        this.currentQuestion = 0;

        // Show passage in active reading view
        const container = document.getElementById('view-reading');
        App.navigate('reading');

        container.innerHTML = `
            <button class="back-btn" onclick="ReadingComponent.render()">← Back to Readings</button>

            <div class="page-header">
                <h2>${this.selectedPassage.title}</h2>
                <p>
                    <span class="level-badge ${this.selectedPassage.level.toLowerCase()}">${this.selectedPassage.level}</span>
                    ${this.selectedPassage.titleEn}
                </p>
            </div>

            <div class="reading-text">
                ${this.selectedPassage.text.split('\n').map(p => `<p>${p}</p>`).join('')}
            </div>

            <div style="text-align: center; margin-top: var(--space-xl);">
                <button class="btn btn-primary btn-lg" onclick="ReadingComponent.startQuiz()">
                    📝 Answer Comprehension Questions (${this.selectedPassage.questions.length})
                </button>
            </div>
        `;

    },

    startQuiz() {
        this.quizMode = true;
        this.quizAnswers = [];
        this.currentQuestion = 0;
        this.renderQuiz();
    },

    renderQuiz() {
        const container = document.getElementById('view-reading');
        const p = this.selectedPassage;

        if (this.currentQuestion >= p.questions.length) {
            this.renderResults(container);
            return;
        }

        const q = p.questions[this.currentQuestion];
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const progress = Math.round((this.currentQuestion / p.questions.length) * 100);

        container.innerHTML = `
            <button class="back-btn" onclick="ReadingComponent.startReading('${p.id}')">← Back to Text</button>

            <div class="quiz-container">
                <div class="lesson-progress-bar">
                    <div class="lesson-progress-fill" style="width: ${progress}%"></div>
                </div>

                <div class="flashcard-progress" style="text-align: center; margin-bottom: var(--space-lg);">
                    Question ${this.currentQuestion + 1} of ${p.questions.length}
                </div>

                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `
                            <div class="quiz-option ${this.answered ? (opt === q.answer ? 'correct' : i === this.selectedOpt ? 'incorrect' : 'disabled') : ''}" 
                                 onclick="ReadingComponent.answer(${i}, '${opt.replace(/'/g, "\\'")}')">
                                <span class="quiz-option-letter">${letters[i]}</span>
                                ${opt}
                            </div>
                        `).join('')}
                    </div>

                    ${this.answered ? `
                        <div class="quiz-feedback ${this.lastCorrect ? 'correct' : 'incorrect'}">
                            ${this.lastCorrect ? '✅ Correct!' : `❌ Answer: <strong>${q.answer}</strong>`}
                        </div>
                        <div style="text-align: center; margin-top: var(--space-lg);">
                            <button class="btn btn-primary" onclick="ReadingComponent.nextQuestion()">
                                ${this.currentQuestion + 1 < p.questions.length ? 'Next Question →' : 'See Results →'}
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    answer(index, value) {
        if (this.answered) return;
        this.answered = true;
        this.selectedOpt = index;
        const q = this.selectedPassage.questions[this.currentQuestion];
        this.lastCorrect = (value === q.answer);
        this.quizAnswers.push(this.lastCorrect);
        this.renderQuiz();
    },

    nextQuestion() {
        this.currentQuestion++;
        this.answered = false;
        this.selectedOpt = null;
        this.renderQuiz();
    },

    renderResults(container) {
        const correct = this.quizAnswers.filter(a => a).length;
        const total = this.quizAnswers.length;
        const pct = Math.round((correct / total) * 100);

        // Save progress
        DutchStorage.update(data => {
            data.readingProgress[this.selectedPassage.id] = { completed: true, score: pct };
        });
        DutchStorage.markActivityComplete('reading', Math.max(15, Math.min(25, 10 + total)));

        let scoreClass = pct >= 80 ? 'great' : pct >= 60 ? 'good' : pct >= 40 ? 'ok' : 'poor';

        container.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-results">
                    <div style="font-size: 4rem;">📕</div>
                    <div class="results-score ${scoreClass}">${pct}%</div>
                    <h2>${correct} out of ${total} correct</h2>
                    <p class="results-message">
                        ${pct >= 80 ? 'Excellent reading comprehension!' : pct >= 60 ? 'Good understanding of the text!' : 'Try re-reading the text and answering again.'}
                    </p>
                    <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-xl);">
                        <button class="btn btn-secondary" onclick="ReadingComponent.startReading('${this.selectedPassage.id}')">📖 Re-read Text</button>
                        <button class="btn btn-primary" onclick="ReadingComponent.render()">← All Readings</button>
                    </div>
                </div>
            </div>
        `;

        if (pct >= 80) QuizComponent.showConfetti();
    }
};
