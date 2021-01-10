import React, { useState } from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { smoothScrollAnchor } from "smooth-scroll-anchor";
import Scrollspy from 'react-scrollspy'

const Header = () => {

    const [active, setActive] = useState(false);

    let isActive = active ? "active" : "";

    smoothScrollAnchor({
        behaviour: "smooth", // [smooth | auto] Smooth animated scroll or instant
        block: "start", // [start | center | end | nearest] Alignment of the target element when it's finished scrolling
        //offset: 200 // Optional offset of the target scroll position. Handy if you have a fixed header!
    });

    return (
        <div>
            <div id="header" className={`d-flex flex-column justify-content-center ${isActive}`}>
                <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-nav-toggle" onClick={(()=>setActive(!active))} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="nav-menu">
                            <Scrollspy items={ ['firstPage', 'about'] } currentClassName="is-active">
                                <li><NavLink href="#firstPage"><i className="ri ri-home-4-line"></i><span>Home</span></NavLink></li>
                                <li><NavLink href="#about"><i className="ri ri-user-2-line"></i><span>About</span></NavLink></li>
                                <li><NavLink href="#link1"><i className="ri ri-keyboard-box-line"></i><span>Services</span></NavLink></li>
                                <li><NavLink href="#link2" ><i className="ri ri-pages-line"></i><span>Portfolio</span></NavLink></li>
                                <li><NavLink href="#link3" ><i className="ri ri-phone-line"></i><span>Contact</span></NavLink></li>
                            </Scrollspy>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;