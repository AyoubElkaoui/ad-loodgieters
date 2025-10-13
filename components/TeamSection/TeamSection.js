import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

// Voor het smooth scroll gedrag als je op een link klikt
const ClickHandler = () => {
    window.scrollTo(10, 0);
};

// Voorbeeld data: vervang logo’s, namen en omschrijvingen door je eigen partners
const partners = [
    {
        slug: 'starbucks',
        name: 'Starbucks',
        title: 'Keten van Koffiehuizen',
        pImg: '/images/partners/starbucks-logo.webp',
    },
    {
        slug: 'bam',
        name: 'BAM',
        title: 'Bouw en Techniek',
        pImg: '/images/partners/bam-logo.png',
    },
    {
        slug: 'la-place',
        name: 'La Place',
        title: 'Restaurantketen',
        pImg: '/images/partners/laplace-logo.png',
    },
    {
        slug: 'groot-hotel',
        name: 'Hotel Skyline',
        title: 'Luxe Hotelketen',
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
                            MainTitle="Onze Partners"
                            SubTitle="Wij zijn trots op deze samenwerkingen en danken onze partners voor het vertrouwen."
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
