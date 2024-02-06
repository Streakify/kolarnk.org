import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Team = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/listofmemebers'); 
        setTeamMembers(response.data.data || []); 
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    // Save the selected language in local storage
    localStorage.setItem('language', lang);
  };

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="section-header">
          <h2>{t("about.teamhead")}</h2>
          <p>{t("about.teampara")}</p>
        </div>
        <div className="row">
          {teamMembers.map(member => (
            <div key={member._id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top rounded-circle mt-2"
                  style={{ width: '200px', height: '200px', margin: 'auto' }} // Set fixed width and height
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Name: {member.name}</h5>
                  <p className="card-text">Position: {member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
