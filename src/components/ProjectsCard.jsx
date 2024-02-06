import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ProjectsCard = () => {
  const [t, i18n] = useTranslation("global");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/projects/Project');
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.projectTrainings)) {
          // Slice the first 6 items to show only 6 projects
          setProjects(responseData.projectTrainings.slice(0, 6));
        } else {
          console.error('Projects array not found in response:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section id="constructions" className="constructions ">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("Projects.title")}</h2>
        </div>

        <div className="row m-2">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mt-4 mb-2" data-aos="fade-up" data-aos-delay="100">
              <div className="card shadow-sm mb-4" style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', margin: '-50px 0' }}>
              <img
  src={project.image}
  className="card-img-top"
  alt={project.name}
  style={{
    width: '100%',
    height: '250px',
    borderRadius: '10px',
    objectFit: 'cover', // Similar to resizeMode="cover" in React Native
  }}
/>

                <div className="card-body">
  <h5 className="card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.name}</h5>
  <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.description}</p>
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
