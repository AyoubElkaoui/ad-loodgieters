import React from 'react';

const Features = (props) => {
    return (
        <section className={`wpo-features-section ${props.fClass}`}>
            <div className="container">
                <div className="wpo-features-wrap">
                    <div className="row align-items-center justify-content-between">

                        {/* Stap 1: Intake en planning */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/calendar.svg" alt="Zakelijke intake" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Intake & planning</h4>
                                </div>
                            </div>
                            <div className="angle">
                                <img src="/images/icon/6.png" alt="Angle" />
                            </div>
                        </div>

                        {/* Stap 2: Technische inspectie */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item active">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/express-delivery.svg" alt="Technische inspectie" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Inspectie op locatie</h4>
                                </div>
                            </div>
                            <div className="angle">
                                <img src="/images/icon/6.png" alt="Angle" />
                            </div>
                        </div>

                        {/* Stap 3: Servicecontract */}
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src="/images/icon/prototype.svg" alt="Servicecontract" />
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Servicecontract & beheer</h4>
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
