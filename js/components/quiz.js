// ============================================
// DutchPath - Quiz Engine Component
// ============================================

const QuizComponent = {
    questions: [],
    currentIndex: 0,
    answers: [],
    mode: 'grammar', // 'grammar', 'vocab', 'knm'
    sourceId: null,
    answered: false,

    startGrammarQuiz(lessonId) {
        const lesson = GrammarData.getById(lessonId);
        if (!lesson) return;

        this.questions = lesson.exercises.map((ex, i) => ({
            id: `${lessonId}_${i}`,
            ...ex
        }));
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.mode = 'grammar';
        this.sourceId = lessonId;

        App.navigate('lesson');
        this.render();
    },

    startVocabQuiz(weekNum) {
        const words = VocabularyData.getByWeek(weekNum);
        if (words.length < 4) return;

        const questionCount = Math.min(20, words.length);
        this.questions = words.slice(0, questionCount).map(w => {
            const wrongOptions = words
                .filter(x => x.id !== w.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(x => x.english);
            const options = [...wrongOptions, w.english].sort(() => Math.random() - 0.5);

            return {
                id: w.id,
                type: 'mcq',
                question: `What does "${w.dutch}" mean?`,
                options: options,
                answer: w.english
            };
        });

        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.mode = 'vocab';
        this.sourceId = weekNum;

        App.navigate('lesson');
        this.render();
    },

    startKNMQuiz(topicId) {
        const topic = KNMData.getTopicById(topicId);
        if (!topic) return;

        this.questions = topic.questions.map((q, i) => ({
            id: `${topicId}_${i}`,
            type: 'mcq',
            ...q
        }));
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.mode = 'knm';
        this.sourceId = topicId;

        App.navigate('knm');
        this.render();
    },

    render() {
        const container = document.getElementById(this.mode === 'knm' ? 'view-knm' : 'view-lesson');

        if (this.currentIndex >= this.questions.length) {
            this.renderResults(container);
            return;
        }

        const q = this.questions[this.currentIndex];
        const progress = Math.round(((this.currentIndex) / this.questions.length) * 100);

        container.innerHTML = `
            <div class="quiz-container">
                <button class="back-btn" onclick="${this.mode === 'knm' ? 'KNMComponent.render()' : 'LessonComponent.render()'}">← Back to ${this.mode === 'knm' ? 'KNM' : 'Lesson'}</button>

                <div class="lesson-progress-bar">
                    <div class="lesson-progress-fill" style="width: ${progress}%"></div>
                </div>

                <div class="flashcard-progress" style="text-align: center; margin-bottom: var(--space-lg);">
                    Question ${this.currentIndex + 1} of ${this.questions.length}
                </div>

                ${q.type === 'mcq' ? this.renderMCQ(q) : this.renderFillBlank(q)}
            </div>
        `;
    },

    renderMCQ(q) {
        const letters = ['A', 'B', 'C', 'D'];
        return `
            <div class="quiz-question">
                <h3>${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => {
                        let cls = '';
                        if (this.answered) {
                            cls = 'disabled';
                            if (opt === q.answer) cls += ' correct';
                            else if (i === this.selectedOption && opt !== q.answer) cls += ' incorrect';
                        }
                        return `
                            <div class="quiz-option ${cls}" onclick="QuizComponent.answerMCQ(${i}, '${opt.replace(/'/g, "\\'")}')">
                                <span class="quiz-option-letter">${letters[i]}</span>
                                ${opt}
                            </div>
                        `;
                    }).join('')}
                </div>
                ${this.answered ? `
                    <div class="quiz-feedback ${this.lastCorrect ? 'correct' : 'incorrect'}">
                        ${this.lastCorrect ? '✅ Correct!' : `❌ Incorrect. The answer is: <strong>${q.answer}</strong>`}
                    </div>
                    <div style="text-align: center; margin-top: var(--space-lg);">
                        <button class="btn btn-primary" onclick="QuizComponent.next()">
                            ${this.currentIndex + 1 < this.questions.length ? 'Next Question →' : 'See Results →'}
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    renderFillBlank(q) {
        return `
            <div class="quiz-question">
                <h3>${q.question.replace('___', `<input type="text" class="fill-blank-input ${this.answered ? (this.lastCorrect ? 'correct' : 'incorrect') : ''}" id="fill-input" placeholder="..." ${this.answered ? 'disabled' : ''} onkeypress="if(event.key==='Enter') QuizComponent.answerFill()">`)}</h3>
                ${q.hint ? `<p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: var(--space-sm);">💡 Hint: ${q.hint}</p>` : ''}
                ${!this.answered ? `
                    <div style="text-align: center; margin-top: var(--space-lg);">
                        <button class="btn btn-primary" onclick="QuizComponent.answerFill()">Check Answer</button>
                    </div>
                ` : `
                    <div class="quiz-feedback ${this.lastCorrect ? 'correct' : 'incorrect'}">
                        ${this.lastCorrect ? '✅ Correct!' : `❌ The correct answer is: <strong>${q.answer}</strong>`}
                    </div>
                    <div style="text-align: center; margin-top: var(--space-lg);">
                        <button class="btn btn-primary" onclick="QuizComponent.next()">
                            ${this.currentIndex + 1 < this.questions.length ? 'Next Question →' : 'See Results →'}
                        </button>
                    </div>
                `}
            </div>
        `;
    },

    answerMCQ(index, value) {
        if (this.answered) return;
        this.answered = true;
        this.selectedOption = index;
        const q = this.questions[this.currentIndex];
        this.lastCorrect = (value === q.answer);
        this.answers.push({ questionId: q.id, correct: this.lastCorrect });
        this.render();
    },

    answerFill() {
        if (this.answered) return;
        const input = document.getElementById('fill-input');
        if (!input) return;
        const value = input.value.trim();
        if (!value) return;

        this.answered = true;
        const q = this.questions[this.currentIndex];
        this.lastCorrect = (value.toLowerCase() === q.answer.toLowerCase());
        this.answers.push({ questionId: q.id, correct: this.lastCorrect });
        this.render();
    },

    next() {
        this.currentIndex++;
        this.answered = false;
        this.selectedOption = null;
        this.lastCorrect = null;
        this.render();
    },

    renderResults(container) {
        const correct = this.answers.filter(a => a.correct).length;
        const total = this.answers.length;
        const pct = Math.round((correct / total) * 100);

        let scoreClass = 'poor';
        let message = 'Keep practicing! You\'ll get there. 💪';
        if (pct >= 90) { scoreClass = 'great'; message = 'Outstanding! You\'ve mastered this! 🌟'; }
        else if (pct >= 70) { scoreClass = 'good'; message = 'Great work! Almost perfect! 🎯'; }
        else if (pct >= 50) { scoreClass = 'ok'; message = 'Good effort! Review and try again. 📖'; }

        // Save progress
        if (this.mode === 'grammar' && this.sourceId) {
            DutchStorage.update(data => {
                data.grammarProgress[this.sourceId] = pct;
            });
            const lesson = GrammarData.getById(this.sourceId);
            const minutes = lesson ? Math.max(15, Math.min(30, 8 + lesson.exercises.length * 2)) : 15;
            DutchStorage.markActivityComplete('grammar', minutes);
        } else if (this.mode === 'knm' && this.sourceId) {
            DutchStorage.update(data => {
                if (!data.knmProgress[this.sourceId]) {
                    data.knmProgress[this.sourceId] = { studied: [], quizScores: [] };
                }
                data.knmProgress[this.sourceId].quizScores.push(pct);
            });
            const topic = KNMData.getTopicById(this.sourceId);
            const minutes = topic ? Math.max(15, Math.min(25, 8 + topic.questions.length)) : 15;
            DutchStorage.markActivityComplete('knm', minutes);
        } else if (this.mode === 'vocab') {
            DutchStorage.markActivityComplete('vocabulary', Math.max(20, Math.min(35, this.questions.length * 2)));
        }

        container.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-results">
                    <div class="results-score ${scoreClass}">${pct}%</div>
                    <h2>${correct} out of ${total} correct</h2>
                    <p class="results-message">${message}</p>

                    <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-xl);">
                        <button class="btn btn-secondary" onclick="QuizComponent.retry()">🔄 Try Again</button>
                        <button class="btn btn-primary" onclick="App.navigate('dashboard')">📊 Dashboard</button>
                    </div>
                </div>
            </div>
        `;

        // Confetti for great scores
        if (pct >= 90) this.showConfetti();
    },

    retry() {
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.render();
    },

    showConfetti() {
        const colors = ['#FF6B00', '#00B4D8', '#06D6A0', '#FFD166', '#EF476F'];
        for (let i = 0; i < 50; i++) {
            const el = document.createElement('div');
            el.className = 'confetti-piece';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.width = Math.random() * 10 + 5 + 'px';
            el.style.height = Math.random() * 10 + 5 + 'px';
            el.style.background = colors[Math.floor(Math.random() * colors.length)];
            el.style.animationDuration = Math.random() * 2 + 1 + 's';
            el.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 3000);
        }
    }
};
