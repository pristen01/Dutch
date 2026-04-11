// ============================================
// DutchPath - Vocabulary Database
// Organized by week and theme, A1 → B2
// ============================================

const VocabularyData = {
    // Each word: { id, dutch, english, gender, plural, example, exampleEn, theme, level, week }
    words: [
        // ===== WEEK 1: Greetings & Introductions (A1) =====
        { id: 'w001', dutch: 'hallo', english: 'hello', gender: null, plural: null, example: 'Hallo, hoe gaat het?', exampleEn: 'Hello, how are you?', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w002', dutch: 'goedemorgen', english: 'good morning', gender: null, plural: null, example: 'Goedemorgen! Hoe gaat het vandaag?', exampleEn: 'Good morning! How are you today?', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w003', dutch: 'goedemiddag', english: 'good afternoon', gender: null, plural: null, example: 'Goedemiddag mevrouw.', exampleEn: 'Good afternoon madam.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w004', dutch: 'goedenavond', english: 'good evening', gender: null, plural: null, example: 'Goedenavond, welkom!', exampleEn: 'Good evening, welcome!', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w005', dutch: 'dag', english: 'goodbye / hello', gender: null, plural: null, example: 'Dag! Tot morgen!', exampleEn: 'Bye! See you tomorrow!', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w006', dutch: 'tot ziens', english: 'goodbye', gender: null, plural: null, example: 'Tot ziens en een fijne dag!', exampleEn: 'Goodbye and have a nice day!', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w007', dutch: 'alstublieft', english: 'please (formal)', gender: null, plural: null, example: 'Kunt u dat herhalen, alstublieft?', exampleEn: 'Can you repeat that, please?', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w008', dutch: 'dank u wel', english: 'thank you (formal)', gender: null, plural: null, example: 'Dank u wel voor uw hulp.', exampleEn: 'Thank you for your help.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w009', dutch: 'ja', english: 'yes', gender: null, plural: null, example: 'Ja, dat klopt.', exampleEn: 'Yes, that is correct.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w010', dutch: 'nee', english: 'no', gender: null, plural: null, example: 'Nee, dat wil ik niet.', exampleEn: 'No, I do not want that.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w011', dutch: 'ik', english: 'I', gender: null, plural: null, example: 'Ik ben student.', exampleEn: 'I am a student.', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w012', dutch: 'jij', english: 'you (informal)', gender: null, plural: null, example: 'Jij bent mijn vriend.', exampleEn: 'You are my friend.', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w013', dutch: 'u', english: 'you (formal)', gender: null, plural: null, example: 'Hoe heet u?', exampleEn: 'What is your name?', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w014', dutch: 'hij', english: 'he', gender: null, plural: null, example: 'Hij woont in Amsterdam.', exampleEn: 'He lives in Amsterdam.', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w015', dutch: 'zij', english: 'she / they', gender: null, plural: null, example: 'Zij is mijn zus.', exampleEn: 'She is my sister.', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w016', dutch: 'wij', english: 'we', gender: null, plural: null, example: 'Wij spreken Nederlands.', exampleEn: 'We speak Dutch.', theme: 'pronouns', level: 'A1', week: 1 },
        { id: 'w017', dutch: 'naam', english: 'name', gender: 'de', plural: 'namen', example: 'Mijn naam is Anna.', exampleEn: 'My name is Anna.', theme: 'personal', level: 'A1', week: 1 },
        { id: 'w018', dutch: 'meneer', english: 'sir / mister', gender: 'de', plural: 'meneren', example: 'Goedemorgen meneer.', exampleEn: 'Good morning sir.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w019', dutch: 'mevrouw', english: 'madam / mrs', gender: 'de', plural: 'mevrouwen', example: 'Mevrouw De Vries is er niet.', exampleEn: 'Mrs De Vries is not here.', theme: 'greetings', level: 'A1', week: 1 },
        { id: 'w020', dutch: 'spreek', english: 'speak', gender: null, plural: null, example: 'Ik spreek een beetje Nederlands.', exampleEn: 'I speak a little Dutch.', theme: 'communication', level: 'A1', week: 1 },

        // ===== WEEK 2: Numbers, Days & Time (A1) =====
        { id: 'w021', dutch: 'een', english: 'one', gender: null, plural: null, example: 'Ik heb een broer.', exampleEn: 'I have one brother.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w022', dutch: 'twee', english: 'two', gender: null, plural: null, example: 'Er zijn twee stoelen.', exampleEn: 'There are two chairs.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w023', dutch: 'drie', english: 'three', gender: null, plural: null, example: 'Ik heb drie kinderen.', exampleEn: 'I have three children.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w024', dutch: 'vier', english: 'four', gender: null, plural: null, example: 'Het is vier uur.', exampleEn: 'It is four o\'clock.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w025', dutch: 'vijf', english: 'five', gender: null, plural: null, example: 'Vijf dagen per week.', exampleEn: 'Five days per week.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w026', dutch: 'zes', english: 'six', gender: null, plural: null, example: 'Ik werk zes uur.', exampleEn: 'I work six hours.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w027', dutch: 'zeven', english: 'seven', gender: null, plural: null, example: 'Zeven dagen in een week.', exampleEn: 'Seven days in a week.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w028', dutch: 'acht', english: 'eight', gender: null, plural: null, example: 'De les begint om acht uur.', exampleEn: 'The class starts at eight o\'clock.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w029', dutch: 'negen', english: 'nine', gender: null, plural: null, example: 'Er zijn negen leerlingen.', exampleEn: 'There are nine students.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w030', dutch: 'tien', english: 'ten', gender: null, plural: null, example: 'Ik woon hier tien jaar.', exampleEn: 'I have lived here ten years.', theme: 'numbers', level: 'A1', week: 2 },
        { id: 'w031', dutch: 'maandag', english: 'Monday', gender: 'de', plural: null, example: 'Op maandag ga ik werken.', exampleEn: 'On Monday I go to work.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w032', dutch: 'dinsdag', english: 'Tuesday', gender: 'de', plural: null, example: 'Dinsdag heb ik les.', exampleEn: 'Tuesday I have class.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w033', dutch: 'woensdag', english: 'Wednesday', gender: 'de', plural: null, example: 'Woensdag is mijn vrije dag.', exampleEn: 'Wednesday is my day off.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w034', dutch: 'donderdag', english: 'Thursday', gender: 'de', plural: null, example: 'Op donderdag ga ik sporten.', exampleEn: 'On Thursday I go exercise.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w035', dutch: 'vrijdag', english: 'Friday', gender: 'de', plural: null, example: 'Vrijdag gaan we uit eten.', exampleEn: 'Friday we go out to eat.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w036', dutch: 'zaterdag', english: 'Saturday', gender: 'de', plural: null, example: 'Zaterdag ga ik boodschappen doen.', exampleEn: 'Saturday I go grocery shopping.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w037', dutch: 'zondag', english: 'Sunday', gender: 'de', plural: null, example: 'Op zondag rust ik uit.', exampleEn: 'On Sunday I rest.', theme: 'days', level: 'A1', week: 2 },
        { id: 'w038', dutch: 'vandaag', english: 'today', gender: null, plural: null, example: 'Vandaag is het mooi weer.', exampleEn: 'Today the weather is nice.', theme: 'time', level: 'A1', week: 2 },
        { id: 'w039', dutch: 'morgen', english: 'tomorrow', gender: null, plural: null, example: 'Morgen ga ik naar school.', exampleEn: 'Tomorrow I go to school.', theme: 'time', level: 'A1', week: 2 },
        { id: 'w040', dutch: 'gisteren', english: 'yesterday', gender: null, plural: null, example: 'Gisteren was ik ziek.', exampleEn: 'Yesterday I was sick.', theme: 'time', level: 'A1', week: 2 },

        // ===== WEEK 3: Family & Personal (A1) =====
        { id: 'w041', dutch: 'familie', english: 'family', gender: 'de', plural: 'families', example: 'Mijn familie woont in Nederland.', exampleEn: 'My family lives in the Netherlands.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w042', dutch: 'vader', english: 'father', gender: 'de', plural: 'vaders', example: 'Mijn vader werkt bij een bank.', exampleEn: 'My father works at a bank.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w043', dutch: 'moeder', english: 'mother', gender: 'de', plural: 'moeders', example: 'Mijn moeder kookt iedere dag.', exampleEn: 'My mother cooks every day.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w044', dutch: 'broer', english: 'brother', gender: 'de', plural: 'broers', example: 'Mijn broer is twintig jaar oud.', exampleEn: 'My brother is twenty years old.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w045', dutch: 'zus', english: 'sister', gender: 'de', plural: 'zussen', example: 'Ik heb twee zussen.', exampleEn: 'I have two sisters.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w046', dutch: 'kind', english: 'child', gender: 'het', plural: 'kinderen', example: 'Het kind speelt in het park.', exampleEn: 'The child plays in the park.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w047', dutch: 'man', english: 'man / husband', gender: 'de', plural: 'mannen', example: 'Mijn man werkt thuis.', exampleEn: 'My husband works at home.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w048', dutch: 'vrouw', english: 'woman / wife', gender: 'de', plural: 'vrouwen', example: 'De vrouw leest een boek.', exampleEn: 'The woman reads a book.', theme: 'family', level: 'A1', week: 3 },
        { id: 'w049', dutch: 'huis', english: 'house', gender: 'het', plural: 'huizen', example: 'Ons huis is groot.', exampleEn: 'Our house is big.', theme: 'home', level: 'A1', week: 3 },
        { id: 'w050', dutch: 'land', english: 'country', gender: 'het', plural: 'landen', example: 'Nederland is een klein land.', exampleEn: 'The Netherlands is a small country.', theme: 'geography', level: 'A1', week: 3 },
        { id: 'w051', dutch: 'stad', english: 'city', gender: 'de', plural: 'steden', example: 'Amsterdam is een mooie stad.', exampleEn: 'Amsterdam is a beautiful city.', theme: 'geography', level: 'A1', week: 3 },
        { id: 'w052', dutch: 'school', english: 'school', gender: 'de', plural: 'scholen', example: 'De kinderen gaan naar school.', exampleEn: 'The children go to school.', theme: 'education', level: 'A1', week: 3 },
        { id: 'w053', dutch: 'vriend', english: 'friend (male)', gender: 'de', plural: 'vrienden', example: 'Hij is mijn beste vriend.', exampleEn: 'He is my best friend.', theme: 'social', level: 'A1', week: 3 },
        { id: 'w054', dutch: 'vriendin', english: 'friend (female)', gender: 'de', plural: 'vriendinnen', example: 'Mijn vriendin heet Sara.', exampleEn: 'My friend is named Sara.', theme: 'social', level: 'A1', week: 3 },
        { id: 'w055', dutch: 'werk', english: 'work', gender: 'het', plural: null, example: 'Ik ga naar mijn werk.', exampleEn: 'I go to my work.', theme: 'work', level: 'A1', week: 3 },
        { id: 'w056', dutch: 'jaar', english: 'year', gender: 'het', plural: 'jaren', example: 'Ik ben dertig jaar oud.', exampleEn: 'I am thirty years old.', theme: 'time', level: 'A1', week: 3 },
        { id: 'w057', dutch: 'groot', english: 'big / large', gender: null, plural: null, example: 'Het huis is heel groot.', exampleEn: 'The house is very big.', theme: 'adjectives', level: 'A1', week: 3 },
        { id: 'w058', dutch: 'klein', english: 'small / little', gender: null, plural: null, example: 'Ik heb een klein kind.', exampleEn: 'I have a small child.', theme: 'adjectives', level: 'A1', week: 3 },
        { id: 'w059', dutch: 'goed', english: 'good', gender: null, plural: null, example: 'Het eten is goed.', exampleEn: 'The food is good.', theme: 'adjectives', level: 'A1', week: 3 },
        { id: 'w060', dutch: 'slecht', english: 'bad', gender: null, plural: null, example: 'Het weer is slecht vandaag.', exampleEn: 'The weather is bad today.', theme: 'adjectives', level: 'A1', week: 3 },

        // ===== WEEK 4: Food, Drinks & Shopping (A1/A2) =====
        { id: 'w061', dutch: 'eten', english: 'to eat / food', gender: 'het', plural: null, example: 'Wij eten om zes uur.', exampleEn: 'We eat at six o\'clock.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w062', dutch: 'drinken', english: 'to drink', gender: null, plural: null, example: 'Wil je iets drinken?', exampleEn: 'Do you want something to drink?', theme: 'food', level: 'A1', week: 4 },
        { id: 'w063', dutch: 'water', english: 'water', gender: 'het', plural: null, example: 'Mag ik een glas water?', exampleEn: 'May I have a glass of water?', theme: 'food', level: 'A1', week: 4 },
        { id: 'w064', dutch: 'brood', english: 'bread', gender: 'het', plural: 'broden', example: 'Wij eten brood als ontbijt.', exampleEn: 'We eat bread for breakfast.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w065', dutch: 'kaas', english: 'cheese', gender: 'de', plural: 'kazen', example: 'Nederlandse kaas is beroemd.', exampleEn: 'Dutch cheese is famous.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w066', dutch: 'melk', english: 'milk', gender: 'de', plural: null, example: 'Ik drink melk bij het ontbijt.', exampleEn: 'I drink milk at breakfast.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w067', dutch: 'koffie', english: 'coffee', gender: 'de', plural: null, example: 'Wilt u koffie of thee?', exampleEn: 'Would you like coffee or tea?', theme: 'food', level: 'A1', week: 4 },
        { id: 'w068', dutch: 'thee', english: 'tea', gender: 'de', plural: null, example: 'Ik drink graag groene thee.', exampleEn: 'I like to drink green tea.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w069', dutch: 'winkel', english: 'shop / store', gender: 'de', plural: 'winkels', example: 'De winkel is om negen uur open.', exampleEn: 'The shop opens at nine o\'clock.', theme: 'shopping', level: 'A1', week: 4 },
        { id: 'w070', dutch: 'geld', english: 'money', gender: 'het', plural: null, example: 'Ik heb niet genoeg geld.', exampleEn: 'I don\'t have enough money.', theme: 'shopping', level: 'A1', week: 4 },
        { id: 'w071', dutch: 'kopen', english: 'to buy', gender: null, plural: null, example: 'Ik wil een boek kopen.', exampleEn: 'I want to buy a book.', theme: 'shopping', level: 'A1', week: 4 },
        { id: 'w072', dutch: 'betalen', english: 'to pay', gender: null, plural: null, example: 'Kan ik met een pinpas betalen?', exampleEn: 'Can I pay with a debit card?', theme: 'shopping', level: 'A1', week: 4 },
        { id: 'w073', dutch: 'supermarkt', english: 'supermarket', gender: 'de', plural: 'supermarkten', example: 'Ik ga naar de supermarkt.', exampleEn: 'I go to the supermarket.', theme: 'shopping', level: 'A1', week: 4 },
        { id: 'w074', dutch: 'vlees', english: 'meat', gender: 'het', plural: null, example: 'Ik eet geen vlees.', exampleEn: 'I don\'t eat meat.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w075', dutch: 'groente', english: 'vegetables', gender: 'de', plural: 'groenten', example: 'Groente is gezond.', exampleEn: 'Vegetables are healthy.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w076', dutch: 'fruit', english: 'fruit', gender: 'het', plural: null, example: 'Ik eet iedere dag fruit.', exampleEn: 'I eat fruit every day.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w077', dutch: 'ontbijt', english: 'breakfast', gender: 'het', plural: null, example: 'Het ontbijt is klaar.', exampleEn: 'Breakfast is ready.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w078', dutch: 'lunch', english: 'lunch', gender: 'de', plural: null, example: 'Om twaalf uur eten we lunch.', exampleEn: 'At twelve we eat lunch.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w079', dutch: 'avondeten', english: 'dinner', gender: 'het', plural: null, example: 'Het avondeten is om zes uur.', exampleEn: 'Dinner is at six.', theme: 'food', level: 'A1', week: 4 },
        { id: 'w080', dutch: 'restaurant', english: 'restaurant', gender: 'het', plural: 'restaurants', example: 'We gaan naar een restaurant.', exampleEn: 'We go to a restaurant.', theme: 'food', level: 'A1', week: 4 },

        // ===== WEEK 5: Home & Daily Life (A2) =====
        { id: 'w081', dutch: 'wonen', english: 'to live / reside', gender: null, plural: null, example: 'Ik woon in Rotterdam.', exampleEn: 'I live in Rotterdam.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w082', dutch: 'kamer', english: 'room', gender: 'de', plural: 'kamers', example: 'De kamer is schoon.', exampleEn: 'The room is clean.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w083', dutch: 'keuken', english: 'kitchen', gender: 'de', plural: 'keukens', example: 'Ik kook in de keuken.', exampleEn: 'I cook in the kitchen.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w084', dutch: 'badkamer', english: 'bathroom', gender: 'de', plural: 'badkamers', example: 'De badkamer is boven.', exampleEn: 'The bathroom is upstairs.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w085', dutch: 'slaapkamer', english: 'bedroom', gender: 'de', plural: 'slaapkamers', example: 'We hebben drie slaapkamers.', exampleEn: 'We have three bedrooms.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w086', dutch: 'tuin', english: 'garden', gender: 'de', plural: 'tuinen', example: 'De kinderen spelen in de tuin.', exampleEn: 'The children play in the garden.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w087', dutch: 'buurman', english: 'neighbor (male)', gender: 'de', plural: 'buren', example: 'Mijn buurman is aardig.', exampleEn: 'My neighbor is nice.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w088', dutch: 'huur', english: 'rent', gender: 'de', plural: null, example: 'De huur is 800 euro per maand.', exampleEn: 'The rent is 800 euros per month.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w089', dutch: 'slapen', english: 'to sleep', gender: null, plural: null, example: 'Ik slaap acht uur per nacht.', exampleEn: 'I sleep eight hours per night.', theme: 'daily', level: 'A2', week: 5 },
        { id: 'w090', dutch: 'opstaan', english: 'to get up', gender: null, plural: null, example: 'Ik sta om zeven uur op.', exampleEn: 'I get up at seven.', theme: 'daily', level: 'A2', week: 5 },
        { id: 'w091', dutch: 'douchen', english: 'to shower', gender: null, plural: null, example: 'Ik douche elke ochtend.', exampleEn: 'I shower every morning.', theme: 'daily', level: 'A2', week: 5 },
        { id: 'w092', dutch: 'beginnen', english: 'to begin', gender: null, plural: null, example: 'De les begint om negen uur.', exampleEn: 'The class begins at nine.', theme: 'daily', level: 'A2', week: 5 },
        { id: 'w093', dutch: 'schoon', english: 'clean', gender: null, plural: null, example: 'Het huis is schoon.', exampleEn: 'The house is clean.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w094', dutch: 'verhuizen', english: 'to move (house)', gender: null, plural: null, example: 'Wij gaan volgende maand verhuizen.', exampleEn: 'We are going to move next month.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w095', dutch: 'straat', english: 'street', gender: 'de', plural: 'straten', example: 'In welke straat woon je?', exampleEn: 'What street do you live on?', theme: 'home', level: 'A2', week: 5 },
        { id: 'w096', dutch: 'adres', english: 'address', gender: 'het', plural: 'adressen', example: 'Wat is uw adres?', exampleEn: 'What is your address?', theme: 'personal', level: 'A2', week: 5 },
        { id: 'w097', dutch: 'telefoon', english: 'telephone', gender: 'de', plural: 'telefoons', example: 'Wat is uw telefoonnummer?', exampleEn: 'What is your phone number?', theme: 'personal', level: 'A2', week: 5 },
        { id: 'w098', dutch: 'tafel', english: 'table', gender: 'de', plural: 'tafels', example: 'Het eten staat op de tafel.', exampleEn: 'The food is on the table.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w099', dutch: 'stoel', english: 'chair', gender: 'de', plural: 'stoelen', example: 'Ga zitten op de stoel.', exampleEn: 'Sit down on the chair.', theme: 'home', level: 'A2', week: 5 },
        { id: 'w100', dutch: 'deur', english: 'door', gender: 'de', plural: 'deuren', example: 'Doe de deur dicht, alsjeblieft.', exampleEn: 'Close the door, please.', theme: 'home', level: 'A2', week: 5 },

        // ===== WEEK 6: Health & Body (A2) =====
        { id: 'w101', dutch: 'gezond', english: 'healthy', gender: null, plural: null, example: 'Groente eten is gezond.', exampleEn: 'Eating vegetables is healthy.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w102', dutch: 'ziek', english: 'sick / ill', gender: null, plural: null, example: 'Ik ben ziek, ik kan niet werken.', exampleEn: 'I am sick, I cannot work.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w103', dutch: 'dokter', english: 'doctor', gender: 'de', plural: 'dokters', example: 'Ik ga naar de dokter.', exampleEn: 'I go to the doctor.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w104', dutch: 'huisarts', english: 'general practitioner (GP)', gender: 'de', plural: 'huisartsen', example: 'Ik heb een afspraak bij de huisarts.', exampleEn: 'I have an appointment with the GP.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w105', dutch: 'apotheek', english: 'pharmacy', gender: 'de', plural: 'apotheken', example: 'Ik haal mijn medicijnen bij de apotheek.', exampleEn: 'I get my medicines at the pharmacy.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w106', dutch: 'ziekenhuis', english: 'hospital', gender: 'het', plural: 'ziekenhuizen', example: 'Hij ligt in het ziekenhuis.', exampleEn: 'He is in the hospital.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w107', dutch: 'pijn', english: 'pain', gender: 'de', plural: null, example: 'Ik heb pijn in mijn hoofd.', exampleEn: 'I have pain in my head.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w108', dutch: 'hoofd', english: 'head', gender: 'het', plural: 'hoofden', example: 'Ik heb hoofdpijn.', exampleEn: 'I have a headache.', theme: 'body', level: 'A2', week: 6 },
        { id: 'w109', dutch: 'buik', english: 'stomach / belly', gender: 'de', plural: 'buiken', example: 'Ik heb buikpijn.', exampleEn: 'I have a stomachache.', theme: 'body', level: 'A2', week: 6 },
        { id: 'w110', dutch: 'been', english: 'leg', gender: 'het', plural: 'benen', example: 'Mijn been doet pijn.', exampleEn: 'My leg hurts.', theme: 'body', level: 'A2', week: 6 },
        { id: 'w111', dutch: 'arm', english: 'arm', gender: 'de', plural: 'armen', example: 'Ik heb mijn arm gebroken.', exampleEn: 'I broke my arm.', theme: 'body', level: 'A2', week: 6 },
        { id: 'w112', dutch: 'oog', english: 'eye', gender: 'het', plural: 'ogen', example: 'Zij heeft blauwe ogen.', exampleEn: 'She has blue eyes.', theme: 'body', level: 'A2', week: 6 },
        { id: 'w113', dutch: 'afspraak', english: 'appointment', gender: 'de', plural: 'afspraken', example: 'Ik wil een afspraak maken.', exampleEn: 'I want to make an appointment.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w114', dutch: 'medicijn', english: 'medicine', gender: 'het', plural: 'medicijnen', example: 'Neem dit medicijn twee keer per dag.', exampleEn: 'Take this medicine twice a day.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w115', dutch: 'verzekering', english: 'insurance', gender: 'de', plural: 'verzekeringen', example: 'Iedereen in Nederland moet een zorgverzekering hebben.', exampleEn: 'Everyone in the Netherlands must have health insurance.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w116', dutch: 'koorts', english: 'fever', gender: 'de', plural: null, example: 'Ik heb koorts.', exampleEn: 'I have a fever.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w117', dutch: 'hoesten', english: 'to cough', gender: null, plural: null, example: 'Ik moet de hele tijd hoesten.', exampleEn: 'I have to cough all the time.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w118', dutch: 'recept', english: 'prescription / recipe', gender: 'het', plural: 'recepten', example: 'De dokter geeft mij een recept.', exampleEn: 'The doctor gives me a prescription.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w119', dutch: 'noodgeval', english: 'emergency', gender: 'het', plural: 'noodgevallen', example: 'Bel 112 bij een noodgeval.', exampleEn: 'Call 112 in an emergency.', theme: 'health', level: 'A2', week: 6 },
        { id: 'w120', dutch: 'tandarts', english: 'dentist', gender: 'de', plural: 'tandartsen', example: 'Ik ga twee keer per jaar naar de tandarts.', exampleEn: 'I go to the dentist twice a year.', theme: 'health', level: 'A2', week: 6 },

        // ===== WEEK 7-8: Transport & Travel (A2) =====
        { id: 'w121', dutch: 'trein', english: 'train', gender: 'de', plural: 'treinen', example: 'De trein vertrekt om acht uur.', exampleEn: 'The train departs at eight.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w122', dutch: 'bus', english: 'bus', gender: 'de', plural: 'bussen', example: 'Ik neem de bus naar het werk.', exampleEn: 'I take the bus to work.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w123', dutch: 'fiets', english: 'bicycle', gender: 'de', plural: 'fietsen', example: 'In Nederland fietst iedereen.', exampleEn: 'In the Netherlands everyone cycles.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w124', dutch: 'auto', english: 'car', gender: 'de', plural: "auto's", example: 'Hij rijdt met de auto naar het werk.', exampleEn: 'He drives to work by car.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w125', dutch: 'station', english: 'station', gender: 'het', plural: 'stations', example: 'Het station is dichtbij.', exampleEn: 'The station is nearby.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w126', dutch: 'reizen', english: 'to travel', gender: null, plural: null, example: 'Ik reis graag naar andere landen.', exampleEn: 'I like to travel to other countries.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w127', dutch: 'kaartje', english: 'ticket', gender: 'het', plural: 'kaartjes', example: 'Ik wil een kaartje naar Utrecht kopen.', exampleEn: 'I want to buy a ticket to Utrecht.', theme: 'transport', level: 'A2', week: 7 },
        { id: 'w128', dutch: 'links', english: 'left', gender: null, plural: null, example: 'Ga links bij het stoplicht.', exampleEn: 'Turn left at the traffic light.', theme: 'directions', level: 'A2', week: 7 },
        { id: 'w129', dutch: 'rechts', english: 'right', gender: null, plural: null, example: 'Het station is aan de rechterkant.', exampleEn: 'The station is on the right side.', theme: 'directions', level: 'A2', week: 7 },
        { id: 'w130', dutch: 'rechtdoor', english: 'straight ahead', gender: null, plural: null, example: 'Loop rechtdoor tot het einde van de straat.', exampleEn: 'Walk straight to the end of the street.', theme: 'directions', level: 'A2', week: 7 },

        // ===== WEEK 8-9: Work & Education (A2/B1) =====
        { id: 'w131', dutch: 'werken', english: 'to work', gender: null, plural: null, example: 'Ik werk bij een IT-bedrijf.', exampleEn: 'I work at an IT company.', theme: 'work', level: 'A2', week: 8 },
        { id: 'w132', dutch: 'baan', english: 'job', gender: 'de', plural: 'banen', example: 'Ik zoek een nieuwe baan.', exampleEn: 'I am looking for a new job.', theme: 'work', level: 'A2', week: 8 },
        { id: 'w133', dutch: 'bedrijf', english: 'company', gender: 'het', plural: 'bedrijven', example: 'Het bedrijf heeft honderd werknemers.', exampleEn: 'The company has a hundred employees.', theme: 'work', level: 'A2', week: 8 },
        { id: 'w134', dutch: 'collega', english: 'colleague', gender: 'de', plural: "collega's", example: 'Mijn collega helpt mij altijd.', exampleEn: 'My colleague always helps me.', theme: 'work', level: 'A2', week: 8 },
        { id: 'w135', dutch: 'salaris', english: 'salary', gender: 'het', plural: 'salarissen', example: 'Het salaris wordt maandelijks betaald.', exampleEn: 'The salary is paid monthly.', theme: 'work', level: 'A2', week: 8 },
        { id: 'w136', dutch: 'solliciteren', english: 'to apply (for a job)', gender: null, plural: null, example: 'Ik wil solliciteren bij die organisatie.', exampleEn: 'I want to apply at that organization.', theme: 'work', level: 'B1', week: 8 },
        { id: 'w137', dutch: 'opleiding', english: 'education / training', gender: 'de', plural: 'opleidingen', example: 'Welke opleiding heb je gevolgd?', exampleEn: 'What education did you follow?', theme: 'education', level: 'B1', week: 8 },
        { id: 'w138', dutch: 'diploma', english: 'diploma / degree', gender: 'het', plural: "diploma's", example: 'Ik heb mijn diploma gehaald.', exampleEn: 'I got my diploma.', theme: 'education', level: 'B1', week: 8 },
        { id: 'w139', dutch: 'ervaring', english: 'experience', gender: 'de', plural: 'ervaringen', example: 'Ik heb veel werkervaring.', exampleEn: 'I have a lot of work experience.', theme: 'work', level: 'B1', week: 8 },
        { id: 'w140', dutch: 'contract', english: 'contract', gender: 'het', plural: 'contracten', example: 'Ik heb een vast contract.', exampleEn: 'I have a permanent contract.', theme: 'work', level: 'B1', week: 8 },

        // ===== WEEK 9-10: Government & Society (B1 / KNM) =====
        { id: 'w141', dutch: 'gemeente', english: 'municipality', gender: 'de', plural: 'gemeenten', example: 'Ik moet mij inschrijven bij de gemeente.', exampleEn: 'I have to register at the municipality.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w142', dutch: 'paspoort', english: 'passport', gender: 'het', plural: 'paspoorten', example: 'Ik heb een geldig paspoort nodig.', exampleEn: 'I need a valid passport.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w143', dutch: 'verblijfsvergunning', english: 'residence permit', gender: 'de', plural: 'verblijfsvergunningen', example: 'Mijn verblijfsvergunning is vijf jaar geldig.', exampleEn: 'My residence permit is valid for five years.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w144', dutch: 'belasting', english: 'tax', gender: 'de', plural: 'belastingen', example: 'Iedereen moet belasting betalen.', exampleEn: 'Everyone has to pay tax.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w145', dutch: 'stemmen', english: 'to vote', gender: null, plural: null, example: 'Alle Nederlanders mogen stemmen.', exampleEn: 'All Dutch citizens may vote.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w146', dutch: 'wet', english: 'law', gender: 'de', plural: 'wetten', example: 'Iedereen moet zich aan de wet houden.', exampleEn: 'Everyone must obey the law.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w147', dutch: 'recht', english: 'right / law', gender: 'het', plural: 'rechten', example: 'Iedereen heeft het recht op onderwijs.', exampleEn: 'Everyone has the right to education.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w148', dutch: 'vrijheid', english: 'freedom', gender: 'de', plural: null, example: 'Vrijheid van meningsuiting is belangrijk.', exampleEn: 'Freedom of speech is important.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w149', dutch: 'democratie', english: 'democracy', gender: 'de', plural: null, example: 'Nederland is een democratie.', exampleEn: 'The Netherlands is a democracy.', theme: 'government', level: 'B1', week: 9 },
        { id: 'w150', dutch: 'inburgering', english: 'civic integration', gender: 'de', plural: null, example: 'Ik volg een inburgeringscursus.', exampleEn: 'I am taking an integration course.', theme: 'government', level: 'B1', week: 9 },

        // ===== WEEK 10-12: Opinions, Feelings & Abstract (B1) =====
        { id: 'w151', dutch: 'mening', english: 'opinion', gender: 'de', plural: 'meningen', example: 'Wat is uw mening hierover?', exampleEn: 'What is your opinion about this?', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w152', dutch: 'vinden', english: 'to find / to think', gender: null, plural: null, example: 'Ik vind het een goed idee.', exampleEn: 'I think it is a good idea.', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w153', dutch: 'geloven', english: 'to believe', gender: null, plural: null, example: 'Ik geloof dat hij gelijk heeft.', exampleEn: 'I believe he is right.', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w154', dutch: 'mogelijk', english: 'possible', gender: null, plural: null, example: 'Is het mogelijk om de afspraak te verplaatsen?', exampleEn: 'Is it possible to reschedule?', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w155', dutch: 'belangrijk', english: 'important', gender: null, plural: null, example: 'Het is belangrijk om op tijd te komen.', exampleEn: 'It is important to be on time.', theme: 'adjectives', level: 'B1', week: 10 },
        { id: 'w156', dutch: 'probleem', english: 'problem', gender: 'het', plural: 'problemen', example: 'Er is een probleem met mijn verblijfsvergunning.', exampleEn: 'There is a problem with my residence permit.', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w157', dutch: 'oplossing', english: 'solution', gender: 'de', plural: 'oplossingen', example: 'We moeten een oplossing vinden.', exampleEn: 'We have to find a solution.', theme: 'communication', level: 'B1', week: 10 },
        { id: 'w158', dutch: 'blij', english: 'happy / glad', gender: null, plural: null, example: 'Ik ben blij dat je er bent.', exampleEn: 'I am glad you are here.', theme: 'feelings', level: 'B1', week: 10 },
        { id: 'w159', dutch: 'boos', english: 'angry', gender: null, plural: null, example: 'Zij is boos op haar broer.', exampleEn: 'She is angry at her brother.', theme: 'feelings', level: 'B1', week: 10 },
        { id: 'w160', dutch: 'bang', english: 'afraid / scared', gender: null, plural: null, example: 'Ik ben bang voor spinnen.', exampleEn: 'I am afraid of spiders.', theme: 'feelings', level: 'B1', week: 10 },

        // ===== WEEK 12-14: Professional & Formal (B1/B2) =====
        { id: 'w161', dutch: 'vergadering', english: 'meeting', gender: 'de', plural: 'vergaderingen', example: 'De vergadering begint om tien uur.', exampleEn: 'The meeting starts at ten o\'clock.', theme: 'work', level: 'B1', week: 12 },
        { id: 'w162', dutch: 'bespreken', english: 'to discuss', gender: null, plural: null, example: 'We moeten dit probleem bespreken.', exampleEn: 'We need to discuss this problem.', theme: 'work', level: 'B1', week: 12 },
        { id: 'w163', dutch: 'beslissing', english: 'decision', gender: 'de', plural: 'beslissingen', example: 'We hebben een beslissing genomen.', exampleEn: 'We have made a decision.', theme: 'work', level: 'B1', week: 12 },
        { id: 'w164', dutch: 'verantwoordelijk', english: 'responsible', gender: null, plural: null, example: 'Ik ben verantwoordelijk voor dit project.', exampleEn: 'I am responsible for this project.', theme: 'work', level: 'B2', week: 12 },
        { id: 'w165', dutch: 'samenwerken', english: 'to collaborate', gender: null, plural: null, example: 'We werken samen aan een nieuw project.', exampleEn: 'We collaborate on a new project.', theme: 'work', level: 'B2', week: 12 },
        { id: 'w166', dutch: 'voorstellen', english: 'to propose / to introduce', gender: null, plural: null, example: 'Ik wil een nieuw plan voorstellen.', exampleEn: 'I want to propose a new plan.', theme: 'work', level: 'B2', week: 12 },
        { id: 'w167', dutch: 'onderzoek', english: 'research / investigation', gender: 'het', plural: 'onderzoeken', example: 'Het onderzoek toont aan dat...', exampleEn: 'The research shows that...', theme: 'education', level: 'B2', week: 12 },
        { id: 'w168', dutch: 'resultaat', english: 'result', gender: 'het', plural: 'resultaten', example: 'De resultaten zijn positief.', exampleEn: 'The results are positive.', theme: 'work', level: 'B2', week: 12 },
        { id: 'w169', dutch: 'ontwikkeling', english: 'development', gender: 'de', plural: 'ontwikkelingen', example: 'De ontwikkeling van nieuwe technologie gaat snel.', exampleEn: 'The development of new technology goes fast.', theme: 'society', level: 'B2', week: 12 },
        { id: 'w170', dutch: 'maatschappij', english: 'society', gender: 'de', plural: null, example: 'De Nederlandse maatschappij is divers.', exampleEn: 'Dutch society is diverse.', theme: 'society', level: 'B2', week: 12 },

        // ===== WEEK 14-16: Academic & Abstract (B2) =====
        { id: 'w171', dutch: 'invloed', english: 'influence', gender: 'de', plural: 'invloeden', example: 'Sociale media hebben veel invloed.', exampleEn: 'Social media have a lot of influence.', theme: 'society', level: 'B2', week: 14 },
        { id: 'w172', dutch: 'bijdragen', english: 'to contribute', gender: null, plural: null, example: 'Iedereen kan bijdragen aan de samenleving.', exampleEn: 'Everyone can contribute to society.', theme: 'society', level: 'B2', week: 14 },
        { id: 'w173', dutch: 'duurzaam', english: 'sustainable', gender: null, plural: null, example: 'We moeten duurzamer leven.', exampleEn: 'We need to live more sustainably.', theme: 'environment', level: 'B2', week: 14 },
        { id: 'w174', dutch: 'milieu', english: 'environment', gender: 'het', plural: null, example: 'Het milieu moet beschermd worden.', exampleEn: 'The environment must be protected.', theme: 'environment', level: 'B2', week: 14 },
        { id: 'w175', dutch: 'werkloosheid', english: 'unemployment', gender: 'de', plural: null, example: 'De werkloosheid daalt dit jaar.', exampleEn: 'Unemployment is dropping this year.', theme: 'economy', level: 'B2', week: 14 },
        { id: 'w176', dutch: 'economie', english: 'economy', gender: 'de', plural: null, example: 'De economie groeit langzaam.', exampleEn: 'The economy is growing slowly.', theme: 'economy', level: 'B2', week: 14 },
        { id: 'w177', dutch: 'overheid', english: 'government', gender: 'de', plural: null, example: 'De overheid neemt maatregelen.', exampleEn: 'The government takes measures.', theme: 'government', level: 'B2', week: 14 },
        { id: 'w178', dutch: 'gelijkheid', english: 'equality', gender: 'de', plural: null, example: 'Gelijkheid tussen mannen en vrouwen is een grondrecht.', exampleEn: 'Equality between men and women is a fundamental right.', theme: 'society', level: 'B2', week: 14 },
        { id: 'w179', dutch: 'discriminatie', english: 'discrimination', gender: 'de', plural: null, example: 'Discriminatie is bij wet verboden.', exampleEn: 'Discrimination is prohibited by law.', theme: 'society', level: 'B2', week: 14 },
        { id: 'w180', dutch: 'integratie', english: 'integration', gender: 'de', plural: null, example: 'Integratie is een proces van twee kanten.', exampleEn: 'Integration is a two-way process.', theme: 'society', level: 'B2', week: 14 },
        { id: 'w181', dutch: 'beoordelen', english: 'to assess / judge', gender: null, plural: null, example: 'Het is moeilijk om dat goed te beoordelen.', exampleEn: 'It is difficult to assess that correctly.', theme: 'work', level: 'B2', week: 15 },
        { id: 'w182', dutch: 'concluderen', english: 'to conclude', gender: null, plural: null, example: 'We kunnen concluderen dat het plan werkt.', exampleEn: 'We can conclude that the plan works.', theme: 'communication', level: 'B2', week: 15 },
        { id: 'w183', dutch: 'overwegen', english: 'to consider', gender: null, plural: null, example: 'Ik overweeg om een opleiding te volgen.', exampleEn: 'I am considering taking a course.', theme: 'communication', level: 'B2', week: 15 },
        { id: 'w184', dutch: 'bewust', english: 'conscious / aware', gender: null, plural: null, example: 'Ik ben mij bewust van de risico\'s.', exampleEn: 'I am aware of the risks.', theme: 'adjectives', level: 'B2', week: 15 },
        { id: 'w185', dutch: 'verplicht', english: 'obligatory / mandatory', gender: null, plural: null, example: 'Het inburgeringsexamen is verplicht.', exampleEn: 'The integration exam is mandatory.', theme: 'government', level: 'B2', week: 15 },
        { id: 'w186', dutch: 'toekomst', english: 'future', gender: 'de', plural: null, example: 'Ik heb vertrouwen in de toekomst.', exampleEn: 'I have confidence in the future.', theme: 'time', level: 'B2', week: 15 },
        { id: 'w187', dutch: 'waarde', english: 'value', gender: 'de', plural: 'waarden', example: 'Vrijheid is een belangrijke waarde.', exampleEn: 'Freedom is an important value.', theme: 'society', level: 'B2', week: 16 },
        { id: 'w188', dutch: 'burgerschap', english: 'citizenship', gender: 'het', plural: null, example: 'Goed burgerschap betekent verantwoordelijkheid nemen.', exampleEn: 'Good citizenship means taking responsibility.', theme: 'government', level: 'B2', week: 16 },
        { id: 'w189', dutch: 'samenleving', english: 'society / community', gender: 'de', plural: null, example: 'Wij leven in een multiculturele samenleving.', exampleEn: 'We live in a multicultural society.', theme: 'society', level: 'B2', week: 16 },
        { id: 'w190', dutch: 'deelnemen', english: 'to participate', gender: null, plural: null, example: 'Iedereen kan deelnemen aan het debat.', exampleEn: 'Everyone can participate in the debate.', theme: 'communication', level: 'B2', week: 16 }
    ],

    getByWeek(week) {
        return this.words.filter(w => w.week === week);
    },

    getByLevel(level) {
        return this.words.filter(w => w.level === level);
    },

    getByTheme(theme) {
        return this.words.filter(w => w.theme === theme);
    },

    getById(id) {
        return this.words.find(w => w.id === id);
    },

    getUpToWeek(week) {
        return this.words.filter(w => w.week <= week);
    },

    getAllThemes() {
        const themes = [...new Set(this.words.map(w => w.theme))];
        return themes.map(t => ({
            id: t,
            name: t.charAt(0).toUpperCase() + t.slice(1),
            count: this.words.filter(w => w.theme === t).length
        }));
    },

    getAllIds() {
        return this.words.map(w => w.id);
    },

    getIdsUpToWeek(week) {
        return this.words.filter(w => w.week <= week).map(w => w.id);
    }
};
