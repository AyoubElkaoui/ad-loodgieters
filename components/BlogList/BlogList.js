import React from 'react';
import Link from 'next/link';
import blogs from '../../api/blogs';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const BlogList = () => {
    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        {/* Eventueel een hoofdtitel/subtitel */}
                        <div className="section-title text-center">
                            <h2>Strategische updates</h2>
                            <p>Lees hoe wij multi-site installaties beheren en welke trends facility teams raken.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="wpo-blog-card">
                                <div className="card-img">
                                    <img src={blog.blogSingleImg} alt={blog.title} />
                                </div>
                                <div className="card-content">
                                    <h3>
                                        <Link onClick={ClickHandler} href={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <div className="card-meta">
                                        <span>
                                            <i className="fi flaticon-calendar"></i> {blog.create_at}
                                        </span>
                                    </div>
                                    <p>{blog.shortDescription}</p>
                                    <Link
                                        onClick={ClickHandler}
                                        href={`/blog-single/${blog.slug}`}
                                        className="read-more"
                                    >
                                        Lees meer <i className="fa fa-angle-double-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
