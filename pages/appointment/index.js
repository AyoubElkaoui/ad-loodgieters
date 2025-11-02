import React, {Fragment} from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import AppointmentS2 from '../../components/AppointmentS2/AppointmentS2';
import Footer from '../../components/footer/Footer';


const Appointment =() => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/appointment`;
    const pageTitle = 'Afspraak maken | AD-Loodgietersbedrijf';
    const description = 'Plan direct een afspraak met AD-Loodgietersbedrijf. Kies een datum die u uitkomt en wij nemen snel contact op voor bevestiging.';
    const appointmentSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Afspraak plannen',
        provider: {
            '@type': 'LocalBusiness',
            name: 'AD-Loodgietersbedrijf',
            url: siteUrl,
        },
        description: 'Plan een afspraak voor loodgieterswerk',
        url: pageUrl,
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(appointmentSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Appointment'} pagesub={'Appointment'}/> 
            <AppointmentS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Appointment;
