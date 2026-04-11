// ============================================
// DutchPath - Spaced Repetition System (Leitner)
// ============================================

const SRS = {
    // Box intervals in hours
    BOX_INTERVALS: {
        1: 0,      // New / Again — immediate review
        2: 4,      // 4 hours
        3: 24,     // 1 day
        4: 72,     // 3 days
        5: 168,    // 1 week
        6: 336,    // 2 weeks (mastered)
    },

    getCardState(wordId) {
        const data = DutchStorage.load();
        return data.vocabMastery[wordId] || {
            box: 1,
            nextReview: 0,
            timesCorrect: 0,
            timesIncorrect: 0,
            lastReview: null
        };
    },

    updateCard(wordId, quality) {
        // quality: 'again' | 'hard' | 'good' | 'easy'
        DutchStorage.update(data => {
            if (!data.vocabMastery[wordId]) {
                data.vocabMastery[wordId] = {
                    box: 1,
                    nextReview: 0,
                    timesCorrect: 0,
                    timesIncorrect: 0,
                    lastReview: null
                };
            }

            const card = data.vocabMastery[wordId];
            const now = Date.now();

            switch (quality) {
                case 'again':
                    card.box = 1;
                    card.timesIncorrect++;
                    break;
                case 'hard':
                    card.box = Math.max(1, card.box - 1);
                    card.timesCorrect++;
                    break;
                case 'good':
                    card.box = Math.min(6, card.box + 1);
                    card.timesCorrect++;
                    break;
                case 'easy':
                    card.box = Math.min(6, card.box + 2);
                    card.timesCorrect++;
                    break;
            }

            const intervalHours = this.BOX_INTERVALS[card.box] || 0;
            card.nextReview = now + (intervalHours * 60 * 60 * 1000);
            card.lastReview = now;
        });
    },

    getDueCards(wordIds, limit = 20) {
        const now = Date.now();
        const data = DutchStorage.load();

        const cards = wordIds.map(id => {
            const state = data.vocabMastery[id] || { box: 1, nextReview: 0 };
            return { id, ...state };
        });

        // Sort: new cards first, then by due date
        cards.sort((a, b) => {
            // New cards (box 1, never reviewed) first
            if (a.box === 1 && !a.lastReview && b.lastReview) return -1;
            if (b.box === 1 && !b.lastReview && a.lastReview) return 1;
            // Then by due date
            return a.nextReview - b.nextReview;
        });

        // Filter due cards
        return cards
            .filter(c => c.nextReview <= now || c.box === 1)
            .slice(0, limit);
    },

    getStats(wordIds) {
        const data = DutchStorage.load();
        let newCount = 0, learning = 0, review = 0, mastered = 0;

        wordIds.forEach(id => {
            const state = data.vocabMastery[id];
            if (!state || state.box === 1) newCount++;
            else if (state.box <= 3) learning++;
            else if (state.box <= 5) review++;
            else mastered++;
        });

        return { newCount, learning, review, mastered, total: wordIds.length };
    },

    getMasteryPercent(wordIds) {
        if (!wordIds.length) return 0;
        const data = DutchStorage.load();
        let totalPoints = 0;
        wordIds.forEach(id => {
            const state = data.vocabMastery[id];
            if (state) {
                totalPoints += Math.min(state.box / 6, 1);
            }
        });
        return Math.round((totalPoints / wordIds.length) * 100);
    }
};
