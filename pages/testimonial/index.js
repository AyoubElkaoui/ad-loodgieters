import React, {Fragment} from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Testimonial from '../../components/Testimonial/Testimonial';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const TestimonialPage =() => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/testimonial`;
    const pageTitle = 'Reviews & Ervaringen | Wat klanten zeggen over AD-Loodgietersbedrijf';
    const description = 'Lees wat onze klanten over ons zeggen. Betrouwbare loodgietersdiensten in Utrecht met hoge klanttevredenheid en professioneel werk.';

    return(
        <Fragment>
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
            <Navbar/>
            <PageTitle pageTitle={'Testimonials'} pagesub={'Testimonials'} />
            <Testimonial />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;
