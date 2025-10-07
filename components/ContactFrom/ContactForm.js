import React, { useState, useRef, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
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
        company: '',
        name: '',
        email: '',
        phone: '',
        role: '',
        segment: '',
        locations: '',
        city: '',
        projectType: '',
        message: '',
    });
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
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
            in: 'Selecteer een geldige optie.',
        },
    }));

    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        if (typeof window === 'undefined' || !RECAPTCHA_SITE_KEY) {
            return;
        }

        const scriptId = 'recaptcha-v3-script';
        const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        const existingScript = document.getElementById(scriptId);

        if (existingScript) {
            setIsRecaptchaReady(true);
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptSrc;
        script.async = true;
        script.defer = true;
        script.onload = () => setIsRecaptchaReady(true);
        script.onerror = () => {
            console.error('reCAPTCHA script kon niet worden geladen.');
            setIsRecaptchaReady(false);
        };
        document.body.appendChild(script);
    }, [RECAPTCHA_SITE_KEY]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validator.current.showMessageFor(e.target.name);
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

        if (!RECAPTCHA_SITE_KEY) {
            setStatus('reCAPTCHA is niet geconfigureerd. Contacteer de beheerder.');
            return;
        }

        if (!isRecaptchaReady || typeof window === 'undefined' || !window.grecaptcha) {
            setStatus('Beveiligingscontrole wordt geladen. Probeer het opnieuw.');
            return;
        }

        let recaptchaToken = '';

        try {
            recaptchaToken = await new Promise((resolve, reject) => {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact_form' })
                        .then(resolve)
                        .catch(reject);
                });
            });
        } catch (error) {
            console.error('reCAPTCHA fout:', error);
            setStatus('reCAPTCHA validatie mislukt. Probeer het opnieuw.');
            toast.error('reCAPTCHA validatie mislukt. Probeer het opnieuw.');
            return;
        }

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
        formDataToSend.append('recaptchaToken', recaptchaToken);

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
                    company: '',
                    name: '',
                    email: '',
                    phone: '',
                    role: '',
                    segment: '',
                    locations: '',
                    city: '',
                    projectType: '',
                    message: '',
                });
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
                {/* Bedrijfsnaam */}
                <div className="col col-lg-6 col-12">
                    <div className="form-group">
                        <label>Bedrijfsnaam*</label>
                        <input
                            className="form-control"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            type="text"
                            placeholder="Bijv. Starbucks Nederland"
                        />
                        {validator.current.message('company', formData.company, 'required')}
                    </div>
                </div>
                {/* Naam contactpersoon */}
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
                <div className="col col-lg-4 col-12">
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
                {/* Telefoonnummer */}
                <div className="col col-lg-4 col-12">
                    <div className="form-group">
                        <label>Telefoonnummer*</label>
                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="+31 6 0000 0000"
                        />
                        {validator.current.message('phone', formData.phone, 'required|numeric|min:10,num')}
                    </div>
                </div>
                {/* Functie */}
                <div className="col col-lg-4 col-12">
                    <div className="form-group">
                        <label>Functie</label>
                        <input
                            className="form-control"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            type="text"
                            placeholder="Bijv. Facilitair Manager"
                        />
                    </div>
                </div>
                {/* Sector */}
                <div className="col col-lg-4 col-12">
                    <div className="form-group">
                        <label>Sector</label>
                        <select
                            className="form-select"
                            name="segment"
                            value={formData.segment}
                            onChange={handleChange}
                        >
                            <option value="">Maak een keuze</option>
                            <option value="horeca">Horeca & hospitality</option>
                            <option value="retail">Retail & winkels</option>
                            <option value="vve">VvE & vastgoedbeheer</option>
                            <option value="industrie">Industrie & logistiek</option>
                            <option value="zorg">Zorg & onderwijs</option>
                            <option value="anders">Anders</option>
                        </select>
                    </div>
                </div>
                {/* Aantal locaties */}
                <div className="col col-lg-4 col-12">
                    <div className="form-group">
                        <label>Aantal locaties</label>
                        <input
                            className="form-control"
                            name="locations"
                            value={formData.locations}
                            onChange={handleChange}
                            type="number"
                            min="1"
                            placeholder="Bijv. 12 vestigingen"
                        />
                        {formData.locations && validator.current.message('locations', formData.locations, 'numeric')}
                    </div>
                </div>
                {/* Vestigingsplaats */}
                <div className="col col-lg-4 col-12">
                    <div className="form-group">
                        <label>Vestigingsplaats</label>
                        <input
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            type="text"
                            placeholder="Bijv. Utrecht"
                        />
                    </div>
                </div>
                {/* Projecttype */}
                <div className="col col-lg-12">
                    <div className="form-group">
                        <label>Type aanvraag*</label>
                        <select
                            className="form-select"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                        >
                            <option value="">Selecteer een projecttype</option>
                            <option value="onderhoud">Onderhoudscontract</option>
                            <option value="renovatie">Renovatie / verbouwing</option>
                            <option value="nieuwbouw">Nieuwbouwinstallatie</option>
                            <option value="storingsdienst">Spoed / storingsdienst</option>
                            <option value="advies">Technisch advies</option>
                        </select>
                        {validator.current.message('projectType', formData.projectType, 'required')}
                    </div>
                </div>
                {/* Bericht */}
                <div className="col col-lg-12">
                    <div className="form-group">
                        <label>Toelichting</label>
                        <textarea
                            className="form-control"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Beschrijf kort de werkzaamheden, locatie(s) en gewenste planning."
                            rows={5}
                        />
                    </div>
                </div>
            </div>
            {/* reCAPTCHA */}
            <div className="form-group mt-3">
                {RECAPTCHA_SITE_KEY ? (
                    <small>
                        Deze site wordt beschermd door reCAPTCHA en de Google{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> en{' '}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> zijn van toepassing.
                    </small>
                ) : (
                    <p style={{ color: 'red' }}>
                        Er ontbreekt een reCAPTCHA site key (NEXT_PUBLIC_RECAPTCHA_SITE_KEY).
                    </p>
                )}
            </div>
            <div className="submit-area">
                <button type="button" className="theme-btn" onClick={handleButtonClick}>
                    Verstuur zakelijke aanvraag
                </button>
            </div>
            {status && <p style={{ marginTop: '15px', color: status.includes('succesvol') ? 'green' : 'red' }}>{status}</p>}
            <ToastContainer />
        </form>
    );
};

export default ContactForm;
