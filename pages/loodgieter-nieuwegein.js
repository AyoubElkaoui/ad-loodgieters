import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/pagetitle/PageTitle';
import SectionTitle from '../components/SectionTitle';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import FunFact2 from '../components/FunFact2/FunFact2';

const LoodgieterNieuwegeinPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/loodgieter-nieuwegein`;
    const pageTitle = 'Loodgieter Nieuwegein | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Professionele loodgieter in Nieuwegein voor lekkages, verstoppingen en installaties. 24/7 spoedservice, lokale vakmannen. Bel: 06 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Professionele loodgieter in Nieuwegein met 24/7 spoedservice',
        url: pageUrl,
        telephone: '+31 6 40 96 18 48',
        priceRange: '€€',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Spechtenkamp 334',
            addressLocality: 'Maarssen',
            postalCode: '3607 KT',
            addressRegion: 'Utrecht',
            addressCountry: 'NL'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.0292,
            longitude: 5.0806
        },
        areaServed: {
            '@type': 'City',
            name: 'Nieuwegein',
            addressRegion: 'Utrecht',
            addressCountry: 'NL'
        },
        serviceType: [
            'Loodgieterswerk Nieuwegein',
            'Lekkage reparatie',
            'Verstopping ontstoppen',
            'CV-installatie',
            'Badkamer renovatie'
        ]
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="loodgieter Nieuwegein, lekkage Nieuwegein, verstopping Nieuwegein, spoedloodgieter Nieuwegein, cv-ketel Nieuwegein, badkamer renovatie Nieuwegein" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={`${siteUrl}/images/service/badkamer-loodgieter.jpg`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/service/badkamer-loodgieter.jpg`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar />

            {/* Hero Section - Nieuwegein specifiek */}
            <section className="wpo-hero-section wpo-hero-style-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="wpo-hero-content">
                                <div className="wpo-hero-title-top">
                                    <span>LOKALE VAKMANNEN</span>
                                </div>
                                <div className="wpo-hero-title">
                                    <h1>Loodgieter <span className="highlight">Nieuwegein</span></h1>
                                </div>
                                <div className="wpo-hero-subtitle">
                                    <h5>Uw vertrouwde loodgieter in Nieuwegein</h5>
                                    <p>
                                        Als professionele loodgieter in Nieuwegein staan wij garant voor kwaliteit
                                        en service. Van spoedeisende lekkage reparatie tot complete woningrenovatie -
                                        wij zijn uw betrouwbare partner voor alle loodgieterswerkzaamheden.
                                    </p>
                                </div>
                                <div className="wpo-hero-btn">
                                    <a href="tel:0640961848" className="theme-btn">
                                        <i className="fi flaticon-phone-call"></i> Bel Direct: 06 40 96 18 48
                                    </a>
                                    <a href="#contact" className="theme-btn-s2">
                                        Offerte Aanvragen
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="wpo-hero-right">
                                <div className="wpo-hero-img">
                                    <img src="/images/service/badkamer-loodgieter.jpg" alt="Loodgieter Nieuwegein" style={{maxHeight: '400px', objectFit: 'cover'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Waarom kiezen voor ons */}
            <section className="wpo-service-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met uitgebreide ervaring in Nieuwegein bieden wij professionele service'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-24-hours"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>24/7 Bereikbaar</h3>
                                    <p>Altijd paraat voor noodgevallen in Nieuwegein, ook buiten kantooruren.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-expert"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Vakkundig Team</h3>
                                    <p>Gespecialiseerde vakmannen met jarenlange ervaring in Nieuwegein.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-trust"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Betrouwbaar</h3>
                                    <p>Gegarandeerde kwaliteit en transparante prijzen voor al onze diensten.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uitgebreide informatie over Nieuwegein */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Nieuwegein: Een Moderne Stad met Moderne Woningen</h3>
                                <p>
                                    Nieuwegein is een moderne stad met een mix van nieuwbouwwoningen, gerenoveerde
                                    appartementen en karakteristieke oudere huizen. Als professionele loodgieter in
                                    Nieuwegein kennen wij alle aspecten van deze vooruitstrevende stad. Of u nu woont
                                    in een modern appartement aan het Galecop of in een gerenoveerde woning in de
                                    oude stadskern - wij bieden oplossingen die perfect aansluiten bij uw woningtype
                                    en de moderne eisen van Nieuwegein.
                                </p>
                                <p>
                                    Met meer dan 15 jaar ervaring in Nieuwegein begrijpen wij hoe belangrijk het is om
                                    rekening te houden met de verschillende bouwstijlen en materialen die in deze stad
                                    voorkomen. Van moderne kunststof leidingen tot gerenoveerde oudere systemen - onze
                                    vakmannen weten precies hoe elk systeem werkt en hoe we problemen het beste kunnen
                                    oplossen.
                                </p>

                                <h3>Snelle en Betrouwbare Service in Nieuwegein</h3>
                                <p>
                                    Dankzij onze strategische ligging bereiken wij Nieuwegein snel en efficiënt. Bij
                                    spoedeisende lekkages of verstoppingen zijn wij binnen een uur ter plaatse om
                                    verdere schade te voorkomen. Deze snelle responstijd is essentieel in een moderne
                                    stad als Nieuwegein, waar bewoners hoge eisen stellen aan service en kwaliteit.
                                </p>
                                <p>
                                    Wij kennen Nieuwegein door en door - van de moderne appartementencomplexen tot de
                                    gerenoveerde woningen in de oude wijken. Deze lokale kennis zorgt voor een efficiënte
                                    navigatie en snelle service die aansluit bij de verwachtingen van Nieuwegeinse bewoners.
                                </p>

                                <h3>Onze Diensten in Nieuwegein</h3>
                                <h4>Lekkage Opsporing en Reparatie</h4>
                                <p>
                                    Lekkages kunnen ernstige schade veroorzaken aan moderne woningen in Nieuwegein.
                                    Wij gebruiken moderne detectietechnieken zoals thermische camera's, druktesten
                                    en endoscopische inspecties om lekkages nauwkeurig te lokaliseren. Van kleine
                                    druppelende kranen tot verborgen leidingbreuken in moderne constructies - wij
                                    repareren alles vakkundig en duurzaam, met garantie op ons werk.
                                </p>
                                <p>
                                    In Nieuwegein zien we vaak moderne bouwtechnieken met verborgen leidingen in vloeren,
                                    muren of plafonds. Onze specialisten weten precies hoe deze systemen werken en hoe
                                    we ze het beste kunnen repareren zonder onnodige schade aan de constructie.
                                </p>

                                <h4>Ontstoppen van Afvoeren</h4>
                                <p>
                                    Verstopte afvoeren zijn een veelvoorkomend probleem in Nieuwegein, vooral in moderne
                                    woningen met complexe afvoersystemen. Of het gaat om een verstopte wc, wasbak,
                                    douche of keukenafvoer - onze professionele ontstoppingsdiensten lossen het probleem
                                    effectief op. Wij gebruiken moderne apparatuur zoals hogedrukreinigers en motorische
                                    ontstoppers voor grondige en duurzame resultaten.
                                </p>
                                <p>
                                    In moderne woningen in Nieuwegein zien we vaak verstoppingen door moderne materialen
                                    of complexe leidingverlopen. Onze ervaring met deze systemen zorgt voor snelle en
                                    effectieve oplossingen die rekening houden met de moderne bouwtechnieken.
                                </p>

                                <h4>CV-Ketel Service en Moderne Verwarmingssystemen</h4>
                                <p>
                                    Moderne woningen in Nieuwegein zijn vaak uitgerust met energiezuinige verwarmingssystemen
                                    zoals warmtepompen, zonneboilers of hybride CV-ketels. Wij onderhouden, repareren en
                                    vervangen alle soorten verwarmingssystemen. Ook bieden wij advies over energiezuinige
                                    alternatieven en kunnen helpen bij het overstappen naar duurzame verwarmingsopties.
                                </p>
                                <p>
                                    Nieuwegein loopt voorop in duurzaamheid. Als specialist in moderne bouwtechnieken
                                    weten wij precies welke systemen het beste passen bij de woningen in deze stad.
                                    Wij adviseren u graag over de nieuwste ontwikkelingen op het gebied van duurzame
                                    verwarming en kunnen complete systemen ontwerpen en installeren.
                                </p>

                                <h4>Badkamer Renovaties in Moderne Woningen</h4>
                                <p>
                                    Wilt u uw badkamer in Nieuwegein een moderne make-over geven? Ons ervaren team verzorgt
                                    complete renovaties van A tot Z. Van het slopen van oude installaties tot het plaatsen
                                    van nieuw sanitair, tegels en verlichting - wij nemen u alles uit handen. Wij werken
                                    samen met betrouwbare partners voor kwalitatieve materialen en zorgen voor minimale
                                    overlast tijdens de werkzaamheden.
                                </p>
                                <p>
                                    In moderne woningen in Nieuwegein zien we vaak wensen voor luxe badkamers met
                                    regendouches, vloerverwarming, domotica en energiezuinige installaties. Ons team
                                    heeft ervaring met al deze moderne voorzieningen en zorgt voor een perfect eindresultaat
                                    dat aansluit bij uw wensen en budget.
                                </p>

                                <h4>Keukeninstallaties en Wateraansluitingen</h4>
                                <p>
                                    Bij keukenrenovaties in Nieuwegein zorgen wij voor de complete water- en afvoerinstallatie.
                                    Van het aansluiten van nieuwe apparatuur zoals vaatwassers en wasmachines tot het
                                    plaatsen van extra stopcontacten voor keukenapparaten - wij zorgen dat alles veilig
                                    en volgens de geldende normen gebeurt. Ook kunnen wij koken-water systemen installeren
                                    voor direct kokend water uit de kraan.
                                </p>
                                <p>
                                    Moderne keukens in Nieuwegein hebben vaak geavanceerde installaties zoals Quooker
                                    kokend water kranen, ingebouwde koffiemachines of ijsmachines. Ons team heeft ervaring
                                    met al deze systemen en zorgt voor een professionele aansluiting volgens de hoogste
                                    veiligheidsnormen.
                                </p>

                                <h3>Waarom AD-Loodgietersbedrijf in Nieuwegein?</h3>
                                <ul>
                                    <li><strong>15+ Jaar Ervaring:</strong> Gecertificeerde vakmannen met ruime ervaring in moderne bouwtechnieken</li>
                                    <li><strong>Snelle Respons:</strong> Binnen een uur ter plaatse bij spoedgevallen</li>
                                    <li><strong>Moderne Expertise:</strong> Gespecialiseerd in nieuwbouw en duurzame installaties</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten</li>
                                    <li><strong>Garantie:</strong> Alle werkzaamheden worden gegarandeerd</li>
                                    <li><strong>24/7 Service:</strong> Altijd bereikbaar, ook 's nachts en in het weekend</li>
                                    <li><strong>Lokale Kennis:</strong> Diepgaande kennis van Nieuwegein en alle woningtypes</li>
                                    <li><strong>Duurzaam Advies:</strong> Expertise in energiezuinige en duurzame oplossingen</li>
                                </ul>

                                <h3>Onze Werkwijze</h3>
                                <p>
                                    Professionaliteit en transparantie staan bij ons centraal. Voordat wij beginnen met
                                    werkzaamheden ontvangt u altijd een duidelijke offerte met vaste prijzen. Wij leggen
                                    precies uit wat er gedaan gaat worden, welke materialen wij gebruiken en hoe lang het
                                    werk gaat duren. Tijdens het werk houden wij u op de hoogte van de voortgang.
                                </p>
                                <p>
                                    Na afronding van de werkzaamheden ontvangt u een factuur met garantieverklaring. Wij
                                    blijven altijd beschikbaar voor vragen of problemen die later kunnen ontstaan. Uw
                                    tevredenheid is onze hoogste prioriteit.
                                </p>

                                <h3>Duurzame Oplossingen voor Nieuwegein</h3>
                                <p>
                                    Nieuwegein loopt voorop in duurzaamheid. Steeds meer bewoners kiezen voor groene
                                    oplossingen zoals waterbesparende kranen, energiezuinige verwarmingssystemen,
                                    zonneboilers en LED-verlichting. Wij adviseren u graag over energiezuinige alternatieven
                                    en kunnen helpen bij het verkrijgen van subsidies voor duurzame woningverbeteringen.
                                </p>
                                <p>
                                    Als specialist in moderne bouwtechnieken weten wij precies welke duurzame oplossingen
                                    het beste passen bij uw woning in Nieuwegein. Van slimme thermostaten tot complete
                                    warmtepomp systemen - wij helpen u bij het maken van duurzame keuzes die ook financieel
                                    aantrekkelijk zijn.
                                </p>

                                <h3>Preventief Onderhoud voor Moderne Woningen</h3>
                                <p>
                                    Moderne woningen in Nieuwegein hebben complexe installaties die regelmatig onderhoud
                                    nodig hebben. Wij bieden preventief onderhoud om problemen te voorkomen:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van CV-ketels en verwarmingssystemen</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van waterdruk en leidingen</li>
                                    <li>Inspectie van badkamer- en keukeninstallaties</li>
                                    <li>Advies over energiebesparende maatregelen</li>
                                </ul>

                                <h3>Contact met Uw Loodgieter in Nieuwegein</h3>
                                <p>
                                    Heeft u een loodgietersprobleem in Nieuwegein? Neem dan direct contact met ons op.
                                    Bel naar 06 40 96 18 48 voor spoedeisende gevallen of vul ons contactformulier in voor
                                    een afspraak. Wij komen graag bij u langs voor een vrijblijvende inspectie en offerte.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw professionele loodgieter in Nieuwegein voor elk probleem,
                                    groot of klein. Met specialistische kennis van moderne bouwtechnieken en duurzame
                                    oplossingen staan wij voor u klaar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistieken */}
            <FunFact2 />

            {/* Contact formulier */}
            <Appointment />

            <Footer />
            <Scrollbar />
        </div>
    )
};

export default LoodgieterNieuwegeinPage;