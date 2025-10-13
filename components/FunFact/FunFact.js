import React from 'react';

const funFact = [
    {
        fIcon: '/images/icon/9.png',
        title: '24/7',
        subTitle: 'Bereikbaarheid',
    },
    {
        fIcon: '/images/icon/10.png',
        title: '99%',
        subTitle: 'Klanttevredenheid',
    },
    {
        fIcon: '/images/icon/11.png',
        title: '12',
        subTitle: 'Regio’s bediend',
    },
    {
        fIcon: '/images/icon/12.png',
        title: '120K',
        subTitle: 'Afgelegde km/jaar',
    },
];

const FunFact = () => {
    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    {/* Linkerkant met tekst en reviewscore */}
                    <div className="col-lg-5">
                        <div className="wpo-funfacts-text">
                            <h3>Wij onderscheiden ons door onze klantgerichte service</h3>
                            <div className="customer-review">
                                <h2>5</h2>
                                <div className="reviews">
                                    <ul>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <span>Gemiddelde klantbeoordeling</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rechterkant met de statistieken-grids */}
                    <div className="col col-lg-6 offset-lg-1">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, index) => (
                                <div className="grid" key={index}>
                                    <div className="icon">
                                        <img src={funfact.fIcon} alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>
                      <span className="odometer" data-count={funfact.title}>
                        {funfact.title}
                      </span>
                                        </h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFact;
