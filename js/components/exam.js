// ============================================
// DutchPath - Mock Exam Component
// ============================================

const ExamComponent = {
    questions: [],
    currentIndex: 0,
    answers: [],
    timer: null,
    timeRemaining: 0,
    examType: null,
    answered: false,

    render() {
        const container = document.getElementById('view-exam');
        const data = DutchStorage.load();

        container.innerHTML = `
            <div class="page-header">
                <h2>🎯 Mock Exams</h2>
                <p>Practice with exam-style questions to prepare for the real thing</p>
            </div>

            <div class="stats-grid">
                <div class="stat-card primary" style="cursor: pointer;" onclick="ExamComponent.startKNMExam()">
                    <div style="font-size: 2rem; margin-bottom: var(--space-sm);">🏛️</div>
                    <div class="stat-label" style="font-size: var(--text-lg); font-weight: 700; color: var(--text-primary);">KNM Exam</div>
                    <div class="stat-meta">40 questions • 45 minutes</div>
                    <div class="stat-meta">Knowledge of Dutch Society</div>
                </div>
                <div class="stat-card accent" style="cursor: pointer;" onclick="ExamComponent.startReadingExam()">
                    <div style="font-size: 2rem; margin-bottom: var(--space-sm);">📕</div>
                    <div class="stat-label" style="font-size: var(--text-lg); font-weight: 700; color: var(--text-primary);">Reading Exam</div>
                    <div class="stat-meta">Reading comprehension</div>
                    <div class="stat-meta">All available passages</div>
                </div>
                <div class="stat-card success" style="cursor: pointer;" onclick="ExamComponent.startVocabExam()">
                    <div style="font-size: 2rem; margin-bottom: var(--space-sm);">🔤</div>
                    <div class="stat-label" style="font-size: var(--text-lg); font-weight: 700; color: var(--text-primary);">Vocabulary Test</div>
                    <div class="stat-meta">20 random words</div>
                    <div class="stat-meta">All levels you've studied</div>
                </div>
                <div class="stat-card warning" style="cursor: pointer;" onclick="ExamComponent.startGrammarExam()">
                    <div style="font-size: 2rem; margin-bottom: var(--space-sm);">📝</div>
                    <div class="stat-label" style="font-size: var(--text-lg); font-weight: 700; color: var(--text-primary);">Grammar Test</div>
                    <div class="stat-meta">Mixed grammar exercises</div>
                    <div class="stat-meta">All levels you've studied</div>
                </div>
            </div>

            <!-- Past Results -->
            ${data.examResults.length > 0 ? `
            <div class="card card-glow mt-xl">
                <div class="card-header">
                    <div class="card-title">📊 Exam History</div>
                </div>
                <div class="browse-list">
                    ${data.examResults.slice(-10).reverse().map(r => `
                        <div class="browse-item" style="cursor: default;">
                            <div class="browse-item-info">
                                <h4>${r.type} Exam</h4>
                                <p>${new Date(r.date).toLocaleDateString()} • ${r.score}/${r.total} (${Math.round(r.score/r.total*100)}%)</p>
                            </div>
                            <div style="font-size: var(--text-xl); font-weight: 800; color: ${r.score/r.total >= 0.7 ? 'var(--success)' : r.score/r.total >= 0.5 ? 'var(--warning)' : 'var(--danger)'};">
                                ${Math.round(r.score/r.total*100)}%
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        `;
    },

    startKNMExam() {
        this.examType = 'KNM';
        this.questions = KNMData.getRandomExam(40);
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.timeRemaining = 45 * 60; // 45 minutes
        this.startTimer();
        this.renderExam();
    },

    startReadingExam() {
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const passages = ReadingData.getByWeek(currWeek);
        
        this.examType = 'Reading';
        this.questions = passages.flatMap(p => 
            p.questions.map(q => ({ ...q, type: 'mcq', passage: p.title }))
        ).sort(() => Math.random() - 0.5);
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.timeRemaining = 30 * 60;
        this.startTimer();
        this.renderExam();
    },

    startVocabExam() {
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const words = VocabularyData.getUpToWeek(currWeek);
        const shuffled = words.sort(() => Math.random() - 0.5).slice(0, 20);

        this.examType = 'Vocabulary';
        this.questions = shuffled.map(w => {
            const wrong = words.filter(x => x.id !== w.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.english);
            const options = [...wrong, w.english].sort(() => Math.random() - 0.5);
            return { question: `What does "${w.dutch}" mean?`, options, answer: w.english, type: 'mcq' };
        });
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.timeRemaining = 15 * 60;
        this.startTimer();
        this.renderExam();
    },

    startGrammarExam() {
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const lessons = GrammarData.getByWeek(currWeek);
        
        this.examType = 'Grammar';
        this.questions = lessons.flatMap(l => l.exercises).sort(() => Math.random() - 0.5).slice(0, 15);
        this.currentIndex = 0;
        this.answers = [];
        this.answered = false;
        this.timeRemaining = 20 * 60;
        this.startTimer();
        this.renderExam();
    },

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                this.finishExam();
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const display = document.getElementById('exam-timer-display');
        if (display) {
            const min = Math.floor(this.timeRemaining / 60);
            const sec = this.timeRemaining % 60;
            display.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
            display.className = 'timer-display' + 
                (this.timeRemaining < 60 ? ' danger' : this.timeRemaining < 300 ? ' warning' : '');
        }
    },

    renderExam() {
        const container = document.getElementById('view-exam');

        if (this.currentIndex >= this.questions.length) {
            this.finishExam();
            return;
        }

        const q = this.questions[this.currentIndex];
        const min = Math.floor(this.timeRemaining / 60);
        const sec = this.timeRemaining % 60;
        const letters = ['A', 'B', 'C', 'D'];

        container.innerHTML = `
            <div class="exam-timer">
                <div>
                    <strong>${this.examType} Exam</strong>
                    <div class="exam-progress">Question ${this.currentIndex + 1} of ${this.questions.length}</div>
                </div>
                <div id="exam-timer-display" class="timer-display">${min}:${sec.toString().padStart(2, '0')}</div>
            </div>

            <div class="quiz-container">
                <div class="lesson-progress-bar">
                    <div class="lesson-progress-fill" style="width: ${(this.currentIndex / this.questions.length) * 100}%"></div>
                </div>

                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    ${q.type === 'mcq' ? `
                        <div class="quiz-options">
                            ${q.options.map((opt, i) => {
                                let cls = '';
                                if (this.answered) {
                                    cls = 'disabled';
                                    if (opt === q.answer) cls += ' correct';
                                    else if (i === this.selectedOption && opt !== q.answer) cls += ' incorrect';
                                }
                                return `
                                    <div class="quiz-option ${cls}" onclick="ExamComponent.answerMCQ(${i}, '${opt.replace(/'/g, "\\'")}')">
                                        <span class="quiz-option-letter">${letters[i]}</span>
                                        ${opt}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    ` : `
                        <div>
                            <p>${q.question.replace('___', `<input type="text" class="fill-blank-input" id="exam-fill-input" placeholder="..." onkeypress="if(event.key==='Enter') ExamComponent.answerFill()">`)}</p>
                            ${q.hint ? `<p style="color: var(--text-muted); font-size: var(--text-sm);">💡 ${q.hint}</p>` : ''}
                            ${!this.answered ? `<button class="btn btn-primary mt-md" onclick="ExamComponent.answerFill()">Submit</button>` : ''}
                        </div>
                    `}

                    ${this.answered ? `
                        <div class="quiz-feedback ${this.lastCorrect ? 'correct' : 'incorrect'}">
                            ${this.lastCorrect ? '✅ Correct!' : `❌ Answer: <strong>${q.answer}</strong>`}
                        </div>
                        <div style="text-align: center; margin-top: var(--space-md);">
                            <button class="btn btn-primary" onclick="ExamComponent.nextQuestion()">
                                ${this.currentIndex + 1 < this.questions.length ? 'Next →' : 'Finish Exam'}
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    answerMCQ(index, value) {
        if (this.answered) return;
        this.answered = true;
        this.selectedOption = index;
        const q = this.questions[this.currentIndex];
        this.lastCorrect = (value === q.answer);
        this.answers.push(this.lastCorrect);
        this.renderExam();
    },

    answerFill() {
        if (this.answered) return;
        const input = document.getElementById('exam-fill-input');
        if (!input || !input.value.trim()) return;
        this.answered = true;
        const q = this.questions[this.currentIndex];
        this.lastCorrect = (input.value.trim().toLowerCase() === q.answer.toLowerCase());
        this.answers.push(this.lastCorrect);
        this.renderExam();
    },

    nextQuestion() {
        this.currentIndex++;
        this.answered = false;
        this.selectedOption = null;
        this.renderExam();
    },

    finishExam() {
        if (this.timer) clearInterval(this.timer);
        
        const correct = this.answers.filter(a => a).length;
        const total = this.answers.length;
        const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

        // Save result
        DutchStorage.update(data => {
            data.examResults.push({
                type: this.examType,
                date: new Date().toISOString(),
                score: correct,
                total: total
            });
        });

        const container = document.getElementById('view-exam');
        let scoreClass = 'poor';
        if (pct >= 80) scoreClass = 'great';
        else if (pct >= 60) scoreClass = 'good';
        else if (pct >= 40) scoreClass = 'ok';

        const passed = pct >= 60;

        container.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-results">
                    <div style="font-size: 4rem; margin-bottom: var(--space-md);">${passed ? '🎉' : '📚'}</div>
                    <div class="results-score ${scoreClass}">${pct}%</div>
                    <h2>${correct} out of ${total} correct</h2>
                    <p class="results-message">
                        ${passed ? `You passed the ${this.examType} mock exam! Keep preparing for the real one.` : `You need more preparation for the ${this.examType} exam. Keep studying!`}
                    </p>
                    <p style="color: var(--text-muted); margin-top: var(--space-sm);">
                        ${passed ? '✅ Passing score (≥60%)' : '❌ Below passing score (<60%)'}
                    </p>
                    <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-xl);">
                        <button class="btn btn-secondary" onclick="ExamComponent.render()">← Back to Exams</button>
                        <button class="btn btn-primary" onclick="App.navigate('dashboard')">📊 Dashboard</button>
                    </div>
                </div>
            </div>
        `;

        if (passed && pct >= 80) QuizComponent.showConfetti();
    }
};
