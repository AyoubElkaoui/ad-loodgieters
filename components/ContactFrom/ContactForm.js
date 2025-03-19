import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        postalCode: '',
        houseNumber: '',
        houseNumberAddition: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [files, setFiles] = useState([]);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [status, setStatus] = useState('');
    const formRef = useRef(null);

    // Initialiseer SimpleReactValidator met Nederlandse berichten
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: 'Dit veld is verplicht.',
            email: 'Voer een geldig e-mailadres in.',
            numeric: 'Dit veld moet een getal zijn.',
            regex: 'Ongeldige invoer.',
            min: 'Moet minimaal :min karakters bevatten.',
        },
    }));

    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validator.current.showMessageFor(e.target.name);
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files || []).filter((file) =>
            file.type.startsWith('image/')
        );
        setFiles(selectedFiles);
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const validateForm = () => {
        if (validator.current.allValid()) {
            return null;
        } else {
            validator.current.showMessages();
            return 'Gelieve alle verplichte velden correct in te vullen.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Verzenden...');

        const validationError = validateForm();
        if (validationError) {
            setStatus(validationError);
            return;
        }

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
        files.forEach((file) => {
            formDataToSend.append('files', file);
        });
        formDataToSend.append('recaptchaToken', recaptchaToken || '');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setStatus('Bericht succesvol verzonden! Bedankt, wij nemen snel contact met u op.');
                toast.success('Bericht succesvol verzonden!');
                // Reset formulier
                setFormData({
                    name: '',
                    email: '',
                    postalCode: '',
                    houseNumber: '',
                    houseNumberAddition: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
                setFiles([]);
                setRecaptchaToken(null);
            } else {
                const { error } = await response.json();
                setStatus(error || 'Er is iets misgegaan bij het verzenden van het bericht.');
                toast.error(error || 'Er is iets misgegaan bij het verzenden van het bericht.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Fout bij het verzenden. Probeer het later opnieuw.');
            toast.error('Fout bij het verzenden. Probeer het later opnieuw.');
        }
    };

    const handleButtonClick = () => {
        gtag_report_conversion();
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="contact-validation-active"
            ref={formRef}
            encType="multipart/form-data"
        >
            <div className="row">
                {/* Naam */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>Naam*</label>
                        <input
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Uw naam"
                        />
                        {validator.current.message('name', formData.name, 'required')}
                    </div>
                </div>
                {/* E-mail */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>E-mailadres*</label>
                        <input
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Uw e-mail"
                        />
                        {validator.current.message('email', formData.email, 'required|email')}
                    </div>
                </div>
                {/* Postcode */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>Postcode*</label>
                        <input
                            className="form-control"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            type="text"
                            placeholder="1234 AB"
                        />
                        {validator.current.message('postalCode', formData.postalCode, 'required|regex:^[1-9][0-9]{3}\\s?[A-Za-z]{2}$')}
                    </div>
                </div>
                {/* Huisnummer + toevoeging */}
                <div className="col col-lg-3 col-6">
                    <div className="form-group">
                        <label>Huisnummer*</label>
                        <input
                            className="form-control"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleChange}
                            type="text"
                            placeholder="Bijv. 12"
                        />
                        {validator.current.message('houseNumber', formData.houseNumber, 'required|numeric')}
                    </div>
                </div>
                <div className="col col-lg-3 col-6">
                    <div className="form-group">
                        <label>Toevoeging</label>
                        <input
                            className="form-control"
                            name="houseNumberAddition"
                            value={formData.houseNumberAddition}
                            onChange={handleChange}
                            type="text"
                            placeholder="Bijv. A"
                        />
                    </div>
                </div>
                {/* Telefoonnummer */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>Telefoonnummer*</label>
                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Bijv. 0612345678"
                        />
                        {validator.current.message('phone', formData.phone, 'required|numeric|min:10,num')}
                    </div>
                </div>
                {/* Onderwerp */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>Onderwerp</label>
                        <input
                            className="form-control"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            placeholder="Lekkage"
                        />
                    </div>
                </div>
                {/* Bericht */}
                <div className="col col-lg-12">
                    <div className="form-group">
                        <label>Bericht</label>
                        <textarea
                            className="form-control"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Uw bericht"
                            rows={4}
                        />
                    </div>
                </div>
            </div>
            {/* reCAPTCHA */}
            <div className="form-group mt-3">
                {RECAPTCHA_SITE_KEY ? (
                    <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                ) : (
                    <p style={{ color: 'red' }}>
                        Er ontbreekt een reCAPTCHA site key (NEXT_PUBLIC_RECAPTCHA_SITE_KEY).
                    </p>
                )}
            </div>
            <div className="submit-area">
                <button type="button" className="theme-btn" onClick={handleButtonClick}>
                    Versturen
                </button>
            </div>
            {status && <p style={{ marginTop: '15px', color: status.includes('succesvol') ? 'green' : 'red' }}>{status}</p>}
            <ToastContainer />
        </form>
    );
};

export default ContactForm;