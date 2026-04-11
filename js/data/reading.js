// ============================================
// DutchPath - Reading Passages Database
// Graded texts A1 → B2
// ============================================

const ReadingData = {
    passages: [
        // ===== A1 READING =====
        {
            id: 'r001',
            title: 'Mijn Familie',
            titleEn: 'My Family',
            level: 'A1',
            week: 3,
            text: `Hallo! Ik heet Anna. Ik ben 28 jaar oud. Ik woon in Amsterdam met mijn man en twee kinderen. Mijn man heet Peter. Hij is 30 jaar oud. Hij werkt bij een bank. Onze kinderen heten Lisa en Tom. Lisa is 5 jaar oud en Tom is 3 jaar oud. Zij gaan naar school. Mijn moeder woont in Rotterdam. Zij komt elke zondag bij ons eten. Wij zijn een gelukkige familie.`,
            questions: [
                { question: 'Hoe oud is Anna?', options: ['25 jaar', '28 jaar', '30 jaar', '32 jaar'], answer: '28 jaar' },
                { question: 'Waar woont Anna?', options: ['Rotterdam', 'Utrecht', 'Amsterdam', 'Den Haag'], answer: 'Amsterdam' },
                { question: 'Wat doet Peter?', options: ['Hij is dokter', 'Hij werkt bij een bank', 'Hij is leraar', 'Hij werkt thuis'], answer: 'Hij werkt bij een bank' },
                { question: 'Hoeveel kinderen heeft Anna?', options: ['1', '2', '3', '4'], answer: '2' },
                { question: 'Wanneer komt de moeder van Anna eten?', options: ['Elke maandag', 'Elke zaterdag', 'Elke zondag', 'Elke vrijdag'], answer: 'Elke zondag' }
            ]
        },
        {
            id: 'r002',
            title: 'In de Supermarkt',
            titleEn: 'At the Supermarket',
            level: 'A1',
            week: 4,
            text: `Vandaag ga ik naar de supermarkt. Ik heb brood, kaas, melk en fruit nodig. De supermarkt is dichtbij. Ik ga met de fiets. In de winkel pak ik een mandje. Eerst ga ik naar de afdeling brood. Ik koop een wit brood en een bruin brood. Dan koop ik kaas: jonge kaas en oude kaas. De melk staat in de koeling. Ik neem twee pakken melk. Bij de kassa betaal ik met mijn pinpas. Het kost 12 euro. De mevrouw bij de kassa zegt: "Alstublieft, een fijne dag!" Ik zeg: "Dank u wel, u ook!"`,
            questions: [
                { question: 'Hoe gaat de persoon naar de supermarkt?', options: ['Met de auto', 'Met de bus', 'Met de fiets', 'Te voet'], answer: 'Met de fiets' },
                { question: 'Welke kaas koopt de persoon?', options: ['Alleen jonge kaas', 'Alleen oude kaas', 'Jonge en oude kaas', 'Geen kaas'], answer: 'Jonge en oude kaas' },
                { question: 'Hoeveel kost de boodschappen?', options: ['10 euro', '12 euro', '15 euro', '20 euro'], answer: '12 euro' },
                { question: 'Hoe betaalt de persoon?', options: ['Contant', 'Met creditcard', 'Met pinpas', 'Met telefoon'], answer: 'Met pinpas' }
            ]
        },
        {
            id: 'r003',
            title: 'Een Dag in Mijn Leven',
            titleEn: 'A Day in My Life',
            level: 'A1',
            week: 4,
            text: `Ik sta elke dag om zeven uur op. Eerst douche ik. Dan eet ik ontbijt: brood met kaas en een kop koffie. Om half negen ga ik naar mijn werk. Ik neem de trein naar Den Haag. Ik werk van negen tot vijf uur. Om twaalf uur heb ik pauze. Dan eet ik mijn lunch. Na het werk ga ik naar huis. Ik kook het avondeten om zes uur. 's Avonds kijk ik televisie of lees ik een boek. Om elf uur ga ik slapen.`,
            questions: [
                { question: 'Hoe laat staat de persoon op?', options: ['Om zes uur', 'Om zeven uur', 'Om acht uur', 'Om half acht'], answer: 'Om zeven uur' },
                { question: 'Wat eet de persoon als ontbijt?', options: ['Yoghurt en fruit', 'Brood met kaas en koffie', 'Eieren en toast', 'Niets'], answer: 'Brood met kaas en koffie' },
                { question: 'Hoe gaat de persoon naar het werk?', options: ['Met de auto', 'Met de fiets', 'Met de trein', 'Met de bus'], answer: 'Met de trein' },
                { question: 'Hoe laat gaat de persoon slapen?', options: ['Om tien uur', 'Om elf uur', 'Om twaalf uur', 'Om half elf'], answer: 'Om elf uur' }
            ]
        },

        // ===== A2 READING =====
        {
            id: 'r004',
            title: 'Bij de Huisarts',
            titleEn: 'At the GP',
            level: 'A2',
            week: 6,
            text: `Ik voel me niet lekker. Ik heb al drie dagen hoofdpijn en koorts. Ik bel de huisarts om een afspraak te maken. De assistente vraagt: "Wat zijn uw klachten?" Ik zeg: "Ik heb koorts en hoofdpijn." Zij zegt: "U kunt vanmiddag om twee uur komen."

Om twee uur ben ik bij de huisarts. De dokter onderzoekt mij. Hij meet mijn temperatuur: 38,5 graden. De dokter zegt: "U hebt griep. U moet veel rusten en veel water drinken. Ik schrijf paracetamol voor. U kunt het recept ophalen bij de apotheek." Ik bedank de dokter en ga naar de apotheek om mijn medicijnen op te halen.`,
            questions: [
                { question: 'Wat zijn de klachten van de persoon?', options: ['Buikpijn en misselijkheid', 'Hoofdpijn en koorts', 'Rugpijn en koorts', 'Keelpijn en hoesten'], answer: 'Hoofdpijn en koorts' },
                { question: 'Hoe laat is de afspraak?', options: ['Om tien uur', 'Om twaalf uur', 'Om twee uur', 'Om vier uur'], answer: 'Om twee uur' },
                { question: 'Wat is de diagnose?', options: ['Verkoudheid', 'Griep', 'Allergie', 'Hoofdpijn'], answer: 'Griep' },
                { question: 'Waar haalt de persoon de medicijnen op?', options: ['Bij de huisarts', 'Bij de apotheek', 'Bij het ziekenhuis', 'Bij de supermarkt'], answer: 'Bij de apotheek' },
                { question: 'Wat adviseert de dokter?', options: ['Veel bewegen', 'Veel rusten en water drinken', 'Naar het ziekenhuis gaan', 'Twee weken niet werken'], answer: 'Veel rusten en water drinken' }
            ]
        },
        {
            id: 'r005',
            title: 'Een Huis Huren',
            titleEn: 'Renting a House',
            level: 'A2',
            week: 7,
            text: `Mijn vrouw en ik zoeken een nieuw huis. Ons appartement is te klein voor ons gezin. Wij hebben twee kinderen en we willen een huis met drie slaapkamers.

Wij hebben een advertentie gevonden op internet. Het is een rijtjeshuis in Almere. Het huis heeft drie slaapkamers, een badkamer, een woonkamer en een kleine tuin. De huur is 950 euro per maand, exclusief gas, water en elektriciteit. 

Wij hebben een bezichtiging gemaakt. Het huis is mooi en rustig. De buren zijn vriendelijk. Er is een school in de buurt voor de kinderen. En het station is op tien minuten lopen. Wij hebben besloten om het huis te huren. Nu moeten wij het huurcontract tekenen bij de woningcorporatie.`,
            questions: [
                { question: 'Waarom zoeken zij een nieuw huis?', options: ['Het is te duur', 'Het is te klein', 'Het is te oud', 'Het is te ver van het werk'], answer: 'Het is te klein' },
                { question: 'Hoeveel slaapkamers heeft het nieuwe huis?', options: ['Twee', 'Drie', 'Vier', 'Vijf'], answer: 'Drie' },
                { question: 'Hoeveel is de huur?', options: ['750 euro', '850 euro', '950 euro', '1050 euro'], answer: '950 euro' },
                { question: 'Hoe ver is het station?', options: ['Vijf minuten lopen', 'Tien minuten lopen', 'Vijftien minuten lopen', 'Met de bus'], answer: 'Tien minuten lopen' },
                { question: 'Waar tekenen zij het huurcontract?', options: ['Bij de notaris', 'Bij de gemeente', 'Bij de woningcorporatie', 'Bij de makelaar'], answer: 'Bij de woningcorporatie' }
            ]
        },

        // ===== B1 READING =====
        {
            id: 'r006',
            title: 'Het Nederlandse Gezondheidssysteem',
            titleEn: 'The Dutch Healthcare System',
            level: 'B1',
            week: 9,
            text: `In Nederland is iedereen verplicht om een basiszorgverzekering te hebben. Dit is bij wet geregeld. De basisverzekering dekt onder andere bezoeken aan de huisarts, ziekenhuiszorg en medicijnen.

Wanneer u ziek bent, gaat u eerst naar uw huisarts. De huisarts is de eerste stap in het Nederlandse zorgsysteem. U kunt niet zomaar naar een specialist gaan; u hebt een verwijzing van uw huisarts nodig. Dit noemen we het "poortwachtersysteem."

Het eigen risico is het bedrag dat u zelf moet betalen voordat de verzekering betaalt. In 2025 is het eigen risico 385 euro per jaar. Bezoeken aan de huisarts vallen niet onder het eigen risico.

Als u een laag inkomen hebt, kunt u zorgtoeslag aanvragen bij de Belastingdienst. Dit is een bijdrage van de overheid om uw zorgverzekering te betalen.

In een noodgeval belt u altijd 112. Dit is het alarmnummer voor politie, brandweer en ambulance. De huisartsenpost is beschikbaar buiten kantooruren voor spoedeisende maar niet levensbedreigende situaties.`,
            questions: [
                { question: 'Wat is verplicht in Nederland?', options: ['Een auto verzekering', 'Een basiszorgverzekering', 'Een reisverzekering', 'Een levensverzekering'], answer: 'Een basiszorgverzekering' },
                { question: 'Wat is het "poortwachtersysteem"?', options: ['Je moet eerst naar de specialist', 'Je moet eerst naar de huisarts voor een verwijzing', 'Je kunt direct naar het ziekenhuis', 'Je hebt geen verzekering nodig'], answer: 'Je moet eerst naar de huisarts voor een verwijzing' },
                { question: 'Wat is het eigen risico?', options: ['De premie van de verzekering', 'Het bedrag dat je zelf betaalt voor de verzekering', 'Het bedrag dat je zelf moet betalen voor zorg', 'De kosten van de huisarts'], answer: 'Het bedrag dat je zelf moet betalen voor zorg' },
                { question: 'Wat is het alarmnummer in Nederland?', options: ['110', '111', '112', '911'], answer: '112' },
                { question: 'Waar vraag je zorgtoeslag aan?', options: ['Bij de gemeente', 'Bij de huisarts', 'Bij de Belastingdienst', 'Bij DUO'], answer: 'Bij de Belastingdienst' }
            ]
        },
        {
            id: 'r007',
            title: 'Een Sollicitatiegesprek',
            titleEn: 'A Job Interview',
            level: 'B1',
            week: 10,
            text: `Vandaag heb ik een sollicitatiegesprek bij een marketingbedrijf in Utrecht. Ik heb mij goed voorbereid. Ik heb mijn cv bijgewerkt en een motivatiebrief geschreven.

Het gesprek begint om tien uur. De manager, mevrouw Jansen, stelt zich voor. "Vertelt u eens iets over uzelf," zegt ze. Ik vertel over mijn opleiding en werkervaring. Ik heb een diploma in communicatie en drie jaar ervaring bij een klein bedrijf.

Mevrouw Jansen vraagt waarom ik bij dit bedrijf wil werken. Ik leg uit dat ik mij wil ontwikkelen in online marketing en dat dit bedrijf een goede reputatie heeft. Ze vraagt ook naar mijn sterke en zwakke punten. Ik zeg dat ik goed kan samenwerken, maar dat ik soms te perfectionistisch ben.

Aan het einde vraagt zij of ik vragen heb. Ik vraag naar de werktijden en het salaris. Het gesprek duurde een half uur. Mevrouw Jansen zegt dat zij volgende week laten weten of ik de baan krijg. Ik bedank haar en ga naar huis. Ik heb een goed gevoel over het gesprek.`,
            questions: [
                { question: 'Waar is het sollicitatiegesprek?', options: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'], answer: 'Utrecht' },
                { question: 'Hoeveel werkervaring heeft de persoon?', options: ['Één jaar', 'Twee jaar', 'Drie jaar', 'Vijf jaar'], answer: 'Drie jaar' },
                { question: 'Wat is het zwakke punt van de persoon?', options: ['Niet goed samenwerken', 'Te perfectionistisch', 'Niet op tijd komen', 'Slecht communiceren'], answer: 'Te perfectionistisch' },
                { question: 'Wanneer hoort de persoon of hij/zij de baan krijgt?', options: ['Vandaag', 'Morgen', 'Volgende week', 'Volgende maand'], answer: 'Volgende week' }
            ]
        },

        // ===== B2 READING =====
        {
            id: 'r008',
            title: 'Integratie en Participatie',
            titleEn: 'Integration and Participation',
            level: 'B2',
            week: 14,
            text: `De discussie over integratie in Nederland is al jarenlang een belangrijk politiek en maatschappelijk thema. Integratie betekent niet alleen dat nieuwkomers de Nederlandse taal leren, maar ook dat zij actief deelnemen aan de samenleving. Dit omvat het vinden van werk, het begrijpen van Nederlandse normen en waarden, en het opbouwen van sociale contacten.

De Wet inburgering, die in 2022 is ingevoerd, legt meer nadruk op de verantwoordelijkheid van gemeenten. Gemeenten stellen voor elke inburgeraar een persoonlijk Plan Inburgering en Participatie (PIP) op. Dit plan beschrijft welk taalniveau iemand moet bereiken en welke activiteiten ondernomen moeten worden om te participeren in de maatschappij.

Critici van het huidige systeem wijzen erop dat het bereiken van taalniveau B1 of B2 binnen drie jaar een ambitieuze doelstelling is, vooral voor mensen met een beperkte opleiding in hun eigen land. Bovendien zijn er grote verschillen tussen gemeenten in de ondersteuning die zij bieden.

Voorstanders benadrukken dat een hogere taaleis leidt tot betere kansen op de arbeidsmarkt en een snellere integratie. Onderzoek toont aan dat taalvaardigheid de belangrijkste factor is voor succesvolle maatschappelijke participatie.

Het is duidelijk dat integratie een proces van twee kanten is: zowel de nieuwkomer als de ontvangende samenleving moeten zich inspannen om het succesvol te laten verlopen.`,
            questions: [
                { question: 'Wat omvat integratie volgens de tekst?', options: ['Alleen taal leren', 'Taal, werk, normen, en sociale contacten', 'Alleen werk vinden', 'Alleen de cultuur begrijpen'], answer: 'Taal, werk, normen, en sociale contacten' },
                { question: 'Wat is het PIP?', options: ['Een taalprogramma', 'Een persoonlijk integratie- en participatieplan', 'Een werkvergunning', 'Een examenprogramma'], answer: 'Een persoonlijk integratie- en participatieplan' },
                { question: 'Wat is de kritiek op het huidige systeem?', options: ['Het taalniveau is te laag', 'De termijn is te ambitieus voor sommigen', 'Er is geen ondersteuning', 'Het examen is te makkelijk'], answer: 'De termijn is te ambitieus voor sommigen' },
                { question: 'Wat is de belangrijkste factor voor participatie?', options: ['Werkervaring', 'Diploma', 'Taalvaardigheid', 'Leeftijd'], answer: 'Taalvaardigheid' },
                { question: 'Integratie is een proces van:', options: ['Eén kant: de nieuwkomer', 'Eén kant: de overheid', 'Twee kanten: nieuwkomer en samenleving', 'Drie kanten'], answer: 'Twee kanten: nieuwkomer en samenleving' }
            ]
        },
        {
            id: 'r009',
            title: 'De Nederlandse Democratie',
            titleEn: 'Dutch Democracy',
            level: 'B2',
            week: 15,
            text: `Nederland is een constitutionele monarchie en een parlementaire democratie. De koning is het staatshoofd, maar heeft vooral een ceremoniële functie. De werkelijke politieke macht ligt bij het parlement, dat bestaat uit twee kamers: de Tweede Kamer en de Eerste Kamer.

De Tweede Kamer is het belangrijkste orgaan. De 150 leden worden rechtstreeks gekozen door de bevolking via een systeem van evenredige vertegenwoordiging. Dit betekent dat het percentage stemmen dat een partij krijgt, direct vertaald wordt naar het aantal zetels. Dit leidt ertoe dat er altijd veel partijen in de Tweede Kamer zitten en dat coalities nodig zijn om een regering te vormen.

De Eerste Kamer (Senaat) heeft 75 leden die indirect gekozen worden door de Provinciale Staten. De Eerste Kamer kan wetsvoorstellen goedkeuren of afwijzen, maar kan ze niet wijzigen.

Elke vier jaar zijn er verkiezingen voor de Tweede Kamer. Alle Nederlandse staatsburgers van 18 jaar en ouder mogen stemmen. EU-burgers en niet-EU-burgers die langer dan vijf jaar in Nederland wonen, mogen stemmen bij gemeenteraadsverkiezingen, maar niet bij de Tweede Kamerverkiezingen.

De grondwet beschermt fundamentele rechten zoals vrijheid van meningsuiting, godsdienstvrijheid, het recht op gelijke behandeling en het verbod op discriminatie.`,
            questions: [
                { question: 'Welk type overheid heeft Nederland?', options: ['Republiek', 'Absolute monarchie', 'Constitutionele monarchie en parlementaire democratie', 'Federale republiek'], answer: 'Constitutionele monarchie en parlementaire democratie' },
                { question: 'Hoeveel leden heeft de Tweede Kamer?', options: ['75', '100', '150', '200'], answer: '150' },
                { question: 'Waarom zijn er altijd coalities nodig?', options: ['Omdat er twee kamers zijn', 'Omdat er altijd veel partijen zijn door evenredige vertegenwoordiging', 'Omdat de koning dat wil', 'Omdat de grondwet dat eist'], answer: 'Omdat er altijd veel partijen zijn door evenredige vertegenwoordiging' },
                { question: 'Wie mag stemmen bij gemeenteraadsverkiezingen?', options: ['Alleen Nederlanders', 'Alleen EU-burgers', 'Nederlanders, EU-burgers en niet-EU-burgers (5+ jaar)', 'Iedereen'], answer: 'Nederlanders, EU-burgers en niet-EU-burgers (5+ jaar)' },
                { question: 'Wat kan de Eerste Kamer NIET doen?', options: ['Wetsvoorstellen goedkeuren', 'Wetsvoorstellen afwijzen', 'Wetsvoorstellen wijzigen', 'Vergaderen'], answer: 'Wetsvoorstellen wijzigen' }
            ]
        }
    ],

    getByLevel(level) {
        return this.passages.filter(p => p.level === level);
    },

    getByWeek(week) {
        return this.passages.filter(p => p.week <= week);
    },

    getById(id) {
        return this.passages.find(p => p.id === id);
    },

    getAll() {
        return this.passages;
    }
};
