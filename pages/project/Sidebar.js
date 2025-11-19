import React from 'react';
import Link from 'next/link';
import Services from '../../api/service';
import Blogs from '../../api/blogs';

const ServiceSidebar = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">

                {/* 1. Diensten-lijst */}
                <div className="wpo-service-widget widget">
                    <h2>Diensten</h2>
                    <ul>
                        {Services.slice(0, 6).map((service, index) => (
                            <li key={index}>
                                <Link onClick={ClickHandler} href={`/service/${service.slug}`}>
                                    {service.sTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Contact-CTA */}
                <div className="wpo-contact-widget widget">
                    <h2>Hoe kunnen wij u helpen?</h2>
                    <p>
                        Wij staan altijd klaar om u te adviseren en te helpen bij
                        al uw loodgieterswerk. Neem gerust contact met ons op!
                    </p>
                    <Link href="/contact">Neem contact op</Link>
                </div>

                {/* 3. Recente Blogs - Nu met thumbnail & datum */}
                <div className="wpo-blog-widget widget">
                    <h2>Recente Blogs</h2>

                    {Blogs.slice(0, 3).map((blog, i) => (
                        <div className="recent-blog-post" key={i}>
                            <div className="rbp-content">
                                <Link href={`/blog-single/${blog.slug}`} onClick={ClickHandler}>
                                    <h6 className="rbp-title">{blog.title}</h6>
                                </Link>
                                {/* Toon datum of auteur, afhankelijk van je blog-data */}
                                <span className="rbp-date">{blog.create_at}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServiceSidebar;
