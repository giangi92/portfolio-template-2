import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'remixicon/fonts/remixicon.css'
import About from './about';
import Features from './features';
import Services from './services';
import CallToAction from './call-to-action';
import Contacts from './contacts';
import Typewriter from 'typewriter-effect';
import { Row } from 'react-bootstrap';
import SocialIcons from '../social-icons/social-icon';
import About2 from './about2';

const Body = () => {

    AOS.init({duration:1000});

    let contentData = require('../../content-data.json');
    

    return (
        <div>
            <section id="firstPage" className="d-flex align-items-center">
                <div data-aos="zoom-in" className="container">
                    <h1>{contentData.section1.title}</h1>
                    <Row>
                        <p style={{display: "flex"}} >Io sono un <span style={{paddingLeft: '5px'}}>{<Typewriter 
                            options={{
                                strings: ['Developer', 'Photographer', 'Designer', 'Gamer', 'Nerd', 'TLOTR Fan', 'D&D Master', 'Fallito', 'NaN'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true,
                            }}
                        ></Typewriter>}</span></p>
                        
                    </Row>
                    <SocialIcons></SocialIcons>
                </div>
            </section>
            
            <About2 className="main"></About2>
            <Features></Features>
            <Services></Services>
            <CallToAction></CallToAction>
            <Contacts></Contacts>
            
        </div>
    )
}

export default Body;