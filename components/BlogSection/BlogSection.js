import React from "react";
import blogs from "../../api/blogs";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

// Smooth scroll naar boven bij klik
const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const BlogSection = () => {
    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        {/* Nederlandse titel in SectionTitle */}
                        <SectionTitle MainTitle={"Inzichten voor facility en vastgoed"} />
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.blogSingleImg} alt="" />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <Link
                                            onClick={ClickHandler}
                                            href="/blog-single/[slug]"
                                            as={`/blog-single/${blog.slug}`}
                                            className="date"
                                        >
                                            {blog.create_at}
                                        </Link>
                                        <h2>
                                            <Link
                                                onClick={ClickHandler}
                                                href="/blog-single/[slug]"
                                                as={`/blog-single/${blog.slug}`}
                                            >
                                                {blog.title}
                                            </Link>
                                        </h2>
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
            </div>
        </section>
    );
};

export default BlogSection;
