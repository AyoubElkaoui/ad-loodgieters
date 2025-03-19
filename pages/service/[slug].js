import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Services from '../../api/service';
import ServiceSidebar from './single/sidebar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Benefits from './single/benefits';

const SeviceSinglePage = () => {
    const router = useRouter();
    const serviceDetails = Services.find((item) => item.slug === router.query.slug);

    if (!serviceDetails) {
        return <div>Dienst niet gevonden.</div>;
    }

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={serviceDetails.sTitle} />

            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <ServiceSidebar />

                        <div className="col-lg-8 col-12">
                            <div className="wpo-blog-content">
                                {/* Hoofdcontent, net als in blog */}
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img
                                            src={serviceDetails.sImg}
                                            alt={serviceDetails.sTitle}
                                        />
                                    </div>
                                    {/* Voorbeeld meta: je kunt hier bijvoorbeeld
                                        "Door AD-Loodgietersbedrijf" + datum tonen,
                                        of het weglaten. */}
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi ti-user"></i> Door AD-Loodgietersbedrijf</li>
                                            <li><i className="fi flaticon-calendar"></i> 24/7 Service</li>
                                        </ul>
                                    </div>
                                    <h2>{serviceDetails.sTitle}</h2>
                                    <p>{serviceDetails.description}</p>
                                </div>

                                {/* Dynamische SEO-teksten */}
                                {serviceDetails.seoHeader1 && <h2>{serviceDetails.seoHeader1}</h2>}
                                {serviceDetails.longText1 && <p>{serviceDetails.longText1}</p>}

                                {serviceDetails.seoHeader2 && <h3>{serviceDetails.seoHeader2}</h3>}
                                {serviceDetails.longText2 && <p>{serviceDetails.longText2}</p>}

                                {serviceDetails.seoHeader3 && <h3>{serviceDetails.seoHeader3}</h3>}
                                {serviceDetails.longText3 && <p>{serviceDetails.longText3}</p>}

                                {serviceDetails.seoHeader4 && <h3>{serviceDetails.seoHeader4}</h3>}
                                {serviceDetails.longText4 && <p>{serviceDetails.longText4}</p>}

                                {/* FAQ / Benefits */}
                                <div className="wpo-faq-section">
                                    <h4>Veel Gestelde Vragen</h4>
                                    <Benefits faq={serviceDetails.faq} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default SeviceSinglePage;
