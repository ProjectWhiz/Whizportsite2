import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="hero-text">
                <h1>Project<span className="accent-text">Whiz</span></h1>
                <h2>Matthew Whisonant</h2>
                <p className="lead">I'm a <span className="typed" data-typed-items="UI/UX Designer, Web Developer, Brand Strategist, Creative Director"></span></p>
                <p className="description">Passionate about creating exceptional digital experiences that blend innovative design with functional development. Let's bring your vision to life.</p>

                <div className="hero-actions">
                  <a href="#portfolio" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-outline">Get In Touch</a>
                </div>

                <div className="social-links">
                  <a href="#"><i className="bi bi-dribbble"></i></a>
                  <a href="#"><i className="bi bi-behance"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="hero-visual">
                <div className="profile-container">
                  <div className="profile-background"></div>
                  <img src="/assets/img/profile/IMG_4695.JPEG" alt="Alexander Chen" className="profile-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
