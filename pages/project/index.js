import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Footer from '../../components/footer/Footer';
import FunFact from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Projecten'} pagesub={'Projecten'}/>
            <ProjectSection/>
            <FunFact/>
            <TeamSection/>
            <Testimonial/>
            <BlogSection/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
