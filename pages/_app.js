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
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'; // Importeer Head van next/head

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <title>AD-Loodgietersbedrijf | Uw betrouwbare partner voor loodgieterswerk</title>
                    <meta name="description" content="AD-Loodgietersbedrijf staat dag en nacht voor u klaar. Professionele loodgietersdienstverlening voor spoedklussen, installaties en onderhoud." />
                    <meta name="keywords" content="loodgieter, spoed loodgieter, lekkage reparatie, badkamer renovatie, keuken loodgieterswerk" />
                    <meta name="author" content="AD-Loodgietersbedrijf" />
                    <link rel="icon" href="/favicon.ico" /> {/* Voeg een favicon toe als je die hebt */}
                </Head>
                <Component {...pageProps} />
                <ToastContainer />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;