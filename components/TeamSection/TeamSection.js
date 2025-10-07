import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

// Voor het smooth scroll gedrag als je op een link klikt
const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const partners = [
    {
        slug: 'starbucks',
        name: 'Starbucks',
        title: 'Multi-site horecalocaties in NL',
        pImg: '/images/partners/starbucks-logo.webp',
    },
    {
        slug: 'bam',
        name: 'BAM',
        title: 'Corporate servicelocaties',
        pImg: '/images/partners/bam-logo.png',
    },
    {
        slug: 'la-place',
        name: 'La Place',
        title: 'Landelijke foodservice',
        pImg: '/images/partners/laplace-logo.png',
    },
    {
        slug: 'rizani-de-echer-hotel',
        name: 'Rizani De Echer Hotel',
        title: 'Hospitality kamers & wellness',
        pImg: '/images/partners/hotel-logo.jpg',
    },
];

const PartnersSection = (props) => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle
                            MainTitle="Strategische partners"
                            SubTitle="Wij beheren installaties voor landelijke ketens en vastgoedportefeuilles."
                        />
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {partners.map((partner, index) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={index}>
                                <div className="wpo-team-item">
                                    {/* Afbeelding/Logo */}
                                    <div className="wpo-team-img">
                                        <img src={partner.pImg} alt={partner.name} />
                                        {/* Als je geen social icons nodig hebt, laat je dit social-blok gewoon weg */}
                                    </div>
                                    {/* Titel en subtitel */}
                                    <div className="wpo-team-text">
                                        <h2>
                                            {partner.name}
                                        </h2>
                                        <span>{partner.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
