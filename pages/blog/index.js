import React, {Fragment} from 'react';
import Head from 'next/head';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import FunFact from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";


const BlogSingle = (props) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const pageUrl = `${siteUrl}/blog`;
    const pageTitle = 'Nieuws & tips | Blog van AD-Loodgietersbedrijf';
    const description = 'Lees praktische tips over lekkages, onderhoud en renovaties. Blijf op de hoogte van het laatste nieuws van AD-Loodgietersbedrijf.';
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: pageTitle,
        description,
        url: pageUrl,
        publisher: {
            '@type': 'Organization',
            name: 'AD-Loodgietersbedrijf',
            url: siteUrl,
        },
    };

    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={`${siteUrl}/images/blog/b1.jpg`} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${siteUrl}/images/blog/b1.jpg`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
                />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/>
            <BlogSection/>
            <FunFact/>
            <TeamSection/>
            <Testimonial/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
