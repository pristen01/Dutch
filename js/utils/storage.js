// ============================================
// DutchPath - LocalStorage Wrapper
// ============================================

const DutchStorage = {
    KEY: 'dutchpath_data',

    defaults() {
        return {
            version: 2,
            onboarded: false,
            mode: null, // 'speed', 'accelerated', 'standard'
            startDate: null,
            currentWeek: 1,
            currentDay: 1,
            streak: { count: 0, lastDate: null },
            completedLessons: [],
            vocabMastery: {},    // { wordId: { box: 1, nextReview: timestamp } }
            grammarProgress: {}, // { lessonId: percentComplete }
            readingProgress: {}, // { passageId: { completed, score } }
            knmProgress: {},     // { topicId: { studied: [], quizScores: [] } }
            examResults: [],     // [{ type, date, score, total }]
            dailyProgress: {},   // { 'YYYY-MM-DD': { vocab: bool, grammar: bool, reading: bool, writing: bool, knm: bool } }
            settings: {
                soundEnabled: true,
                autoSpeak: false,
                dailyGoalMinutes: 60,
                showTranslation: true
            },
            totalStudyMinutes: 0,
            placementScore: 0
        };
    },

    load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (!raw) return this.defaults();
            const data = JSON.parse(raw);
            // Merge with defaults for any new fields
            return { ...this.defaults(), ...data };
        } catch (e) {
            console.error('Failed to load data:', e);
            return this.defaults();
        }
    },

    save(data) {
        try {
            localStorage.setItem(this.KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save data:', e);
        }
    },

    get(key) {
        const data = this.load();
        return data[key];
    },

    set(key, value) {
        const data = this.load();
        data[key] = value;
        this.save(data);
        return data;
    },

    update(updater) {
        const data = this.load();
        updater(data);
        this.save(data);
        return data;
    },

    reset() {
        localStorage.removeItem(this.KEY);
    },

    updateStreak() {
        const data = this.load();
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (data.streak.lastDate === today) {
            return data.streak.count;
        }

        if (data.streak.lastDate === yesterday) {
            data.streak.count++;
        } else if (data.streak.lastDate !== today) {
            data.streak.count = 1;
        }

        data.streak.lastDate = today;
        this.save(data);
        return data.streak.count;
    },

    markDailyActivity(activity) {
        const today = new Date().toISOString().split('T')[0];
        this.update(data => {
            if (!data.dailyProgress[today]) {
                data.dailyProgress[today] = {};
            }
            data.dailyProgress[today][activity] = true;
        });
    },

    getTodayProgress() {
        const today = new Date().toISOString().split('T')[0];
        const data = this.load();
        return data.dailyProgress[today] || {};
    },

    getWeeksCompleted() {
        const data = this.load();
        if (!data.startDate) return 0;
        const start = new Date(data.startDate);
        const now = new Date();
        const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        return Math.floor(diffDays / 7);
    },

    getDaysElapsed() {
        const data = this.load();
        if (!data.startDate) return 0;
        const start = new Date(data.startDate);
        const now = new Date();
        return Math.floor((now - start) / (1000 * 60 * 60 * 24));
    },

    getModeConfig(mode) {
        const configs = {
            speed: {
                name: 'Speed Mode',
                emoji: '🚀',
                totalWeeks: 16,
                hoursPerDay: 2.5,
                targetLevel: 'B2',
                description: '4 months intensive — reach B2 fast',
                a1Weeks: 2, a2Weeks: 3, b1Weeks: 4, b2Weeks: 7
            },
            accelerated: {
                name: 'Accelerated Mode',
                emoji: '⚡',
                totalWeeks: 32,
                hoursPerDay: 2,
                targetLevel: 'B2',
                description: '8 months focused — solid B2 prep',
                a1Weeks: 4, a2Weeks: 6, b1Weeks: 8, b2Weeks: 14
            },
            standard: {
                name: 'Standard Mode',
                emoji: '📚',
                totalWeeks: 52,
                hoursPerDay: 1,
                targetLevel: 'B2',
                description: '12 months steady — sustainable pace',
                a1Weeks: 6, a2Weeks: 10, b1Weeks: 14, b2Weeks: 22
            }
        };
        return configs[mode] || configs.standard;
    },

    getExamDate() {
        const data = this.load();
        if (!data.startDate || !data.mode) return null;
        const config = this.getModeConfig(data.mode);
        const start = new Date(data.startDate);
        const examDate = new Date(start);
        examDate.setDate(examDate.getDate() + config.totalWeeks * 7);
        return examDate;
    },

    getCurrentLevel() {
        const data = this.load();
        if (!data.mode) return 'A1';
        const config = this.getModeConfig(data.mode);
        const week = data.currentWeek;
        if (week <= config.a1Weeks) return 'A1';
        if (week <= config.a1Weeks + config.a2Weeks) return 'A2';
        if (week <= config.a1Weeks + config.a2Weeks + config.b1Weeks) return 'B1';
        return 'B2';
    }
};
