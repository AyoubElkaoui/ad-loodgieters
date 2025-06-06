import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import TeamSection from '../components/TeamSection/TeamSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection';
import Hero3 from "../components/hero3/hero3";
import ServiceSection2 from "../components/ServiceSection2/ServiceSection2";
import FunFact2 from "../components/FunFact2/FunFact2";



const HomePage = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero3 />
            <Features fClass={'wpo-features-section-s2'}/>
            <ServiceSection2 />
            <FunFact2 />
            <TeamSection />
            <Appointment />
            <Testimonial />
            <BlogSection />
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage;


