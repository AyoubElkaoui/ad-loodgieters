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
                                    <h2>Technisch partner voor elke zakelijke locatie</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>
                                        AD-Loodgietersbedrijf begeleidt facilitaire teams, VvE&apos;s en horecaketens
                                        bij dagelijks onderhoud, renovaties en spoedherstel. Ons team levert 24/7
                                        ondersteuning voor locaties door heel Nederland en zorgt dat installaties
                                        veilig en bedrijfszeker blijven.
                                    </p>
                                    <p>
                                        Grote organisaties zoals Starbucks, La Place, BAM en Rizani De Echer Hotel
                                        vertrouwen op onze aanpak voor meerdere filialen en kamerconcepten. We
                                        coördineren planning, rapportage en compliance, zodat uw organisatie zonder
                                        stilstand door kan.
                                    </p>
                                    <div className="signeture">
                                        <h4>Ad-Loodgietersbedrijf</h4>
                                        <p>Zakelijke loodgietersoplossingen op maat</p>
                                        <div className="wpo-about-btn" style={{marginTop: '1.5rem'}}>
                                            <Link href="/contact" className="theme-btn">
                                                Plan een zakelijke afspraak
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
