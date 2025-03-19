import React from 'react';
import Link from "next/link";

const About = () => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src="/images/over-ons-loodgieter.jpg" alt="Over ons"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Meer dan 10 jaar ervaring in loodgieterswerk</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>
                                        Ad-Loodgietersbedrijf is gespecialiseerd in alle facetten
                                        van loodgieterswerk. Wij zetten onze expertise in bij
                                        zowel kleine klussen als grote projecten: van lekkages en
                                        verstoppingen tot volledige renovaties.
                                    </p>
                                    <p>
                                        Dankzij onze 10+ jaar ervaring vertrouwen ook gerenommeerde
                                        ondernemingen op onze service. Uiteraard staan we
                                        ook dag en nacht klaar voor particuliere spoedklussen.
                                        Transparantie, kwaliteit en klanttevredenheid staan
                                        hierbij voorop.
                                    </p>
                                    <div className="signeture">
                                        <h4>Ad-Loodgietersbedrijf</h4>
                                        <p>Professionele service op maat</p>
                                        <div className="wpo-about-btn" style={{marginTop: '1.5rem'}}>
                                            <Link href="/contact" className="theme-btn">
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
    );
};

export default About;
