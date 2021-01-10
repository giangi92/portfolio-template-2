import React from 'react'
import image1 from '../../media/img/3dtechnology.jpg'

const About = () => {
    let contentData = require('../../content-data.json');
    return (
        <div>
            <div id="about" className="container section main">
                <div className="section-title">
                    <h2>{contentData.section2.section_title}</h2>
                </div>
                <div data-aos="fade-right" className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                        <img src={image1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" >
                        <h3>{contentData.section2.title}</h3>
                        <p className="font-italic">
                            {contentData.section2.text1}
                        </p>
                        <ul>
                        <li><i className="ri-check-double-line"></i> {contentData.section2.list1}</li>
                        <li><i className="ri-check-double-line"></i> {contentData.section2.list2}</li>
                        <li><i className="ri-check-double-line"></i> {contentData.section2.list3}</li>
                        </ul>
                        <p>
                            {contentData.section2.text2}
                        </p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;