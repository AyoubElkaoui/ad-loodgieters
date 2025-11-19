import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';

const UtrechtPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/utrecht`;
    const pageTitle = 'Loodgieter Utrecht | AD-Loodgietersbedrijf - 24/7 Spoedservice';
    const description = 'Professionele loodgietersdiensten in Utrecht en omgeving. Van lekkages tot renovaties, wij staan 24/7 voor u klaar. Spoedhulp, transparante prijzen en garantie.';

    const utrechtSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Loodgieter Utrecht',
        description: description,
        provider: {
            '@type': 'Organization',
            name: 'AD-Loodgietersbedrijf',
            url: siteUrl,
            logo: `${siteUrl}/images/AD-Loodgietersbedrijf (1).svg`,
            telephone: '+31 6 40 96 18 48',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Spechtenkamp 334',
                addressLocality: 'Maarssen',
                postalCode: '3607 KT',
                addressRegion: 'Utrecht',
                addressCountry: 'NL'
            },
            areaServed: {
                '@type': 'Place',
                name: 'Utrecht en omgeving'
            }
        },
        serviceType: 'Loodgieterswerk',
        areaServed: 'Utrecht'
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="loodgieter Utrecht, spoedloodgieter Utrecht, lekkage reparatie Utrecht, keuken renovatie Utrecht, badkamer loodgieter Utrecht" />
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(utrechtSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Loodgieter Utrecht'} pagesub={'loodgieter-utrecht'} />
            <div className="utrecht-intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="utrecht-intro">
                                <h2>Uw Betrouwbare Loodgieter in Utrecht</h2>
                                <p>
                                    AD-Loodgietersbedrijf is uw specialist in loodgieterswerk in Utrecht en omgeving.
                                    Met meer dan 10 jaar ervaring staan wij 24/7 voor u klaar voor alle loodgietersproblemen,
                                    van spoedreparaties tot complete renovaties. Transparante prijzen, snelle service
                                    en gegarandeerde kwaliteit.
                                </p>
                                <div className="utrecht-features">
                                    <div className="feature-item">
                                        <i className="fi flaticon-clock"></i>
                                        <h4>24/7 Spoedservice</h4>
                                        <p>Altijd bereikbaar voor urgente problemen</p>
                                    </div>
                                    <div className="feature-item">
                                        <i className="fi flaticon-location"></i>
                                        <h4>Lokale Expertise</h4>
                                        <p>Grootste kennis van Utrecht en omgeving</p>
                                    </div>
                                    <div className="feature-item">
                                        <i className="fi flaticon-shield"></i>
                                        <h4>Gegarandeerd</h4>
                                        <p>Alle werk gegarandeerd en verzekerd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSection/>
            <FunFact/>
            <Testimonial/>
            <BlogSection/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};

export default UtrechtPage;