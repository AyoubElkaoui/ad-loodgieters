import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'; // Importeer de ContactForm-component

// Definieer de gtag_report_conversion functie volgens Google Ads (in plain JS)
function gtag_report_conversion(url) {
    const callback = function () {
        if (typeof url !== 'undefined') {
            window.location.href = url;
        }
    };
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: 'AW-16875681251/7fBTCPyX8qMaEOPr-e4-', // Pas aan naar jouw Google Ads ID
            value: 1.0,
            currency: 'EUR',
            event_callback: callback,
        });
        console.log('Google Ads conversie getriggerd!');
    } else {
        console.error('gtag is niet beschikbaar!');
    }
    return false;
}

const Appointment = () => {
    const handleButtonClick = () => {
        gtag_report_conversion();
    };

    return (
        <section className="wpo-contact-section section-padding">
            <div className="wpo-contact-img">
                <img src="/images/contact.jpg" alt="" />
            </div>
            <div className="wpo-contact-img-s2">
                <img src="/images/contact.png" alt="" />
            </div>
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <span>ZAKELIJKE AFSPRAAK</span>
                                    <h2>Plan een technisch overleg</h2>
                                    <p>
                                        Bespreek uw onderhoudscontract, renovatieplanning of spoedvraag direct met ons
                                        serviceteam. Wij stemmen ons plan af op uw bedrijfsprocessen.
                                    </p>
                                </div>

                                {/* Vervang het formulier door de ContactForm-component */}
                                <ContactForm />

                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
