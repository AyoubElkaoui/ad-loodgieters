import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import ServiceSection from '../../components/ServiceSection2/ServiceSection2';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';

const AboutPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Over ons'} pagesub={'over-ons'} />
            <About/>
            <ServiceSection/>
            <FunFact/> 
            <TeamSection/> 
            <Testimonial/> 
            <BlogSection/> 
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default AboutPage;


