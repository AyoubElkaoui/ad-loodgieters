import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import FunFact from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";

const ServicePage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/service`;
    const pageTitle = 'Loodgietersdiensten | Onderhoud, renovatie & spoedservice';
    const description = 'Ontdek alle loodgietersdiensten van AD-Loodgietersbedrijf: spoedreparaties, installatie, onderhoud en renovatie voor particulieren en bedrijven.';
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Allround loodgietersdiensten',
        provider: {
            '@type': 'LocalBusiness',
            name: 'AD-Loodgietersbedrijf',
            url: siteUrl,
        },
        areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Provincie Utrecht',
        },
        serviceType: [
            'Lekkage opsporen en verhelpen',
            'Verstoppingen ontstoppen',
            'CV-installaties onderhouden',
            'Sanitair renovatie',
        ],
        url: pageUrl,
    };
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Bieden jullie spoedservice buiten kantooruren?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, we zijn 24/7 bereikbaar voor urgente storingen en lekkages in regio Utrecht.',
                },
            },
            {
                '@type': 'Question',
                name: 'Voeren jullie ook preventief onderhoud uit?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wij bieden onderhoudsabonnementen voor woningen, VvE’s en bedrijven om storingen te voorkomen.',
                },
            },
        ],
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
                <meta property="og:image" content={`${siteUrl}/images/service/badkamer-loodgieter.jpg`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/service/badkamer-loodgieter.jpg`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Diensten'} pagesub={'Diensten'}/>
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
export default ServicePage;
