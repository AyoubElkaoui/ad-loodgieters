import React from 'react';
import Link from 'next/link';
import Services from '../../api/service'; // Importeer de services data
import Projects from '../../api/project'; // Importeer de projects data

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* Logo en korte bedrijfsinfo */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src="/images/AD-Loodgietersbedrijf (2).svg" alt="AD Loodgieters" style={{ width: '200px', height: 'auto' }} />
                                </div>
                                <p>
                                    AD-Loodgietersbedrijf staat dag en nacht voor u klaar. Of het nu gaat
                                    om spoedklussen, installaties of onderhoud: bij ons bent u
                                    verzekerd van vakkundig werk.
                                </p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contactgegevens */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li>
                                            <i className="fi flaticon-location"></i>
                                            Spechtenkamp 334, 3607 KT Maarssen
                                        </li>
                                        <li>
                                            <i className="fi flaticon-phone-call"></i>
                                            06 40 96 18 48
                                        </li>
                                        <li>
                                            <i className="fi flaticon-send"></i>
                                            info@adloodgietersbedrijf.nl
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Services-lijst */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Diensten</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service) => (
                                        <li key={service.Id}>
                                            <Link
                                                onClick={ClickHandler}
                                                href={`/service/${service.slug}`}
                                            >
                                                {service.sTitle}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Projecten-lijst */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="wpo-instagram-widget">
                                <div className="widget-title">
                                    <h3>Projecten</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project) => (
                                        <li key={project.id}>
                                            <Link
                                                onClick={ClickHandler}
                                                href={`/project/${project.slug}`}
                                            >
                                                <img src={project.mainImg} alt={project.title} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower-footer */}
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                &copy; {new Date().getFullYear()} AD-Loodgietersbedrijf. Alle rechten voorbehouden -
                                Website gebouwd door{' '}
                                <a
                                    href="https://www.akwebsolutions.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="akwebsolutions-link"
                                >
                                    AK Web Solutions
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;