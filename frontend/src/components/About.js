import React from 'react';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img src="/assets/img/profile/IMG_4695.JPEG" alt="Profile" className="img-fluid" />
                </div>
                <div className="profile-badge">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
              </div>

              <div className="profile-content">
                <h3>Matthew Whisonant</h3>
                <p className="profession">Engineer &amp; Developer</p>

                <div className="contact-links">
                  <a href="mailto:matthewwhisonant@protonmail.com" className="contact-item">
                    <i className="bi bi-envelope"></i>
                    matthewwhisonant@protonmail.com
                  </a>
                  <a href="tel:+14703700668" className="contact-item">
                    <i className="bi bi-telephone"></i>
                    +1 (470) 370-0668
                  </a>
                  <a href="#" className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    Atlanta, GA
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-header">
                <span className="badge-text">Get to Know Me</span>
                <h2>Passionate About Creating Digital Experiences</h2>
              </div>

              <div className="description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Specialization</span>
                    <span className="detail-value">UI/UX Design &amp; Development</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Experience Level</span>
                    <span className="detail-value">Senior Professional</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Education</span>
                    <span className="detail-value">Computer Science, MIT</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">English, Spanish, French</span>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-download"></i>
                  Download Resume
                </a>
                <a href="#" className="btn btn-outline">
                  <i className="bi bi-chat-dots"></i>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
