// /api/blogs.js

const blogs = [
    {
        id: '1',
        slug: 'multi-site-waterbeheer-retail',
        title: 'Continu waterbeheer voor retailketens: zo minimaliseert u downtime',
        blogSingleImg: '/images/blog/directe-hulp-bij-lekkages-loodgieter.jpg',
        create_at: '18 maart 2025',
        author: 'AD-Loodgietersbedrijf',
        category: ['Facility management', 'Retail'],
        tags: ['retail', 'onderhoud', 'waterbeheer'],
        shortDescription: `Met een centrale aanpak voor uw filialen voorkomt u storingen, raakt u SLA-deadlines niet meer kwijt en houdt u grip op kwaliteit.`,
        quote: `“Iedere minuut dat een horecalocatie zonder water zit, kost direct omzet. Met realtime rapportages sturen we razendsnel bij.”`,

        seoHeader1: 'Waterbeheer vraagt om regie en voorspelbaarheid',
        longText1: `Retailketens en horecaconcepten zijn afhankelijk van constante waterdruk, hygiëne en betrouwbare afvoeren. Een verstopping in Amsterdam terwijl er een inspectie in Eindhoven gepland staat? Zonder regie leidt dit tot omzetverlies en frustratie bij het personeel. Wij maken eerst alle filiaaldata inzichtelijk, inclusief installatietypes, piekuren en risicomomenten. Daarna koppelen we hier preventieve onderhoudsmomenten en escalatiestappen aan. Zo weet het facilitaire team precies wie wanneer aanwezig is en wat de voortgang is.`,

        seoHeader2: 'Standaard werkwijze voor al uw locaties',
        longText2: `We bouwen samen een servicehandboek waarin per locatie de kritieke punten, toegangsprocedures en gewenste rapportagevormen staan. Monteurs werken met dezelfde checklists en foto-rapportages. Hierdoor ontstaat uniformiteit: of we nu voor Starbucks, La Place of een onafhankelijke retailer werken, elke vestiging voldoet aan dezelfde kwaliteitsnorm en het hoofdkantoor krijgt één overzicht.`,

        seoHeader3: 'Realtime inzicht en rapportage',
        longText3: `Na iedere interventie ontvangt u binnen twee uur een rapport met uitgevoerde acties, gebruikte materialen en follow-up advies. Deze data voeden onze dashboards zodat terugkerende patronen vroeg worden gesignaleerd. Denk aan vetophoping door seizoenspieken of drukverschil bij nieuw ingebruikgenomen boilers. Door direct bij te sturen voorkomen we herhaalstoringen en blijft uw uptime hoog.`,

        seoHeader4: 'Van SLA-afspraken naar partnership',
        longText4: `Een SLA is het startpunt, geen papieren tijger. We stemmen responstijden en escalatielijnen af op openingstijden van de filialen en zorgen dat storemanagers een vaste contactpersoon hebben. Onze 24/7 service desk combineert spoedmeldingen met preventieve calls zodat uw medewerkers ontzorgd worden. Het resultaat: minder ad-hoc telefoontjes, beter voorspelbare kosten en tevreden teams op de werkvloer.`
    },
    {
        id: '2',
        slug: 'renovatie-sanitair-hospitality',
        title: 'Sanitair en wellness renoveren in hospitality: lessons learned',
        blogSingleImg: '/images/blog/badkamer-renovatie-tips-loodgieter.jpg',
        create_at: '11 maart 2025',
        author: 'AD-Loodgietersbedrijf',
        category: ['Hospitality', 'Renovatie'],
        tags: ['hotel', 'renovatie', 'sanitair'],
        shortDescription: `Hotelkamers, suites en wellnessruimtes vragen om andere planningen en materiaalkeuzes dan een woning. Zo blijft uw gastbeleving hoog.`,
        quote: `“Tijdens de renovatie van Rizani De Echer Hotel bleven 80% van de kamers open. Sleutel: fasering per vleugel en strakke testprocedures.”`,

        seoHeader1: 'Gastbeleving staat centraal tijdens techniek',
        longText1: `Hotels en serviced apartments draaien op continu comfort: warm water, douchecapaciteit, spa-voorzieningen. Een renovatie mag dat nooit onderbreken. Daarom werken we met faseringen per vleugel en duidelijke cut-over momenten. Elke kamer krijgt voor oplevering een waterdruktest, legionella-check en opleveringsrapport, zodat housekeeping direct weet dat de ruimte beschikbaar is.`,

        seoHeader2: 'Materialen en hygiëne-eisen in balans',
        longText2: `In hospitality kiezen we voor materialen die bestand zijn tegen intensief gebruik en die makkelijk schoon te houden zijn. Denk aan naadloze leidingsystemen, vetafscheiders en digitale menginstallaties. We stemmen de keuzes af met uw brandstandaarden en sustainability-doelen, zodat onderhoudscycli verlengd worden en u minder downtime hebt.`,

        seoHeader3: 'Werkvensters en communicatie',
        longText3: `Renovaties vinden vaak plaats tijdens stille periodes of nacht- en ochtendsluitingen. Ons planningsteam stemt dit af met frontoffice en housekeeping. Elke dag eindigt met een update naar de hotelmanager: wat is opgeleverd, welke kamers worden vrijgegeven, welk werk staat er op stapel? Zo houdt u controle en blijft de gastbeleving op niveau.`,

        seoHeader4: 'Nazorg en monitoring',
        longText4: `Na de renovatie blijven we betrokken met periodieke inspecties en waterkwaliteitsmetingen. Voor Rizani De Echer Hotel verzorgen we bijvoorbeeld maandelijks de legionellacontrole, kwartjaarlijks de wellness-check en jaarlijkse verversingsprojecten. Met deze aanpak blijft het sanitair luxe én veilig, met minimale belasting voor uw team.`
    },
    {
        id: '3',
        slug: 'facility-sla-spoedservice',
        title: 'Zo richt u een 24/7 storingsdienst in zonder ruis',
        blogSingleImg: '/images/blog/duurzame-leidingen-aanleggen-loodgieter.jpg',
        create_at: '4 maart 2025',
        author: 'AD-Loodgietersbedrijf',
        category: ['Facility management', 'Operations'],
        tags: ['sla', 'storingsdienst', 'operations'],
        shortDescription: `Een storingsdienst faalt als escalaties onduidelijk zijn. Met heldere protocollen en rapportage behoudt u controle, zelfs ’s nachts.`,
        quote: `“Bij BAM Facility Management koppelen we elke melding aan een digitaal logboek; binnen 30 minuten weet het serviceteam de status.”`,

        seoHeader1: 'Definieer wat een storing is',
        longText1: `Veel organisaties zien alle water- of gasproblemen als spoed. Daardoor raken resources overbelast. Bepaal vooraf: wat is een kritieke storing, wat is planbaar? We maken matrices met impact op bedrijfsvoering, openingstijden en veiligheid. Zo weten stakeholders precies wanneer de 24/7 lijn wordt ingezet.`,

        seoHeader2: 'Escalatie in drie lagen',
        longText2: `Een effectieve storingsdienst werkt met duidelijke escalatielijnen. Laag 1: meldkamer registreert, checkt en filtert. Laag 2: serviceteam beoordeelt en plant monteur met juiste certificering. Laag 3: technische achterwacht voor complexe situaties. Deze structuur voorkomt dat dezelfde vraag bij meerdere mensen terechtkomt.`,

        seoHeader3: 'Communicatie en rapportage',
        longText3: `Iedere melding krijgt een digitaal rapport met foto’s, oorzaak, oplossing en advies. Facility managers ontvangen pushmeldingen bij statuswijzigingen. Daarnaast leveren we maandelijkse analyses: welke locaties vragen de meeste aandacht, welke onderdelen vormen risico’s, hoe scoren we op responstijden?`,

        seoHeader4: 'Continue verbetering',
        longText4: `Data uit de storingsdienst gebruiken we om trends te signaleren. Zo ontdekten we bij een VvE-portefeuille dat nachtelijke meldingen vooral te maken hadden met verouderde drukregelventielen. Door preventief te vervangen daalde het aantal spoedgevallen met 35%. Op die manier blijft uw storingsdienst betaalbaar én effectief.`
    }
];

export default blogs;
