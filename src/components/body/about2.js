import React, { useState } from 'react'
import image1 from '../../media/img/3dtechnology.jpg'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const About2 = () => {

  const [startCounter, setStartCounter] = useState(false);

  function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    if(isVisible){
      setStartCounter(true);
    }
  }

  return (
    <div id="about" className="main">
      <div className="container section" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <img src={image1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                  <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div id="about" className="container section">
          

          <div data-aos="fade-up" className="section-title">
            <h2>Facts</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <VisibilitySensor onChange={onChange}>
            <div data-aos="fade-right" className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bx ri-chat-smile-3-line"></i>
                  {/* <span data-toggle="counter-up">232</span> */}
                  <CountUp start={startCounter} end={232} duration={3} ></CountUp>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bx ri-folder-open-line"></i>
                  {/* <span data-toggle="counter-up">521</span> */}
                  <CountUp start={startCounter} end={521} duration={3} ></CountUp>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className=" ri-phone-line"></i>
                  {/* <span data-toggle="counter-up">1,463</span> */}
                  <CountUp start={startCounter} end={1463} duration={3} ></CountUp>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="ri-team-line "></i>
                  <CountUp start={startCounter} end={15} duration={3} ></CountUp>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </div>

      <div data-aos="fade-up" className="container section">
        <div id="about" className="container section">
          <div data-aos="fade-up" className="section-title">
            <h2>Skills</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:"55%"}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default About2;