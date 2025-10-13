import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import Services from '../../api/service';

const ServiceSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <>
            {/* EERSTE SECTIE: Introductie over diensten */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            {/* Illustratie links */}
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <img
                                        src="/images/onze-diensten-loodgieter.jpg"
                                        alt="Onze diensten"
                                    />
                                </div>
                            </div>

                            {/* Tekst rechts */}
                            <div className="col-lg-7 col-md-12 col-12">
                                <div className="wpo-about-content">
                                    <div className="wpo-section-title-s2">
                                        <h2>Volledig assortiment loodgietersdiensten</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            Bij Ad-Loodgietersbedrijf bent u aan het juiste adres voor
                                            een breed scala aan loodgieterswerk. Of het nu gaat om een
                                            hardnekkige verstopping of een volledige renovatie — onze
                                            experts staan voor u klaar.
                                        </p>
                                        <p>
                                            Dankzij onze 10+ jaar aan vakkennis bedienen we zowel
                                            particuliere als zakelijke klanten. We werken met duurzame
                                            materialen en hanteren heldere tarieven, zodat u altijd weet
                                            waar u aan toe bent.
                                        </p>
                                        <div className="signeture">
                                            <h4>Ad-Loodgietersbedrijf</h4>
                                            <p>Expert in allround loodgieterswerk</p>
                                            <div
                                                className="wpo-about-btn"
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <Link
                                                    href="/contact"
                                                    className="theme-btn"
                                                >
                                                    Neem contact op
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TWEEDE SECTIE: Greep uit de diensten */}
            <section className="wpo-service-section section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <SectionTitle MainTitle="Een greep uit onze diensten" />
                            <p style={{ marginTop:'-2rem', marginBottom: '3rem' }}>
                                Wij bieden complete oplossingen voor elke loodgietersklus.
                                Van preventief onderhoud tot spoedhulp bij lekkages –
                                <br /> Ad-Loodgietersbedrijf staat garant voor kwaliteit en
                                klanttevredenheid.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {Services.map((service, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img
                                            src={service.sImg}
                                            alt={service.sTitle}
                                        />
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>
                                            <Link
                                                onClick={ClickHandler}
                                                href={`/service/${service.slug}`}
                                            >
                                                {service.sTitle}
                                            </Link>
                                        </h2>
                                        <p>{service.description}</p>
                                        <Link
                                            onClick={ClickHandler}
                                            href={`/service/${service.slug}`}
                                        >
                                            Lees meer{' '}
                                            <i
                                                className="fa fa-angle-double-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
