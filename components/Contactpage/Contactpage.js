import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Ons Adres</h2>
                                            <p>Spechtenkamp 334, 3607KT, Maarssen</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email ons</h2>
                                            <p>Info@adloodgietersbedrijf.nl</p>
                                            <br/>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Bel nu</h2>
                                            <p>06 40 96 18 48</p>
                                            <br/>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Plan uw zakelijke consult</h2>
                            <p>
                                Laat ons weten welke vestiging, portefeuille of project u wilt bespreken.
                                Ons serviceteam reageert binnen één werkdag met een concreet voorstel of plant direct
                                een technisch overleg in. Spoed? Bel onze 24/7 storingslijn voor directe inzet.
                            </p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.779500620502!2d5.0172783779384105!3d52.13833237196351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c671c5fb2852bf%3A0xf531d244e750c568!2sSpechtenkamp%20334%2C%203607%20KT%20Maarssen!5e0!3m2!1snl!2snl!4v1742155363973!5m2!1snl!2snl"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
