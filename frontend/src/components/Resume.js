import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Project-driven software developer with experience building secure, user-focused applications across web, automation, and tooling. Strong background in Python-based systems, frontend development, and solving real operational problems under technical and security constraints.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="resume-side" data-aos="fade-right" data-aos-delay="100">
              <div className="profile-img mb-4">
                <img src="/assets/img/profile/IMG_4695.JPEG" alt="Profile" className="img-fluid rounded" />
              </div>

              <h3>Professional Summary</h3>
              <p>Software developer with hands-on experience building practical, real-world applications ranging from secure internal tooling to production-ready websites. Strong focus on automation, usability, and problem-solving, with experience working under operational, security, and budget constraints.</p>

              <h3 className="mt-4">Contact Information</h3>
              <ul className="contact-info list-unstyled">
                <li><i className="bi bi-geo-alt"></i> Virtual</li>
                <li><i className="bi bi-envelope"></i> matthewwhisonant@protonmail.com</li>
                <li><i className="bi bi-phone"></i> +1 (470) 370-0668</li>
                <li><i className="bi bi-linkedin"></i> Github.com/ProjectWhiz</li>
              </ul>

              <div className="skills-animation mt-4">
                <h3>Technical Skills</h3>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>Web Development</span>
                    <span>95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>Workflow Creation</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>Backend Development</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>Project Management</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 ps-4 ps-lg-5">
            <div className="resume-section" data-aos="fade-up">
              <h3><i className="bi bi-briefcase me-2"></i>Project Experience</h3>

              <div className="resume-item">
                <h4>Inv10 Secure Sample</h4>
                {/*<h5>2022 - Present</h5>*/}
                {/*<p className="company"><i className="bi bi-building"></i> US Air Force</p>*/}
                <ul>
                  <li>Designed and built an automated inventory setup tool for classified weapons vault operations, reducing setup time from half a workday to minutes</li>
                  <li>Improved inventory workflow efficiency by enabling teams to begin inventories a full day earlier</li>
                  <li>Addressed OPSEC and IA constraints by packaging the application as a restricted executable using PyInstaller</li>
                  <li>Preserved original document formatting while generating inventory-ready Excel, CSV, and PDF outputs</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Web Scraper & Discord Bot</h4>
                {/*<h5>2019 - 2022</h5>*/}
                {/*<p className="company"><i className="bi bi-building"></i> Digital Solutions Corp.</p>*/}
                <ul>
                  <li>Built a web scraping tool to monitor product listings and pricing on retail websites</li>
                  <li>Implemented command-based scraping via Discord to enable easy, free usage without a GUI</li>
                  <li>Structured output to provide product name, price, and direct links with preview support</li>
                  <li>Designed both a terminal-based workflow and a Discord bot interface for wider accessibility</li>
                </ul>
              </div>
            </div>

            <div className="resume-section" data-aos="fade-up" data-aos-delay="100">
              <h3><i className="bi bi-mortarboard me-2"></i>Experience</h3>

              <div className="resume-item">
                <h4>Experience Highlights</h4>
                {/*<h5>2017 - 2019</h5>*/}
                {/*<p className="company"><i className="bi bi-building"></i> MIT</p>*/}
                <ul>
                  <li>Built and deployed multiple real-world applications from concept to production</li>
                  <li>Designed automation tools that reduced manual setup time and improved workflow efficiency</li>
                  <li>Collaborated directly with clients and stakeholders to refine requirements in real time</li>
                  <li>Delivered production ready systems under time, budget, and security constraints</li>
                </ul>
              </div>
            </div>

            <div className="resume-section" data-aos="fade-up" data-aos-delay="200">
              <h3><i className="bi bi-award me-2"></i>Additional Projects</h3>

              <div className="resume-item">
                <h4>MaximizeYourCDC</h4>
                <h5>Practice testing platform for U.S. Airmen with analytics-driven study insights</h5>
                {/*<h5>2023</h5>*/}
              </div>

              <div className="resume-item">
                <h4>XEqualSafe</h4>
                <h5>Grid-based strategy game featuring adaptive AI behavior using reinforcement learning concepts</h5>
                {/*<h5>2023</h5>*/}
              </div>

              <div className="resume-item">
                <h4>Secure Messaging App</h4>
                <h5>Encrypted group chat application using key-value validation for secure message access</h5>
                {/*<h5>2023</h5>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
