import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Projects from '../../api/project'; // pad naar je Projects array
import Footer from '../../components/footer/Footer';
import ServiceSidebar from './Sidebar';

// MUI Accordion voor de FAQ
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const ProjectSinglePage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Huidig project
    const projectDetails = Projects.find((item) => item.slug === slug);
    if (!projectDetails) {
        return <div>Project niet gevonden.</div>;
    }

    // Vorig / Volgend project
    const currentIndex = Projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? Projects[currentIndex - 1] : null;
    const nextProject = currentIndex < Projects.length - 1 ? Projects[currentIndex + 1] : null;

    // FAQ-state (MUI)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={projectDetails.title} pagesub="Project" />

            {/* Vervang hier wpo-blog-single-section door wpo-project-single-section */}
            <section className="wpo-project-single-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Hoofdcontent */}
                        <div className="col-lg-8 col-12">
                            {/* Vervang wpo-blog-content door wpo-project-content */}
                            <div className="wpo-project-content">
                                {/* Hoofdafbeelding & Titel */}
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img
                                            src={projectDetails.mainImg}
                                            alt={projectDetails.title}
                                        />
                                    </div>

                                    <h2>{projectDetails.title}</h2>
                                    <p>{projectDetails.shortDescription}</p>

                                    {/* Dynamische quote */}
                                    {projectDetails.quote && (
                                        <blockquote>
                                            {projectDetails.quote}
                                        </blockquote>
                                    )}
                                </div>

                                {/* SEO-teksten */}
                                {projectDetails.seoHeader1 && <h3>{projectDetails.seoHeader1}</h3>}
                                {projectDetails.longText1 && <p>{projectDetails.longText1}</p>}

                                {projectDetails.seoHeader2 && <h3>{projectDetails.seoHeader2}</h3>}
                                {projectDetails.longText2 && <p>{projectDetails.longText2}</p>}

                                {projectDetails.seoHeader3 && <h3>{projectDetails.seoHeader3}</h3>}
                                {projectDetails.longText3 && <p>{projectDetails.longText3}</p>}

                                {projectDetails.seoHeader4 && <h3>{projectDetails.seoHeader4}</h3>}
                                {projectDetails.longText4 && <p>{projectDetails.longText4}</p>}

                                {/* Externe links */}
                                {projectDetails.externalLinks && projectDetails.externalLinks.length > 0 && (
                                    <div className="tag-share clearfix">
                                        <div className="tag">
                                            <span>Relevante links: </span>
                                            <ul>
                                                {projectDetails.externalLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {link.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* FAQ (MUI) */}
                                {projectDetails.faq && projectDetails.faq.length > 0 && (
                                    <div className="faq-section comments-area">
                                        <h3 className="comments-title">Veelgestelde Vragen</h3>
                                        <ol className="comments">
                                            {projectDetails.faq.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="comment even thread-even depth-1"
                                                >
                                                    <Accordion
                                                        expanded={expanded === `panel${i}`}
                                                        onChange={handleChange(`panel${i}`)}
                                                    >
                                                        <AccordionSummary
                                                            expandIcon={"+"}
                                                            aria-controls={`panel${i}bh-content`}
                                                            id={`panel${i}bh-header`}
                                                        >
                                                            <Typography>{item.question}</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>{item.answer}</Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}

                                {/* Vorige / Volgend project (zelfde layout als blog) */}
                                <div className="more-posts">
                                    {/* Vorig */}
                                    <div className="previous-post">
                                        {prevProject ? (
                                            <Link href={`/project/${prevProject.slug}`}>
                                                <span className="post-control-link">Vorige project</span>
                                                <span className="post-name">{prevProject.title}</span>
                                            </Link>
                                        ) : (
                                            <span className="post-control-link">Geen eerder project</span>
                                        )}
                                    </div>

                                    {/* Volgend */}
                                    <div className="next-post">
                                        {nextProject ? (
                                            <Link href={`/project/${nextProject.slug}`}>
                                                <span className="post-control-link">Volgende project</span>
                                                <span className="post-name">{nextProject.title}</span>
                                            </Link>
                                        ) : (
                                            <span className="post-control-link">Geen later project</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <ServiceSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ProjectSinglePage;
