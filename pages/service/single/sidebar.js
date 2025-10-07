import React from 'react';
import Services from '../../../api/service';
import Link from 'next/link';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                {/* Zoekwidget is verwijderd */}

                <div className="widget category-widget">
                    <h3>Diensten</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}>
                                <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>
                                    {service.sTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="wpo-contact-widget widget">
                    <h2>Plan een servicemeeting</h2>
                    <p>
                        Bespreek uw onderhoudscontract of project met onze servicemanager. We leveren maatwerk voor ketens,
                        VvE&apos;s en corporate locaties.
                    </p>
                    <Link href="/contact">Plan een afspraak</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
