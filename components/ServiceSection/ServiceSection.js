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
                                        <h2>Loodgietersdiensten voor bedrijven & vastgoed</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            Wij ondersteunen facilitaire teams, VvE&apos;s en horecaketens met
                                            preventief onderhoud, 24/7 storingsdienst en projectbegeleiding. Eén
                                            aanspreekpunt dat planning, rapportage en uitvoering regelt.
                                        </p>
                                        <p>
                                            Of het nu gaat om een landelijke keten of een enkel bedrijfspand:
                                            we werken met gecertificeerde monteurs, strakke SLA&apos;s en transparante
                                            communicatie zodat u geen verrassingen heeft.
                                        </p>
                                        <div className="signeture">
                                            <h4>Ad-Loodgietersbedrijf</h4>
                                            <p>Zakelijke installaties in veilige handen</p>
                                            <div
                                                className="wpo-about-btn"
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <Link
                                                    href="/contact"
                                                    className="theme-btn"
                                                >
                                                    Plan een consult
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
                            <SectionTitle MainTitle="Onze kernoplossingen" />
                            <p style={{ marginTop:'-2rem', marginBottom: '3rem' }}>
                                Wij beheren water-, gas- en sanitairinstallaties voor retail, hospitality,
                                kantoor- en zorglocaties. Onderhoud, renovatie en spoedherstel via één
                                specialistisch team.
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
