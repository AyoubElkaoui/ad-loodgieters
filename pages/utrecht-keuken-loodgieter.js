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

const UtrechtKeukenLoodgieterPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/utrecht-keuken-loodgieter`;
    const pageTitle = 'Keuken Loodgieter Utrecht | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Keuken loodgieter in Utrecht nodig? Wij repareren lekkages, ontstoppen afvoeren en renoveren keukens. 24/7 spoedservice, gegarandeerd vakwerk. Bel: 06 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Specialist in keukenloodgieterswerk in Utrecht met 24/7 spoedservice',
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
            latitude: 52.0907,
            longitude: 5.1214
        },
        areaServed: {
            '@type': 'City',
            name: 'Utrecht',
            addressRegion: 'Utrecht',
            addressCountry: 'NL'
        },
        serviceType: [
            'Keuken Loodgieterswerk',
            'Lekkage reparatie keuken',
            'Afvoer ontstoppen',
            'Kraan reparatie',
            'Vaatwasser aansluiting'
        ]
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="keuken loodgieter Utrecht, lekkage keuken Utrecht, afvoer ontstoppen Utrecht, keuken renovatie Utrecht, spoedloodgieter keuken Utrecht, vaatwasser aansluiting Utrecht" />
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

            {/* Hero Section - Keuken Loodgieter specifiek */}
            <section className="wpo-hero-section wpo-hero-style-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="wpo-hero-content">
                                <div className="wpo-hero-title-top">
                                    <span>KEUKEN SPECIALIST</span>
                                </div>
                                <div className="wpo-hero-title">
                                    <h1>Keuken Loodgieter <span className="highlight">Utrecht</span></h1>
                                </div>
                                <div className="wpo-hero-subtitle">
                                    <h5>Uw specialist voor keukenloodgieterswerk</h5>
                                    <p>
                                        Problemen met uw keukeninstallaties? AD-Loodgietersbedrijf is specialist
                                        in keukenloodgieterswerk in Utrecht. Van lekkende kranen tot verstopte
                                        afvoeren - wij lossen het snel en vakkundig op.
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
                                    <img src="/images/service/badkamer-loodgieter.jpg" alt="Keuken Loodgieter Utrecht" style={{maxHeight: '400px', objectFit: 'cover'}} />
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
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met specialistische kennis van keukeninstallaties bieden wij complete service'} />
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
                                    <p>Altijd paraat voor spoedeisende keuken problemen in Utrecht.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-expert"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Keuken Specialisten</h3>
                                    <p>Gespecialiseerd team voor alle keukenloodgieterswerkzaamheden.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-trust"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Gegarandeerd Vakwerk</h3>
                                    <p>Professionele service met garantie op al onze keukenwerkzaamheden.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uitgebreide informatie over keuken loodgieterswerk */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Keuken Loodgieter Utrecht: Uw Keuken in Goede Handen</h3>
                                <p>
                                    Moderne keukens hebben complexe installaties die specialistische kennis vereisen.
                                    Als keukenloodgieter in Utrecht hebben wij alle expertise om uw keukeninstallaties
                                    perfect te laten functioneren. Van lekkende kranen en verstopte afvoeren tot
                                    complete keukenrenovaties - wij zijn uw betrouwbare partner voor al het
                                    keukenloodgieterswerk in Utrecht.
                                </p>
                                <p>
                                    Ons team van ervaren vakmannen heeft alle expertise om uw keukeninstallaties perfect
                                    te laten functioneren. Wij werken samen met alle grote keukenmerken en kennen de
                                    specifieke eisen van moderne keukenapparatuur. Van Quooker systemen tot ingebouwde
                                    koffiemachines - wij zorgen voor professionele aansluiting volgens de hoogste normen.
                                </p>

                                <h3>Veelvoorkomende Keukenproblemen</h3>
                                <p>
                                    Keukens zijn intensief gebruikt en dat leidt soms tot problemen. De meest
                                    voorkomende keukenproblemen die wij oplossen zijn:
                                </p>
                                <ul>
                                    <li>Lekkende kranen en mengkranen</li>
                                    <li>Verstopte afvoeren en gootstenen</li>
                                    <li>Problemen met vaatwasser aansluiting</li>
                                    <li>Lekkages onder het aanrecht</li>
                                    <li>Defecte garbage disposals</li>
                                    <li>Problemen met warm water</li>
                                </ul>
                                <p>
                                    In Utrecht zien we vaak deze problemen in moderne keukens. Onze specialisten weten
                                    precies hoe we elk probleem snel en effectief oplossen.
                                </p>

                                <h3>Onze Keuken Loodgietersdiensten</h3>
                                <h4>Lekkage Opsporing en Reparatie</h4>
                                <p>
                                    Lekkages in de keuken kunnen grote schade veroorzaken aan kastjes en vloeren.
                                    Wij gebruiken moderne detectietechnieken om lekkages snel te lokaliseren en te
                                    repareren. Van kleine druppelende kranen tot verborgen leidingbreuken onder het
                                    aanrecht - wij lossen alles op met garantie.
                                </p>
                                <p>
                                    In Utrechtse keukens zien we vaak lekkages door oude aansluitingen of moderne
                                    apparatuur. Onze ervaring zorgt voor snelle en duurzame oplossingen.
                                </p>

                                <h4>Ontstoppen van Afvoeren</h4>
                                <p>
                                    Verstopte keukenafvoeren zijn een veelvoorkomend probleem. Vet, etensresten en
                                    ander vuil kunnen de afvoer blokkeren. Ons team gebruikt professionele apparatuur
                                    zoals hogedrukreinigers en motorische ontstoppers om zelfs hardnekkige verstoppingen
                                    te verwijderen. Wij geven ook advies over preventie.
                                </p>
                                <p>
                                    Utrechtse bewoners koken veel en dat leidt soms tot verstoppingen. Onze specialisten
                                    weten precies hoe we deze problemen effectief oplossen en voorkomen.
                                </p>

                                <h4>Kraan Reparatie en Vervanging</h4>
                                <p>
                                    Defecte kranen kunnen frustrerend zijn. Wij repareren alle soorten kranen: van
                                    enkele hendel kranen tot klassieke twee-greeps kranen. Als reparatie niet meer
                                    lonend is, vervangen wij de kraan door een moderne, waterbesparende versie.
                                </p>
                                <p>
                                    In Utrecht zien we veel wensen voor moderne kranen. Ons team adviseert u graag
                                    over de beste keuzes en zorgt voor een professionele installatie.
                                </p>

                                <h4>Vaatwasser Aansluiting</h4>
                                <p>
                                    Een vaatwasser aansluiting vereist precisie. Wij zorgen voor de juiste water-
                                    en afvoeraansluiting volgens de fabrieksvoorschriften. Ook lossen wij problemen
                                    op met bestaande aansluitingen die niet goed functioneren.
                                </p>
                                <p>
                                    Moderne vaatwassers hebben specifieke aansluit eisen. Ons team weet precies hoe
                                    we deze apparaten veilig en correct aansluiten.
                                </p>

                                <h4>Warm Water Problemen</h4>
                                <p>
                                    Geen warm water in de keuken? Dit kan verschillende oorzaken hebben. Wij controleren
                                    de CV-ketel aansluiting, thermostatische mengkranen en leidingisolatie. Ook kunnen
                                    wij warm water systemen optimaliseren voor betere prestaties.
                                </p>
                                <p>
                                    In Utrecht zien we vaak problemen met warm water in keukens. Onze specialisten
                                    diagnosticeren het probleem snel en bieden duurzame oplossingen.
                                </p>

                                <h4>Keuken Renovatie Loodgieterswerk</h4>
                                <p>
                                    Bij een keukenrenovatie zorgen wij voor alle loodgieterswerkzaamheden. Van het
                                    verplaatsen van aansluitingen tot het plaatsen van nieuwe kranen en apparatuur -
                                    wij zorgen dat alles perfect aansluit en functioneert.
                                </p>
                                <p>
                                    Utrechtse keukenrenovaties zijn vaak complex. Ons team heeft ervaring met alle
                                    soorten renovaties en weet hoe we rekening houden met moderne keukenapparatuur.
                                </p>

                                <h3>Moderne Keukeninstallaties</h3>
                                <p>
                                    Moderne keukens hebben vaak geavanceerde installaties zoals:
                                </p>
                                <ul>
                                    <li>Quooker kokend water kranen</li>
                                    <li>Ingebouwde koffiemachines</li>
                                    <li>Ijsmachines en wijnkoelers</li>
                                    <li>Waterzuiveringssystemen</li>
                                    <li>Automatische afzuigsystemen</li>
                                </ul>
                                <p>
                                    Ons team heeft ervaring met al deze moderne installaties en zorgt voor een
                                    professionele aansluiting volgens de hoogste veiligheidsnormen.
                                </p>

                                <h3>Preventief Onderhoud</h3>
                                <p>
                                    Voorkomen is beter dan genezen. Wij bieden preventief onderhoud voor uw keukeninstallaties:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van kranen en afvoeren</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van vaatwasser aansluitingen</li>
                                    <li>Advies over waterbesparende maatregelen</li>
                                </ul>

                                <h3>Duurzame Keuken Oplossingen</h3>
                                <p>
                                    Utrecht loopt voorop in duurzaamheid. Voor uw keuken adviseren wij:
                                </p>
                                <ul>
                                    <li>Waterbesparende kranen en systemen</li>
                                    <li>Energiezuinige warm water oplossingen</li>
                                    <li>Waterzuiveringssystemen</li>
                                    <li>Duurzame materialen en afwerkingen</li>
                                </ul>

                                <h3>Waarom Kiezen voor AD-Loodgietersbedrijf?</h3>
                                <ul>
                                    <li><strong>Keuken Specialisten:</strong> Gespecialiseerd in keukenloodgieterswerk</li>
                                    <li><strong>15+ Jaar Ervaring:</strong> Ruime ervaring met alle keukenmerken</li>
                                    <li><strong>Snelle Service:</strong> Binnen een uur ter plaatse bij spoedgevallen</li>
                                    <li><strong>Moderne Technieken:</strong> Gebruik van de nieuwste apparatuur</li>
                                    <li><strong>Garantie:</strong> Uitgebreide garantie op alle werkzaamheden</li>
                                    <li><strong>24/7 Bereikbaar:</strong> Altijd hulp wanneer u het nodig heeft</li>
                                    <li><strong>Lokale Kennis:</strong> Diepgaande kennis van Utrecht en alle wijken</li>
                                    <li><strong>Duurzaam Advies:</strong> Expertise in groene keuken oplossingen</li>
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

                                <h3>Contact voor Uw Keuken Probleem</h3>
                                <p>
                                    Heeft u een probleem met uw keukeninstallaties in Utrecht? Neem dan direct contact
                                    met ons op. Bel naar 06 40 96 18 48 voor spoedeisende gevallen of vul ons
                                    contactformulier in voor een afspraak. Wij komen graag bij u langs voor een
                                    inspectie en offerte.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw specialist in keukenloodgieterswerk in Utrecht. Met
                                    specialistische kennis van moderne keukeninstallaties staan wij voor u klaar.
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

export default UtrechtKeukenLoodgieterPage;