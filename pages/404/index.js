import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Error from '../../components/404/404'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const StoryPage = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageTitle = 'Pagina niet gevonden - 404 | AD-Loodgietersbedrijf';
    const description = 'De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepagina of neem contact op met AD-Loodgietersbedrijf.';

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="noindex,follow" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


