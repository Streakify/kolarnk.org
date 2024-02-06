import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const DepartmentsSection = () => {
  const [t, i18n] = useTranslation("global");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/projects/Department');
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.projectTrainings)) {
          setDepartments(responseData.projectTrainings); // Corrected to set departments
        } else {
          console.error('Departments array not found in response:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchOtherData = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/api/department');
        const responseData = response.data;
        console.log('Response data:', responseData);
        // Check if the response has the 'departments' array
        if (Array.isArray(responseData.departments)) {
          setDepartments(responseData.departments);
        } else {
          console.error('Departments array not found in response:', responseData);
        }
      } catch (error) {
        console.error('Error fetching other data:', error);
      }
    };
  
    fetchOtherData();
  }, []);
  // Log departments to check its value
  console.log('Departments:', departments);

  return (
    <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("department.title")}</h2>
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
