// ============================================
// DutchPath - Curriculum Structure
// Maps weeks to content for each mode
// ============================================

const CurriculumData = {
    MIN_DAILY_MINUTES: 60,

    // Standard 16-week structure (Speed mode)
    // Other modes scale this across more weeks
    weeks: [
        {
            week: 1, level: 'A0', title: 'Nulstart: Klanken en Survival Dutch',
            titleEn: 'Zero Start: Sounds and Survival Dutch',
            focus: 'Alphabet, pronunciation, greetings, classroom language, personal pronouns, zijn/hebben',
            vocabThemes: ['alphabet', 'pronunciation', 'greetings', 'classroom', 'pronouns', 'personal'],
            grammarIds: ['g000', 'g001', 'g002'],
            readingIds: ['r000'],
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
            grammarIds: ['g015'],
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
            grammarIds: ['g016'],
            readingIds: ['r010'],
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
            vocabThemes: ['communication', 'society'],
            grammarIds: ['g017'],
            readingIds: ['r011'],
            knmTopics: ['knm_politics']
        },
        {
            week: 12, level: 'B1', title: 'Professioneel Nederlands',
            titleEn: 'Professional Dutch',
            focus: 'Formal/business Dutch, meetings, presentations',
            vocabThemes: ['work', 'society'],
            grammarIds: ['g018'],
            readingIds: ['r012'],
            knmTopics: ['knm_history']
        },
        {
            week: 13, level: 'B2', title: 'Gevorderd Nederlands',
            titleEn: 'Advanced Dutch',
            focus: 'Passive voice, complex sentence structures',
            vocabThemes: ['academic', 'society'],
            grammarIds: ['g012'],
            readingIds: ['r013'],
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
            vocabThemes: ['exam', 'society', 'communication'],
            grammarIds: ['g012', 'g013', 'g014'],
            readingIds: ['r008', 'r009', 'r014'],
            knmTopics: ['knm_government', 'knm_politics', 'knm_culture']
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

    getDailyTargetMinutes(mode) {
        const data = DutchStorage.load();
        const selectedMode = mode || data.mode || 'standard';
        const config = DutchStorage.getModeConfig(selectedMode);
        const configuredGoal = data.settings?.dailyGoalMinutes || Math.round(config.hoursPerDay * 60);
        return Math.max(this.MIN_DAILY_MINUTES, configuredGoal);
    },

    getSkillPractice(weekNum) {
        const week = this.getWeek(weekNum);
        const level = week?.level || 'A1';
        const topic = week?.titleEn || 'today\'s Dutch topic';
        const writingByLevel = {
            A0: 'Write 5 short sentences introducing yourself: name, country, city, language, and one polite question.',
            A1: 'Write a short message of 6-8 sentences about your day, using words from this week.',
            A2: 'Write a practical email of 8-10 sentences about an appointment, home, travel, or work situation.',
            B1: 'Write a structured paragraph giving your opinion and one reason about a familiar topic.',
            B2: 'Write a short argument with an introduction, two reasons, and a conclusion.'
        };
        const listeningByLevel = {
            A0: 'Listen to this week\'s words with text-to-speech, then repeat each greeting and survival phrase aloud.',
            A1: 'Listen to the model examples in the lesson and answer: who, where, when, and what?',
            A2: 'Listen to the vocabulary examples and summarize the situation in 3 simple Dutch sentences.',
            B1: 'Listen to the KNM or reading text aloud and note 5 key facts in Dutch.',
            B2: 'Listen to a longer reading text aloud and identify the main claim, two details, and one opinion.'
        };
        const speakingByLevel = {
            A0: 'Say the alphabet, spell your name, and introduce yourself in 30 seconds.',
            A1: 'Record or say 1 minute about yourself, your family, or your daily routine.',
            A2: 'Role-play a practical conversation: doctor, shop, transport, housing, or work.',
            B1: 'Give a 2-minute opinion about a social topic and use because, but, and therefore.',
            B2: 'Give a 3-minute argument about an exam topic and include a clear conclusion.'
        };

        return {
            writing: writingByLevel[level] || writingByLevel.A1,
            listening: listeningByLevel[level] || listeningByLevel.A1,
            speaking: speakingByLevel[level] || speakingByLevel.A1,
            topic
        };
    },

    createPlanItem(type, icon, title, description, minutes, data = {}) {
        return {
            type,
            icon,
            title,
            description,
            minutes,
            duration: `${minutes} min`,
            data
        };
    },

    getPlanTotalMinutes(plan) {
        return plan.reduce((sum, item) => sum + (item.minutes || parseInt(item.duration, 10) || 0), 0);
    },

    getDailyPlan(weekNum, options = {}) {
        const week = this.getWeek(weekNum);
        if (!week) return [];

        const plan = [];
        const targetMinutes = options.targetMinutes || this.getDailyTargetMinutes(options.mode);

        const vocabWords = VocabularyData.getByWeek(weekNum);
        if (vocabWords.length > 0) {
            const minutes = Math.max(20, Math.min(35, Math.ceil(vocabWords.length * 1.2)));
            plan.push(this.createPlanItem(
                'vocabulary',
                '📖',
                'Vocabulary',
                `Learn and quiz ${vocabWords.length} words`,
                minutes,
                { week: weekNum }
            ));
        }

        week.grammarIds.forEach((lessonId, index) => {
            const lesson = GrammarData.getById(lessonId);
            if (!lesson) return;
            const exerciseCount = lesson.exercises ? lesson.exercises.length : 0;
            plan.push({
                type: 'grammar',
                icon: '📝',
                title: index === 0 ? 'Grammar' : 'Grammar Practice',
                description: `${lesson.title} (${exerciseCount} exercises)`,
                minutes: Math.max(15, Math.min(30, 8 + exerciseCount * 2)),
                duration: `${Math.max(15, Math.min(30, 8 + exerciseCount * 2))} min`,
                activityKey: `grammar:${lessonId}`,
                data: { lessonId }
            });
        });

        week.readingIds.forEach((passageId, index) => {
            const passage = ReadingData.getById(passageId);
            if (!passage) return;
            const questionCount = passage.questions ? passage.questions.length : 0;
            plan.push({
                type: 'reading',
                icon: '📕',
                title: index === 0 ? 'Reading' : 'Reading Practice',
                description: `${passage.titleEn} (${questionCount} questions)`,
                minutes: Math.max(15, Math.min(25, 10 + questionCount)),
                duration: `${Math.max(15, Math.min(25, 10 + questionCount))} min`,
                activityKey: `reading:${passageId}`,
                data: { passageId }
            });
        });

        plan.push(this.createPlanItem(
            'flashcards',
            '🃏',
            'Review Flashcards',
            'Spaced repetition review of current and past words',
            20,
            { week: weekNum }
        ));

        week.knmTopics.forEach((topicId, index) => {
            const topic = KNMData.getTopicById(topicId);
            if (!topic) return;
            const questionCount = topic.questions ? topic.questions.length : 0;
            plan.push({
                type: 'knm',
                icon: '🏛️',
                title: index === 0 ? 'KNM Study' : 'KNM Review',
                description: `${topic.titleEn} (${questionCount} questions)`,
                minutes: Math.max(15, Math.min(25, 8 + questionCount)),
                duration: `${Math.max(15, Math.min(25, 8 + questionCount))} min`,
                activityKey: `knm:${topicId}`,
                data: { topicId }
            });
        });

        const skillPractice = this.getSkillPractice(weekNum);
        [
            this.createPlanItem('listening', '🎧', 'Listening Practice', skillPractice.listening, 15, { week: weekNum }),
            this.createPlanItem('speaking', '🎙️', 'Speaking Practice', skillPractice.speaking, 15, { week: weekNum }),
            this.createPlanItem('writing', '✍️', 'Writing Practice', skillPractice.writing, 15, { week: weekNum })
        ].forEach(item => plan.push(item));

        const reviewQueue = [
            this.createPlanItem('exam', '🎯', 'Mixed Exam Practice', 'Timed mixed questions from vocabulary, grammar, reading, and KNM', 30, { examType: 'mixed' }),
            this.createPlanItem('grammar', '📝', 'Grammar Review', 'Review earlier grammar and redo weak exercises', 20, { review: true }),
            this.createPlanItem('reading', '📕', 'Extra Reading Review', 'Re-read an earlier text and retake comprehension questions', 20, { review: true }),
            this.createPlanItem('vocabulary', '🔤', 'Extra Vocabulary Quiz', 'Retest older words until they feel automatic', 20, { review: true }),
            this.createPlanItem('knm', '🏛️', 'KNM Question Drill', 'Answer extra Dutch society exam questions', 20, { review: true })
        ];

        let queueIndex = 0;
        while (this.getPlanTotalMinutes(plan) < targetMinutes && queueIndex < reviewQueue.length) {
            const item = reviewQueue[queueIndex];
            item.activityKey = `${item.type}:review:${queueIndex}`;
            plan.push(item);
            queueIndex++;
        }

        plan.targetMinutes = targetMinutes;
        plan.totalMinutes = this.getPlanTotalMinutes(plan);

        return plan;
    }
};
