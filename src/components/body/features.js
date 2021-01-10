import React from 'react'
import image1 from '../../media/img/keyboard.jpg'

const Features = () => {
    let contentData = require('../../content-data.json');
    return (
        <div>
             <section id="features" className="container features section main">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        
                        <div className="bkg-image col-lg-6 " style={{backgroundImage:"url("+image1+")"}} data-aos="fade-right"></div> 
                    
                        <div className="col-lg-6 " data-aos="fade-left" >
                            <div className="icon-box mt-5 mt-lg-0 " data-aos="zoom-in" >
                                <i className="bx ri-file-paper-2-line"></i>
                                <h4>{contentData.section3.title1}</h4>
                                <p>{contentData.section3.text1}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in" >
                                <i className="bx ri-edit-box-line"></i>
                                <h4>{contentData.section3.title2}</h4>
                                <p>{contentData.section3.text2}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in" >
                                <i className="bx ri-gallery-line"></i>
                                <h4>{contentData.section3.title3}</h4>
                                <p>{contentData.section3.text3}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in">
                                <i className="bx ri-shield-line"></i>
                                <h4>{contentData.section3.title4}</h4>
                                <p>{contentData.section3.text4}</p>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Features;