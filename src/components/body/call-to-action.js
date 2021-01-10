import React from 'react'

const CallToAction = () => {
    let contentData = require('../../content-data.json');
    return (
        <div>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="text-center">
                        <h3>{contentData.section5.title}</h3>
                        <p> {contentData.section5.text} </p>
                        <a className="cta-btn" href="#">{contentData.section5.button}</a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CallToAction;