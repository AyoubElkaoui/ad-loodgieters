import React, { useState } from 'react';
import Link from "next/link";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import MobileMenu from '../MobileMenu/MobileMenu';

// Importeer de data (diensten, blogs, projecten)
import Services from '../../api/service'; // Pas het pad aan naar jouw services data
import Blogs from '../../api/blogs'; // Pas het pad aan naar jouw blogs data
import Projects from '../../api/project'; // Pas het pad aan naar jouw projects data

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <header id="header" className={props.topbarNone}>
            <HeaderTopbar />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} href="/home" className="navbar-brand">
                                        <img src='/images/AD-Loodgietersbedrijf (1).svg' alt="" style={{ width: '250px', height: 'auto' }} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/about">Over ons</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/service/">Onze Diensten</Link>
                                            <ul className="sub-menu">
                                                {Services.map((service) => (
                                                    <li key={service.Id}>
                                                        <Link onClick={ClickHandler} href={`/service/${service.slug}`}>
                                                            {service.sTitle}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/project">Projecten</Link>
                                            <ul className="sub-menu">
                                                {Projects.map((project) => (
                                                    <li key={project.id}>
                                                        <Link onClick={ClickHandler} href={`/project/${project.slug}`}>
                                                            {project.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/blog">Blog</Link>
                                            <ul className="sub-menu">
                                        {Blogs.map((blog) => (
                                            <li key={blog.id}>
                                                <Link onClick={ClickHandler} href={`/blog-single/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </li>
                                        ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} href="/contact" className="theme-btn">Spoed 24/7</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;