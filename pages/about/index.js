import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import ServiceSection from '../../components/ServiceSection2/ServiceSection2';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';

const AboutPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/about`;
    const pageTitle = 'Over AD-Loodgietersbedrijf | Ervaren professionals in Utrecht';
    const description = 'AD-Loodgietersbedrijf biedt al jaren hoogwaardige loodgietersdiensten in Utrecht en omstreken. Ontdek ons ervaren team en werkwijze.';
    const aboutSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: pageTitle,
        description,
        url: pageUrl,
        mainEntity: {
            '@type': 'Organization',
            name: 'AD-Loodgietersbedrijf',
            url: siteUrl,
            logo: `${siteUrl}/images/logo.png`,
            description: 'Professionele loodgietersdiensten in Utrecht en omgeving sinds 2010',
            areaServed: {
                '@type': 'Place',
                name: 'Utrecht en omgeving',
            },
        },
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Over ons'} pagesub={'over-ons'} />
            <About/>
            <ServiceSection/>
            <FunFact/> 
            <TeamSection/> 
            <Testimonial/> 
            <BlogSection/> 
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default AboutPage;


