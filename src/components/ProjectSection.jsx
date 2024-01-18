import React, { useState } from 'react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('*');

  const projects = [
    {
      title: 'Remodeling 1',
      category: 'filter-remodeling',
      imageUrl: 'assets/img/projects/remodeling-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Construction 1',
      category: 'filter-construction',
      imageUrl: 'assets/img/projects/construction-1.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Remodeling 2',
      category: 'filter-remodeling',
      imageUrl: 'assets/img/projects/remodeling-2.jpg',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more projects similarly
  ];

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div
          className="portfolio-isotope"
          data-portfolio-filter={filter}
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
            <li
              onClick={() => handleFilterClick('*')}
              style={{ borderBottom: filter === '*' && '2px solid #3498db' }}
            >
              All
            </li>
            <li
              onClick={() => handleFilterClick('.filter-remodeling')}
              style={{ borderBottom: filter === '.filter-remodeling' && '2px solid #3498db' }}
            >
              Progress
            </li>
            <li
              onClick={() => handleFilterClick('.filter-construction')}
              style={{ borderBottom: filter === '.filter-construction' && '2px solid #3498db' }}
            >
              Completed
            </li>
          </ul>

          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div className="portfolio-content h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <img
                    src={project.imageUrl}
                    className="img-fluid"
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                  <div className="portfolio-info" style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                    <h4 style={{ margin: '10px 0', color: '#fff' }}>{project.title}</h4>
                    <p style={{ color: '#fff' }}>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
