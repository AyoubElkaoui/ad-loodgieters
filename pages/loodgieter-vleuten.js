import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import FunFact2 from '../components/FunFact2/FunFact2';
import SectionTitle from '../components/SectionTitle';

const LoodgieterVleutenPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/loodgieter-vleuten`;
    const pageTitle = 'Loodgieter Vleuten | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Betrouwbare loodgieter in Vleuten voor alle woningonderhoud. Van lekkages tot complete renovaties. Lokale kennis, snelle service. Bel: 06 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Betrouwbare loodgieter in Vleuten met lokale kennis en snelle service',
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
            latitude: 52.1058,
            longitude: 5.0142
        },
        areaServed: {
            '@type': 'City',
            name: 'Vleuten',
            addressRegion: 'Utrecht',
            addressCountry: 'NL'
        },
        serviceType: [
            'Loodgieterswerk Vleuten',
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
                <meta name="keywords" content="loodgieter Vleuten, lekkage Vleuten, verstopping Vleuten, spoedloodgieter Vleuten, cv-ketel Vleuten, badkamer renovatie Vleuten" />
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

            {/* Hero Section - Vleuten specifiek */}
            <section className="wpo-hero-section wpo-hero-style-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="wpo-hero-content">
                                <div className="wpo-hero-title-top">
                                    <span>LOKALE VAKMANNEN</span>
                                </div>
                                <div className="wpo-hero-title">
                                    <h1>Loodgieter <span className="highlight">Vleuten</span></h1>
                                </div>
                                <div className="wpo-hero-subtitle">
                                    <h5>Uw vertrouwde loodgieter in Vleuten</h5>
                                    <p>
                                        Als lokale loodgieter in Vleuten kennen wij de wijk door en door.
                                        Van spoedeisende lekkage reparatie tot complete woningrenovatie -
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
                                    <img src="/images/service/badkamer-loodgieter.jpg" alt="Loodgieter Vleuten" style={{maxHeight: '400px', objectFit: 'cover'}} />
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
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met diepgaande lokale kennis van Vleuten bieden wij professionele service'} />
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
                                    <p>Altijd paraat voor noodgevallen in Vleuten, ook buiten kantooruren.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-expert"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Lokale Expertise</h3>
                                    <p>Diepgaande kennis van Vleuten en de specifieke woningbouw in deze plaats.</p>
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

            {/* Uitgebreide informatie over Vleuten */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Vleuten: Een Gezellige Wijk met Persoonlijke Service</h3>
                                <p>
                                    Vleuten is een karakteristieke plaats met een mix van oude en nieuwe woningen,
                                    van historische panden tot moderne appartementen. Als lokale loodgieter in Vleuten
                                    kennen wij alle straten, woningen en bedrijven door en door. Of u nu een spoedeisende
                                    lekkage heeft of uw woning wilt renoveren - wij bieden professionele oplossingen
                                    voor elk loodgietersprobleem in Vleuten.
                                </p>
                                <p>
                                    Met meer dan 15 jaar ervaring in Vleuten weten wij precies hoe we problemen in elk
                                    type woning het beste kunnen aanpakken. Onze lokale kennis zorgt ervoor dat wij
                                    snel ter plaatse kunnen zijn en weten hoe de plaats in elkaar zit. Van oude
                                    gietijzeren leidingen tot moderne kunststof systemen - wij kennen alle technieken
                                    en materialen die in Vleuten voorkomen.
                                </p>

                                <h3>Snelle en Betrouwbare Service in Vleuten</h3>
                                <p>
                                    Als lokale loodgieter in Vleuten kunnen wij snel reageren op uw oproepen. Dankzij
                                    onze centrale locatie bereiken wij Vleuten binnen 15-25 minuten. Bij spoedeisende
                                    lekkages of verstoppingen zijn wij binnen een uur ter plaatse om verdere schade te
                                    voorkomen. Onze snelle service betekent dat u niet onnodig lang zonder water zit
                                    of dat problemen zich uitbreiden.
                                </p>
                                <p>
                                    Wij kennen Vleuten door en door en weten precies waar de drukste straten zijn
                                    en hoe we het beste kunnen navigeren. Deze lokale kennis zorgt voor een efficiënte
                                    en snelle service die u kunt vertrouwen.
                                </p>

                                <h3>Onze Diensten in Vleuten</h3>
                                <h4>Lekkage Opsporing en Reparatie</h4>
                                <p>
                                    Lekkages kunnen grote problemen veroorzaken, vooral in oudere woningen in Vleuten
                                    waar leidingen soms verborgen liggen. Wij gebruiken moderne detectietechnieken
                                    zoals thermische camera's en druktesten om lekkages snel en nauwkeurig te lokaliseren.
                                    Van kleine druppelende kranen tot grote leidingbreuken - wij repareren alles
                                    vakkundig en duurzaam, met garantie op ons werk.
                                </p>
                                <p>
                                    In Vleuten zien we vaak complexe situaties door de mengeling van oude en nieuwe
                                    bouwstijlen. Onze specialisten weten precies hoe we problemen in elk type woning
                                    het beste kunnen aanpakken, met respect voor de karakteristieke bouwstijlen van
                                    deze Utrechtse plaats.
                                </p>

                                <h4>Ontstoppen van Afvoeren</h4>
                                <p>
                                    Verstopte afvoeren zijn een veelvoorkomend probleem in Vleuten, vooral in oudere
                                    woningen met smallere leidingen. Of het gaat om een verstopte wc, wasbak, douche
                                    of keukenafvoer - onze professionele ontstoppingsdiensten lossen het probleem snel
                                    op. Wij gebruiken moderne apparatuur zoals hogedrukreinigers en motorische
                                    ontstoppers voor grondige en duurzame resultaten.
                                </p>
                                <p>
                                    In Vleuten zien we vaak verstoppingen door oude materialen, kalkaanslag of door
                                    de specifieke bouwtechnieken die in deze plaats worden gebruikt. Onze ervaring
                                    met alle systemen zorgt voor snelle en effectieve oplossingen.
                                </p>

                                <h4>CV-Ketel Service</h4>
                                <p>
                                    Een goed werkende CV-ketel is cruciaal voor comfortabel wonen, vooral tijdens de
                                    koude Utrechtse winters. Wij onderhouden, repareren en vervangen CV-ketels van alle
                                    merken. Ook bieden wij advies over energiezuinige oplossingen en kunnen helpen bij
                                    het overstappen naar duurzame verwarmingsopties zoals warmtepompen.
                                </p>
                                <p>
                                    In Vleuten zien we veel woningen die toe zijn aan modernisering. Wij helpen bewoners
                                    bij de overstap naar energiezuinige systemen en kunnen subsidies regelen voor groene
                                    investeringen. Van hybride systemen tot complete warmtepomp installaties - wij
                                    bieden alle moderne oplossingen.
                                </p>

                                <h4>Badkamer Renovaties</h4>
                                <p>
                                    Wilt u uw badkamer in Vleuten een moderne make-over geven? Ons ervaren team verzorgt
                                    complete renovaties van A tot Z. Van het slopen van oude tegels tot het plaatsen van
                                    nieuw sanitair - wij nemen u alles uit handen. Wij werken samen met betrouwbare
                                    partners voor kwalitatieve materialen en zorgen voor minimale overlast tijdens de
                                    werkzaamheden.
                                </p>
                                <p>
                                    In Vleuten zien we vaak renovaties van oudere badkamers die toe zijn aan modernisering.
                                    Ons team heeft ervaring met alle soorten renovaties en weet hoe we oude installaties
                                    het beste kunnen vervangen door moderne, comfortabele oplossingen.
                                </p>

                                <h4>Keuken Loodgieterswerk</h4>
                                <p>
                                    Bij keukenrenovaties in Vleuten zorgen wij voor de complete water- en afvoerinstallatie.
                                    Van het aansluiten van nieuwe apparatuur zoals vaatwassers en wasmachines tot het
                                    plaatsen van extra stopcontacten voor keukenapparaten - wij zorgen dat alles veilig
                                    en volgens de regels gebeurt.
                                </p>
                                <p>
                                    Vleuten heeft veel gezinnen met moderne keukens. Ons team heeft ervaring met alle
                                    soorten aansluitingen en weet hoe we rekening moeten houden met de specifieke eisen
                                    van verschillende woningtypes in deze plaats.
                                </p>

                                <h3>Waarom AD-Loodgietersbedrijf in Vleuten?</h3>
                                <ul>
                                    <li><strong>Lokale Kennis:</strong> Diepgaande kennis van Vleuten en alle woningtypes</li>
                                    <li><strong>Snelle Respons:</strong> Binnen 25 minuten ter plaatse bij spoedgevallen</li>
                                    <li><strong>15+ Jaar Ervaring:</strong> Ruime ervaring met alle soorten woningen</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten</li>
                                    <li><strong>Garantie:</strong> Alle werkzaamheden worden gegarandeerd</li>
                                    <li><strong>24/7 Service:</strong> Altijd bereikbaar, ook 's nachts en in het weekend</li>
                                    <li><strong>Persoonlijke Service:</strong> Lokale vakmannen die u kennen</li>
                                    <li><strong>Moderniseringsadvies:</strong> Expertise in renovatie van oudere woningen</li>
                                </ul>

                                <h3>Onze Werkwijze</h3>
                                <p>
                                    Bij AD-Loodgietersbedrijf geloven wij in transparante communicatie en professionele
                                    service. Voordat wij beginnen met werkzaamheden ontvangt u altijd een duidelijke
                                    offerte met vaste prijzen. Wij leggen precies uit wat er gedaan gaat worden en
                                    welke materialen wij gebruiken. Tijdens het werk houden wij u op de hoogte van de
                                    voortgang.
                                </p>
                                <p>
                                    Na afronding van de werkzaamheden ontvangt u een factuur met garantieverklaring.
                                    Wij staan altijd klaar voor vragen of problemen die later kunnen ontstaan. Uw
                                    tevredenheid is onze hoogste prioriteit.
                                </p>

                                <h3>Duurzame Oplossingen voor Vleuten</h3>
                                <p>
                                    Steeds meer bewoners in Vleuten kiezen voor duurzame oplossingen. Wij adviseren u
                                    graag over energiezuinige alternatieven zoals LED-verlichting, waterbesparende kranen
                                    en zonneboilers. Ook kunnen wij helpen bij het verkrijgen van subsidies voor groene
                                    investeringen in uw woning.
                                </p>
                                <p>
                                    Als specialist in Vleuten weten wij precies welke duurzame oplossingen het beste
                                    passen bij uw woning. Van slimme thermostaten tot complete warmtepomp systemen -
                                    wij helpen u bij het maken van duurzame keuzes die ook financieel aantrekkelijk zijn.
                                </p>

                                <h3>Preventief Onderhoud</h3>
                                <p>
                                    Voorkomen is beter dan genezen. Wij bieden preventief onderhoud om problemen te voorkomen:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van kranen en afvoeren</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van CV-ketels en verwarmingssystemen</li>
                                    <li>Inspectie van badkamer- en keukeninstallaties</li>
                                    <li>Advies over energiebesparende maatregelen</li>
                                </ul>

                                <h3>Contact met Uw Loodgieter in Vleuten</h3>
                                <p>
                                    Heeft u een loodgietersprobleem in Vleuten? Neem dan direct contact met ons op.
                                    Bel naar 06 40 96 18 48 voor spoedeisende gevallen of vul ons contactformulier in
                                    voor een afspraak. Wij komen graag bij u langs voor een vrijblijvende inspectie
                                    en offerte.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw vertrouwde loodgieter in Vleuten voor elk probleem,
                                    groot of klein. Met diepgaande lokale kennis en persoonlijke service staan wij
                                    voor u klaar.
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

export default LoodgieterVleutenPage;