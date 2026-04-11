// ============================================
// DutchPath - Curriculum Structure
// Maps weeks to content for each mode
// ============================================

const CurriculumData = {
    // Standard 16-week structure (Speed mode)
    // Other modes scale this across more weeks
    weeks: [
        {
            week: 1, level: 'A1', title: 'Welkom! Beginnen met Nederlands',
            titleEn: 'Welcome! Starting Dutch',
            focus: 'Alphabet, pronunciation, greetings, personal pronouns, zijn/hebben',
            vocabThemes: ['greetings', 'pronouns', 'personal'],
            grammarIds: ['g001', 'g002'],
            readingIds: [],
            knmTopics: []
        },
        {
            week: 2, level: 'A1', title: 'Nummers, Dagen en Tijd',
            titleEn: 'Numbers, Days and Time',
            focus: 'Numbers 1-100, days, time, articles de/het, hebben',
            vocabThemes: ['numbers', 'days', 'time'],
            grammarIds: ['g003', 'g004'],
            readingIds: [],
            knmTopics: []
        },
        {
            week: 3, level: 'A1', title: 'Familie en Thuis',
            titleEn: 'Family and Home',
            focus: 'Family vocabulary, adjectives, present tense regular verbs, word order',
            vocabThemes: ['family', 'home', 'adjectives'],
            grammarIds: ['g005', 'g006'],
            readingIds: ['r001'],
            knmTopics: []
        },
        {
            week: 4, level: 'A1', title: 'Eten, Drinken en Winkelen',
            titleEn: 'Food, Drinks and Shopping',
            focus: 'Food vocabulary, shopping, negation, asking questions',
            vocabThemes: ['food', 'shopping'],
            grammarIds: [],
            readingIds: ['r002', 'r003'],
            knmTopics: []
        },
        {
            week: 5, level: 'A2', title: 'Dagelijks Leven',
            titleEn: 'Daily Life',
            focus: 'Home, daily routines, separable verbs, past tense perfectum',
            vocabThemes: ['home', 'daily'],
            grammarIds: ['g007'],
            readingIds: [],
            knmTopics: []
        },
        {
            week: 6, level: 'A2', title: 'Gezondheid',
            titleEn: 'Health',
            focus: 'Body, health, doctor visits, imperfectum',
            vocabThemes: ['health', 'body'],
            grammarIds: ['g008'],
            readingIds: ['r004'],
            knmTopics: ['knm_health']
        },
        {
            week: 7, level: 'A2', title: 'Vervoer en Reizen',
            titleEn: 'Transport and Travel',
            focus: 'Transport, directions, modal verbs',
            vocabThemes: ['transport', 'directions'],
            grammarIds: ['g009'],
            readingIds: ['r005'],
            knmTopics: []
        },
        {
            week: 8, level: 'A2', title: 'Werk en Opleiding',
            titleEn: 'Work and Education',
            focus: 'Work vocabulary, job applications, formal language',
            vocabThemes: ['work', 'education'],
            grammarIds: [],
            readingIds: [],
            knmTopics: ['knm_work']
        },
        {
            week: 9, level: 'B1', title: 'Overheid en Samenleving',
            titleEn: 'Government and Society',
            focus: 'Government vocabulary, subordinate clauses, KNM topics',
            vocabThemes: ['government'],
            grammarIds: ['g010'],
            readingIds: ['r006'],
            knmTopics: ['knm_government', 'knm_housing']
        },
        {
            week: 10, level: 'B1', title: 'Mening Geven en Gevoelens',
            titleEn: 'Giving Opinions and Feelings',
            focus: 'Opinions, feelings, "er", communication',
            vocabThemes: ['communication', 'feelings'],
            grammarIds: ['g011'],
            readingIds: ['r007'],
            knmTopics: ['knm_education']
        },
        {
            week: 11, level: 'B1', title: 'Nederlands in Praktijk',
            titleEn: 'Dutch in Practice',
            focus: 'Review & consolidate B1, extensive reading, KNM',
            vocabThemes: [],
            grammarIds: [],
            readingIds: [],
            knmTopics: ['knm_politics']
        },
        {
            week: 12, level: 'B1', title: 'Professioneel Nederlands',
            titleEn: 'Professional Dutch',
            focus: 'Formal/business Dutch, meetings, presentations',
            vocabThemes: ['work', 'society'],
            grammarIds: [],
            readingIds: [],
            knmTopics: ['knm_history']
        },
        {
            week: 13, level: 'B2', title: 'Gevorderd Nederlands',
            titleEn: 'Advanced Dutch',
            focus: 'Passive voice, complex sentence structures',
            vocabThemes: [],
            grammarIds: ['g012'],
            readingIds: [],
            knmTopics: ['knm_culture']
        },
        {
            week: 14, level: 'B2', title: 'Argumenteren en Debatteren',
            titleEn: 'Arguing and Debating',
            focus: 'Conditional, academic Dutch, complex reading',
            vocabThemes: ['environment', 'economy'],
            grammarIds: ['g013'],
            readingIds: ['r008'],
            knmTopics: []
        },
        {
            week: 15, level: 'B2', title: 'Examenvoorbereiding',
            titleEn: 'Exam Preparation',
            focus: 'Relative clauses, democracy reading, exam practice',
            vocabThemes: [],
            grammarIds: ['g014'],
            readingIds: ['r009'],
            knmTopics: []
        },
        {
            week: 16, level: 'B2', title: 'Eindexamen en Revisie',
            titleEn: 'Final Exam & Review',
            focus: 'Full review, mock exams, final preparation',
            vocabThemes: [],
            grammarIds: [],
            readingIds: [],
            knmTopics: []
        }
    ],

    getWeek(weekNum) {
        return this.weeks.find(w => w.week === weekNum) || this.weeks[this.weeks.length - 1];
    },

    getWeeksForLevel(level) {
        return this.weeks.filter(w => w.level === level);
    },

    // Map curriculum week to actual week based on mode
    getMappedWeek(actualWeek, mode) {
        const config = DutchStorage.getModeConfig(mode);
        const totalWeeks = config.totalWeeks;
        const ratio = 16 / totalWeeks; // curriculum has 16 base weeks
        const curriculumWeek = Math.min(16, Math.ceil(actualWeek * ratio));
        return this.getWeek(curriculumWeek);
    },

    getCurriculumWeek(actualWeek, mode) {
        const config = DutchStorage.getModeConfig(mode);
        const totalWeeks = config.totalWeeks;
        const ratio = 16 / totalWeeks;
        return Math.min(16, Math.ceil(actualWeek * ratio));
    },

    getDailyPlan(weekNum) {
        const week = this.getWeek(weekNum);
        if (!week) return [];

        const plan = [];

        // Vocabulary
        const vocabWords = VocabularyData.getByWeek(weekNum);
        if (vocabWords.length > 0) {
            plan.push({
                type: 'vocabulary',
                icon: '📖',
                title: 'Vocabulary',
                description: `Learn ${vocabWords.length} new words`,
                duration: '15 min',
                data: { week: weekNum }
            });
        }

        // Grammar
        if (week.grammarIds.length > 0) {
            const lesson = GrammarData.getById(week.grammarIds[0]);
            plan.push({
                type: 'grammar',
                icon: '📝',
                title: 'Grammar',
                description: lesson ? lesson.title : 'Grammar practice',
                duration: '15 min',
                data: { lessonId: week.grammarIds[0] }
            });
        }

        // Reading
        if (week.readingIds.length > 0) {
            plan.push({
                type: 'reading',
                icon: '📕',
                title: 'Reading',
                description: 'Reading comprehension exercise',
                duration: '15 min',
                data: { passageId: week.readingIds[0] }
            });
        }

        // Flashcard review
        plan.push({
            type: 'flashcards',
            icon: '🃏',
            title: 'Review Flashcards',
            description: 'Spaced repetition review',
            duration: '10 min',
            data: {}
        });

        // KNM (from week 6+)
        if (week.knmTopics.length > 0) {
            plan.push({
                type: 'knm',
                icon: '🏛️',
                title: 'KNM Study',
                description: 'Dutch society knowledge',
                duration: '10 min',
                data: { topicId: week.knmTopics[0] }
            });
        }

        return plan;
    }
};
