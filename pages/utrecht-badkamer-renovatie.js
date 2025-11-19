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

const UtrechtBadkamerRenovatiePage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/utrecht-badkamer-renovatie`;
    const pageTitle = 'Badkamer Renovatie Utrecht | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Badkamer renovatie in Utrecht? Compleet loodgieterswerk voor uw badkamer. Van lekkage reparatie tot volledige renovatie. 24/7 service, ervaren vakmannen. Bel: +31 6 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Complete badkamer renovatie en loodgieterswerk in Utrecht met 24/7 spoedservice',
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
            'Badkamer Renovatie',
            'Lekkage reparatie badkamer',
            'Douche installatie',
            'Toilet reparatie',
            'Wastafel aansluiting'
        ]
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="badkamer renovatie Utrecht, badkamer lekkage Utrecht, douche installatie Utrecht, toilet reparatie Utrecht, badkamer loodgieter Utrecht, badkamer vernieuwen Utrecht" />
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

            {/* Hero Section - Badkamer Renovatie specifiek */}
            <section className="wpo-hero-section wpo-hero-style-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="wpo-hero-content">
                                <div className="wpo-hero-title-top">
                                    <span>COMPLEET LOODGIETERSWERK</span>
                                </div>
                                <div className="wpo-hero-title">
                                    <h1>Badkamer Renovatie <span className="highlight">Utrecht</span></h1>
                                </div>
                                <div className="wpo-hero-subtitle">
                                    <h5>Uw specialist in badkamer renovatie</h5>
                                    <p>
                                        Wilt u uw badkamer volledig vernieuwen? AD-Loodgietersbedrijf verzorgt
                                        compleet badkamer renovatie loodgieterswerk in Utrecht. Van lekkage
                                        reparatie tot nieuwe installaties - wij doen het allemaal professioneel.
                                    </p>
                                </div>
                                <div className="wpo-hero-btn">
                                    <a href="tel:0640961848" className="theme-btn">
                                        <i className="fi flaticon-phone-call"></i> Bel direct: +31 6 40 96 18 48
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
                                    <img src="/images/service/badkamer-loodgieter.jpg" alt="Badkamer Renovatie Utrecht" style={{maxHeight: '400px', objectFit: 'cover'}} />
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
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met jarenlange ervaring in badkamer renovaties bieden wij complete service'} />
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
                                    <p>Altijd paraat voor spoedeisende badkamer problemen in Utrecht.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-expert"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Ervaren Vakmannen</h3>
                                    <p>Gespecialiseerd team voor complete badkamer renovaties.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-trust"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Compleet Werk</h3>
                                    <p>Alles onder één dak: van lekkage tot volledige renovatie.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uitgebreide informatie over badkamer renovaties */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Badkamer Renovatie Utrecht: Uw Droombadkamer Wordt Werkelijkheid</h3>
                                <p>
                                    Een verouderde badkamer kan niet alleen onaantrekkelijk zijn, maar ook problemen
                                    veroorzaken. Lekkages, verstoppingen, versleten sanitair en inefficiënte installaties
                                    zijn veelvoorkomende problemen. Een complete renovatie lost al deze problemen op
                                    en geeft uw badkamer een moderne uitstraling.
                                </p>
                                <p>
                                    Moderne badkamers zijn energiezuiniger, comfortabeler en makkelijker te onderhouden.
                                    Met onze expertise helpen wij u bij het kiezen van de juiste materialen en
                                    installaties voor een duurzame en functionele badkamer in Utrecht.
                                </p>

                                <h3>Onze Badkamer Renovatie Diensten</h3>
                                <h4>Complete Badkamer Renovatie</h4>
                                <p>
                                    Bij een complete badkamer renovatie nemen wij alle aspecten voor onze rekening.
                                    Van het slopen van de oude installaties tot het plaatsen van nieuw sanitair,
                                    tegels en verlichting - wij zorgen voor een perfect eindresultaat. Ons team werkt
                                    netjes en efficiënt om overlast tot een minimum te beperken.
                                </p>
                                <p>
                                    In Utrecht zien we vaak wensen voor luxe badkamers met moderne voorzieningen.
                                    Ons team heeft ervaring met alle soorten renovaties, van kleine opknapbeurten tot
                                    complete make-overs, en weet hoe we rekening houden met de specifieke eisen van
                                    Utrechtse woningen.
                                </p>

                                <h4>Lekkage Reparatie en Preventie</h4>
                                <p>
                                    Voordat wij beginnen met de renovatie lossen wij eerst eventuele lekkages op.
                                    Wij gebruiken moderne technieken om lekkages te detecteren en te repareren.
                                    Ook geven wij advies over preventieve maatregelen om toekomstige lekkages te
                                    voorkomen, zoals het plaatsen van lekkage detectors en het gebruik van
                                    waterbesparende kranen.
                                </p>
                                <p>
                                    In Utrecht zien we vaak lekkages in oudere woningen die toe zijn aan renovatie.
                                    Onze specialisten weten precies hoe we problemen structureel oplossen tijdens
                                    de renovatie.
                                </p>

                                <h4>Moderne Sanitair Installatie</h4>
                                <p>
                                    Wij plaatsen al het moderne sanitair dat u wenst: van design radiatoren en
                                    regendouches tot comfortabele baden en moderne toiletten. Ons team zorgt voor
                                    een professionele installatie volgens alle veiligheidsnormen. Wij werken samen
                                    met gerenommeerde merken voor kwalitatief sanitair.
                                </p>
                                <p>
                                    Utrechtse bewoners hebben vaak specifieke wensen voor hun badkamer. Ons team
                                    heeft ervaring met alle soorten sanitair en weet hoe we rekening houden met
                                    de beschikbare ruimte en uw persoonlijke wensen.
                                </p>

                                <h4>Tegels en Vloeren</h4>
                                <p>
                                    Voor de afwerking van uw badkamer werken wij samen met ervaren tegelzetters.
                                    Wij adviseren u over de beste materialen voor uw situatie: van moderne grote
                                    tegels tot klassieke kleine tegels. Ook kunnen wij vloerverwarming installeren
                                    voor extra comfort.
                                </p>
                                <p>
                                    In Utrecht zien we veel wensen voor moderne, onderhoudsvriendelijke materialen.
                                    Ons team adviseert u graag over de beste keuzes voor uw specifieke situatie en
                                    budget.
                                </p>

                                <h4>Elektrische Installaties</h4>
                                <p>
                                    Moderne badkamers hebben vaak extra elektrische installaties zoals design
                                    verlichting, verwarmde spiegels en stopcontacten voor elektrische tandenborstels.
                                    Ons team zorgt voor een veilige installatie volgens de geldende elektriciteitsnormen.
                                </p>
                                <p>
                                    Utrecht loopt voorop in moderne technologie. Wij kunnen uw badkamer uitrusten
                                    met slimme verlichting, domotica en andere moderne voorzieningen die het comfort
                                    aanzienlijk verhogen.
                                </p>

                                <h3>Het Renovatie Proces</h3>
                                <p>
                                    Een badkamer renovatie is een complex project dat zorgvuldig gepland moet worden.
                                    Ons proces bestaat uit de volgende stappen:
                                </p>
                                <ol>
                                    <li><strong>Vrijblijvende Adviesgesprek:</strong> Wij komen bij u langs voor een inspectie en bespreken uw wensen</li>
                                    <li><strong>Offerte en Planning:</strong> Wij maken een duidelijke offerte en plannen de werkzaamheden</li>
                                    <li><strong>Voorbereiding:</strong> Wij organiseren alle materialen en sluiten alternatieve voorzieningen aan</li>
                                    <li><strong>Uitvoering:</strong> Ons team werkt netjes en efficiënt aan uw badkamer</li>
                                    <li><strong>Afwerking en Controle:</strong> Wij controleren alles en zorgen voor een perfect eindresultaat</li>
                                    <li><strong>Oplevering:</strong> Wij laten u zien hoe alles werkt en geven onderhoudsadvies</li>
                                </ol>

                                <h3>Duurzame Badkamer Oplossingen</h3>
                                <p>
                                    Steeds meer mensen kiezen voor duurzame badkamer oplossingen. Wij adviseren u graag
                                    over energiezuinige alternatieven zoals:
                                </p>
                                <ul>
                                    <li>Waterbesparende kranen en douches</li>
                                    <li>Energiezuinige verwarmingssystemen</li>
                                    <li>LED-verlichting</li>
                                    <li>Duurzame materialen</li>
                                    <li>Zonneboilers voor warm water</li>
                                </ul>
                                <p>
                                    Utrecht loopt voorop in duurzaamheid. Wij helpen u bij het maken van groene keuzes
                                    die ook financieel aantrekkelijk zijn door subsidies en belastingvoordelen.
                                </p>

                                <h3>Waarom Kiezen voor AD-Loodgietersbedrijf?</h3>
                                <ul>
                                    <li><strong>15+ Jaar Ervaring:</strong> Ruime ervaring met badkamer renovaties in Utrecht</li>
                                    <li><strong>Compleet Service:</strong> Alles onder één dak, van planning tot oplevering</li>
                                    <li><strong>Gecertificeerde Vakmannen:</strong> Professioneel team met alle benodigde certificaten</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten</li>
                                    <li><strong>Garantie:</strong> Uitgebreide garantie op alle werkzaamheden</li>
                                    <li><strong>24/7 Service:</strong> Altijd bereikbaar voor vragen of problemen</li>
                                    <li><strong>Lokale Kennis:</strong> Diepgaande kennis van Utrecht en alle woningtypes</li>
                                    <li><strong>Duurzaam Advies:</strong> Expertise in groene renovatie oplossingen</li>
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

                                <h3>Preventief Onderhoud na Renovatie</h3>
                                <p>
                                    Na uw badkamer renovatie is het belangrijk om goed onderhoud te plegen. Wij bieden:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van alle installaties</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van waterdruk en sanitair</li>
                                    <li>Advies over onderhoud van materialen</li>
                                    <li>Spoedreparaties binnen garantie</li>
                                </ul>

                                <h3>Contact voor Uw Badkamer Renovatie</h3>
                                <p>
                                    Wilt u uw badkamer in Utrecht laten renoveren? Neem dan contact met ons op voor
                                    een vrijblijvend adviesgesprek. Bel naar 06 40 96 18 48 of vul ons contactformulier
                                    in. Wij komen graag bij u langs om uw wensen te bespreken en een offerte te maken.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw specialist in badkamer renovatie in Utrecht. Met jarenlange
                                    ervaring en expertise in moderne renovaties staan wij voor u klaar.
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

export default UtrechtBadkamerRenovatiePage;