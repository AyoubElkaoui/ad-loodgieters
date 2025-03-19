import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import blogs from '../../api/blogs';
import Link from 'next/link';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar';
import Scrollbar from '../../components/scrollbar/scrollbar';

const BlogSingle = (props) => {
    const router = useRouter();
    const { slug } = router.query;

    // Zoek de huidige blog in blogs.js
    const BlogDetails = blogs.find((item) => item.slug === slug);

    // Als er geen blog gevonden wordt, geef een fallback.
    if (!BlogDetails) {
        return <div>Blog niet gevonden.</div>;
    }

    // Bepaal index in de array om Vorige/Volgende blog te tonen
    const currentIndex = blogs.findIndex((b) => b.slug === slug);
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    return (
        <Fragment>
            <Navbar />
            {/* Paginatitel (bovenaan) */}
            <PageTitle pageTitle={BlogDetails.title} pagesub="Blog" />

            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Hoofdcontent (col-8) */}
                        <div className="col col-lg-8 col-12">
                            <div className="wpo-blog-content">
                                {/* Bovenste blok met afbeelding, meta-info, titel en shortDescription */}
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img
                                            src={BlogDetails.blogSingleImg}
                                            alt={BlogDetails.title}
                                        />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="fi ti-user"></i> Door AD-Loodgietersbedrijf
                                            </li>
                                            <li>
                                                <i className="fi flaticon-calendar"></i> {BlogDetails.create_at}
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails.title}</h2>
                                    <p>{BlogDetails.shortDescription}</p>

                                    {/* Dynamische quote (optioneel, alleen tonen als quote aanwezig is) */}
                                    {BlogDetails.quote && (
                                        <blockquote>
                                            {BlogDetails.quote}
                                        </blockquote>
                                    )}
                                </div>

                                {/* Dynamische SEO-teksten */}
                                {/* 1e SEO-sectie */}
                                {BlogDetails.seoHeader1 && <h2>{BlogDetails.seoHeader1}</h2>}
                                {BlogDetails.longText1 && <p>{BlogDetails.longText1}</p>}

                                {/* 2e SEO-sectie */}
                                {BlogDetails.seoHeader2 && <h3>{BlogDetails.seoHeader2}</h3>}
                                {BlogDetails.longText2 && <p>{BlogDetails.longText2}</p>}

                                {/* 3e SEO-sectie */}
                                {BlogDetails.seoHeader3 && <h3>{BlogDetails.seoHeader3}</h3>}
                                {BlogDetails.longText3 && <p>{BlogDetails.longText3}</p>}

                                {/* 4e SEO-sectie */}
                                {BlogDetails.seoHeader4 && <h3>{BlogDetails.seoHeader4}</h3>}
                                {BlogDetails.longText4 && <p>{BlogDetails.longText4}</p>}

                                {/* Vorige / Volgende blog in het Nederlands met fallback-teksten */}
                                <div className="more-posts">
                                    {/* Vorige blog */}
                                    {prevBlog ? (
                                        <div className="previous-post">
                                            <Link href={`/blog-single/${prevBlog.slug}`}>
                                                <span className="post-control-link">Vorige blog</span>
                                                <span className="post-name">{prevBlog.title}</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="previous-post">
                                            <span className="post-control-link">Geen eerdere blog</span>
                                        </div>
                                    )}

                                    {/* Volgende blog */}
                                    {nextBlog ? (
                                        <div className="next-post">
                                            <Link href={`/blog-single/${nextBlog.slug}`}>
                                                <span className="post-control-link">Volgende blog</span>
                                                <span className="post-name">{nextBlog.title}</span>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="next-post">
                                            <span className="post-control-link">Geen latere blog</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (CTA, Categories, Tags, Search) */}
                        <BlogSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogSingle;
