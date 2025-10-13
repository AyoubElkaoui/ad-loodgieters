import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import FunFact from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";

const ServicePage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Diensten'} pagesub={'Diensten'}/>
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
export default ServicePage;


