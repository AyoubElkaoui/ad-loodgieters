import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Hero3 from '../../components/hero3/hero3';
import Features from '../../components/Features/Features';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import FunFact2 from '../../components/FunFact2/FunFact2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Appointment from '../../components/Appointment/Appointment';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';



const HomePage3 = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/home`;
    const pageTitle = 'AD-Loodgietersbedrijf – 24/7 loodgieter in Utrecht & omgeving';
    const description = 'Direct hulp bij lekkage, verstopping of cv-storing in regio Utrecht. AD-Loodgietersbedrijf staat 24/7 voor particulieren en bedrijven klaar.';

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
export default HomePage3;