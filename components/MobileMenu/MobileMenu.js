import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import Services from '../../api/service'; // Importeer de services data
import Blogs from '../../api/blogs'; // Importeer de blogs data
import Projects from '../../api/project'; // Importeer de projects data

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Dynamische menu-items
    const menus = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Over ons',
            link: '/about',
        },
        {
            id: 3,
            title: 'Onze Diensten',
            link: '/service',
            submenu: Services.map((service) => ({
                id: service.Id,
                title: service.sTitle,
                link: `/service/${service.slug}`,
            })),
        },
        {
            id: 4,
            title: 'Projecten',
            link: '/project',
            submenu: Projects.map((project) => ({
                id: project.id,
                title: project.title,
                link: `/project/${project.slug}`,
            })),
        },
        {
            id: 5,
            title: 'Blog',
            link: '/blog',
            submenu: Blogs.map((blog) => ({
                id: blog.id,
                title: blog.title,
                link: `/blog/${blog.slug}`,
            })),
        },
        {
            id: 6,
            title: 'Contact',
            link: '/contact',
        },
    ];

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => (
                        <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                            {item.submenu ? (
                                <Fragment>
                                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                        {item.title}
                                        <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                    </p>
                                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                        <List className="subMenu">
                                            {item.submenu.map((submenu) => (
                                                <ListItem key={submenu.id}>
                                                    <Link onClick={ClickHandler} href={submenu.link}>
                                                        {submenu.title}
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </Fragment>
                            ) : (
                                <Link href={item.link}>{item.title}</Link>
                            )}
                        </ListItem>
                    ))}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;