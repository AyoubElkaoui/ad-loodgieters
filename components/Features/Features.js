import React from 'react';

const Features = (props) => {
    return (
        <section className={`wpo-features-section ${props.fClass}`}>
            <div className="container">
                <div className="wpo-features-wrap">
                    <div className="row align-items-center justify-content-between">

                        {/* Stap 1: Afspraak maken */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/calendar.svg" alt="Afspraak Maken" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Afspraak maken</h4>
                                </div>
                            </div>
                            <div className="angle">
                                <img src="/images/icon/6.png" alt="Angle" />
                            </div>
                        </div>

                        {/* Stap 2: Wij komen langs */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item active">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/express-delivery.svg" alt="Wij Komen Langs" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Wij komen langs</h4>
                                </div>
                            </div>
                            <div className="angle">
                                <img src="/images/icon/6.png" alt="Angle" />
                            </div>
                        </div>

                        {/* Stap 3: Probleem opgelost */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/prototype.svg" alt="Probleem Opgelost" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Probleem opgelost</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
