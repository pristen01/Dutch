// ============================================
// DutchPath - KNM (Kennis van de Nederlandse Maatschappij)
// Knowledge of Dutch Society — Exam Prep
// ============================================

const KNMData = {
    topics: [
        {
            id: 'knm_health',
            title: 'Gezondheidszorg',
            titleEn: 'Healthcare',
            icon: '🏥',
            description: 'The Dutch healthcare system, GP, insurance, pharmacy, emergencies.',
            content: `
## Het Nederlandse Zorgsysteem

**Verplichte zorgverzekering:** Iedereen in Nederland is verplicht een basiszorgverzekering af te sluiten. Dit geldt ook voor nieuwkomers.

**Huisarts (GP):** De huisarts is het eerste aanspreekpunt. U kunt niet direct naar een specialist; u hebt een verwijzing nodig (poortwachtersysteem).

**Eigen risico:** U betaalt een deel van de zorgkosten zelf (eigen risico: €385 in 2025). Bezoeken aan de huisarts zijn uitgezonderd.

**Zorgtoeslag:** Bij een laag inkomen kunt u zorgtoeslag aanvragen bij de Belastingdienst.

**Apotheek:** Medicijnen op recept haalt u op bij de apotheek. Voor sommige medicijnen hebt u geen recept nodig.

**Noodgevallen:** Bel 112 voor politie, brandweer of ambulance. De huisartsenpost is voor spoed buiten kantooruren.

**Tandarts:** Tandartsbezoeken worden niet altijd vergoed door de basisverzekering. Een aanvullende verzekering kan dit wel dekken.`,
            questions: [
                { question: 'Wat is het eerste aanspreekpunt als u ziek bent in Nederland?', options: ['Het ziekenhuis', 'De specialist', 'De huisarts', 'De apotheek'], answer: 'De huisarts' },
                { question: 'Wat is het eigen risico?', options: ['De maandelijkse premie', 'Het bedrag dat u zelf betaalt voor zorg', 'De kosten van de tandarts', 'Een soort verzekering'], answer: 'Het bedrag dat u zelf betaalt voor zorg' },
                { question: 'Welk nummer belt u bij een noodgeval?', options: ['110', '0800-0113', '112', '144'], answer: '112' },
                { question: 'Waar vraagt u zorgtoeslag aan?', options: ['Bij de gemeente', 'Bij uw werkgever', 'Bij de Belastingdienst', 'Bij de apotheek'], answer: 'Bij de Belastingdienst' },
                { question: 'Is een zorgverzekering verplicht in Nederland?', options: ['Ja, voor iedereen', 'Nee, het is vrijwillig', 'Alleen voor werkenden', 'Alleen voor Nederlanders'], answer: 'Ja, voor iedereen' },
                { question: 'Wat is het poortwachtersysteem?', options: ['U moet altijd naar het ziekenhuis', 'U moet eerst naar de huisarts voor een verwijzing', 'U kunt direct naar de specialist', 'U betaalt niet voor zorg'], answer: 'U moet eerst naar de huisarts voor een verwijzing' },
                { question: 'Wat is de huisartsenpost?', options: ['Een gewone huisartspraktijk', 'Spoedhulp buiten kantooruren', 'De eerste hulp in het ziekenhuis', 'Een apotheek'], answer: 'Spoedhulp buiten kantooruren' }
            ]
        },
        {
            id: 'knm_government',
            title: 'Overheid en Instanties',
            titleEn: 'Government & Institutions',
            icon: '🏛️',
            description: 'Municipality, DigiD, BSN, Belastingdienst, DUO, and government services.',
            content: `
## Overheid en Instanties

**Gemeente:** Na aankomst in Nederland moet u zich inschrijven bij de gemeente. U krijgt dan een BSN (Burgerservicenummer).

**BSN:** Uw unieke identificatienummer. U hebt dit nodig voor werk, belasting, zorgverzekering en andere officiële zaken.

**DigiD:** Een digitaal identiteitsbewijs om in te loggen op overheidswebsites. Hiermee kunt u belastingaangifte doen, toeslagen aanvragen, en meer.

**Belastingdienst:** De instantie die belastingen int en toeslagen uitkeert (zorgtoeslag, huurtoeslag, kinderopvangtoeslag).

**DUO:** Dienst Uitvoering Onderwijs. Verantwoordelijk voor het inburgeringsexamen en studiefinanciering.

**SVB (Sociale Verzekeringsbank):** Keert uitkeringen uit zoals AOW (pensioen) en kinderbijslag.

**UWV:** Uitvoeringsinstituut Werknemersverzekeringen. Voor werkloosheidsuitkering (WW) en arbeidsongeschiktheid.`,
            questions: [
                { question: 'Wat moet u doen na aankomst in Nederland?', options: ['Naar het ziekenhuis gaan', 'U inschrijven bij de gemeente', 'Een auto kopen', 'Een bankrekening openen'], answer: 'U inschrijven bij de gemeente' },
                { question: 'Wat is een BSN?', options: ['Een soort verzekering', 'Een Burgerservicenummer', 'Een bankrekening', 'Een verblijfsvergunning'], answer: 'Een Burgerservicenummer' },
                { question: 'Waarvoor hebt u DigiD nodig?', options: ['Om te winkelen', 'Om in te loggen op overheidswebsites', 'Om te stemmen', 'Om een auto te kopen'], answer: 'Om in te loggen op overheidswebsites' },
                { question: 'Welke instantie is verantwoordelijk voor belastingen?', options: ['DUO', 'SVB', 'UWV', 'Belastingdienst'], answer: 'Belastingdienst' },
                { question: 'Wat doet DUO?', options: ['Belastingen innen', 'Onderwijs en inburgeringsexamen', 'Werkloosheidsuitkeringen', 'Zorgverzekeringen'], answer: 'Onderwijs en inburgeringsexamen' },
                { question: 'Wie keert kinderbijslag uit?', options: ['De Belastingdienst', 'UWV', 'SVB', 'De gemeente'], answer: 'SVB' }
            ]
        },
        {
            id: 'knm_housing',
            title: 'Wonen en Huisvesting',
            titleEn: 'Housing',
            icon: '🏠',
            description: 'Renting, social housing, tenant rights, utilities, and housing costs.',
            content: `
## Wonen in Nederland

**Soorten woningen:**
- Sociale huurwoning: Gesubsidieerde woningen via woningcorporaties. Er is vaak een lange wachtlijst.
- Vrije sector huurwoning: Geen subsidie, hogere huur.
- Koopwoning: Een huis kopen met een hypotheek.

**Huurcontract:** Lees altijd het huurcontract goed door. Het beschrijft de huur, voorwaarden, opzegtermijn.

**Huurtoeslag:** Als u een laag inkomen hebt en in een sociale huurwoning woont, kunt u huurtoeslag aanvragen bij de Belastingdienst.

**Rechten van huurders:** De verhuurder mag de huur niet zomaar verhogen. Er zijn regels voor onderhoud.

**Energie:** U bent verantwoordelijk voor gas, water en elektriciteit. Vergelijk energieleveranciers om kosten te besparen.

**Afval scheiden:** In Nederland moet u afval scheiden: plastic, papier, glas, GFT (groente, fruit, tuin) en restafval.

**Buren:** Goed contact met uw buren is belangrijk. Er zijn regels over geluidoverlast.`,
            questions: [
                { question: 'Wat is een sociale huurwoning?', options: ['Een dure woning', 'Een gesubsidieerde woning via woningcorporaties', 'Een koopwoning', 'Een tijdelijke woning'], answer: 'Een gesubsidieerde woning via woningcorporaties' },
                { question: 'Waar vraagt u huurtoeslag aan?', options: ['Bij de woningcorporatie', 'Bij de gemeente', 'Bij de Belastingdienst', 'Bij de verhuurder'], answer: 'Bij de Belastingdienst' },
                { question: 'Wat betekent GFT?', options: ['Gas, Filter, Temperatuur', 'Groente, Fruit, Tuinafval', 'Glas, Folie, Textiel', 'Geen Financiële Toeslag'], answer: 'Groente, Fruit, Tuinafval' },
                { question: 'Wat moet u doen met afval in Nederland?', options: ['Alles bij elkaar gooien', 'Afval scheiden', 'Verbranden', 'Begraven'], answer: 'Afval scheiden' },
                { question: 'Mag een verhuurder de huur zomaar verhogen?', options: ['Ja, altijd', 'Nee, er zijn regels', 'Alleen in de vrije sector', 'Alleen met toestemming van de buurman'], answer: 'Nee, er zijn regels' }
            ]
        },
        {
            id: 'knm_education',
            title: 'Onderwijs en Kinderen',
            titleEn: 'Education & Children',
            icon: '📚',
            description: 'Dutch education system, childcare, parenting, and student finance.',
            content: `
## Het Nederlandse Onderwijssysteem

**Leerplicht:** Kinderen zijn leerplichtig van 5 tot 16 jaar. Van 16 tot 18 jaar geldt een kwalificatieplicht.

**Basisonderwijs:** Groep 1-8, van 4 tot 12 jaar.

**Voortgezet onderwijs (middelbare school):**
- VMBO (4 jaar): Beroepsgericht
- HAVO (5 jaar): Hoger Algemeen
- VWO (6 jaar): Voorbereiding universiteit

**Hoger onderwijs:**
- HBO (hogeschool): Praktijkgericht
- WO (universiteit): Wetenschappelijk

**Kinderopvang:** Er is kinderopvangtoeslag beschikbaar voor werkende ouders. Aanvragen via de Belastingdienst.

**Ouderbijdrage:** Scholen kunnen een vrijwillige ouderbijdrage vragen, maar dit is NIET verplicht.

**Cito-toets:** Aan het einde van de basisschool doen kinderen een eindtoets die helpt bepalen welk niveau voortgezet onderwijs geschikt is.`,
            questions: [
                { question: 'Vanaf welke leeftijd is een kind leerplichtig?', options: ['4 jaar', '5 jaar', '6 jaar', '7 jaar'], answer: '5 jaar' },
                { question: 'Hoeveel jaar duurt het VMBO?', options: ['3 jaar', '4 jaar', '5 jaar', '6 jaar'], answer: '4 jaar' },
                { question: 'Welk type onderwijs bereidt voor op de universiteit?', options: ['VMBO', 'HAVO', 'VWO', 'HBO'], answer: 'VWO' },
                { question: 'Is de ouderbijdrage op school verplicht?', options: ['Ja, altijd', 'Nee, het is vrijwillig', 'Alleen op het voortgezet onderwijs', 'Alleen voor buitenlanders'], answer: 'Nee, het is vrijwillig' },
                { question: 'Waar vraagt u kinderopvangtoeslag aan?', options: ['Bij de kinderopvang', 'Bij de school', 'Bij de Belastingdienst', 'Bij de gemeente'], answer: 'Bij de Belastingdienst' },
                { question: 'Wat is het verschil tussen HBO en WO?', options: ['HBO is duurder', 'HBO is praktijkgericht, WO is wetenschappelijk', 'WO duurt korter', 'Er is geen verschil'], answer: 'HBO is praktijkgericht, WO is wetenschappelijk' }
            ]
        },
        {
            id: 'knm_work',
            title: 'Werk en Inkomen',
            titleEn: 'Work & Income',
            icon: '💼',
            description: 'Employment, contracts, salary, unions, social benefits, and job seeking.',
            content: `
## Werken in Nederland

**Arbeidscontract:** Er zijn verschillende soorten contracten:
- Tijdelijk contract (bepaalde tijd)
- Vast contract (onbepaalde tijd)
- Uitzendwerk (via een uitzendbureau)
- ZZP (zelfstandig ondernemer)

**Minimumloon:** Nederland heeft een wettelijk minimumloon dat elk jaar wordt aangepast.

**Belasting en loonstrook:** Van uw brutoloon worden belastingen en sociale premies afgetrokken. Wat overblijft is uw nettoloon.

**Vakantiedagen:** Werknemers hebben recht op minimaal 4x het aantal werkdagen per week aan vakantiedagen.

**Werkloosheid:** Als u uw baan verliest, kunt u een WW-uitkering aanvragen bij het UWV.

**Bijstand:** Als u geen recht hebt op WW, kunt u bijstand aanvragen bij de gemeente.

**Discriminatie:** Discriminatie op de werkvloer (op basis van afkomst, geslacht, religie, etc.) is verboden bij wet.

**Solliciteren:** Een sollicitatie bestaat meestal uit een CV, motivatiebrief en een sollicitatiegesprek.`,
            questions: [
                { question: 'Wat is een "vast contract"?', options: ['Een tijdelijk contract', 'Een contract voor onbepaalde tijd', 'Een uitzendcontract', 'Een freelance contract'], answer: 'Een contract voor onbepaalde tijd' },
                { question: 'Waar vraagt u een WW-uitkering aan?', options: ['Bij de gemeente', 'Bij de Belastingdienst', 'Bij het UWV', 'Bij uw werkgever'], answer: 'Bij het UWV' },
                { question: 'Is discriminatie op de werkvloer toegestaan?', options: ['Ja, soms', 'Nee, het is verboden bij wet', 'Alleen op basis van religie', 'Alleen bij kleine bedrijven'], answer: 'Nee, het is verboden bij wet' },
                { question: 'Wat is het verschil tussen bruto- en nettoloon?', options: ['Er is geen verschil', 'Netto is voor belasting', 'Bruto is voor belasting, netto is na belasting', 'Bruto is minder dan netto'], answer: 'Bruto is voor belasting, netto is na belasting' },
                { question: 'Wat is een ZZP\'er?', options: ['Een werknemer', 'Een zelfstandig ondernemer', 'Een uitzendkracht', 'Een stagiair'], answer: 'Een zelfstandig ondernemer' }
            ]
        },
        {
            id: 'knm_politics',
            title: 'Politiek en Recht',
            titleEn: 'Politics & Law',
            icon: '⚖️',
            description: 'Dutch political system, democracy, monarchy, voting rights, and the constitution.',
            content: `
## Het Nederlandse Politieke Systeem

**Staatsvorm:** Nederland is een constitutionele monarchie en een parlementaire democratie.

**Koning:** De Koning is staatshoofd maar heeft geen politieke macht. De rol is ceremonieel.

**Parlement (Staten-Generaal):**
- Tweede Kamer: 150 leden, direct gekozen, maakt wetten
- Eerste Kamer (Senaat): 75 leden, indirect gekozen, keurt wetten goed of af

**Regering:** De minister-president (premier) leidt de regering. Coalities zijn altijd nodig.

**Verkiezingen:** Elke 4 jaar voor de Tweede Kamer. Alle Nederlanders van 18+ mogen stemmen.

**Gemeenteraad:** Buitenlanders die 5+ jaar in Nederland wonen, mogen stemmen bij gemeenteraadsverkiezingen.

**Grondwet:** Beschermt fundamentele rechten:
- Vrijheid van meningsuiting
- Godsdienstvrijheid  
- Gelijke behandeling (discriminatieverbod)
- Recht op privacy

**Scheiding van machten:** Wetgevende macht (parlement), uitvoerende macht (regering), rechterlijke macht (rechters).`,
            questions: [
                { question: 'Wat voor staatsvorm heeft Nederland?', options: ['Republiek', 'Absolute monarchie', 'Constitutionele monarchie', 'Dictatuur'], answer: 'Constitutionele monarchie' },
                { question: 'Heeft de Koning politieke macht?', options: ['Ja, veel', 'Ja, een beetje', 'Nee, de rol is ceremonieel', 'Alleen bij oorlog'], answer: 'Nee, de rol is ceremonieel' },
                { question: 'Mogen buitenlanders stemmen in Nederland?', options: ['Nee, nooit', 'Ja, bij alle verkiezingen', 'Ja, bij gemeenteraadsverkiezingen na 5 jaar', 'Alleen EU-burgers'], answer: 'Ja, bij gemeenteraadsverkiezingen na 5 jaar' },
                { question: 'Hoeveel leden heeft de Tweede Kamer?', options: ['75', '100', '150', '200'], answer: '150' },
                { question: 'Wat beschermt de grondwet?', options: ['Alleen het koningshuis', 'Fundamentele rechten van burgers', 'Alleen het parlemenaire systeem', 'De economie'], answer: 'Fundamentele rechten van burgers' },
                { question: 'Wat is de scheiding van machten?', options: ['Koning en parlement', 'Wetgevend, uitvoerend, rechterlijk', 'Gemeente en provincie', 'Eerste en Tweede Kamer'], answer: 'Wetgevend, uitvoerend, rechterlijk' }
            ]
        },
        {
            id: 'knm_history',
            title: 'Geschiedenis en Geografie',
            titleEn: 'History & Geography',
            icon: '🗺️',
            description: 'Dutch history, geography, water management, and key historical events.',
            content: `
## Nederlandse Geschiedenis en Geografie

**Geografie:** Nederland ligt in West-Europa aan de Noordzee. Het land is grotendeels vlak en voor een groot deel onder zeeniveau.

**Water:** Nederland heeft een lange strijd tegen het water. De Deltawerken beschermen het land tegen overstromingen. Polders zijn stukken land die drooggelegd zijn.

**Gouden Eeuw (17e eeuw):** Nederland was een wereldmacht in handel, kunst en wetenschap. De VOC (Vereenigde Oost-Indische Compagnie) was het eerste multinationale bedrijf.

**Tweede Wereldoorlog:** Nederland was bezet door Duitsland (1940-1945). Meer dan 100.000 Nederlandse Joden werden vermoord in de Holocaust. Anne Frank schreef haar dagboek in Amsterdam.

**Koloniaal verleden:** Nederland had koloniën, waaronder Indonesië en Suriname. De slavernij is een belangrijke herdenking (Keti Koti, 1 juli).

**Provincies:** Nederland heeft 12 provincies. De hoofdstad is Amsterdam. De regering zetelt in Den Haag.

**Koningsdag:** Op 27 april viert Nederland de verjaardag van de Koning. Het is een nationale feestdag.

**Bevrijdingsdag:** 5 mei — viering van de bevrijding in 1945.`,
            questions: [
                { question: 'Hoeveel provincies heeft Nederland?', options: ['10', '11', '12', '13'], answer: '12' },
                { question: 'Wat zijn polders?', options: ['Bergen', 'Drooggelegde stukken land', 'Eilanden', 'Bossen'], answer: 'Drooggelegde stukken land' },
                { question: 'Wat was de VOC?', options: ['Een politieke partij', 'Een handelscompagnie', 'Een leger', 'Een museum'], answer: 'Een handelscompagnie' },
                { question: 'Wanneer is Koningsdag?', options: ['30 april', '27 april', '5 mei', '4 mei'], answer: '27 april' },
                { question: 'Wanneer is Bevrijdingsdag?', options: ['4 mei', '5 mei', '27 april', '1 juli'], answer: '5 mei' },
                { question: 'Waar zetelt de Nederlandse regering?', options: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht'], answer: 'Den Haag' },
                { question: 'Wat beschermen de Deltawerken?', options: ['Tegen aardbevingen', 'Tegen overstromingen', 'Tegen wind', 'Tegen droogte'], answer: 'Tegen overstromingen' }
            ]
        },
        {
            id: 'knm_culture',
            title: 'Cultuur en Tradities',
            titleEn: 'Culture & Traditions',
            icon: '🎭',
            description: 'Dutch customs, holidays, social norms, tolerance, and cultural values.',
            content: `
## Nederlandse Cultuur en Tradities

**Directheid:** Nederlanders staan bekend om hun directheid. Zij zeggen wat ze denken. Dit is niet onbeleefd, maar een culturele waarde.

**Op tijd zijn:** Punctualiteit is zeer belangrijk. U wordt verwacht op tijd te komen voor afspraken.

**Feestdagen:**
- Nieuwjaarsdag (1 januari)
- Koningsdag (27 april)
- Bevrijdingsdag (5 mei)
- Sinterklaas (5 december) — Een feest voor kinderen
- Kerstmis (25-26 december)
- Pasen, Pinksteren, Hemelvaartsdag

**Doe maar normaal:** "Doe maar normaal, dan doe je al gek genoeg" is een bekende Nederlandse uitdrukking. Het betekent: wees niet opvallend.

**Fietscultuur:** De fiets is het belangrijkste vervoermiddel. Er zijn meer fietsen dan inwoners in Nederland.

**Gezelligheid:** Een moeilijk te vertalen begrip. Het betekent zoiets als "coziness" of een prettige sociale sfeer.

**Verdraagzaamheid:** Nederland staat bekend om tolerantie en respect voor diversiteit, al is er ook debat over de grenzen daarvan.

**Verjaardagen:** Bij een verjaardag in Nederland feliciteer je niet alleen de jarige, maar ook de familie en vrienden: "Gefeliciteerd met je moeder!"`,
            questions: [
                { question: 'Wat betekent "doe maar normaal"?', options: ['Wees opvallend', 'Wees niet opvallend', 'Doe raar', 'Ga naar huis'], answer: 'Wees niet opvallend' },
                { question: 'Wanneer wordt Sinterklaas gevierd?', options: ['25 december', '5 december', '6 december', '31 oktober'], answer: '5 december' },
                { question: 'Wat is "gezelligheid"?', options: ['Een feestdag', 'Een prettige sociale sfeer', 'Een maaltijd', 'Een tradtioneel gerecht'], answer: 'Een prettige sociale sfeer' },
                { question: 'Hoe worden Nederlanders vaak omschreven?', options: ['Verlegen', 'Direct', 'Formeel', 'Stil'], answer: 'Direct' },
                { question: 'Wat is het belangrijkste vervoermiddel in Nederland?', options: ['De auto', 'De trein', 'De fiets', 'De bus'], answer: 'De fiets' },
                { question: 'Wat doe je bij een Nederlandse verjaardag?', options: ['Alleen de jarige feliciteren', 'De jarige én de familie feliciteren', 'Niet feliciteren', 'Een cadeau sturen'], answer: 'De jarige én de familie feliciteren' }
            ]
        }
    ],

    getTopicById(id) {
        return this.topics.find(t => t.id === id);
    },

    getAllTopics() {
        return this.topics;
    },

    getAllQuestions() {
        return this.topics.flatMap(t => t.questions.map(q => ({ ...q, topicId: t.id, topicTitle: t.title })));
    },

    getRandomExam(count = 40) {
        const all = this.getAllQuestions();
        const shuffled = all.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, all.length));
    }
};

const extraKNMQuestions = {
    knm_health: [
        { question: 'Wanneer gaat u naar de huisartsenpost?', options: ['Voor spoed buiten kantooruren', 'Voor belastingaangifte', 'Voor een paspoort', 'Voor kinderopvang'], answer: 'Voor spoed buiten kantooruren' },
        { question: 'Wordt de huisarts meestal vergoed door de basisverzekering?', options: ['Ja', 'Nee', 'Alleen bij spoed', 'Alleen voor kinderen'], answer: 'Ja' },
        { question: 'Waar haalt u medicijnen op recept op?', options: ['Bij de apotheek', 'Bij de gemeente', 'Bij DUO', 'Bij de bibliotheek'], answer: 'Bij de apotheek' }
    ],
    knm_government: [
        { question: 'Waar gebruikt u uw BSN voor?', options: ['Officiele administratie', 'Alleen boodschappen', 'Alleen reizen', 'Sportwedstrijden'], answer: 'Officiele administratie' },
        { question: 'Wat kunt u met DigiD doen?', options: ['Inloggen bij overheidsdiensten', 'Gratis reizen', 'Stemmen vanuit huis', 'Een huis kopen zonder hypotheek'], answer: 'Inloggen bij overheidsdiensten' },
        { question: 'Welke toeslag kan helpen bij zorgkosten?', options: ['Zorgtoeslag', 'Reistoeslag', 'Fietstoeslag', 'Boekentoeslag'], answer: 'Zorgtoeslag' }
    ],
    knm_housing: [
        { question: 'Wie is verantwoordelijk voor veel sociale huurwoningen?', options: ['Woningcorporaties', 'Alleen de politie', 'DUO', 'De huisarts'], answer: 'Woningcorporaties' },
        { question: 'Wat staat in een huurcontract?', options: ['Huurprijs en voorwaarden', 'Uw medische dossier', 'Uw examenresultaat', 'Uw stemadvies'], answer: 'Huurprijs en voorwaarden' },
        { question: 'Waarom vergelijkt men energieleveranciers?', options: ['Om kosten te besparen', 'Om een paspoort te krijgen', 'Om Nederlands te leren', 'Om kinderbijslag te krijgen'], answer: 'Om kosten te besparen' }
    ],
    knm_education: [
        { question: 'Hoe heet groep 1 tot en met 8?', options: ['Basisonderwijs', 'Universiteit', 'HBO', 'MBO alleen'], answer: 'Basisonderwijs' },
        { question: 'Wat betekent kwalificatieplicht?', options: ['Jongeren moeten onderwijs volgen tot startkwalificatie of 18 jaar', 'Iedereen moet stemmen', 'Iedereen moet werken', 'Kinderen mogen niet naar school'], answer: 'Jongeren moeten onderwijs volgen tot startkwalificatie of 18 jaar' },
        { question: 'Voor wie is kinderopvangtoeslag bedoeld?', options: ['Werkende ouders met kinderopvangkosten', 'Alle studenten', 'Alle huurders', 'Alle gepensioneerden'], answer: 'Werkende ouders met kinderopvangkosten' }
    ],
    knm_work: [
        { question: 'Wat is nettoloon?', options: ['Loon na belastingen en premies', 'Loon voor belastingen', 'Vakantiegeld alleen', 'Een uitkering'], answer: 'Loon na belastingen en premies' },
        { question: 'Wie helpt bij werkloosheidsuitkering?', options: ['UWV', 'DUO', 'Apotheek', 'Tandarts'], answer: 'UWV' },
        { question: 'Wat hoort meestal bij solliciteren?', options: ['CV, motivatiebrief en gesprek', 'Alleen een paspoort', 'Een huurcontract', 'Een zorgpas'], answer: 'CV, motivatiebrief en gesprek' }
    ],
    knm_politics: [
        { question: 'Wie kiest de Tweede Kamer?', options: ['De bevolking', 'Alleen de koning', 'Alleen burgemeesters', 'De Eerste Kamer'], answer: 'De bevolking' },
        { question: 'Waarom zijn coalities vaak nodig?', options: ['Omdat er veel partijen zijn', 'Omdat stemmen verboden is', 'Omdat er geen parlement is', 'Omdat de koning alle wetten maakt'], answer: 'Omdat er veel partijen zijn' },
        { question: 'Wat doet de rechterlijke macht?', options: ['Rechtspreken', 'Belastingen innen', 'Woningen verhuren', 'Examens maken'], answer: 'Rechtspreken' }
    ],
    knm_history: [
        { question: 'Waarom is watermanagement belangrijk in Nederland?', options: ['Veel land ligt laag of onder zeeniveau', 'Er zijn geen rivieren', 'Nederland heeft geen kust', 'Het regent nooit'], answer: 'Veel land ligt laag of onder zeeniveau' },
        { question: 'Wat herdenkt Nederland op 4 mei?', options: ['Dodenherdenking', 'Koningsdag', 'Nieuwjaar', 'Sinterklaas'], answer: 'Dodenherdenking' },
        { question: 'Wat viert Nederland op 5 mei?', options: ['Bevrijdingsdag', 'Kerstmis', 'Prinsjesdag', 'Pasen'], answer: 'Bevrijdingsdag' }
    ],
    knm_culture: [
        { question: 'Wat betekent punctualiteit?', options: ['Op tijd komen', 'Te laat komen', 'Niet reageren', 'Hard praten'], answer: 'Op tijd komen' },
        { question: 'Waarom is de fiets belangrijk in Nederland?', options: ['Het is een veelgebruikt vervoermiddel', 'Fietsen zijn verboden', 'Alleen kinderen fietsen', 'Er zijn geen wegen'], answer: 'Het is een veelgebruikt vervoermiddel' },
        { question: 'Wat betekent Nederlandse directheid meestal?', options: ['Duidelijk zeggen wat men denkt', 'Altijd boos zijn', 'Nooit praten', 'Alleen fluisteren'], answer: 'Duidelijk zeggen wat men denkt' }
    ]
};

Object.entries(extraKNMQuestions).forEach(([topicId, questions]) => {
    const topic = KNMData.getTopicById(topicId);
    if (topic) topic.questions.push(...questions);
});
