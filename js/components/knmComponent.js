// ============================================
// DutchPath - KNM Study Component
// ============================================

const KNMComponent = {
    currentTopic: null,
    viewMode: 'topics', // 'topics', 'study', 'quiz'

    render() {
        const container = document.getElementById('view-knm');
        this.viewMode = 'topics';
        this.renderTopics(container);
    },

    renderTopics(container) {
        const data = DutchStorage.load();
        const topics = KNMData.getAllTopics();

        container.innerHTML = `
            <div class="page-header">
                <h2>🏛️ KNM — Kennis van de Nederlandse Maatschappij</h2>
                <p>Knowledge of Dutch Society — 8 topics to master for the KNM exam</p>
            </div>

            <div class="knm-topics-grid">
                ${topics.map(topic => {
                    const progress = data.knmProgress[topic.id];
                    const bestScore = progress && progress.quizScores && progress.quizScores.length > 0
                        ? Math.max(...progress.quizScores) : 0;
                    return `
                        <div class="knm-topic-card" onclick="KNMComponent.openTopic('${topic.id}')">
                            <div class="topic-icon">${topic.icon}</div>
                            <h3>${topic.title}</h3>
                            <p>${topic.description}</p>
                            <div class="topic-progress">
                                <div class="topic-progress-fill" style="width: ${bestScore}%"></div>
                            </div>
                            <div style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-xs);">
                                ${bestScore > 0 ? `Best score: ${bestScore}%` : 'Not started'}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="card card-glow mt-xl" style="text-align: center;">
                <h3>📝 KNM Mock Exam</h3>
                <p style="color: var(--text-secondary); margin: var(--space-md) 0;">40 questions • 45 minutes • All topics</p>
                <button class="btn btn-primary btn-lg" onclick="ExamComponent.startKNMExam()">Start Mock Exam</button>
            </div>
        `;
    },

    openTopic(topicId) {
        this.currentTopic = KNMData.getTopicById(topicId);
        if (!this.currentTopic) return;

        const container = document.getElementById('view-knm');
        const content = this.currentTopic.content
            .replace(/## (.+)/g, '<h3>$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n- (.+)/g, '<li>$1</li>')
            .replace(/(<li>.*?<\/li>)+/gs, (match) => `<ul>${match}</ul>`)
            .replace(/\n\n/g, '<br><br>');

        container.innerHTML = `
            <button class="back-btn" onclick="KNMComponent.render()">← Back to Topics</button>

            <div class="page-header">
                <h2>${this.currentTopic.icon} ${this.currentTopic.title}</h2>
                <p>${this.currentTopic.titleEn}</p>
            </div>

            <div class="lesson-section">
                <div class="grammar-content" style="line-height: 1.9;">
                    ${content}
                </div>
            </div>

            <div style="text-align: center; margin-top: var(--space-xl);">
                <button class="btn btn-primary btn-lg" onclick="QuizComponent.startKNMQuiz('${topicId}')">
                    📝 Practice Quiz (${this.currentTopic.questions.length} questions)
                </button>
            </div>
        `;

    }
};
