// ============================================
// DutchPath - Vocabulary Browser Component
// ============================================

const VocabularyBrowserComponent = {
    filter: 'all',

    render() {
        const container = document.getElementById('view-vocabulary');
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const themes = VocabularyData.getAllThemes();
        
        let words;
        if (this.filter === 'all') {
            words = VocabularyData.getUpToWeek(currWeek);
        } else {
            words = VocabularyData.getByTheme(this.filter).filter(w => w.week <= currWeek);
        }

        container.innerHTML = `
            <div class="page-header">
                <h2>🔤 Vocabulary</h2>
                <p>${words.length} words available • Up to Week ${data.currentWeek}</p>
            </div>

            <div class="filter-tabs">
                <button class="filter-tab ${this.filter === 'all' ? 'active' : ''}" onclick="VocabularyBrowserComponent.setFilter('all')">All</button>
                ${themes.filter(t => VocabularyData.getByTheme(t.id).some(w => w.week <= currWeek)).map(t => `
                    <button class="filter-tab ${this.filter === t.id ? 'active' : ''}" onclick="VocabularyBrowserComponent.setFilter('${t.id}')">${t.name} (${VocabularyData.getByTheme(t.id).filter(w => w.week <= currWeek).length})</button>
                `).join('')}
            </div>

            <div style="margin-bottom: var(--space-lg);">
                <button class="btn btn-primary" onclick="QuizComponent.startVocabQuiz(${currWeek})">📝 Vocabulary Quiz</button>
                <button class="btn btn-secondary" style="margin-left: var(--space-sm);" onclick="App.navigate('flashcards')">🃏 Flashcards</button>
            </div>

            <div class="vocab-grid">
                ${words.map(w => {
                    const state = SRS.getCardState(w.id);
                    const masteryColor = state.box >= 5 ? 'var(--success)' : state.box >= 3 ? 'var(--warning)' : 'var(--text-muted)';
                    return `
                    <div class="vocab-card" onclick="DutchSpeech.speak('${w.dutch.replace(/'/g, "\\'")}')">
                        <div class="vocab-dutch">
                            ${w.dutch}
                            ${w.gender ? `<span class="vocab-gender ${w.gender}">${w.gender}</span>` : ''}
                            <button class="speak-btn" onclick="event.stopPropagation(); DutchSpeech.speak('${w.dutch.replace(/'/g, "\\'")}')">🔊</button>
                        </div>
                        <div class="vocab-english">${w.english}</div>
                        ${w.example ? `<div class="vocab-example">${w.example}</div>` : ''}
                        <div style="margin-top: var(--space-sm); display: flex; justify-content: space-between; align-items: center;">
                            <span class="level-badge ${w.level.toLowerCase()}">${w.level}</span>
                            <span style="font-size: var(--text-xs); color: ${masteryColor};">
                                ${'●'.repeat(Math.min(state.box, 6))}${'○'.repeat(Math.max(0, 6 - state.box))}
                            </span>
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
    }
};
