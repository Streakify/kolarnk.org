import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; // Import Axios

const ProjectsSection = () => {
  const [filter, setFilter] = useState('*');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/projects/Project');
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.projectTrainings)) {
          setProjects(responseData.projectTrainings); // Corrected to set departments
        } else {
          console.error('Projects array not found in response:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  console.log('Projects:', projects);

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
          {/* ... (existing code) */}
          
          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
<Link to={`/Projectdescription/`} style={{ textDecoration: 'none' }}>
<div style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', margin: '-50px 0' }}>
  <img
    src={project.image}
    className="img-fluid"
    alt={project.title}
    style={{ width: '100%', height: '250px', borderRadius: '10px', borderEndEndRadius: '0px', borderEndStartRadius: '0px' }}
  />
  <div style={{ position: 'relative', margin: '0px 0', width: '100%', background: 'rgba(9,9,100,0.7)', padding: '50px' }}>
    <h4 style={{ margin: '9px 0', alignSelf:'flex-start', marginLeft:'-40px', color: '#000000', marginTop: '-40px', background: '#FFFFF0', borderRadius: '10px', padding: '2px', width: '165px', alignSelf: 'center', textDecoration: 'none' }}>{project.title}</h4>
    <p style={{ color: '#FFFFF0', margin: '-1px 0', textDecoration: 'none',marginLeft:'-40px',marginBottom:'15px' }}>{project.description}</p>
  </div>
</div>
</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;