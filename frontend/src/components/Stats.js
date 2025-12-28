import React from 'react';

function Stats() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-wrapper">
              <div className="stats-item" data-aos="zoom-in" data-aos-delay="150">
                <div className="icon-wrapper">
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Happy Clients</p>
              </div>

              <div className="stats-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-wrapper">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>

              <div className="stats-item" data-aos="zoom-in" data-aos-delay="250">
                <div className="icon-wrapper">
                  <i className="bi bi-headset"></i>
                </div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>

              <div className="stats-item" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
