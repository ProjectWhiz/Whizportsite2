import React from 'react';

function Portfolio() {
  const portfolioItems = [
    { id: 1, category: 'filter-photography', img: 'portfolio-portrait-1.webp', title: 'Capturing Moments', type: 'Photography' },
    { id: 2, category: 'filter-design', img: 'portfolio-2.webp', title: 'Woodcraft Design', type: 'Web Design' },
    { id: 3, category: 'filter-automotive', img: 'portfolio-portrait-2.webp', title: 'Classic Beauty', type: 'Automotive' },
    { id: 4, category: 'filter-nature', img: 'portfolio-portrait-4.webp', title: 'Natural Growth', type: 'Nature' },
    { id: 5, category: 'filter-photography', img: 'portfolio-5.webp', title: 'Urban Stories', type: 'Photography' },
    { id: 6, category: 'filter-design', img: 'portfolio-6.webp', title: 'Digital Experience', type: 'Web Design' }
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row">
            <div className="col-lg-3 filter-sidebar">
              <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Projects</li>
                  <li data-filter=".filter-photography">Photography</li>
                  <li data-filter=".filter-design">Design</li>
                  <li data-filter=".filter-automotive">Automotive</li>
                  <li data-filter=".filter-nature">Nature</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row gy-4 portfolio-container isotope-container" data-aos="fade-up" data-aos-delay="200">
                {portfolioItems.map((item) => (
                  <div key={item.id} className={`col-lg-6 col-md-6 portfolio-item isotope-item ${item.category}`}>
                    <div className="portfolio-wrap">
                      <img src={`/assets/img/portfolio/${item.img}`} className="img-fluid" alt={item.title} loading="lazy" />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">{item.type}</span>
                          <h4>{item.title}</h4>
                          <div className="portfolio-links">
                            <a href={`/assets/img/portfolio/${item.img}`} className="glightbox" title={item.title}><i className="bi bi-plus-lg"></i></a>
                            <a href="#" title="More Details"><i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
