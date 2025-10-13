import React from 'react'
import Services from '../../api/service'
import Link from 'next/link'

const ServiceSection2 = (props) => {
    // Zorgt ervoor dat de pagina naar boven scrollt bij klik
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`wpo-service-section-s2 section-padding ${props.sClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Onze Diensten</h2>
                            <p>
                                Hieronder vindt u een overzicht van de meest voorkomende loodgieterswerkzaamheden
                                die wij voor u kunnen uitvoeren. Of u nu een lekkage heeft, een nieuwe boiler wilt
                                installeren of professioneel advies zoekt—wij staan voor u klaar.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="wpo-service-item">
                                {/* Afbeelding of icoon */}
                                <div className="wpo-service-img">
                                    <img src={service.sIcon} alt="" />
                                </div>

                                {/* Titel en omschrijving */}
                                <div className="wpo-service-text">
                                    <h2>
                                        <Link
                                            onClick={ClickHandler}
                                            href="/service/[slug]"
                                            as={`/service/${service.slug}`}
                                        >
                                            {service.sTitle}
                                        </Link>
                                    </h2>
                                    <p>{service.description}</p>

                                    {/* Link 'Lees meer' met extra spacing en icoon */}
                                    <div className="read-more-container">
                                        <Link
                                            onClick={ClickHandler}
                                            href="/service/[slug]"
                                            as={`/service/${service.slug}`}
                                            className="read-more-btn"
                                        >
                                            Lees meer <i className="ti-arrow-right" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Icon dat zichtbaar is bij hover (volgens je template) */}
                                <div className="visible-icon">
                                    <img src={service.sIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection2;
