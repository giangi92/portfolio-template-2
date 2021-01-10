import React from 'react'

const Contacts = () => {
    let contentData = require('../../content-data.json');
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="section-title">
                        <h2>{contentData.section6.section_subtitle}</h2>
                        <p>{contentData.section6.section_title}</p>
                    </div>

                    <div>
                        <iframe style={{border:0, width: '100%', height:'270px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.498025398824!2d16.88637641537726!3d41.10181317929142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8357d7842a1%3A0x407e5776229c2204!2sVia%20Amendola%2C%20170%2F5%2C%2070126%20Bari%20BA!5e0!3m2!1sit!2sit!4v1606491216060!5m2!1sit!2sit" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="ri-map-2-line"></i>
                                    <h4>{contentData.section6.title1}</h4>
                                    <p>{contentData.section6.text1}</p>
                                </div>
                            </div>
                            <div className="info">
                                <i className="ri-mail-line"></i>
                                <h4>{contentData.section6.title2}</h4>
                                <p>{contentData.section6.text2}</p>
                            </div>

                            <div className="info">
                                <i className="ri-phone-line"></i>
                                <h4>{contentData.section6.title3}</h4>
                                <p>{contentData.section6.text3}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacts;