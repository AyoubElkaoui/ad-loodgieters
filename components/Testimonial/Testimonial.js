import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

// Google Reviews in een array
const testimonial = [
    {
        tsImg: "/images/testimonial/avatar-ayoub.jpg", // of een algemene avatar
        Des: "Vandaag problemen gehad met een toiletverstopping. Door de geweldige prestatie en snelheid van Anass ben ik in 10 minuten geholpen. Topservice!",
        Title: "Ayoub el kaoui",
        Sub: "2 reviews • een maand geleden",
    },
    {
        tsImg: "/images/testimonial/avatar-joppe.jpg",
        Des: "Zeer prettig geholpen! Ik had een probleem met de stadsverwarming in mijn huis en dat is heel vakkundig opgelost. Bovendien heel aardig en via WhatsApp goed te woord gestaan.",
        Title: "Joppe Ter Meer",
        Sub: "8 reviews • 3 weken geleden",
    },
    {
        tsImg: "/images/testimonial/avatar-raj.jpg",
        Des: "Problemen gehad met de afvoer van de wasbak. De aardige man heeft het probleem heel goed aangepakt en helemaal opgelost.",
        Title: "Raj Winder",
        Sub: "1 review • een maand geleden",
    },
    {
        tsImg: "/images/testimonial/avatar-lukas.jpg",
        Des: "Goede loodgieter, eerlijke prijs. Mocht je ooit weer hulp nodig hebben, dan staan ze voor je klaar!",
        Title: "Lukas Burgering",
        Sub: "1 review • 2 dagen geleden",
    },
    {
        tsImg: "/images/testimonial/avatar-ricardo.jpg",
        Des: "Fijne service en snel geholpen! Zeker een aanrader als je een loodgieter zoekt.",
        Title: "Ricardo Spies",
        Sub: "1 review • een maand geleden",
    },
];

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        {/* Nederlandstalige titel via SectionTitle */}
                        <SectionTitle MainTitle={"Wat zeggen onze klanten?"} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="testimonials-wrapper owl-carousel">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="testimonials-item" key={tsm}>
                                        <div className="testimonials-item-top">
                                            <p>{tesmnl.Des}</p>
                                        </div>
                                        <div className="testimonials-item-bottom">
                                            <div className="testimonials-item-bottom-author-text">
                                                <h3>{tesmnl.Title}</h3>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
