import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Front-end Development</h3>
              <div className="skills-animation">
                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>HTML/CSS</h4>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Expert level knowledge of semantic HTML5 and modern CSS3 techniques</div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>JavaScript</h4>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Strong proficiency in ES6+, DOM manipulation, and modern frameworks</div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>React</h4>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Experience with React hooks, state management, and component architecture</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="300">
              <h3>Back-end Development</h3>
              <div className="skills-animation">
                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Node.js</h4>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Server-side JavaScript development with Express and REST APIs</div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Python</h4>
                    <span className="skill-percentage">70%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Python development with Django and data analysis tools</div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>SQL</h4>
                    <span className="skill-percentage">65%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="skill-tooltip">Database design, optimization, and complex queries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
