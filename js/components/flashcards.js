// ============================================
// DutchPath - Flashcards Component
// ============================================

const FlashcardsComponent = {
    cards: [],
    currentIndex: 0,
    flipped: false,
    sessionComplete: false,

    render() {
        const container = document.getElementById('view-flashcards');
        const data = DutchStorage.load();
        const currWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);

        // Get due cards
        const allWordIds = VocabularyData.getIdsUpToWeek(currWeek);
        const dueCards = SRS.getDueCards(allWordIds, 20);

        if (dueCards.length === 0 || this.sessionComplete) {
            this.renderComplete(container, allWordIds);
            return;
        }

        this.cards = dueCards.map(c => ({
            ...c,
            word: VocabularyData.getById(c.id)
        })).filter(c => c.word);

        if (this.currentIndex >= this.cards.length) {
            this.sessionComplete = true;
            this.renderComplete(container, allWordIds);
            return;
        }

        const card = this.cards[this.currentIndex];
        const stats = SRS.getStats(allWordIds);

        container.innerHTML = `
            <div class="page-header">
                <h2>🃏 Flashcard Review</h2>
                <p>Click the card to flip • Rate your recall</p>
            </div>

            <div class="flashcard-container">
                <div class="flashcard-progress">
                    Card ${this.currentIndex + 1} of ${this.cards.length} •
                    <span style="color: var(--success);">✓ ${stats.mastered} mastered</span> •
                    <span style="color: var(--warning);">⟳ ${stats.learning} learning</span> •
                    <span style="color: var(--text-muted);">○ ${stats.newCount} new</span>
                </div>

                <div class="flashcard ${this.flipped ? 'flipped' : ''}" onclick="FlashcardsComponent.flip()" id="flashcard-current">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <div class="flashcard-word" style="color: var(--primary);">${card.word.dutch}</div>
                            ${card.word.gender ? `<span class="vocab-gender ${card.word.gender}" style="font-size: var(--text-sm);">${card.word.gender}</span>` : ''}
                            <button class="btn btn-ghost btn-sm mt-md" onclick="event.stopPropagation(); DutchSpeech.speak('${card.word.dutch.replace(/'/g, "\\'")}')">🔊 Listen</button>
                            <div class="flashcard-tap">Tap to reveal</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="flashcard-word" style="color: var(--text-primary);">${card.word.english}</div>
                            <div class="flashcard-hint">${card.word.dutch} ${card.word.gender ? `(${card.word.gender})` : ''}</div>
                            ${card.word.example ? `<div class="flashcard-example">"${card.word.example}"</div>` : ''}
                            <div class="flashcard-tap">Rate your recall below</div>
                        </div>
                    </div>
                </div>

                ${this.flipped ? `
                <div class="flashcard-buttons">
                    <button class="flashcard-btn again" onclick="FlashcardsComponent.rate('again')">
                        😣 Again
                    </button>
                    <button class="flashcard-btn hard" onclick="FlashcardsComponent.rate('hard')">
                        🤔 Hard
                    </button>
                    <button class="flashcard-btn good" onclick="FlashcardsComponent.rate('good')">
                        😊 Good
                    </button>
                    <button class="flashcard-btn easy" onclick="FlashcardsComponent.rate('easy')">
                        😎 Easy
                    </button>
                </div>
                ` : ''}
            </div>
        `;
    },

    flip() {
        this.flipped = !this.flipped;
        if (this.flipped) {
            DutchSpeech.speak(this.cards[this.currentIndex].word.dutch);
        }
        this.render();
    },

    rate(quality) {
        const card = this.cards[this.currentIndex];
        SRS.updateCard(card.id, quality);

        this.currentIndex++;
        this.flipped = false;

        DutchStorage.markDailyActivity('flashcards');
        DutchStorage.updateStreak();
        App.updateStreakDisplay();

        this.render();
    },

    renderComplete(container, allWordIds) {
        const stats = SRS.getStats(allWordIds);

        container.innerHTML = `
            <div class="flashcard-container">
                <div class="quiz-results">
                    <div style="font-size: 4rem; margin-bottom: var(--space-md);">🎉</div>
                    <h2>Session Complete!</h2>
                    <p class="results-message">Great job reviewing your flashcards!</p>

                    <div class="stats-grid" style="max-width: 500px; margin: var(--space-xl) auto;">
                        <div class="stat-card success">
                            <div class="stat-value">${stats.mastered}</div>
                            <div class="stat-label">Mastered</div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-value">${stats.learning}</div>
                            <div class="stat-label">Learning</div>
                        </div>
                        <div class="stat-card accent">
                            <div class="stat-value">${stats.review}</div>
                            <div class="stat-label">Review</div>
                        </div>
                        <div class="stat-card primary">
                            <div class="stat-value">${stats.newCount}</div>
                            <div class="stat-label">New</div>
                        </div>
                    </div>

                    <div style="display: flex; gap: var(--space-md); justify-content: center;">
                        <button class="btn btn-secondary" onclick="FlashcardsComponent.reset(); FlashcardsComponent.render();">Review Again</button>
                        <button class="btn btn-primary" onclick="App.navigate('dashboard')">Back to Dashboard</button>
                    </div>
                </div>
            </div>
        `;
    },

    reset() {
        this.currentIndex = 0;
        this.flipped = false;
        this.sessionComplete = false;
        this.cards = [];
    }
};
