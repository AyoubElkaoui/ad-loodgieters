import React from "react";
import Link from "next/link";
import VideoModal from "../ModalVideo/VideoModal";

const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            {/* Onderkop of kleine slogan */}
                            <div className="wpo-hero-subtitle">
                                <span>:: Vakkundig & Ervaren Team</span>
                            </div>

                            {/* Hoofdtitel */}
                            <div className="wpo-hero-title">
                                <h2>
                                    24/7 Gereed <span>om u te helpen</span>.
                                </h2>
                            </div>

                            {/* Korte omschrijving */}
                            <div className="wpo-hero-des">
                                <p>
                                    Wij zijn een gecertificeerde loodgietersdienst met jarenlange
                                    ervaring. Of u nu te maken heeft met een lekkage, verstopping
                                    of volledige installatie: wij staan voor u klaar.
                                </p>
                            </div>

                            {/* CTA-knoppen */}
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/afspraak" className="btn theme-btn">
                                            Afspraak maken
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Rechterafbeelding (Hero-illustratie) */}
            <div className="right-vec">
                <div className="right-img">
                    <div className="r-img">
                        <img src="/images/slider/right-img.png" alt="Loodgieter Hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
