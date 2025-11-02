import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const defaultTitle = 'AD-Loodgietersbedrijf | Uw betrouwbare partner voor loodgieterswerk';
    const defaultDescription = '24/7 loodgietersdienst in regio Utrecht. Hulp bij lekkages, verstoppingen, cv-storingen en renovaties voor particulieren en bedrijven.';

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <title>{defaultTitle}</title>
                    <meta name="description" content={defaultDescription} />
                    <meta name="author" content="AD-Loodgietersbedrijf" />
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
                    <meta name="theme-color" content="#14396f" />
                    
                    {/* Geo Tags */}
                    <meta name="geo.region" content="NL-UT" />
                    <meta name="geo.placename" content="Utrecht" />
                    <meta name="geo.position" content="52.0907;5.1214" />
                    <meta name="ICBM" content="52.0907, 5.1214" />
                    
                    {/* Business Keywords */}
                    <meta name="keywords" content="loodgieter utrecht, spoedloodgieter, lekkage, cv-storing, verstopping, badkamer renovatie, sanitair" />
                    
                    {/* Open Graph */}
                    <meta property="og:site_name" content="AD-Loodgietersbedrijf" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={defaultTitle} />
                    <meta property="og:description" content={defaultDescription} />
                    <meta property="og:url" content={siteUrl} />
                    <meta property="og:image" content={`${siteUrl}/images/contact.png`} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:locale" content="nl_NL" />
                    
                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={defaultTitle} />
                    <meta name="twitter:description" content={defaultDescription} />
                    <meta name="twitter:image" content={`${siteUrl}/images/contact.png`} />
                    
                    {/* Links */}
                    <link rel="canonical" href={siteUrl} />
                    <link rel="icon" href="/favicon.ico" />
                    
                    {/* Alternate Language */}
                    <link rel="alternate" hrefLang="nl" href={siteUrl} />
                </Head>
                <Component {...pageProps} />
                <ToastContainer />
                <Analytics />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
