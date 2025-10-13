import React, {Fragment} from 'react';
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
    return (
        <Fragment>
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
