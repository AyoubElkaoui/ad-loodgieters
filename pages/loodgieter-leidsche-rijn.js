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

const LoodgieterLeidscheRijnPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/loodgieter-leidsche-rijn`;
    const pageTitle = 'Loodgieter Leidsche Rijn Utrecht | 24/7 Spoedservice AD-Loodgietersbedrijf';
    const description = 'Professionele loodgieter in Leidsche Rijn Utrecht voor moderne woningen. Gespecialiseerd in nieuwbouw, lekkages en installaties. 24/7 spoedservice. Bel: +31 6 40 96 18 48.';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        description: 'Professionele loodgieter in Leidsche Rijn Utrecht gespecialiseerd in moderne woningen',
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
            latitude: 52.0894,
            longitude: 5.0667
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 52.0894,
                longitude: 5.0667
            },
            geoRadius: 3000,
            name: 'Leidsche Rijn, Utrecht'
        },
        serviceType: [
            'Loodgieterswerk Leidsche Rijn',
            'Moderne installaties',
            'Nieuwbouw lekkage reparatie',
            'CV-systemen moderne woningen',
            'Regenwaterafvoer systemen'
        ]
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="loodgieter Leidsche Rijn Utrecht, lekkage Leidsche Rijn, nieuwe bouw loodgieter Utrecht, sanitair Leidsche Rijn, cv-ketel Leidsche Rijn, moderne woningen loodgieter" />
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
            <PageTitle pageTitle={'Loodgieter Leidsche Rijn'} pagesub={'loodgieter-leidsche-rijn'} />

            {/* Leidsche Rijn specifieke content sectie */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <img src="/images/service/pan-xiaozhen-IYE0ImQlY90-unsplash.jpg" alt="Loodgieter Leidsche Rijn Utrecht" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-content landing-content">
                                    <div className="wpo-section-title-s2">
                                        <h2>Specialist in Moderne Woningen</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            Leidsche Rijn is een moderne wijk met veel nieuwbouw. Als specialist
                                            in moderne installaties kennen wij alle systemen en materialen die
                                            in deze wijk worden gebruikt.
                                        </p>
                                        <p>
                                            Van lekkage reparatie tot complete renovatie - wij bieden professionele
                                            oplossingen voor elk loodgietersprobleem in Leidsche Rijn.
                                        </p>
                                        <div className="wpo-about-btn" style={{marginTop: '2rem'}}>
                                            <a href="tel:0640961848" className="theme-btn" style={{color: 'white'}}>
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
                            <SectionTitle MainTitle={'Waarom kiezen voor AD-Loodgietersbedrijf?'} SubTitle={'Met specialistische kennis van moderne bouwtechnieken'} />
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
                                    <p>Altijd paraat voor noodgevallen in Leidsche Rijn, ook buiten kantooruren.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-expert"></i>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>Moderne Expertise</h3>
                                    <p>Gespecialiseerd in nieuwbouw en moderne installaties in Leidsche Rijn.</p>
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

            {/* Uitgebreide informatie over Leidsche Rijn */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-about-content landing-content">
                                <h3>Leidsche Rijn: Een Moderne Wijk met Moderne Eisen</h3>
                                <h3>Leidsche Rijn: Een Moderne Wijk met Moderne Eisen</h3>
                                <p>
                                    Leidsche Rijn is een van de meest moderne wijken van Utrecht, gebouwd volgens de nieuwste
                                    bouwstandaarden en duurzaamheidsnormen. Als specialist in moderne woningbouw kennen wij
                                    alle specifieke kenmerken van deze wijk door en door. Van energiezuinige installaties
                                    tot slimme woningtechnologie - wij bieden oplossingen die perfect aansluiten bij de
                                    architectuur en eisen van Leidsche Rijn.
                                </p>
                                <p>
                                    Met meer dan 15 jaar ervaring in moderne bouwtechnieken begrijpen wij hoe belangrijk
                                    het is om installaties te gebruiken die passen bij de bouwperiode en duurzaamheidsdoelstellingen
                                    van deze vooruitstrevende wijk. Onze vakmannen zijn gespecialiseerd in de nieuwste
                                    technologieën en materialen die in Leidsche Rijn worden gebruikt.
                                </p>

                                <h3>Snelle en Betrouwbare Service in Leidsche Rijn</h3>
                                <p>
                                    Dankzij onze strategische ligging bereiken wij Leidsche Rijn binnen 10-15 minuten.
                                    Bij spoedeisende lekkages of verstoppingen zijn wij binnen een half uur ter plaatse
                                    om verdere schade te voorkomen. Deze snelle responstijd is cruciaal in een moderne
                                    wijk als Leidsche Rijn, waar bewoners hoge eisen stellen aan service en kwaliteit.
                                </p>
                                <p>
                                    Wij kennen Leidsche Rijn als onze broekzak en weten precies waar de drukste straten
                                    zijn en hoe we het beste kunnen navigeren. Deze lokale kennis zorgt voor een efficiënte
                                    en snelle service die aansluit bij de moderne verwachtingen van bewoners in deze wijk.
                                </p>

                                <h3> Onze Uitmuntende Diensten in Leidsche Rijn</h3>
                                <p>
                                    Lekkages kunnen ernstige schade veroorzaken aan moderne woningen in Leidsche Rijn.
                                    Wij gebruiken geavanceerde detectietechnieken zoals thermische camera's, druktesten
                                    en endoscopische inspecties om lekkages nauwkeurig te lokaliseren. Van kleine druppelende
                                    kranen tot verborgen leidingbreuken in betonnen constructies - wij repareren alles
                                    vakkundig en duurzaam, met garantie op ons werk.
                                </p>
                                <p>
                                    In moderne woningen zoals die in Leidsche Rijn zijn leidingen vaak verborgen in vloeren,
                                    muren of plafonds. Onze specialisten weten precies hoe deze systemen werken en hoe
                                    we ze het beste kunnen repareren zonder onnodige schade aan de constructie.
                                </p>

                                <h4>Ontstoppen van Afvoeren</h4>
                                <p>
                                    Verstopte afvoeren zijn een veelvoorkomend probleem, zelfs in moderne woningen.
                                    Of het gaat om een verstopte wc, wasbak, douche of keukenafvoer - onze professionele
                                    ontstoppingsdiensten lossen het probleem effectief op. Wij gebruiken moderne apparatuur
                                    zoals hogedrukreinigers, motorische ontstoppers en hydro-jetting systemen voor grondige
                                    en duurzame resultaten.
                                </p>
                                <p>
                                    In Leidsche Rijn zien we vaak verstoppingen door moderne materialen zoals kunststof
                                    leidingen of door de specifieke bouwtechnieken die in deze wijk worden gebruikt.
                                    Onze ervaring met deze systemen zorgt voor snelle en effectieve oplossingen.
                                </p>

                                <h4>CV-Ketel Service en Moderne Verwarmingssystemen</h4>
                                <p>
                                    Moderne woningen in Leidsche Rijn zijn vaak uitgerust met energiezuinige verwarmingssystemen
                                    zoals warmtepompen, zonneboilers of hybride CV-ketels. Wij onderhouden, repareren en
                                    vervangen alle soorten verwarmingssystemen. Ook bieden wij advies over energiezuinige
                                    alternatieven en kunnen helpen bij het verkrijgen van subsidies voor groene investeringen.
                                </p>
                                <p>
                                    Als specialist in moderne bouwtechnieken weten wij precies welke systemen het beste
                                    passen bij de woningen in Leidsche Rijn. Wij adviseren u graag over de nieuwste
                                    ontwikkelingen op het gebied van duurzame verwarming en kunnen complete systemen
                                    ontwerpen en installeren.
                                </p>

                                <h4>Badkamer Renovaties in Moderne Woningen</h4>
                                <p>
                                    Wilt u uw badkamer in Leidsche Rijn een moderne make-over geven? Ons ervaren team
                                    verzorgt complete renovaties van A tot Z. Van het slopen van oude installaties tot
                                    het plaatsen van nieuw sanitair, tegels en verlichting - wij nemen u alles uit handen.
                                    Wij werken samen met betrouwbare partners voor kwalitatieve materialen en zorgen
                                    voor minimale overlast tijdens de werkzaamheden.
                                </p>
                                <p>
                                    In moderne woningen zoals die in Leidsche Rijn zien we vaak wensen voor luxe badkamers
                                    met regendouches, vloerverwarming, domotica en energiezuinige installaties. Ons team
                                    heeft ervaring met al deze moderne voorzieningen en zorgt voor een perfect eindresultaat
                                    dat aansluit bij uw wensen en budget.
                                </p>

                                <h4>Keukeninstallaties en Wateraansluitingen</h4>
                                <p>
                                    Bij keukenrenovaties in Leidsche Rijn zorgen wij voor de complete water- en afvoerinstallatie.
                                    Van het aansluiten van nieuwe apparatuur zoals vaatwassers en wasmachines tot het
                                    plaatsen van extra stopcontacten voor keukenapparaten - wij zorgen dat alles veilig
                                    en volgens de geldende normen gebeurt. Ook kunnen wij koken-water systemen installeren
                                    voor direct kokend water uit de kraan.
                                </p>
                                <p>
                                    Moderne keukens in Leidsche Rijn hebben vaak geavanceerde installaties zoals Quooker
                                    kokend water kranen, ingebouwde koffiemachines of ijsmachines. Ons team heeft ervaring
                                    met al deze systemen en zorgt voor een professionele aansluiting volgens de hoogste
                                    veiligheidsnormen.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Waarom AD-Loodgietersbedrijf in Leidsche Rijn?</h3>
                                <ul>
                                    <li><strong>15+ Jaar Ervaring:</strong> Gecertificeerde vakmannen met ruime ervaring in moderne bouwtechnieken - geen beginners die fouten maken!</li>
                                    <li><strong>Snelle Respons:</strong> Binnen 15 minuten ter plaatse bij spoedgevallen - wij houden ons aan onze beloftes, geen loze woorden</li>
                                    <li><strong>Moderne Expertise:</strong> Gespecialiseerd in nieuwbouw en duurzame installaties - wij kennen uw woningtype door en door</li>
                                    <li><strong>Transparante Prijzen:</strong> Duidelijke offertes zonder verborgen kosten - geen onaangename verrassingen achteraf</li>
                                    <li><strong>Garantie:</strong> Alle werkzaamheden worden gegarandeerd - uw investering is 100% beschermd</li>
                                    <li><strong>24/7 Service:</strong> Altijd bereikbaar, ook 's nachts en in het weekend - nood? Wij zijn er voor u!</li>
                                    <li><strong>Lokale Kennis:</strong> Diepgaande kennis van Leidsche Rijn en alle woningtypes - wij weten precies waar we het over hebben</li>
                                    <li><strong>Duurzaam Advies:</strong> Expertise in energiezuinige en duurzame oplossingen - bespaar structureel op uw energiekosten</li>
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

                                <h3 style={{marginTop: '3rem'}}>Duurzame Oplossingen voor Leidsche Rijn</h3>
                                <p>
                                    Leidsche Rijn is gebouwd volgens hoge duurzaamheidsnormen. Steeds meer bewoners kiezen
                                    voor groene oplossingen zoals waterbesparende kranen, energiezuinige verwarmingssystemen,
                                    zonneboilers en LED-verlichting. Wij adviseren u graag over energiezuinige alternatieven
                                    en kunnen helpen bij het verkrijgen van subsidies voor duurzame woningverbeteringen.
                                </p>
                                <p>
                                    Als specialist in moderne bouwtechnieken weten wij precies welke duurzame oplossingen
                                    het beste passen bij uw woning in Leidsche Rijn. Van slimme thermostaten tot complete
                                    warmtepomp systemen - wij helpen u bij het maken van duurzame keuzes die ook financieel
                                    aantrekkelijk zijn.
                                </p>

                                <h3 style={{marginTop: '3rem'}}>Preventief Onderhoud voor Moderne Woningen</h3>
                                <p>
                                    Moderne woningen in Leidsche Rijn hebben complexe installaties die regelmatig onderhoud
                                    nodig hebben. Wij bieden preventief onderhoud om problemen te voorkomen:
                                </p>
                                <ul>
                                    <li>Jaarlijkse controle van CV-ketels en verwarmingssystemen</li>
                                    <li>Reiniging van afvoeren om verstoppingen te voorkomen</li>
                                    <li>Controle van waterdruk en leidingen</li>
                                    <li>Inspectie van badkamer- en keukeninstallaties</li>
                                    <li>Advies over energiebesparende maatregelen</li>
                                </ul>

                                <h3 style={{marginTop: '3rem'}}>Contact met Uw Loodgieter in Leidsche Rijn</h3>
                                <p>
                                    Heeft u een loodgietersprobleem in Leidsche Rijn? Neem dan direct contact met ons op.
                                    Bel naar <a href="tel:+31640961848" style={{color: '#007bff', textDecoration: 'none', fontWeight: 'bold'}}>+31 6 40 96 18 48</a> voor spoedeisende gevallen of vul ons contactformulier in voor
                                    een afspraak. Wij komen graag bij u langs voor een vrijblijvende inspectie en offerte.
                                </p>
                                <p>
                                    AD-Loodgietersbedrijf - Uw vertrouwde loodgieter in Leidsche Rijn voor elk probleem,
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

export default LoodgieterLeidscheRijnPage;