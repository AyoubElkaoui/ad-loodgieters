import React from "react";
import Link from "next/link";
import VideoModal from "../ModalVideo/VideoModal";

const Hero3 = () => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    {/* De offset-lg-7 col-lg-5 plaatst de tekst rechts op grotere schermen */}
                    <div className="col col-xs-5 col-lg-5 offset-lg-7 col-12">
                        <div className="wpo-hero-section-text">
                            {/* Ondertitel / kleine slogan */}
                            <div className="wpo-hero-subtitle">
                                <span>:: Vakkundig & Ervaren Team</span>
                            </div>

                            {/* Hoofdtitel */}
                            <div className="wpo-hero-title">
                                <h2>
                                    Altijd <span>bereikbaar</span> voor u.
                                </h2>
                            </div>

                            {/* Korte omschrijving */}
                            <div className="wpo-hero-des">
                                <p>
                                    Wij zijn een gecertificeerd loodgietersbedrijf. Of het nu gaat
                                    om een lekkage, verstopping of een complete installatie,
                                    wij staan voor u klaar – dag en nacht.
                                </p>
                            </div>

                            {/* CTA-knoppen */}
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/contact" className="theme-btn">
                                            Neem contact op
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Hier kun je eventueel nog een achtergrondafbeelding of iets toevoegen */}
            <div className="right-vec">
                <div className="right-img">
                    {/* <img src="/images/slider/hero3-right-img.png" alt="Loodgieter Hero" /> */}
                </div>
            </div>
        </section>
    );
};

export default Hero3;
