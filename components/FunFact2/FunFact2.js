import React from 'react';

const funFact = [
    {
        fIcon: '/images/icon/9.png',
        title: '150+',
        subTitle: 'Zakelijke onderhoudscontracten',
    },
    {
        fIcon: '/images/icon/10.png',
        title: '10+',
        subTitle: 'Serviceploegen in de Randstad',
    },
    {
        fIcon: '/images/icon/11.png',
        title: '4.9/5',
        subTitle: 'Klanttevredenheid zakelijk',
    },
    {
        fIcon: '/images/icon/12.png',
        title: '24/7',
        subTitle: 'Spoedservice binnen 2 uur',
    },
];

const FunFact2 = (props) => {
    return (
        <section className="wpo-fun-fact-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
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

export default FunFact2;
