// ============================================
// DutchPath - LocalStorage Wrapper
// ============================================

const DutchStorage = {
    KEY: 'dutchpath_data',

    defaults() {
        return {
            version: 3,
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
            dailyProgress: {},   // { 'YYYY-MM-DD': { vocabulary: bool, grammar: bool, reading: bool, flashcards: bool, knm: bool, writing: bool, listening: bool, speaking: bool, exam: bool, minutes: number } }
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
            const defaults = this.defaults();
            return {
                ...defaults,
                ...data,
                settings: { ...defaults.settings, ...(data.settings || {}) },
                streak: { ...defaults.streak, ...(data.streak || {}) }
            };
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
        const todayProgress = data.dailyProgress[today] || {};
        const hasStudyActivity = Object.keys(todayProgress).some(key => key !== 'minutes' && todayProgress[key]);

        if (!hasStudyActivity) {
            return data.streak.count;
        }

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

    markDailyActivity(activity, minutes = 0) {
        return this.markActivityComplete(activity, minutes);
    },

    markActivityComplete(activity, minutes = 0) {
        const today = new Date().toISOString().split('T')[0];
        const data = this.update(data => {
            if (!data.dailyProgress[today]) {
                data.dailyProgress[today] = { minutes: 0 };
            }
            const wasAlreadyComplete = Boolean(data.dailyProgress[today][activity]);
            data.dailyProgress[today][activity] = true;
            data.dailyProgress[today].minutes = data.dailyProgress[today].minutes || 0;
            if (!wasAlreadyComplete && minutes > 0) {
                data.dailyProgress[today].minutes += minutes;
                data.totalStudyMinutes = (data.totalStudyMinutes || 0) + minutes;
            }
        });
        const streak = this.updateStreak();
        this.checkCurrentWeekCompletion(data);
        if (typeof App !== 'undefined') App.updateStreakDisplay();
        return streak;
    },

    addStudyMinutes(minutes) {
        if (!minutes || minutes <= 0) return this.load();
        const today = new Date().toISOString().split('T')[0];
        return this.update(data => {
            if (!data.dailyProgress[today]) {
                data.dailyProgress[today] = { minutes: 0 };
            }
            data.dailyProgress[today].minutes = (data.dailyProgress[today].minutes || 0) + minutes;
            data.totalStudyMinutes = (data.totalStudyMinutes || 0) + minutes;
        });
    },

    getTodayProgress() {
        const today = new Date().toISOString().split('T')[0];
        const data = this.load();
        return data.dailyProgress[today] || {};
    },

    getTodayStudyMinutes() {
        return this.getTodayProgress().minutes || 0;
    },

    getDailyPlanProgress(plan) {
        const todayProgress = this.getTodayProgress();
        const activityTypes = [...new Set(plan.map(item => item.type))];
        const completedTypes = activityTypes.filter(type => todayProgress[type]);
        const plannedMinutes = plan.totalMinutes || plan.reduce((sum, item) => sum + (item.minutes || 0), 0);
        return {
            completed: completedTypes.length,
            total: activityTypes.length,
            completedMinutes: todayProgress.minutes || 0,
            plannedMinutes,
            targetMinutes: plan.targetMinutes || plannedMinutes
        };
    },

    markLessonComplete(weekNum) {
        this.update(data => {
            if (!data.completedLessons.includes(weekNum)) {
                data.completedLessons.push(weekNum);
            }
        });
    },

    checkCurrentWeekCompletion(data = this.load()) {
        if (typeof CurriculumData === 'undefined' || !data.mode) return;
        const curriculumWeek = CurriculumData.getCurriculumWeek(data.currentWeek, data.mode);
        const plan = CurriculumData.getDailyPlan(curriculumWeek);
        const progress = this.getDailyPlanProgress(plan);
        if (progress.total > 0 && progress.completed >= progress.total) {
            this.markLessonComplete(data.currentWeek);
        }
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

    syncCalendarProgress() {
        const data = this.load();
        if (!data.startDate || !data.mode) return data;
        const config = this.getModeConfig(data.mode);
        const daysElapsed = Math.max(0, this.getDaysElapsed());
        const expectedWeek = Math.min(config.totalWeeks, Math.floor(daysElapsed / 7) + 1);
        const currentDay = (daysElapsed % 7) + 1;

        data.currentWeek = Math.max(data.currentWeek || 1, expectedWeek);
        data.currentDay = currentDay;
        this.save(data);
        return data;
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
                a0Weeks: 1, a1Weeks: 2, a2Weeks: 3, b1Weeks: 4, b2Weeks: 6
            },
            accelerated: {
                name: 'Accelerated Mode',
                emoji: '⚡',
                totalWeeks: 32,
                hoursPerDay: 2,
                targetLevel: 'B2',
                description: '8 months focused — solid B2 prep',
                a0Weeks: 2, a1Weeks: 4, a2Weeks: 6, b1Weeks: 8, b2Weeks: 12
            },
            standard: {
                name: 'Standard Mode',
                emoji: '📚',
                totalWeeks: 52,
                hoursPerDay: 1,
                targetLevel: 'B2',
                description: '12 months steady — sustainable pace',
                a0Weeks: 4, a1Weeks: 6, a2Weeks: 10, b1Weeks: 14, b2Weeks: 18
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
        if (week <= config.a0Weeks) return 'A0';
        if (week <= config.a0Weeks + config.a1Weeks) return 'A1';
        if (week <= config.a0Weeks + config.a1Weeks + config.a2Weeks) return 'A2';
        if (week <= config.a0Weeks + config.a1Weeks + config.a2Weeks + config.b1Weeks) return 'B1';
        return 'B2';
    }
};
