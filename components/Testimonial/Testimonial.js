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
        tsImg: "/images/testimonial/img-1.jpg",
        Des: "AD-Loodgietersbedrijf bewaakt onze waterkwaliteit en sanitair in meer dan twintig Starbucks filialen. Incidenten worden direct opgelost en ik ontvang na elke interventie een helder rapport.",
        Title: "Eva Meijer",
        Sub: "Regional Facilities Manager • Starbucks Nederland",
    },
    {
        tsImg: "/images/testimonial/img-2.jpg",
        Des: "Voor de verbouwing van onze keukenlijnen zochten we een partner die nachtelijk werk aankan en HACCP borgt. Hun team leverde, zonder onze gasten te hinderen.",
        Title: "Tom de Ruiter",
        Sub: "Technisch Projectleider • La Place",
    },
    {
        tsImg: "/images/testimonial/img-3.jpg",
        Des: "De reactietijd en de rapportages sluiten perfect aan op onze SLA's. Van lekdetectie tot renovaties; één aanspreekpunt dat alles regelt.",
        Title: "Marleen Visser",
        Sub: "Contractmanager • BAM Facility Management",
    },
    {
        tsImg: "/images/testimonial/img-1.jpg",
        Des: "Voor Rizani De Echer Hotel verzorgt het team de kamer- en wellnessinstallaties. Gasten merken niets van onderhoud en wij houden grip op de planning.",
        Title: "Giovanni Rizzo",
        Sub: "Operations Director • Rizani De Echer Hotel",
    },
    {
        tsImg: "/images/testimonial/img-2.jpg",
        Des: "Onze VvE heeft een onderhoudsplan nodig met 24/7 service. Sinds de overstap zijn storingen sneller verholpen en blijft het gebouw waardevast.",
        Title: "Sandra Willems",
        Sub: "Bestuurslid • VvE Horizon Utrecht",
    },
];

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        {/* Nederlandstalige titel via SectionTitle */}
                        <SectionTitle MainTitle={"Hoe klanten onze samenwerking ervaren"} />
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
