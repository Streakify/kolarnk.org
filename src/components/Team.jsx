import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Import Axios

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
  }, []); // Empty dependency array means this effect will only run once after the initial render

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    // Save the selected language in local storage
    localStorage.setItem('language', lang);
  };

  const handleIconClick = () => {
    // Handle the click event here, e.g., navigate to a specific page or perform an action
    console.log('Icon clicked!');
  };

  return (
    <>
      <div className="container " style={{ marginTop: 50 }}>
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>{t("about.teamhead")}</h2>
              <p>{t("about.teampara")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          {/* Render team members */}
          {teamMembers.map(member => (
            <div key={member._id} className="col-xl-3 col-sm-6 mb-5" data-aos="fade-up" >
              <div className="bg-white rounded shadow-sm py-5 px-4">
            
              <img
  src={member.image}
  alt={member.name}
  width="100"
  className="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm"
  style={{ objectFit: 'cover', borderRadius: '100%' }} // Apply border-radius to make the image round
/>

                <h5 className="mb-0">{member.name}</h5><span className="small text-uppercase text-muted">{member.position}</span>
              </div>
            </div>
          ))}
          {/* End */}
        </div>
      </div>
    </>
  );
}

export default Team;
