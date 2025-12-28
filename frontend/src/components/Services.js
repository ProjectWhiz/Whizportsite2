import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      icon: 'bi-palette',
      title: 'Creative',
      subtitle: 'branding',
      description: 'Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.'
    },
    {
      id: 2,
      icon: 'bi-gem',
      title: 'Design',
      subtitle: 'systems',
      description: 'Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus venenatis convallis. Aliquam erat volutpat. Etiam viverra magna sit amet.'
    },
    {
      id: 3,
      icon: 'bi-megaphone',
      title: 'Marketing',
      subtitle: 'strategies',
      description: 'Vivamus tempor velit id magna dictum, sed fermentum nisi faucibus. Integer nec pretium sapien. Fusce tincidunt ligula et purus consequat, ac pellentesque nulla eleifend.'
    },
    {
      id: 4,
      icon: 'bi-code-slash',
      title: 'Digital',
      subtitle: 'platforms',
      description: 'Cras fermentum odio eu feugiat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus. Morbi placerat nulla vel nunc viverra accumsan.'
    },
    {
      id: 5,
      icon: 'bi-graph-up',
      title: 'Growth',
      subtitle: 'acceleration',
      description: 'Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus quis urna sodales dignissim. Duis aliquam libero eget risus facilisis. Quisque eget libero vel nisl fringilla.'
    },
    {
      id: 6,
      icon: 'bi-camera-video',
      title: 'Media',
      subtitle: 'solutions',
      description: 'Etiam efficitur lacus in diam finibus, nec ultrices est sagittis. Maecenas elementum magna sed risus faucibus, nec commodo purus facilisis. Vestibulum accumsan magna.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="service-header">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="service-intro">
                <h2 className="service-heading">
                  <div>Innovative business</div>
                  <div><span>performance solutions</span></div>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-summary">
                <p>
                  We integrate forward-thinking strategies, creative approaches, and state-of-the-art technologies to deliver exceptional customer experiences that drive growth and engage target markets.
                </p>
                <a href="#" className="service-btn">
                  View All Services
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 + (index % 3) * 100}>
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <a href="#" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#">
                    {service.title} <span>{service.subtitle}</span>
                  </a>
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
