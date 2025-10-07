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
                            <h2>Zakelijke diensten</h2>
                            <p>
                                Wij ondersteunen vastgoedbeheerders, facilitair managers en ketens met specialistisch
                                loodgieterswerk. Van preventief onderhoud tot complexe projecten: wij leveren betrouwbare
                                service met minimale stilstand voor uw organisatie.
                            </p>
                            <p>
                                Starbucks, La Place, BAM en Rizani De Echer Hotel vertrouwen op onze landelijke aanpak.
                                Eén centrale desk, vaste serviceteams en rapportages die u direct kunt delen met stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-12 d-flex" key={index}>
                            <div className="wpo-service-item w-100">
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
                                <div
                                    className={`visible-icon ${
                                        service.sIcon.includes('warning-triangle-svgrepo-com.svg')
                                            ? 'visible-icon-warning'
                                            : ''
                                    }`}
                                >
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
