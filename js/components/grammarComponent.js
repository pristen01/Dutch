// ============================================
// DutchPath - Grammar Browser Component
// ============================================

const GrammarBrowserComponent = {
    filter: 'all',
    selectedLesson: null,

    render() {
        const container = document.getElementById('view-grammar');
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);

        if (this.selectedLesson) {
            this.renderLesson(container);
            return;
        }

        let lessons = GrammarData.getByWeek(currWeek);
        if (this.filter !== 'all') {
            lessons = lessons.filter(l => l.level === this.filter);
        }

        container.innerHTML = `
            <div class="page-header">
                <h2>📝 Grammar Lessons</h2>
                <p>${lessons.length} lessons available</p>
            </div>

            <div class="filter-tabs">
                <button class="filter-tab ${this.filter === 'all' ? 'active' : ''}" onclick="GrammarBrowserComponent.setFilter('all')">All</button>
                <button class="filter-tab ${this.filter === 'A1' ? 'active' : ''}" onclick="GrammarBrowserComponent.setFilter('A1')">A1</button>
                <button class="filter-tab ${this.filter === 'A2' ? 'active' : ''}" onclick="GrammarBrowserComponent.setFilter('A2')">A2</button>
                <button class="filter-tab ${this.filter === 'B1' ? 'active' : ''}" onclick="GrammarBrowserComponent.setFilter('B1')">B1</button>
                <button class="filter-tab ${this.filter === 'B2' ? 'active' : ''}" onclick="GrammarBrowserComponent.setFilter('B2')">B2</button>
            </div>

            <div class="browse-list">
                ${lessons.map(lesson => {
                    const progress = data.grammarProgress[lesson.id] || 0;
                    return `
                    <div class="browse-item" onclick="GrammarBrowserComponent.openLesson('${lesson.id}')">
                        <div class="browse-item-info">
                            <h4>
                                <span class="level-badge ${lesson.level.toLowerCase()}" style="margin-right: 8px;">${lesson.level}</span>
                                ${lesson.title}
                            </h4>
                            <p>${lesson.titleNl}</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: var(--space-md);">
                            ${progress > 0 ? `<span style="font-size: var(--text-sm); color: ${progress >= 80 ? 'var(--success)' : 'var(--warning)'};">${progress}%</span>` : ''}
                            <span class="browse-item-arrow">→</span>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    setFilter(filter) {
        this.filter = filter;
        this.render();
    },

    openLesson(lessonId) {
        this.selectedLesson = GrammarData.getById(lessonId);
        this.render();
    },

    renderLesson(container) {
        const lesson = this.selectedLesson;
        if (!lesson) return;

        container.innerHTML = `
            <button class="back-btn" onclick="GrammarBrowserComponent.selectedLesson = null; GrammarBrowserComponent.render();">← Back to Grammar</button>

            <div class="page-header">
                <h2>
                    <span class="level-badge ${lesson.level.toLowerCase()}">${lesson.level}</span>
                    ${lesson.title}
                </h2>
                <p>${lesson.titleNl}</p>
            </div>

            <div class="lesson-section">
                <div class="grammar-content">
                    ${LessonComponent.renderMarkdown(lesson.explanation)}
                </div>
            </div>

            <div class="lesson-section">
                <h3><span class="section-icon">💬</span> Examples</h3>
                ${lesson.examples.map(ex => `
                    <div class="grammar-example">
                        <div class="grammar-dutch">${ex.dutch} <button class="speak-btn" onclick="DutchSpeech.speak('${ex.dutch.replace(/'/g, "\\'")}')">🔊</button></div>
                        <div class="grammar-english">${ex.english}</div>
                    </div>
                `).join('')}
            </div>

            <div style="text-align: center; margin-top: var(--space-xl);">
                <button class="btn btn-primary btn-lg" onclick="QuizComponent.startGrammarQuiz('${lesson.id}')">
                    📝 Practice Exercises (${lesson.exercises.length} questions)
                </button>
            </div>
        `;

    }
};
