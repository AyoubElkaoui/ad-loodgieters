import React, { useState } from 'react';
import Link from 'next/link';
import Projects from '../../api/project';
import SectionTitle from '../SectionTitle';
import styles from '../../styles/sass/components/ProjectSection.module.scss';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const ProjectSection = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const totalProjects = Projects.length;

    const showAllProjects = () => {
        setVisibleCount(totalProjects);
    };

    return (
        <>
            {/* EERSTE SECTIE: Introductie over projecten */}
            <section className="wpo-about-section section-padding">
                <div className="container">
                    <div className="wpo-about-section-wrapper">
                        <div className="row align-items-center">
                            {/* Illustratie links */}
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="wpo-about-img">
                                    <img
                                        src="/images/onze-projecten-loodgieter.jpg"
                                        alt="Onze projecten"
                                    />
                                </div>
                            </div>

                            {/* Tekst rechts */}
                            <div className="col-lg-7 col-md-12 col-12">
                                <div className="wpo-about-content">
                                    <div className="wpo-section-title-s2">
                                        <h2>Projecten met zakelijke impact</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            Wij beheren installaties voor landelijke ketens, hotels, VvE&apos;s en logistieke hubs.
                                            Elk project kent strakke planning, duidelijke rapportage en een team dat 24/7 klaarstaat.
                                        </p>
                                        <p>
                                            Of het nu om multi-site onderhoud of een complexe renovatie gaat: wij coördineren het hele traject
                                            zodat uw organisatie operationeel blijft en voldoet aan alle veiligheids- en hygiënenormen.
                                        </p>
                                        <div className="signeture">
                                            <h4>Ad-Loodgietersbedrijf</h4>
                                            <p>Technisch partner voor vastgoed & facility</p>
                                            <div
                                                className="wpo-about-btn"
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <Link
                                                    href="/contact"
                                                    className="theme-btn"
                                                >
                                                    Plan een projectscan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TWEEDE SECTIE: Overzicht van projecten */}
            <section className={`${styles.projectsCards} section-padding`}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <SectionTitle
                                MainTitle="Recente samenwerkingen"
                                SubTitle="Een selectie van projecten voor ketens, VvE’s en corporate locaties waar wij het loodgietersbeheer verzorgen."
                            />
                        </div>
                    </div>

                    {/* Projectkaarten in een grid van 3 op desktop, 2 op tablet, 1 op mobiel */}
                    <div className="row">
                        {Projects.slice(0, visibleCount).map((project, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className={styles.projectCard}>
                                    {/* Afbeelding */}
                                    <div className={styles.cardImg}>
                                        <img src={project.mainImg} alt={project.title} />
                                    </div>

                                    {/* Content: titel, korte text, leesmeer-knop */}
                                    <div className={styles.cardContent}>
                                        <h3>{project.title}</h3>

                                        <p className={styles.cardDesc}>
                                            {project.shortDescription}
                                        </p>

                                        <Link
                                            href={`/project/${project.slug}`}
                                            onClick={ClickHandler}
                                            className={styles.readMoreBtn}
                                        >
                                            Lees meer <i className="fi flaticon-right-arrow icon"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* “Bekijk alle projecten”-knop */}
                    {visibleCount < totalProjects && (
                        <div className="row">
                            <div className="col-12 text-center">
                                <button
                                    className="theme-btn"
                                    onClick={showAllProjects}
                                >
                                    Bekijk alle projecten
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ProjectSection;
