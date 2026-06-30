// Lightweight validation for the static DutchPath data files.
// Run with: node validate-curriculum.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const context = {
    console,
    localStorage: {
        getItem() {
            return JSON.stringify({
                mode: 'standard',
                settings: { dailyGoalMinutes: 60 }
            });
        },
        setItem() {},
        removeItem() {}
    }
};

vm.createContext(context);

[
    'js/utils/storage.js',
    'js/data/vocabulary.js',
    'js/data/grammar.js',
    'js/data/reading.js',
    'js/data/knm.js',
    'js/data/curriculum.js'
].forEach(file => {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    vm.runInContext(source, context, { filename: file });
});

const result = vm.runInContext(`
(() => {
    const errors = [];
    const allowedTypes = new Set(['vocabulary', 'grammar', 'reading', 'flashcards', 'knm', 'writing', 'listening', 'speaking', 'exam']);

    CurriculumData.weeks.forEach(week => {
        week.grammarIds.forEach(id => {
            if (!GrammarData.getById(id)) errors.push('Missing grammar lesson: ' + id + ' in week ' + week.week);
        });
        week.readingIds.forEach(id => {
            if (!ReadingData.getById(id)) errors.push('Missing reading passage: ' + id + ' in week ' + week.week);
        });
        week.knmTopics.forEach(id => {
            if (!KNMData.getTopicById(id)) errors.push('Missing KNM topic: ' + id + ' in week ' + week.week);
        });

        const plan = CurriculumData.getDailyPlan(week.week, { mode: 'standard', targetMinutes: 60 });
        const total = CurriculumData.getPlanTotalMinutes(plan);
        if (total < 60) errors.push('Week ' + week.week + ' plans only ' + total + ' minutes');
        plan.forEach(item => {
            if (!allowedTypes.has(item.type)) errors.push('Unsupported plan type: ' + item.type + ' in week ' + week.week);
            if (!item.minutes || item.minutes <= 0) errors.push('Invalid minutes for ' + item.title + ' in week ' + week.week);
        });
    });

    return {
        errors,
        weeks: CurriculumData.weeks.length,
        words: VocabularyData.words.length,
        grammarLessons: GrammarData.lessons.length,
        readings: ReadingData.passages.length,
        knmQuestions: KNMData.getAllQuestions().length
    };
})()
`, context);

if (result.errors.length) {
    console.error('Curriculum validation failed:');
    result.errors.forEach(error => console.error('- ' + error));
    process.exit(1);
}

console.log('Curriculum validation passed.');
console.log(`Weeks: ${result.weeks}`);
console.log(`Vocabulary words: ${result.words}`);
console.log(`Grammar lessons: ${result.grammarLessons}`);
console.log(`Reading passages: ${result.readings}`);
console.log(`KNM questions: ${result.knmQuestions}`);
