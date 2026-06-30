// ============================================
// DutchPath - Grammar Lessons Database
// A1 → B2 progression
// ============================================

const GrammarData = {
    lessons: [
        // ===== A1 GRAMMAR =====
        {
            id: 'g001',
            title: 'Personal Pronouns',
            titleNl: 'Persoonlijke voornaamwoorden',
            level: 'A1',
            week: 1,
            explanation: `In Dutch, personal pronouns work similarly to English. There are subject pronouns (used as the subject of a sentence) and stressed/unstressed forms.

**Subject Pronouns:**
| Dutch | English | Note |
|-------|---------|------|
| ik | I | Always lowercase unless at start of sentence |
| jij / je | you (informal) | jij = stressed, je = unstressed |
| u | you (formal) | Used with strangers, older people, officials |
| hij | he | |
| zij / ze | she | zij = stressed, ze = unstressed |
| het | it | |
| wij / we | we | wij = stressed, we = unstressed |
| jullie | you (plural) | |
| zij / ze | they | Same as "she" — context determines meaning |`,
            examples: [
                { dutch: 'Ik ben een student.', english: 'I am a student.' },
                { dutch: 'Jij spreekt Nederlands.', english: 'You speak Dutch.' },
                { dutch: 'Hij woont in Amsterdam.', english: 'He lives in Amsterdam.' },
                { dutch: 'Wij leren Nederlands.', english: 'We are learning Dutch.' }
            ],
            exercises: [
                { type: 'fill', question: '___ ben een student.', answer: 'Ik', hint: 'I' },
                { type: 'fill', question: '___ woont in Rotterdam.', answer: 'Hij', hint: 'He' },
                { type: 'fill', question: '___ spreken Nederlands.', answer: 'Wij', hint: 'We' },
                { type: 'mcq', question: 'Which is the formal "you" in Dutch?', options: ['jij', 'u', 'hij', 'zij'], answer: 'u' },
                { type: 'mcq', question: '"Ze" can mean both ___ and ___.', options: ['she and they', 'he and she', 'I and we', 'you and they'], answer: 'she and they' }
            ]
        },
        {
            id: 'g002',
            title: 'The Verb "zijn" (to be)',
            titleNl: 'Het werkwoord "zijn"',
            level: 'A1',
            week: 1,
            explanation: `"Zijn" is the most important verb in Dutch. Like English "to be", it is irregular and must be memorized.

**Conjugation of "zijn":**
| Pronoun | Form | Example |
|---------|------|---------|
| ik | ben | Ik ben blij. (I am happy.) |
| jij/je | bent | Jij bent mijn vriend. (You are my friend.) |
| u | bent | U bent welkom. (You are welcome.) |
| hij/zij/het | is | Hij is groot. (He is tall.) |
| wij/we | zijn | Wij zijn studenten. (We are students.) |
| jullie | zijn | Jullie zijn laat. (You all are late.) |
| zij/ze | zijn | Zij zijn Nederlands. (They are Dutch.) |

**Important rule:** When "jij/je" comes AFTER the verb (in questions), the -t disappears:
- Jij **bent** student. → **Ben** jij student?`,
            examples: [
                { dutch: 'Ik ben 25 jaar oud.', english: 'I am 25 years old.' },
                { dutch: 'Ben jij student?', english: 'Are you a student?' },
                { dutch: 'Zij is mijn zus.', english: 'She is my sister.' },
                { dutch: 'Wij zijn uit Nederland.', english: 'We are from the Netherlands.' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ student.', answer: 'ben', hint: 'to be (I)' },
                { type: 'fill', question: 'Zij ___ mijn moeder.', answer: 'is', hint: 'to be (she)' },
                { type: 'fill', question: 'Wij ___ vrienden.', answer: 'zijn', hint: 'to be (we)' },
                { type: 'fill', question: '___ jij Nederlands?', answer: 'Ben', hint: 'to be — question form' },
                { type: 'mcq', question: 'What happens to "bent" in "Jij bent..." when you make a question?', options: ['It stays "bent"', 'It becomes "ben"', 'It becomes "is"', 'It disappears'], answer: 'It becomes "ben"' }
            ]
        },
        {
            id: 'g003',
            title: 'The Verb "hebben" (to have)',
            titleNl: 'Het werkwoord "hebben"',
            level: 'A1',
            week: 2,
            explanation: `"Hebben" (to have) is the second most important verb. It is also irregular.

**Conjugation of "hebben":**
| Pronoun | Form | Example |
|---------|------|---------|
| ik | heb | Ik heb een hond. |
| jij/je | hebt | Jij hebt een auto. |
| u | hebt/heeft | U heeft een afspraak. |
| hij/zij/het | heeft | Hij heeft twee kinderen. |
| wij/we | hebben | Wij hebben een huis. |
| jullie | hebben | Jullie hebben gelijk. |
| zij/ze | hebben | Zij hebben veel geld. |

**Same question rule as "zijn":** Jij **hebt** → **Heb** jij?`,
            examples: [
                { dutch: 'Ik heb twee broers.', english: 'I have two brothers.' },
                { dutch: 'Heb jij een fiets?', english: 'Do you have a bicycle?' },
                { dutch: 'Zij heeft een mooie tuin.', english: 'She has a beautiful garden.' },
                { dutch: 'Wij hebben honger.', english: 'We are hungry. (lit: We have hunger.)' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ een vraag.', answer: 'heb', hint: 'to have (I)' },
                { type: 'fill', question: 'Hij ___ drie kinderen.', answer: 'heeft', hint: 'to have (he)' },
                { type: 'fill', question: '___ jij een pen?', answer: 'Heb', hint: 'to have — question' },
                { type: 'fill', question: 'Wij ___ een grote keuken.', answer: 'hebben', hint: 'to have (we)' },
                { type: 'mcq', question: 'Choose the correct form: "Zij (she) ___ een kat."', options: ['heb', 'hebt', 'heeft', 'hebben'], answer: 'heeft' }
            ]
        },
        {
            id: 'g004',
            title: 'Articles: de & het',
            titleNl: 'Lidwoorden: de & het',
            level: 'A1',
            week: 2,
            explanation: `Dutch has two definite articles: **"de"** and **"het"**. There is no simple rule — you must learn which article goes with each noun.

**The rules that exist:**
- **"De"** words: ~75% of nouns. All plural nouns use "de".
- **"Het"** words: ~25% of nouns. Diminutives (-je) always take "het".
- **"Een"** is the indefinite article for both (like "a/an" in English).

**Patterns (not absolute rules):**
| Always "de" | Always "het" |
|-------------|-------------|
| People (de man, de vrouw) | Diminutives (het huisje) |
| Trees, plants, fruits | Languages (het Nederlands) |
| Mountains, rivers | Metals (het goud) |
| Most -ing words (de woning) | Most -ment words (het moment) |

**Tip:** Always learn the article together with the noun: "de stoel", not just "stoel".`,
            examples: [
                { dutch: 'De man leest een boek.', english: 'The man reads a book.' },
                { dutch: 'Het huis is groot.', english: 'The house is big.' },
                { dutch: 'De kinderen spelen buiten.', english: 'The children play outside. (plural = always de)' },
                { dutch: 'Ik koop een fiets.', english: 'I buy a bicycle. (indefinite = een)' }
            ],
            exercises: [
                { type: 'mcq', question: '___ huis (house)', options: ['de', 'het'], answer: 'het' },
                { type: 'mcq', question: '___ man (man)', options: ['de', 'het'], answer: 'de' },
                { type: 'mcq', question: '___ kind (child)', options: ['de', 'het'], answer: 'het' },
                { type: 'mcq', question: '___ school (school)', options: ['de', 'het'], answer: 'de' },
                { type: 'mcq', question: 'What article do ALL plural nouns use?', options: ['de', 'het', 'een', 'none'], answer: 'de' }
            ]
        },
        {
            id: 'g005',
            title: 'Present Tense Regular Verbs',
            titleNl: 'Tegenwoordige tijd - regelmatige werkwoorden',
            level: 'A1',
            week: 3,
            explanation: `To conjugate regular Dutch verbs in the present tense, start with the **infinitive** (which always ends in -en) and find the **stem**.

**Finding the stem:** Remove the -en ending.
- werken → werk
- wonen → woon  
- lezen → lees (note: z → s in the stem)
- leven → leef (note: v → f in the stem)

**Conjugation pattern:**
| Pronoun | Rule | Example (werken) |
|---------|------|-----------------|
| ik | stem | ik werk |
| jij/je | stem + t | jij werkt |
| u | stem + t | u werkt |
| hij/zij/het | stem + t | hij werkt |
| wij/we | infinitive | wij werken |
| jullie | infinitive | jullie werken |
| zij/ze | infinitive | zij werken |

**Remember:** When jij comes AFTER the verb (questions), drop the -t!
- Jij werkt. → Werk jij?`,
            examples: [
                { dutch: 'Ik werk bij een bank.', english: 'I work at a bank.' },
                { dutch: 'Zij woont in Den Haag.', english: 'She lives in The Hague.' },
                { dutch: 'Wij leren Nederlands.', english: 'We learn Dutch.' },
                { dutch: 'Lees jij veel boeken?', english: 'Do you read many books?' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ in Amsterdam. (wonen)', answer: 'woon', hint: 'Remove -en' },
                { type: 'fill', question: 'Hij ___ iedere dag. (werken)', answer: 'werkt', hint: 'stem + t' },
                { type: 'fill', question: 'Wij ___ Nederlands. (spreken)', answer: 'spreken', hint: 'wij = infinitive' },
                { type: 'fill', question: '___ jij graag? (lezen)', answer: 'Lees', hint: 'question: no -t!' },
                { type: 'mcq', question: 'What is the stem of "schrijven" (to write)?', options: ['schrijv', 'schrijf', 'schrijve', 'schrijven'], answer: 'schrijf' }
            ]
        },
        {
            id: 'g006',
            title: 'Word Order: Main Clauses',
            titleNl: 'Woordvolgorde: hoofdzinnen',
            level: 'A1',
            week: 3,
            explanation: `Dutch word order follows the **V2 rule**: the conjugated verb is ALWAYS in the **second position** in a main clause.

**Basic pattern: Subject - Verb - Rest**
- Ik **werk** in Amsterdam.

**Time/place at the start → Verb stays second (inversion):**
- Morgen **werk** ik in Amsterdam. (Tomorrow I work in Amsterdam.)  
  *(The subject and verb swap — this is called "inversion")*

**This is very different from English!** In English, you say "Tomorrow I work..." but never swap the subject and verb.

**V2 Rule examples:**
| Position 1 | Position 2 (VERB) | Rest |
|-----------|-------------------|------|
| Ik | werk | in Amsterdam. |
| Morgen | werk | ik in Amsterdam. |
| In Amsterdam | werk | ik morgen. |`,
            examples: [
                { dutch: 'Ik ga morgen naar school.', english: 'I go to school tomorrow.' },
                { dutch: 'Morgen ga ik naar school.', english: 'Tomorrow I go to school.' },
                { dutch: 'Vandaag werkt zij thuis.', english: 'Today she works at home.' },
                { dutch: 'In Nederland fietsen veel mensen.', english: 'In the Netherlands many people cycle.' }
            ],
            exercises: [
                { type: 'mcq', question: 'Where must the conjugated verb be in a Dutch main clause?', options: ['First position', 'Second position', 'Last position', 'Any position'], answer: 'Second position' },
                { type: 'mcq', question: '"Morgen ___ ik naar de dokter." Which is correct?', options: ['ga', 'ik ga', 'gaan', 'gaat'], answer: 'ga' },
                { type: 'fill', question: 'Vandaag ___ wij Nederlands. (leren)', answer: 'leren', hint: 'V2: verb second' },
                { type: 'mcq', question: '"In Amsterdam ___ veel mensen." (wonen)', options: ['wonen', 'woont', 'woon', 'wone'], answer: 'wonen' }
            ]
        },

        // ===== A2 GRAMMAR =====
        {
            id: 'g007',
            title: 'Past Tense: Perfectum (Present Perfect)',
            titleNl: 'Voltooid tegenwoordige tijd',
            level: 'A2',
            week: 5,
            explanation: `The **perfectum** is the most common past tense in spoken Dutch. It uses **hebben** or **zijn** + a **past participle**.

**Forming the past participle (regular verbs):**
ge + stem + t/d

Use **-t** if the stem ends in: **t, k, f, s, ch, p** (remember: **'t kofschip**)
Use **-d** for all other stems

**Examples:**
- werken → stem: werk → ge**werk**t (t-k-f-s-ch-p: "k")
- wonen → stem: woon → ge**woon**d (not in 't kofschip)
- fietsen → stem: fiets → ge**fietst** (t-k-f-s-ch-p: "s")

**Hebben or zijn?**
- Most verbs use **hebben**
- Verbs of *movement* or *change of state* use **zijn**: gaan, komen, worden, vertrekken, verhuizen...

**Word order:** hebben/zijn is V2, past participle goes to the END:
- Ik **heb** gisteren ge**werkt**. (I worked yesterday.)`,
            examples: [
                { dutch: 'Ik heb Nederlands geleerd.', english: 'I have learned Dutch.' },
                { dutch: 'Zij heeft een boek gekocht.', english: 'She has bought a book.' },
                { dutch: 'Wij zijn naar Amsterdam gegaan.', english: 'We have gone to Amsterdam.' },
                { dutch: 'Hij is gisteren verhuisd.', english: 'He moved yesterday.' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik heb gisteren ___ . (werken)', answer: 'gewerkt', hint: "ge + stem + t ('t kofschip: k)" },
                { type: 'fill', question: 'Zij heeft een huis ___ . (kopen)', answer: 'gekocht', hint: 'kopen is irregular' },
                { type: 'mcq', question: '"Gaan" (to go) uses ___ as auxiliary.', options: ['hebben', 'zijn'], answer: 'zijn' },
                { type: 'fill', question: 'Wij zijn naar school ___ . (gaan)', answer: 'gegaan', hint: 'irregular past participle' },
                { type: 'mcq', question: 'Where does the past participle go in a sentence?', options: ['Second position', 'Before the subject', 'At the end', 'After the subject'], answer: 'At the end' }
            ]
        },
        {
            id: 'g008',
            title: 'Past Tense: Imperfectum (Simple Past)',
            titleNl: 'Onvoltooid verleden tijd',
            level: 'A2',
            week: 6,
            explanation: `The **imperfectum** (simple past) is used in written Dutch and for storytelling, background descriptions, and states.

**Regular verbs — use 't kofschip again:**

If the stem ends in t, k, f, s, ch, p → add **-te** (singular) / **-ten** (plural)
Otherwise → add **-de** (singular) / **-den** (plural)

| Pronoun | Pattern | Example (werken/wonen) |
|---------|---------|----------------------|
| ik | stem + te/de | ik werkte / ik woonde |
| jij | stem + te/de | jij werkte / jij woonde |
| hij/zij | stem + te/de | hij werkte / zij woonde |
| wij | stem + ten/den | wij werkten / wij woonden |
| jullie | stem + ten/den | jullie werkten |
| zij | stem + ten/den | zij werkten |

**Common irregular verbs (must memorize):**
- zijn → was / waren
- hebben → had / hadden
- gaan → ging / gingen
- komen → kwam / kwamen`,
            examples: [
                { dutch: 'Ik werkte bij een bank.', english: 'I worked at a bank.' },
                { dutch: 'Zij woonde in Utrecht.', english: 'She lived in Utrecht.' },
                { dutch: 'Wij waren in Nederland.', english: 'We were in the Netherlands.' },
                { dutch: 'Hij ging naar de winkel.', english: 'He went to the shop.' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ in Rotterdam. (wonen - imperfectum)', answer: 'woonde', hint: 'stem + de' },
                { type: 'fill', question: 'Zij ___ iedere dag. (werken - imperfectum)', answer: 'werkte', hint: "stem + te ('t kofschip)" },
                { type: 'fill', question: 'Wij ___ naar school. (gaan - imperfectum)', answer: 'gingen', hint: 'irregular: gaan → ging/gingen' },
                { type: 'mcq', question: 'The imperfectum of "zijn" for "ik" is:', options: ['was', 'ben', 'zijn', 'werd'], answer: 'was' }
            ]
        },
        {
            id: 'g009',
            title: 'Modal Verbs',
            titleNl: 'Modale werkwoorden',
            level: 'A2',
            week: 7,
            explanation: `Modal verbs express ability, permission, desire, or obligation. The main verb goes to the END in infinitive form.

**Key modal verbs:**
| Dutch | English | Example |
|-------|---------|---------|
| kunnen | can / to be able to | Ik kan fietsen. |
| mogen | may / to be allowed to | Je mag hier parkeren. |
| moeten | must / to have to | Ik moet werken. |
| willen | to want | Ik wil een koffie bestellen. |
| zullen | shall / will | Ik zal morgen komen. |

**Conjugation of "kunnen":**
ik kan, jij kunt/kan, hij kan, wij kunnen, jullie kunnen, zij kunnen

**Word order:** Modal verb = V2, infinitive = END
- Ik **kan** goed Nederlands **spreken**.
- **Mag** ik hier **zitten**?`,
            examples: [
                { dutch: 'Ik kan Nederlands spreken.', english: 'I can speak Dutch.' },
                { dutch: 'Je mag hier niet roken.', english: 'You may not smoke here.' },
                { dutch: 'Wij moeten morgen werken.', english: 'We have to work tomorrow.' },
                { dutch: 'Wil je koffie drinken?', english: 'Do you want to drink coffee?' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ goed Nederlands spreken. (can)', answer: 'kan', hint: 'kunnen → ik ...' },
                { type: 'fill', question: 'Je ___ hier niet roken. (may)', answer: 'mag', hint: 'mogen → je ...' },
                { type: 'fill', question: 'Wij ___ om zes uur vertrekken. (must)', answer: 'moeten', hint: 'moeten → wij ...' },
                { type: 'mcq', question: 'Where does the main verb go with a modal verb?', options: ['Second position', 'Before the modal', 'At the end (infinitive)', 'After the subject'], answer: 'At the end (infinitive)' }
            ]
        },

        // ===== B1 GRAMMAR =====
        {
            id: 'g010',
            title: 'Subordinate Clauses & Conjunctions',
            titleNl: 'Bijzinnen en voegwoorden',
            level: 'B1',
            week: 9,
            explanation: `In subordinate clauses, the verb goes to the **END**. This is one of the biggest differences from English!

**Subordinating conjunctions (verb → end):**
dat (that), omdat (because), als (if/when), wanneer (when), 
voordat (before), nadat (after), terwijl (while), hoewel (although),
zodat (so that), toen (when - past)

**Structure:** Main clause + conjunction + rest + **VERB (at end)**

- Ik weet **dat** hij in Amsterdam **woont**.
  (I know that he lives in Amsterdam.)

- Ik leer Nederlands **omdat** ik in Nederland **wil wonen**.
  (I learn Dutch because I want to live in the Netherlands.)

**Coordinating conjunctions (normal word order):**
en (and), maar (but), of (or), want (because), dus (so)
- Ik werk en hij studeert. (normal V2 order)`,
            examples: [
                { dutch: 'Ik denk dat het morgen regent.', english: 'I think that it will rain tomorrow.' },
                { dutch: 'Omdat ik ziek ben, ga ik niet werken.', english: 'Because I am sick, I am not going to work.' },
                { dutch: 'Als je vragen hebt, kun je mij bellen.', english: 'If you have questions, you can call me.' },
                { dutch: 'Hij werkt hard, maar hij is moe.', english: 'He works hard, but he is tired.' }
            ],
            exercises: [
                { type: 'mcq', question: 'In a subordinate clause, where does the verb go?', options: ['Second position', 'First position', 'At the end', 'Before the conjunction'], answer: 'At the end' },
                { type: 'fill', question: 'Ik weet dat hij in Rotterdam ___ . (wonen)', answer: 'woont', hint: 'verb at the END in dat-clause' },
                { type: 'mcq', question: 'Which is a subordinating conjunction?', options: ['en', 'maar', 'omdat', 'dus'], answer: 'omdat' },
                { type: 'fill', question: 'Omdat ik ziek ___ , ga ik naar de dokter. (zijn)', answer: 'ben', hint: 'verb at end of omdat-clause' }
            ]
        },
        {
            id: 'g011',
            title: 'The Word "er"',
            titleNl: 'Het woordje "er"',
            level: 'B1',
            week: 10,
            explanation: `"Er" is one of the trickiest words in Dutch. It has FIVE different uses:

**1. Place (there):**
- Ik ben **er** geweest. (I have been there.)

**2. Introductory / Existential (there is/are):**
- **Er** zijn veel mensen. (There are many people.)
- **Er** is een probleem. (There is a problem.)

**3. Quantitative (of it/them — with numbers):**
- Ik heb **er** drie. (I have three *of them*.)
- Hoeveel heb je **er**? (How many do you have?)

**4. Prepositional (er + preposition):**
- Ik denk **eraan**. (I think about it.)  — er + aan
- Ik kijk **ernaar**. (I look at it.) — er + naar

**5. Passive construction:**
- **Er** wordt veel gefietst in Nederland. (There is a lot of cycling.)

This word is very important for the exam — practice using it in all contexts!`,
            examples: [
                { dutch: 'Er wonen veel mensen in Amsterdam.', english: 'Many people live in Amsterdam.' },
                { dutch: 'Ik heb er twee.', english: 'I have two (of them).' },
                { dutch: 'Ik denk erover na.', english: 'I am thinking about it.' },
                { dutch: 'Ben je er al geweest?', english: 'Have you been there already?' }
            ],
            exercises: [
                { type: 'mcq', question: '"Er zijn veel studenten." — What type of "er" is this?', options: ['Place', 'Existential', 'Quantitative', 'Prepositional'], answer: 'Existential' },
                { type: 'mcq', question: '"Ik heb er drie." — What type of "er" is this?', options: ['Place', 'Existential', 'Quantitative', 'Prepositional'], answer: 'Quantitative' },
                { type: 'fill', question: '___ is een probleem. (There is...)', answer: 'Er', hint: 'Existential er' },
                { type: 'fill', question: 'Ik denk ___ . (about it)', answer: 'eraan', hint: 'er + aan (preposition)' }
            ]
        },

        // ===== B2 GRAMMAR =====
        {
            id: 'g012',
            title: 'Passive Voice',
            titleNl: 'De lijdende vorm',
            level: 'B2',
            week: 13,
            explanation: `The passive voice is formed with **worden** (present) or **zijn** (past) + past participle.

**Present passive:** worden + past participle
- Het huis **wordt** ge**bouwd**. (The house is being built.)

**Past passive:** werd/werden + past participle
- Het huis **werd** ge**bouwd**. (The house was being built.)

**Perfect passive:** zijn + past participle (no "geworden"!)
- Het huis **is** ge**bouwd**. (The house has been built.)

**"Door" = "by" (agent):**
- Het boek **wordt** gelezen **door** veel mensen.
  (The book is read by many people.)

**Passive with "er":**
- **Er** wordt in Nederland veel gefietst.
  (There is a lot of cycling in the Netherlands.)
  *(Used when there is no specific subject)*`,
            examples: [
                { dutch: 'Het examen wordt in juni afgenomen.', english: 'The exam is administered in June.' },
                { dutch: 'De wet is veranderd door het parlement.', english: 'The law was changed by parliament.' },
                { dutch: 'Er wordt veel gepraat over integratie.', english: 'There is a lot of talk about integration.' },
                { dutch: 'Het formulier moet ingevuld worden.', english: 'The form must be filled in.' }
            ],
            exercises: [
                { type: 'mcq', question: 'Present passive uses which auxiliary?', options: ['hebben', 'zijn', 'worden', 'moeten'], answer: 'worden' },
                { type: 'fill', question: 'Het huis ___ gebouwd. (is being built)', answer: 'wordt', hint: 'present passive' },
                { type: 'fill', question: 'De brief is ___ door mijn collega. (written)', answer: 'geschreven', hint: 'past participle of schrijven' },
                { type: 'mcq', question: 'In perfect passive, what auxiliary is used?', options: ['worden', 'hebben', 'zijn', 'gaan'], answer: 'zijn' }
            ]
        },
        {
            id: 'g013',
            title: 'Conditional: zou/zouden',
            titleNl: 'De voorwaardelijke wijs',
            level: 'B2',
            week: 14,
            explanation: `The conditional is formed with **zou** (singular) / **zouden** (plural) + infinitive.

**Uses:**
1. **Polite requests:** Zou u mij kunnen helpen? (Could you help me?)
2. **Hypothetical situations:** Als ik rijk was, zou ik een huis kopen. (If I were rich, I would buy a house.)
3. **Reported speech:** Hij zei dat hij zou komen. (He said he would come.)

**Conjugation:**
| Pronoun | Form |
|---------|------|
| ik | zou |
| jij | zou |
| hij/zij | zou |
| wij | zouden |
| jullie | zouden |
| zij | zouden |

**Conditional sentences (if...then):**
- **Als** ik meer tijd **had**, **zou** ik meer Nederlands **studeren**.
  (If I had more time, I would study more Dutch.)`,
            examples: [
                { dutch: 'Zou u dat kunnen herhalen?', english: 'Could you repeat that?' },
                { dutch: 'Ik zou graag een afspraak willen maken.', english: 'I would like to make an appointment.' },
                { dutch: 'Als ik beter Nederlands sprak, zou ik het examen doen.', english: 'If I spoke better Dutch, I would take the exam.' },
                { dutch: 'Zij zouden morgen komen.', english: 'They would come tomorrow.' }
            ],
            exercises: [
                { type: 'fill', question: 'Ik ___ graag koffie willen. (would)', answer: 'zou', hint: 'conditional singular' },
                { type: 'fill', question: 'Als ik rijk was, ___ ik een huis kopen. (would)', answer: 'zou', hint: 'conditional in if-then' },
                { type: 'fill', question: 'Wij ___ graag komen. (would)', answer: 'zouden', hint: 'conditional plural' },
                { type: 'mcq', question: '"Zou" is used for all of EXCEPT:', options: ['Polite requests', 'Hypotheticals', 'Commands', 'Reported speech'], answer: 'Commands' }
            ]
        },
        {
            id: 'g014',
            title: 'Relative Clauses',
            titleNl: 'Betrekkelijke bijzinnen',
            level: 'B2',
            week: 15,
            explanation: `Relative clauses give more information about a noun. They use **die** or **dat** as relative pronouns.

**Rules:**
- **Die** → used with **de-words** and **plurals**
- **Dat** → used with **het-words** (singular)

**Structure:** noun + die/dat + rest + **verb at END**
- De man **die** daar **woont**, is mijn buurman.
  (The man who lives there is my neighbor.)
- Het boek **dat** ik **lees**, is interessant.
  (The book that I read is interesting.)

**With prepositions:**
- De stad **waar** ik **woon** → waar = in which (for places)
- De man **aan wie** ik het gaf → for people with prepositions

**"Wat" as relative pronoun:**
Used after alles, iets, niets, dat, het:
- Alles **wat** hij zegt, is waar. (Everything that he says is true.)`,
            examples: [
                { dutch: 'De vrouw die naast mij woont, is arts.', english: 'The woman who lives next to me is a doctor.' },
                { dutch: 'Het huis dat te koop staat, is mooi.', english: 'The house that is for sale is beautiful.' },
                { dutch: 'De stad waar ik geboren ben, is klein.', english: 'The city where I was born is small.' },
                { dutch: 'Alles wat je nodig hebt, kun je hier kopen.', english: 'Everything you need, you can buy here.' }
            ],
            exercises: [
                { type: 'mcq', question: '"De man ___ daar woont" — die or dat?', options: ['die', 'dat'], answer: 'die' },
                { type: 'mcq', question: '"Het kind ___ speelt" — die or dat?', options: ['die', 'dat'], answer: 'dat' },
                { type: 'fill', question: 'De boeken ___ ik gelezen heb, zijn interessant.', answer: 'die', hint: 'plural → die' },
                { type: 'fill', question: 'Alles ___ hij zegt, is waar.', answer: 'wat', hint: 'After alles → wat' }
            ]
        }
    ],

    getByLevel(level) {
        return this.lessons.filter(l => l.level === level);
    },

    getByWeek(week) {
        return this.lessons.filter(l => l.week <= week);
    },

    getById(id) {
        return this.lessons.find(l => l.id === id);
    },

    getAll() {
        return this.lessons;
    }
};

GrammarData.lessons.push(
    {
        id: 'g000',
        title: 'A0 Survival Sentences and Sounds',
        titleNl: 'A0 overlevingszinnen en klanken',
        level: 'A0',
        week: 1,
        explanation: `Before grammar becomes complex, you need classroom survival Dutch. Learn short chunks first: greetings, asking someone to repeat, spelling your name, and saying that you do not understand.

**Useful sentence frames:**
- Mijn naam is ...
- Ik kom uit ...
- Kunt u dat herhalen?
- Ik begrijp het niet.
- Spreekt u langzaam, alstublieft?

**Pronunciation focus:** Dutch has sounds that may be new: g/ch, ui, ij/ei, eu, and sch. Listen first, then repeat slowly.`,
        examples: [
            { dutch: 'Mijn naam is Lina.', english: 'My name is Lina.' },
            { dutch: 'Ik kom uit Ghana.', english: 'I come from Ghana.' },
            { dutch: 'Kunt u dat herhalen?', english: 'Can you repeat that?' },
            { dutch: 'Ik begrijp het niet.', english: 'I do not understand.' }
        ],
        exercises: [
            { type: 'fill', question: 'Mijn ___ is Sara.', answer: 'naam', hint: 'name' },
            { type: 'fill', question: 'Ik ___ uit Nigeria.', answer: 'kom', hint: 'come' },
            { type: 'mcq', question: 'What do you say when you do not understand?', options: ['Ik begrijp het niet.', 'Ik ben klaar.', 'Ik heb honger.', 'Ik woon hier.'], answer: 'Ik begrijp het niet.' },
            { type: 'mcq', question: 'Which sentence asks someone to repeat?', options: ['Hoe heet u?', 'Kunt u dat herhalen?', 'Waar woont u?', 'Tot morgen.'], answer: 'Kunt u dat herhalen?' },
            { type: 'fill', question: 'Spreekt u ___, alstublieft?', answer: 'langzaam', hint: 'slowly' },
            { type: 'mcq', question: 'What does "spellen" mean?', options: ['to spell', 'to sleep', 'to work', 'to buy'], answer: 'to spell' },
            { type: 'fill', question: 'Kunt u uw naam ___?', answer: 'spellen', hint: 'spell' },
            { type: 'mcq', question: 'Which phrase is formal/polite?', options: ['Kunt u dat herhalen?', 'Herhaal dat!', 'Wat zeg je?', 'Hé jij!'], answer: 'Kunt u dat herhalen?' },
            { type: 'fill', question: 'Ik leer het Nederlandse ___.', answer: 'alfabet', hint: 'alphabet' },
            { type: 'mcq', question: 'Which sound is typical in Dutch words like "goed" and "graag"?', options: ['g/ch', 'th', 'w like English', 'silent r'], answer: 'g/ch' }
        ]
    },
    {
        id: 'g015',
        title: 'Negation and Questions',
        titleNl: 'Ontkenning en vragen',
        level: 'A1',
        week: 4,
        explanation: `Dutch uses **niet** and **geen** for negation.

Use **geen** before an indefinite noun: Ik heb geen fiets.
Use **niet** for verbs, adjectives, definite nouns, and most other parts: Ik kom niet.

For yes/no questions, put the verb first: Kom jij morgen?`,
        examples: [
            { dutch: 'Ik heb geen geld.', english: 'I have no money.' },
            { dutch: 'Ik drink geen koffie.', english: 'I do not drink coffee.' },
            { dutch: 'Ik kom niet vandaag.', english: 'I am not coming today.' },
            { dutch: 'Betaalt u met pinpas?', english: 'Do you pay by debit card?' }
        ],
        exercises: [
            { type: 'fill', question: 'Ik heb ___ auto.', answer: 'geen', hint: 'no car' },
            { type: 'fill', question: 'Hij werkt vandaag ___.', answer: 'niet', hint: 'not' },
            { type: 'mcq', question: 'Choose the correct sentence.', options: ['Ik heb niet fiets.', 'Ik heb geen fiets.', 'Ik geen heb fiets.', 'Ik heb fiets geen.'], answer: 'Ik heb geen fiets.' },
            { type: 'mcq', question: 'How do you make a yes/no question?', options: ['Put the verb first', 'Put niet first', 'Always add geen', 'Put the subject last always'], answer: 'Put the verb first' },
            { type: 'fill', question: '___ jij brood? (buy)', answer: 'Koop', hint: 'verb first in a question' },
            { type: 'fill', question: 'Wij drinken ___ melk.', answer: 'geen', hint: 'no milk' },
            { type: 'mcq', question: 'Use "niet" with:', options: ['an indefinite noun', 'a verb or adjective', 'only plural nouns', 'only food words'], answer: 'a verb or adjective' },
            { type: 'fill', question: 'De winkel is ___ open.', answer: 'niet', hint: 'not open' },
            { type: 'mcq', question: 'Translate: "I do not understand."', options: ['Ik begrijp het niet.', 'Ik begrijp geen.', 'Ik niet begrijp.', 'Ik heb geen begrijp.'], answer: 'Ik begrijp het niet.' },
            { type: 'fill', question: 'Heeft u ___ vraag?', answer: 'een', hint: 'Do you have a question?' }
        ]
    },
    {
        id: 'g016',
        title: 'Formal Requests and Job Language',
        titleNl: 'Formele verzoeken en werktaal',
        level: 'A2',
        week: 8,
        explanation: `At work and in official situations, Dutch often uses polite modal verbs and formal word choices.

Useful forms:
- Ik wil graag ...
- Kunt u ...?
- Zou u ... kunnen?
- Ik ben beschikbaar op ...
- Met vriendelijke groet`,
        examples: [
            { dutch: 'Ik wil graag solliciteren op deze functie.', english: 'I would like to apply for this position.' },
            { dutch: 'Kunt u mijn cv bekijken?', english: 'Can you review my CV?' },
            { dutch: 'Zou u mij kunnen bellen?', english: 'Could you call me?' },
            { dutch: 'Ik ben beschikbaar op maandag.', english: 'I am available on Monday.' }
        ],
        exercises: [
            { type: 'fill', question: 'Ik wil graag ___ op deze functie.', answer: 'solliciteren', hint: 'apply' },
            { type: 'mcq', question: 'Which is the most polite request?', options: ['Bel mij nu.', 'Zou u mij kunnen bellen?', 'Jij belt mij.', 'Bellen!'], answer: 'Zou u mij kunnen bellen?' },
            { type: 'fill', question: 'Ik ben ___ op dinsdag.', answer: 'beschikbaar', hint: 'available' },
            { type: 'mcq', question: 'What do you write at the end of a formal email?', options: ['Doei', 'Met vriendelijke groet', 'Tot straks', 'Hoi hoi'], answer: 'Met vriendelijke groet' },
            { type: 'fill', question: 'Kunt u mijn ___ bekijken?', answer: 'cv', hint: 'curriculum vitae' },
            { type: 'mcq', question: 'What does "functie" mean in a job text?', options: ['position', 'holiday', 'salary slip', 'school'], answer: 'position' },
            { type: 'fill', question: 'Zou u mij kunnen ___?', answer: 'helpen', hint: 'help' },
            { type: 'mcq', question: 'Which sentence belongs in a motivation letter?', options: ['Ik wil graag bij uw bedrijf werken.', 'Ik koop brood.', 'Ik ben ziek vandaag.', 'De trein is laat.'], answer: 'Ik wil graag bij uw bedrijf werken.' },
            { type: 'fill', question: 'Mijn werkervaring ___ goed bij deze baan.', answer: 'past', hint: 'fits' },
            { type: 'mcq', question: 'Formal Dutch usually uses:', options: ['u', 'jij only', 'slang', 'no verbs'], answer: 'u' }
        ]
    },
    {
        id: 'g017',
        title: 'Linking Ideas at B1',
        titleNl: 'Ideeen verbinden op B1',
        level: 'B1',
        week: 11,
        explanation: `To speak and write at B1, connect ideas clearly. Use words like **omdat**, **maar**, **dus**, **daarom**, **eerst**, **daarna**, and **ten slotte**.

Remember: after **omdat**, the verb goes to the end.`,
        examples: [
            { dutch: 'Ik leer Nederlands omdat ik wil werken.', english: 'I learn Dutch because I want to work.' },
            { dutch: 'Het formulier is moeilijk, maar ik kan hulp vragen.', english: 'The form is difficult, but I can ask for help.' },
            { dutch: 'Ik ben ziek, daarom ga ik naar de huisarts.', english: 'I am sick, therefore I go to the GP.' },
            { dutch: 'Eerst lees ik de tekst, daarna beantwoord ik de vragen.', english: 'First I read the text, then I answer the questions.' }
        ],
        exercises: [
            { type: 'fill', question: 'Ik leer Nederlands ___ ik in Nederland woon.', answer: 'omdat', hint: 'because' },
            { type: 'mcq', question: 'After "omdat", the verb goes:', options: ['first', 'second', 'at the end', 'nowhere'], answer: 'at the end' },
            { type: 'fill', question: 'Ik heb koorts, ___ ga ik naar de huisarts.', answer: 'daarom', hint: 'therefore' },
            { type: 'mcq', question: 'Which word shows contrast?', options: ['maar', 'dus', 'eerst', 'daarna'], answer: 'maar' },
            { type: 'fill', question: 'Eerst maak ik een afspraak, ___ ga ik naar de gemeente.', answer: 'daarna', hint: 'after that' },
            { type: 'mcq', question: 'Which sentence is correct?', options: ['Omdat ik ziek ben, blijf ik thuis.', 'Omdat ik ben ziek, blijf ik thuis.', 'Omdat ziek ik ben, blijf ik thuis.', 'Omdat blijf ik thuis ziek.'], answer: 'Omdat ik ziek ben, blijf ik thuis.' },
            { type: 'fill', question: 'Het is duur, ___ het is belangrijk.', answer: 'maar', hint: 'but' },
            { type: 'mcq', question: 'What does "ten slotte" mean?', options: ['finally', 'because', 'although', 'never'], answer: 'finally' },
            { type: 'fill', question: 'Ik heb geen DigiD, ___ kan ik niet inloggen.', answer: 'dus', hint: 'so' },
            { type: 'mcq', question: 'Which connector gives a reason?', options: ['omdat', 'maar', 'daarna', 'eerst'], answer: 'omdat' }
        ]
    },
    {
        id: 'g018',
        title: 'Formal Writing and Presentations',
        titleNl: 'Formeel schrijven en presenteren',
        level: 'B1',
        week: 12,
        explanation: `Professional Dutch needs clear structure. Start with the purpose, give details, and close politely.

Useful phrases:
- Naar aanleiding van ...
- Ik wil graag ...
- Kunt u mij laten weten ...
- Alvast bedankt voor uw reactie.
- Met vriendelijke groet`,
        examples: [
            { dutch: 'Naar aanleiding van uw e-mail heb ik een vraag.', english: 'In response to your email, I have a question.' },
            { dutch: 'Kunt u mij laten weten wanneer de vergadering begint?', english: 'Can you let me know when the meeting starts?' },
            { dutch: 'Alvast bedankt voor uw reactie.', english: 'Thank you in advance for your response.' },
            { dutch: 'Tijdens de presentatie bespreek ik drie punten.', english: 'During the presentation I discuss three points.' }
        ],
        exercises: [
            { type: 'fill', question: 'Naar ___ van uw e-mail heb ik een vraag.', answer: 'aanleiding', hint: 'in response to' },
            { type: 'mcq', question: 'Which phrase is formal?', options: ['Hoi, alles goed?', 'Alvast bedankt voor uw reactie.', 'Doei!', 'Ik snap er niks van.'], answer: 'Alvast bedankt voor uw reactie.' },
            { type: 'fill', question: 'Kunt u mij laten ___ wanneer de vergadering begint?', answer: 'weten', hint: 'let me know' },
            { type: 'mcq', question: 'A clear presentation usually has:', options: ['no structure', 'an introduction, points, conclusion', 'only jokes', 'only one long sentence'], answer: 'an introduction, points, conclusion' },
            { type: 'fill', question: 'Tijdens de presentatie ___ ik drie punten.', answer: 'bespreek', hint: 'discuss' },
            { type: 'mcq', question: 'What does "alvast bedankt" mean?', options: ['thanks in advance', 'never mind', 'good morning', 'see you later'], answer: 'thanks in advance' },
            { type: 'fill', question: 'Met vriendelijke ___', answer: 'groet', hint: 'formal closing' },
            { type: 'mcq', question: 'Professional Dutch should be:', options: ['clear and polite', 'only informal', 'without verbs', 'as short as possible always'], answer: 'clear and polite' },
            { type: 'fill', question: 'Ik wil graag een afspraak ___.', answer: 'maken', hint: 'make an appointment' },
            { type: 'mcq', question: 'Which is best for asking about a meeting time?', options: ['Hoe laat begint de vergadering?', 'Waarom ben jij laat?', 'Geen idee.', 'Tot straks hoor.'], answer: 'Hoe laat begint de vergadering?' }
        ]
    }
);

const extraGrammarExercises = {
    g001: [
        { type: 'fill', question: '___ heet Mark. (he)', answer: 'Hij', hint: 'he' },
        { type: 'mcq', question: 'Which pronoun is plural "you"?', options: ['jij', 'u', 'jullie', 'wij'], answer: 'jullie' },
        { type: 'fill', question: '___ leren Nederlands. (they)', answer: 'Zij', hint: 'they' },
        { type: 'mcq', question: 'Which pair means "we"?', options: ['wij/we', 'jij/je', 'zij/ze only she', 'hij/het'], answer: 'wij/we' },
        { type: 'fill', question: '___ bent welkom. (formal you)', answer: 'U', hint: 'formal you' }
    ],
    g002: [
        { type: 'fill', question: 'Jullie ___ laat.', answer: 'zijn', hint: 'you plural are' },
        { type: 'fill', question: 'Het ___ koud vandaag.', answer: 'is', hint: 'it is' },
        { type: 'mcq', question: 'Choose the correct question.', options: ['Bent jij student?', 'Ben jij student?', 'Zijn jij student?', 'Is jij student?'], answer: 'Ben jij student?' },
        { type: 'fill', question: 'U ___ mijn leraar.', answer: 'bent', hint: 'formal you are' },
        { type: 'mcq', question: 'Which form goes with "wij"?', options: ['ben', 'bent', 'is', 'zijn'], answer: 'zijn' }
    ],
    g003: [
        { type: 'fill', question: 'Jullie ___ een afspraak.', answer: 'hebben', hint: 'you plural have' },
        { type: 'mcq', question: 'Choose the correct form: "U ___ gelijk."', options: ['heb', 'hebt', 'heeft', 'hebben'], answer: 'heeft' },
        { type: 'fill', question: '___ hij een fiets?', answer: 'Heeft', hint: 'question form' },
        { type: 'fill', question: 'Zij (they) ___ tijd.', answer: 'hebben', hint: 'they have' },
        { type: 'mcq', question: 'Which sentence is correct?', options: ['Ik heeft tijd.', 'Ik heb tijd.', 'Ik hebben tijd.', 'Ik hebt tijd.'], answer: 'Ik heb tijd.' }
    ],
    g004: [
        { type: 'mcq', question: '___ fiets', options: ['de', 'het'], answer: 'de' },
        { type: 'mcq', question: '___ meisje', options: ['de', 'het'], answer: 'het' },
        { type: 'mcq', question: '___ stoelen (plural)', options: ['de', 'het'], answer: 'de' },
        { type: 'mcq', question: '___ Nederlands (language)', options: ['de', 'het'], answer: 'het' },
        { type: 'mcq', question: 'The indefinite article is:', options: ['de', 'het', 'een', 'niet'], answer: 'een' }
    ]
};

Object.entries(extraGrammarExercises).forEach(([lessonId, exercises]) => {
    const lesson = GrammarData.getById(lessonId);
    if (lesson) lesson.exercises.push(...exercises);
});
