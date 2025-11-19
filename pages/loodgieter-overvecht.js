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

const LoodgieterOvervechtPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/loodgieter-overvecht`;
    const pageTitle = 'Loodgieter Overvecht Utrecht | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Professionele loodgieter in Overvecht Utrecht voor lekkages, verstoppingen en installaties. 24/7 spoedservice, lokale vakmannen. Bel: +31 6 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Professionele loodgieter in Overvecht Utrecht met 24/7 spoedservice',
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
            latitude: 52.0850,
            longitude: 5.1028
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 52.0850,
                longitude: 5.1028
            },
            geoRadius: 5000,
            name: 'Overvecht, Utrecht'
        },
        serviceType: [
            'Loodgieterswerk Overvecht',
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
                <meta name="keywords" content="loodgieter Overvecht Utrecht, lekkage Overvecht, verstopping Overvecht, spoedloodgieter Overvecht, cv-ketel Overvecht, badkamer renovatie Overvecht" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={`${siteUrl}/images/service/pan-xiaozhen-IYE0ImQlY90-unsplash.jpg`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/service/pan-xiaozhen-IYE0ImQlY90-unsplash.jpg`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Loodgieter Overvecht'} pagesub={'loodgieter-overvecht'} />

            {/* Overvecht content sectie */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <img src="/images/service/pan-xiaozhen-IYE0ImQlY90-unsplash.jpg" alt="Loodgieter Overvecht Utrecht" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-content landing-content">
                                    <div className="wpo-section-title-s2">
                                        <h2>Uw Lokale Vakman</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            AD-Loodgietersbedrijf is de vertrouwde loodgieter in Overvecht Utrecht.
                                            Met meer dan 15 jaar ervaring kennen wij alle straten en woningen in deze levendige wijk.
                                        </p>
                                        <p>
                                            Van spoedeisende lekkage reparatie tot complete badkamer renovatie -
                                            wij bieden professionele oplossingen voor al uw loodgietersproblemen, 24/7 beschikbaar.
                                        </p>
                                        <div className="wpo-about-btn" style={{marginTop: '2rem'}}>
                                            <a href="tel:0640961848" className="theme-btn">
                                                <i className="fi flaticon-phone-call"></i> Bel direct: +31 6 40 96 18 48
                                            </a>
                                        </div>
                                    </div>
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
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met jarenlange ervaring in Overvecht bieden wij professionele service'} />
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
                                    <p>Altijd paraat voor noodgevallen in Overvecht, ook buiten kantooruren.</p>
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
                                    <p>Diepgaande kennis van Overvecht en de specifieke woningbouw in deze wijk.</p>
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

            {/* Uitgebreide informatie over Overvecht */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Overvecht: Een Levendige Wijk met Diverse Woningen</h3>
                                <p>
                                    Overvecht is een van de grootste en meest diverse wijken van Utrecht, met woningen
                                    uit verschillende bouwperioden en stijlen. Van de karakteristieke jaren '70 woningen
                                    tot moderne appartementencomplexen - wij kennen alle aspecten van deze levendige wijk.
                                    Als lokale loodgieter in Overvecht bieden wij oplossingen die perfect aansluiten bij
                                    de specifieke kenmerken van uw woning en buurt.
                                </p>
                                <p>
                                    Met meer dan 15 jaar ervaring in Overvecht begrijpen wij hoe belangrijk het is om
                                    rekening te houden met de verschillende bouwstijlen en materialen die in deze wijk
                                    voorkomen. Van oude gietijzeren leidingen tot moderne kunststof systemen - onze
                                    vakmannen weten precies hoe elk systeem werkt en hoe we problemen het beste kunnen
                                    oplossen.
                                </p>

                                <h3>Snelle en Betrouwbare Service in Overvecht</h3>
                                <p>
                                    Dankzij onze centrale ligging bereiken wij Overvecht binnen 10-20 minuten. Bij
                                    spoedeisende lekkages of verstoppingen zijn wij binnen 45 minuten ter plaatse om
                                    verdere schade te voorkomen. Deze snelle responstijd is essentieel in een grote wijk
                                    als Overvecht, waar bewoners afhankelijk zijn van betrouwbare service.
                                </p>
                                <p>
                                    Wij kennen Overvecht door en door - van de oude buurten tot de nieuwste appartementen.
                                    Deze uitgebreide lokale kennis zorgt voor een efficiënte navigatie en snelle service
                                    die aansluit bij de verwachtingen van bewoners in deze Utrechtse wijk.
                                </p>

                                <h3> Onze Uitmuntende Diensten in Overvecht</h3>
                                <h4>Lekkage Opsporing en Reparatie</h4>
                                <p>
                                    Lekkages kunnen grote problemen veroorzaken in woningen in Overvecht, waar veel
                                    appartementencomplexen zijn met gedeelde leidingen. Wij gebruiken moderne detectietechnieken
                                    zoals thermische camera's, druktesten en endoscopische inspecties om lekkages nauwkeurig
                                    te lokaliseren. Van kleine druppelende kranen tot verborgen leidingbreuken - wij
                                    repareren alles vakkundig en duurzaam, met garantie op ons werk.
                                </p>
                                <p>
                                    In Overvecht zien we vaak complexe situaties door appartementencomplexen met gedeelde
                                    installaties. Onze specialisten weten precies hoe deze systemen werken en hoe we
                                    problemen kunnen oplossen zonder andere bewoners te hinderen.
                                </p>

                                <h4>Ontstoppen van Afvoeren</h4>
                                <p>
                                    Verstopte afvoeren zijn een veelvoorkomend probleem in Overvecht, vooral in oudere
                                    woningen met smallere leidingen of in appartementen met verticale afvoerstelsels.
                                    Of het gaat om een verstopte wc, wasbak, douche of keukenafvoer - onze professionele
                                    ontstoppingsdiensten lossen het probleem effectief op. Wij gebruiken moderne apparatuur
                                    zoals hogedrukreinigers en motorische ontstoppers voor grondige resultaten.
                                </p>
                                <p>
                                    In appartementencomplexen in Overvecht zien we vaak verstoppingen die invloed hebben
                                    op meerdere bewoners. Onze ervaring met deze systemen zorgt voor snelle oplossingen
                                    die rekening houden met alle betrokken partijen.
                                </p>

                                <h4>CV-Ketel Service en Verwarmingssystemen</h4>
                                <p>
                                    Een goed werkende CV-ketel is cruciaal voor comfortabel wonen, vooral tijdens de
                                    koude Utrechtse winters. Wij onderhouden, repareren en vervangen CV-ketels van alle
                                    merken. Ook bieden wij advies over energiezuinige alternatieven zoals warmtepompen
                                    en zonneboilers, die steeds populairder worden in Overvecht.
                                </p>
                                <p>
                                    In Overvecht zien we veel woningen uit de jaren '70 die toe zijn aan modernisering.
                                    Wij helpen bewoners bij de overstap naar energiezuinige systemen en kunnen subsidies
                                    regelen voor groene investeringen. Van hybride systemen tot complete warmtepomp
                                    installaties - wij bieden alle moderne oplossingen.
                                </p>

                                <h4>Badkamer Renovaties</h4>
                                <p>
                                    Wilt u uw badkamer in Overvecht een moderne make-over geven? Ons ervaren team verzorgt
                                    complete renovaties van A tot Z. Van het slopen van oude tegels tot het plaatsen van
                                    nieuw sanitair - wij nemen u alles uit handen. Wij werken samen met betrouwbare
                                    partners voor kwalitatieve materialen en zorgen voor minimale overlast tijdens de
                                    werkzaamheden.
                                </p>
                                <p>
                                    In Overvecht zien we vaak renovaties van badkamers uit de jaren '70 die toe zijn
                                    aan modernisering. Ons team heeft ervaring met alle soorten renovaties en weet hoe
                                    we oude installaties het beste kunnen vervangen door moderne, comfortabele oplossingen.
                                </p>

                                <h4>Keukeninstallaties en Wateraansluitingen</h4>
                                <p>
                                    Bij keukenrenovaties in Overvecht zorgen wij voor de complete water- en afvoerinstallatie.
                                    Van het aansluiten van nieuwe apparatuur zoals vaatwassers en wasmachines tot het
                                    plaatsen van extra stopcontacten voor keukenapparaten - wij zorgen dat alles veilig
                                    en volgens de regels gebeurt. Ook kunnen wij moderne keukeninstallaties aansluiten.
                                </p>
                                <p>
                                    Overvecht heeft veel gezinnen met moderne keukens. Ons team heeft ervaring met alle
                                    soorten aansluitingen en weet hoe we rekening moeten houden met de specifieke eisen
                                    van verschillende woningtypes in deze wijk.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Waarom AD-Loodgietersbedrijf in Overvecht?</h3>
                                <ul>
                                    <li><strong>15+ Jaar Ervaring:</strong> Ruime ervaring met alle woningtypes in Overvecht - geen beginners die fouten maken!</li>
                                    <li><strong>Snelle Respons:</strong> Binnen 20 minuten ter plaatse in de wijk - wij houden ons aan onze beloftes</li>
                                    <li><strong>Lokale Expertise:</strong> Diepgaande kennis van Overvecht en alle buurten - wij kennen uw wijk door en door</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten - geen onaangename verrassingen</li>
                                    <li><strong>Garantie:</strong> Alle werkzaamheden worden gegarandeerd - uw investering is 100% beschermd</li>
                                    <li><strong>24/7 Service:</strong> Altijd bereikbaar voor noodgevallen - nood? Wij zijn er voor u!</li>
                                    <li><strong>Appartement Ervaring:</strong> Gespecialiseerd in complexen met gedeelde installaties - wij weten hoe VvE's werken</li>
                                    <li><strong>Moderniseringsadvies:</strong> Expertise in renovatie van oudere woningen - haal het maximale uit uw woning</li>
                                </ul>

                                <h3 style={{marginTop: '3rem'}}>Onze Werkwijze</h3>
                                <p>
                                    Professionaliteit en transparantie staan bij ons centraal. Voordat wij beginnen met
                                    werkzaamheden ontvangt u altijd een duidelijke offerte met vaste prijzen. Wij leggen
                                    precies uit wat er gedaan gaat worden, welke materialen wij gebruiken en hoe lang het
                                    werk gaat duren. Tijdens het werk houden wij u op de hoogte van de voortgang.
                                </p>
                                <p>
                                    Bij appartementencomplexen in Overvecht zorgen wij voor goede communicatie met
                                    bewonerscommissies en VvE's waar nodig. Na afronding van de werkzaamheden ontvangt
                                    u een factuur met garantieverklaring. Wij blijven altijd beschikbaar voor vragen
                                    of problemen die later kunnen ontstaan.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Duurzame Oplossingen voor Overvecht</h3>
                                <p>
                                    Overvecht heeft veel woningen die toe zijn aan verduurzaming. Steeds meer bewoners
                                    kiezen voor groene oplossingen zoals waterbesparende kranen, energiezuinige
                                    verwarmingssystemen, zonneboilers en LED-verlichting. Wij adviseren u graag over
                                    energiezuinige alternatieven en kunnen helpen bij het verkrijgen van subsidies
                                    voor duurzame woningverbeteringen.
                                </p>
                                <p>
                                    Als specialist in Overvecht weten wij precies welke duurzame oplossingen het beste
                                    passen bij uw woningtype. Van slimme thermostaten tot complete warmtepomp systemen -
                                    wij helpen u bij het maken van duurzame keuzes die ook financieel aantrekkelijk zijn.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Preventief Onderhoud voor Woningen in Overvecht</h3>
                                <p>
                                    Woningen in Overvecht hebben vaak installaties die regelmatig onderhoud nodig hebben.
                                    Wij bieden preventief onderhoud om problemen te voorkomen:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van CV-ketels en verwarmingssystemen</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van waterdruk en leidingen</li>
                                    <li>Inspectie van badkamer- en keukeninstallaties</li>
                                    <li>Advies over energiebesparende maatregelen</li>
                                    <li>VvE-ondersteuning voor appartementencomplexen</li>
                                </ul>

                                <h3 style={{marginTop: '3rem'}}>Contact met Uw Loodgieter in Overvecht</h3>
                                <p>
                                    Heeft u een loodgietersprobleem in Overvecht? Neem dan direct contact met ons op.
                                    Bel naar <a href="tel:+31640961848" style={{color: '#007bff', textDecoration: 'none', fontWeight: 'bold'}}>+31 6 40 96 18 48</a> voor spoedeisende gevallen of vul ons contactformulier in voor
                                    een afspraak. Wij komen graag bij u langs voor een vrijblijvende inspectie en offerte.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw vertrouwde loodgieter in Overvecht voor elk probleem,
                                    groot of klein. Met specialistische kennis van alle woningtypes in deze diverse wijk
                                    staan wij voor u klaar.
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

export default LoodgieterOvervechtPage;