// /pages/blog-single/[slug].js
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import blogs from '../../api/blogs';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar'; // pas pad aan
import PageTitle from '../../components/pagetitle/PageTitle';

const BlogSinglePage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const blogDetails = blogs.find((item) => item.slug === slug);

    if (!blogDetails) {
        return <div>Blog niet gevonden.</div>;
    }

    return (
        <Fragment>
            <Navbar />
            {/* Paginatitel */}
            <PageTitle pageTitle={blogDetails.title} pagesub="Blog" />

            {/* Blog content */}
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <BlogSidebar />

                        {/* Hoofdcontent */}
                        <div className="col-lg-8 col-12">
                            <div className="wpo-blog-content">
                                {/* Header met afbeelding en titel */}
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img
                                            src={blogDetails.blogSingleImg}
                                            alt={blogDetails.title}
                                        />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="fi flaticon-user"></i>
                                                Door {blogDetails.author}
                                            </li>
                                            <li>
                                                <i className="fi flaticon-calendar"></i>
                                                {blogDetails.create_at}
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>{blogDetails.title}</h2>
                                    <p>{blogDetails.shortDescription}</p>
                                </div>

                                {/* SEO-teksten (identiek aan services-opbouw) */}
                                {/* 1e sectie */}
                                {blogDetails.seoHeader1 && (
                                    <h2>{blogDetails.seoHeader1}</h2>
                                )}
                                {blogDetails.longText1 && (
                                    <p>{blogDetails.longText1}</p>
                                )}

                                {/* 2e sectie */}
                                {blogDetails.seoHeader2 && (
                                    <h3>{blogDetails.seoHeader2}</h3>
                                )}
                                {blogDetails.longText2 && (
                                    <p>{blogDetails.longText2}</p>
                                )}

                                {/* 3e sectie */}
                                {blogDetails.seoHeader3 && (
                                    <h3>{blogDetails.seoHeader3}</h3>
                                )}
                                {blogDetails.longText3 && (
                                    <p>{blogDetails.longText3}</p>
                                )}

                                {/* 4e sectie */}
                                {blogDetails.seoHeader4 && (
                                    <h3>{blogDetails.seoHeader4}</h3>
                                )}
                                {blogDetails.longText4 && (
                                    <p>{blogDetails.longText4}</p>
                                )}
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

export default BlogSinglePage;
