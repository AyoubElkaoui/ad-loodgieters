import React, {Fragment} from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ContactPage =() => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/contact`;
    const pageTitle = 'Contact | AD-Loodgietersbedrijf';
    const description = 'Bel of mail AD-Loodgietersbedrijf voor dringende storingen, offertes of vragen. Binnen 24 uur reactie, 24/7 bereikbaar bij spoed.';
    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: pageUrl,
        name: pageTitle,
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+31640961848',
                contactType: 'customer service',
                areaServed: 'NL',
                availableLanguage: ['Dutch'],
            },
        ],
    };

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Neem contact op'} pagesub={'Contact'}/>
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;
