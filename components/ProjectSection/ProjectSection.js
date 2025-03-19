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
                                        <h2>Een kijkje in onze projecten</h2>
                                    </div>
                                    <div className="wpo-about-content-inner">
                                        <p>
                                            Van kleinschalige reparaties tot grootschalige renovaties:
                                            Ad-Loodgietersbedrijf heeft jarenlange ervaring met
                                            verschillende soorten projecten. Hier combineren we
                                            vakmanschap met duurzame oplossingen.
                                        </p>
                                        <p>
                                            Onze werkwijze kenmerkt zich door heldere communicatie en
                                            een hoge kwaliteit van oplevering. Of u nu in een
                                            particulierenwoning of een bedrijfspand woont, wij passen
                                            ons aan aan uw situatie.
                                        </p>
                                        <div className="signeture">
                                            <h4>Ad-Loodgietersbedrijf</h4>
                                            <p>Professionals in totaaloplossingen</p>
                                            <div
                                                className="wpo-about-btn"
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <Link
                                                    href="/contact"
                                                    className="theme-btn"
                                                >
                                                    Neem contact op
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
                                MainTitle="Onze laatste projecten"
                                SubTitle="Bekijk hieronder enkele recente loodgietersklussen die wij tot een succes hebben gemaakt. Van lekkageoplossingen tot complete verbouwingen."
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
