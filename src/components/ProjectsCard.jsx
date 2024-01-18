import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectsCard = () => {
  const [t, i18n] = useTranslation("global");

  const projects = [
    {
      id: 1,
      name: "Project 1",
      image: "assets/img/constructions-1.jpg",
      description: "Short Description Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum",
    },
    {
      id: 2,
      name: "Project 2",
      image: "assets/img/constructions-2.jpg",
      description: "Short Description Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum",
    },
    // Add more projects similarly
  ];

  return (
    <section id="constructions" className="constructions">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("Projects.title")}</h2>
        </div>

        <div className="row m-2">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card shadow-sm mb-4">
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;
