import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommonUi = () => {
  const [projectTrainings, setProjectTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/projects/Training');
        setProjectTrainings(response.data.projectTrainings);
        console.log('Project Trainings:', response.data.projectTrainings); // Log the fetched data
      } catch (error) {
        console.error('Error fetching project trainings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='p-4' style={{ padding: '50px 0', backgroundColor: '#f8f9fa', marginTop: 50, marginBottom: 100 }}>
      <div className='container'>
        <div className='row'>
          {projectTrainings.map(training => (
            <div key={training._id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <img
                  src={training.image}
                  alt={training.name}
                  className="card-img-top rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ height: '40px', overflow: 'hidden' }}>{training.name}</h5>
                  <p className="card-text" style={{ height: '60px', overflow: 'hidden' }}>{training.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonUi;
