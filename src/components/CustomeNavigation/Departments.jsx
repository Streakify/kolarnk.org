import React from 'react';
import { useTranslation } from 'react-i18next';

const DepartmentsSection = () => {
  const [t, i18n] = useTranslation("global");

  const departments = [
    { name: 'Engineering', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Marketing', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { name: 'Human Resources', description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.' },
    { name: 'Finance', description: 'Nulla quis lorem ut libero malesuada feugiat.' },
    { name: 'IT', description: 'Curabitur aliquet quam id dui posuere blandit.' },
    { name: 'Operations', description: 'Donec sollicitudin molestie malesuada.' },
  ];

  return (
    <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("Projects.title")}</h2>
        </div>
        <div className="row">
          {departments.map((department, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h3 className="card-title">{department.name}</h3>
                  <p className="card-text">{department.description}</p>
                  {/* You can add more content or styles for each department here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
