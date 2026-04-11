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

        DutchStorage.markDailyActivity('lesson');
        DutchStorage.updateStreak();
        App.updateStreakDisplay();
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
