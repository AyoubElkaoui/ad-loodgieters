import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import TeamSection from '../components/TeamSection/TeamSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection';
import Hero3 from "../components/hero3/hero3";
import ServiceSection2 from "../components/ServiceSection2/ServiceSection2";
import FunFact2 from "../components/FunFact2/FunFact2";



const HomePage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageTitle = 'AD-Loodgietersbedrijf – 24/7 loodgieter in Utrecht & omgeving';
    const description = 'Direct hulp bij lekkage, verstopping of cv-storing in regio Utrecht. AD-Loodgietersbedrijf staat 24/7 voor particulieren en bedrijven klaar.';
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AD-Loodgietersbedrijf',
        image: `${siteUrl}/images/contact.png`,
        '@id': siteUrl,
        url: siteUrl,
        telephone: '+31640961848',
        priceRange: '€€',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Voorbeeldstraat 12',
            addressLocality: 'Utrecht',
            postalCode: '3511AA',
            addressCountry: 'NL',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.0907,
            longitude: 5.1214,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
            },
        ],
        serviceArea: {
            '@type': 'Place',
            name: 'Utrecht en omgeving',
        },
        sameAs: [
            'https://www.facebook.com/adloodgieters',
            'https://www.instagram.com/adloodgieters',
        ],
    };

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={siteUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteUrl}/images/contact.png`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/contact.png`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero3 />
            <Features fClass={'wpo-features-section-s2'}/>
            <ServiceSection2 />
            <FunFact2 />
            <TeamSection />
            <Appointment />
            <Testimonial />
            <BlogSection />
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage;

