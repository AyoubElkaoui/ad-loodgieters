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

const LoodgieterUtrechtPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/loodgieter-utrecht`;
    const pageTitle = 'Loodgieter Utrecht | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Professionele loodgieter in Utrecht voor lekkages, verstoppingen, CV-installaties en badkamer renovaties. 24/7 spoedservice, gegarandeerd vakwerk. Bel: +31 6 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Professionele loodgieter in Utrecht met 24/7 spoedservice voor lekkages, verstoppingen en installaties',
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
            latitude: 52.1394,
            longitude: 5.0167
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                    'Friday', 'Saturday', 'Sunday'
                ],
                opens: '00:00',
                closes: '23:59'
            }
        ],
        areaServed: [
            { '@type': 'Place', name: 'Utrecht' },
            { '@type': 'Place', name: 'Maarssen' },
            { '@type': 'Place', name: 'Nieuwegein' },
            { '@type': 'Place', name: 'Overvecht' },
            { '@type': 'Place', name: 'Leidsche Rijn' },
            { '@type': 'Place', name: 'Vleuten' }
        ],
        serviceType: [
            'Loodgieterswerk',
            'Lekkage reparatie',
            'Verstopping ontstoppen',
            'CV-installatie',
            'Badkamer renovatie',
            'Keuken loodgieterswerk'
        ],
        sameAs: [
            'https://www.facebook.com/adloodgieters',
            'https://www.instagram.com/adloodgieters'
        ]
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="loodgieter Utrecht, spoedloodgieter Utrecht, lekkage Utrecht, verstopping ontstoppen Utrecht, cv ketel reparatie Utrecht, badkamer renovatie Utrecht, keuken loodgieter Utrecht, 24/7 loodgieter Utrecht, noodloodgieter Utrecht" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={`${siteUrl}/images/contact.png`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/contact.png`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Loodgieter Utrecht'} pagesub={'loodgieter-utrecht'} />

            {/* Utrecht content sectie */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <img src="/images/service/waterleiding-reparatie.jpg" alt="Loodgieter Utrecht" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-content landing-content">
                                    <div className="wpo-section-title-s2">
                                        <h2>Uw Betrouwbare Partner</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            AD-Loodgietersbedrijf is uw vertrouwde loodgieter in Utrecht en omgeving.
                                            Met meer dan 15 jaar ervaring staan wij garant voor vakwerk van de hoogste kwaliteit.
                                        </p>
                                        <p>
                                            Van spoedeisende lekkage reparatie tot complete badkamer renovatie -
                                            wij lossen elk loodgietersprobleem vakkundig en snel op, 24/7 beschikbaar.
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
                            <SectionTitle MainTitle={'Waarom AD-Loodgietersbedrijf in Utrecht?'} SubTitle={'Als lokale loodgieter kennen wij de regio door en door'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-clock"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>24/7 Spoedservice</h3>
                                    <p>Altijd bereikbaar voor noodgevallen, ook 's nachts en in het weekend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-experience"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>15+ Jaar Ervaring</h3>
                                    <p>Gecertificeerde vakmannen met jarenlange ervaring in Utrecht.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-guarantee"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Garantie op Werk</h3>
                                    <p>Alle reparaties en installaties worden gegarandeerd voor uw gemoedsrust.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uitgebreide informatie over Utrecht */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <div style={{textAlign: 'center', marginBottom: '40px'}}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                                        padding: '15px 30px',
                                        borderRadius: '50px',
                                        marginBottom: '20px',
                                        border: '1px solid rgba(102, 126, 234, 0.2)'
                                    }}>
                                        <span style={{fontSize: '24px'}}></span>
                                        <span style={{fontWeight: '600', color: '#667eea'}}>Uw Vertrouwde Loodgieter in Utrecht</span>
                                        <span style={{fontSize: '24px'}}></span>
                                    </div>
                                </div>

                                <h3>Utrecht: Historische Stad met Moderne Eisen</h3>
                                <p>
                                    Utrecht is een stad vol contrasten - van historische panden in het centrum tot moderne
                                    appartementencomplexen in de nieuwbouwwijken. Als loodgieter in Utrecht kennen wij
                                    alle aspecten van deze diverse stad. Of u nu woont in een monumentaal pand aan de
                                    Oudegracht of in een modern appartement in Leidsche Rijn - wij bieden oplossingen
                                    die perfect aansluiten bij uw woningtype en de specifieke eisen van Utrecht.
                                </p>
                                <p>
                                    Met meer dan 15 jaar ervaring in Utrecht begrijpen wij hoe belangrijk het is om
                                    rekening te houden met de verschillende bouwperioden en materialen die in deze stad
                                    worden gebruikt. Van oude gietijzeren leidingen tot moderne kunststof systemen -
                                    wij kennen alle technieken en materialen die in Utrecht voorkomen.
                                </p>

                                <div className="highlight-box">
                                    <h4>Snelle en Betrouwbare Service in Utrecht</h4>
                                    <p>
                                        Dankzij onze centrale ligging in Maarssen bereiken wij alle wijken van Utrecht
                                        binnen 15-25 minuten. Bij spoedeisende lekkages of verstoppingen zijn wij binnen
                                        een uur ter plaatse om verdere schade te voorkomen. Deze snelle responstijd is
                                        cruciaal in een drukke stad als Utrecht, waar bewoners hoge eisen stellen aan
                                        service en kwaliteit.
                                    </p>
                                    <p>
                                        Wij kennen Utrecht door en door - van de historische binnenstad tot de moderne
                                        buitenwijken. Deze uitgebreide lokale kennis zorgt voor een efficiënte navigatie
                                        en snelle service die aansluit bij de verwachtingen van Utrechtse bewoners.
                                    </p>
                                </div>

                                <h3> Onze Uitmuntende Diensten in Utrecht</h3>

                                <div className="service-list">
                                    <h4>Lekkage Opsporing en Reparatie</h4>
                                    <p>
                                        Lekkages kunnen ernstige schade veroorzaken, vooral in historische panden in Utrecht
                                        waar leidingen soms verborgen liggen in monumentale constructies. Wij gebruiken
                                        moderne detectietechnieken zoals thermische camera's, druktesten en endoscopische
                                        inspecties om lekkages nauwkeurig te lokaliseren. Van kleine druppelende kranen
                                        tot grote leidingbreuken - wij repareren alles vakkundig en duurzaam.
                                    </p>
                                    <p>
                                        In Utrecht zien we vaak complexe situaties door de mengeling van oude en nieuwe
                                        bouwstijlen. Onze specialisten weten precies hoe we problemen in elk type woning
                                        het beste kunnen aanpakken, met respect voor monumentale waarden waar nodig.
                                    </p>
                                </div>

                                <div className="service-list">
                                    <h4>Ontstoppen van Afvoeren</h4>
                                    <p>
                                        Verstopte afvoeren zijn een veelvoorkomend probleem in Utrecht, vooral in oudere
                                        woningen met smallere leidingen of in moderne appartementen met gedeelde afvoersystemen.
                                        Of het gaat om een verstopte wc, wasbak, douche of keukenafvoer - onze professionele
                                        ontstoppingsdiensten lossen het probleem snel op. Wij gebruiken moderne apparatuur
                                        zoals hogedrukreinigers en motorische ontstoppers voor grondige resultaten.
                                    </p>
                                    <p>
                                        In Utrecht zien we vaak verstoppingen door oude materialen, kalkaanslag of door
                                        de specifieke bouwtechnieken die in verschillende wijken worden gebruikt. Onze
                                        ervaring met alle systemen zorgt voor snelle en effectieve oplossingen.
                                    </p>
                                </div>

                                <div className="service-list">
                                    <h4>CV-Ketel Service en Verwarmingssystemen</h4>
                                    <p>
                                        Een goed werkende CV-ketel is cruciaal voor comfortabel wonen, vooral tijdens de
                                        koude Utrechtse winters. Wij onderhouden, repareren en vervangen CV-ketels van alle
                                        merken. Ook bieden wij advies over energiezuinige alternatieven zoals warmtepompen,
                                        zonneboilers of stadsverwarming aansluitingen die steeds populairder worden in Utrecht.
                                    </p>
                                    <p>
                                        Utrecht loopt voorop in duurzaamheid. Wij helpen bewoners bij de overstap naar
                                        groene verwarmingssystemen en kunnen subsidies regelen voor energiezuinige investeringen.
                                        Van hybride systemen tot complete warmtepomp installaties - wij bieden alle moderne
                                        oplossingen.
                                    </p>
                                </div>

                                <div className="feature-grid">
                                    <div className="feature-item">
                                        <h4>Badkamer Renovaties</h4>
                                        <p>
                                            Wilt u uw badkamer in Utrecht een moderne make-over geven? Ons ervaren team verzorgt
                                            complete renovaties van A tot Z. Van het slopen van oude tegels tot het plaatsen van
                                            nieuw sanitair - wij nemen u alles uit handen.
                                        </p>
                                    </div>
                                    <div className="feature-item">
                                        <h4>Keukeninstallaties</h4>
                                        <p>
                                            Bij keukenrenovaties zorgen wij voor complete water- en afvoerinstallatie.
                                            Van vaatwassers tot Quooker systemen - alles wordt veilig en volgens de regels aangesloten.
                                        </p>
                                    </div>
                                </div>

                                <div className="stats-section">
                                    <h3>Waarom AD-Loodgietersbedrijf in Utrecht?</h3>
                                    <div className="stats-grid">
                                        <div className="stat-item">
                                            <span className="number">15+</span>
                                            <span className="label">Jaar Ervaring</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="number">24/7</span>
                                            <span className="label">Bereikbaar</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="number">100%</span>
                                            <span className="label">Gegarandeerd</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="number">25min</span>
                                            <span className="label">Respons Tijd</span>
                                        </div>
                                    </div>
                                </div>

                                <ul>
                                    <li><strong> Historische Expertise:</strong> Ervaring met monumentale panden en moderne bouw - wij kennen Utrecht door en door</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten - geen onaangename verrassingen</li>
                                    <li><strong>🌱 Duurzaam Advies:</strong> Expertise in groene oplossingen voor Utrecht - bespaar op uw energiekosten</li>
                                    <li><strong>Monumentenzorg:</strong> Respect voor historische waarden waar nodig - wij waarderen erfgoed</li>
                                </ul>

                                <h3 style={{marginTop: '3rem'}}>Onze Werkwijze</h3>
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

                                <h3 style={{marginTop: '3rem'}}>Duurzame Oplossingen voor Utrecht</h3>
                                <p>
                                    Utrecht loopt voorop in duurzaamheid. Steeds meer bewoners kiezen voor groene oplossingen
                                    zoals waterbesparende kranen, energiezuinige verwarmingssystemen, zonneboilers en
                                    LED-verlichting. Wij adviseren u graag over energiezuinige alternatieven en kunnen
                                    helpen bij het verkrijgen van subsidies voor duurzame woningverbeteringen.
                                </p>
                                <p>
                                    Als specialist in Utrecht weten wij precies welke duurzame oplossingen het beste
                                    passen bij uw woning en buurt. Van slimme thermostaten tot aansluiting op het
                                    Utrechtse warmtenet - wij helpen u bij het maken van duurzame keuzes.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Preventief Onderhoud</h3>
                                <p>
                                    Voorkomen is beter dan genezen. Wij bieden preventief onderhoud om problemen te voorkomen:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van CV-ketels en verwarmingssystemen</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van waterdruk en leidingen</li>
                                    <li>Inspectie van badkamer- en keukeninstallaties</li>
                                    <li>Advies over energiebesparende maatregelen</li>
                                    <li>Monumentenzorg voor historische panden</li>
                                </ul>

                                <div className="contact-highlight">
                                    <h3>Contact met Uw Loodgieter in Utrecht</h3>
                                    <p>
                                        Heeft u een loodgietersprobleem in Utrecht? Neem dan direct contact met ons op.
                                        Wij komen graag bij u langs voor een vrijblijvende inspectie en offerte.
                                    </p>
                                    <a href="tel:+31640961848" className="phone-link">
                                        <i className="fi flaticon-phone-call"></i> Bel direct: +31 6 40 96 18 48
                                    </a>
                                </div>
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

export default LoodgieterUtrechtPage;