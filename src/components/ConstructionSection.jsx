import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const ConstructionSection = () => {
    const [t,i18n]=useTranslation("global")
    // State to track the selected language
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
    
    // Function to handle language change
    const handleChangeLanguage = async (lang) => {
      await i18n.changeLanguage(lang);
      // Save the selected language in local storage
      localStorage.setItem('language', lang);
    };
    
    // useEffect to set the language on component mount
    useEffect(() => {
      i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);
      const handleIconClick = () => {
        // Handle the click event here, e.g., navigate to a specific page or perform an action
        console.log('Icon clicked!');
      };
  
  return (
    <Container className="mt-4 construction border rounded" style={{ minHeight: '100%',marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
 <h2 className="text-center text-primary mb-4" style={{ marginTop: '30px' }}>{t("Construction.Heading")}</h2>
      <p className="text-dark font-weight-bold" style={{ fontSize: '24px', marginBottom: '10px' }}>{t("Construction.SubHeading")}</p>
      <p className="text-secondary" style={{ fontSize: '16px' }}>{t("Construction.subHeadingpara")}
      </p>

      <p className="text-dark font-weight-bold" style={{ fontSize: '24px', marginBottom: '10px' }}>{t("Construction.SubHeading1")}</p>
      <p className="text-secondary" style={{ fontSize: '16px' }}>{t("Construction.subHeadingpara1")}
      </p>

      <p className="text-dark font-weight-bold" style={{ fontSize: '24px', marginBottom: '10px' }}>{t("Construction.SubHeading2")}</p>
      <p className="text-secondary" style={{ fontSize: '16px' }}>
       <b>{t("Construction.subHeadingpara2")}</b> 
        <br />
        <b>{t("Construction.subHeadingpara2num1")}</b> {t("Construction.subHeadingpara2num1subpara1")}
        <br />
       <b>{t("Construction.subHeadingpara2num2")}</b> {t("Construction.subHeadingpara2num2subpara2")}
        <br />
        {t("Construction.subHeadingpara2subpara3")} 
      </p>

      <p className="text-dark font-weight-bold" style={{ fontSize: '24px', marginBottom: '10px' }}>{t("Construction.SubHeading3")}</p>
      <p className="text-secondary" style={{ fontSize: '16px' }}>
      {t("Construction.subHeadingpara3")}
              <br />
              <b>{t("Construction.subHeadingpara3num1")}</b>{t("Construction.subHeadingpara3subpara1")} 
                      <br />
                      <b>{t("Construction.subHeadingpara3num2")}</b>{t("Construction.subHeadingpara3subpara2")} 
                              <br />
                              <b>{t("Construction.subHeadingpara3num3")}</b> {t("Construction.subHeadingpara3subpara3")}
                              <br/>
                              <b>{t("Construction.subHeadingpara3num4")}</b>{t("Construction.subHeadingpara3subpara4")} 
                              <br/>
                              <b>{t("Construction.subHeadingpara3num5")}</b> {t("Construction.subHeadingpara3subpara5")}
                           <br/>
<b>{t("Construction.subHeadingpara3num6")}</b> {t("Construction.subHeadingpara3subpara6")}
<br/>
<b>{t("Construction.subHeadingpara3num7")}</b> {t("Construction.subHeadingpara3subpara7")}
<br/>
<b>{t("Construction.subHeadingpara3num8")}</b> {t("Construction.subHeadingpara3subpara8")}
<br/>
<b>{t("Construction.subHeadingpara3num9")}</b> {t("Construction.subHeadingpara3subpara9")}
<br/>
<b>{t("Construction.subHeadingpara3num10")}</b> {t("Construction.subHeadingpara3subpara10")}
<br/>
<br/>
<b>{t("Construction.sub4b")}</b> {t("Construction.sub4bhead")}
<br/>
<b>{t("Construction.sub4b1a")}</b>{t("Construction.sub4b1apara")} 
<br/> <br/>
{t("Construction.sub4b1apara1")}
 <br/>
 <br/>
 <b>{t("Construction.sub4b1b")}</b> {t("Construction.sub4b1bpara1")}
  <br/> <br/>
  <b>{t("Construction.sub4b1c")}</b> {t("Construction.sub4b1cpara1")}
 <br/> <br/>
 <b>{t("Construction.sub4b1d")}</b> {t("Construction.sub4b1dpara1")}
  <br/> <br/>
  {t("Construction.sub4b1dpara2")}
  
  <br/><br/> 
 <b> {t("Construction.Sub1")}</b> {t("Construction.Sub1para")}
  <br/><br/> 
 <b>{t("Construction.Sub1a")}</b>{t("Construction.Sub1apara")} 
   
  <br/><br/> 
  {t("Construction.Sub1apara1")}
   <br/><br/> 
   {t("Construction.Sub1apara2")}
   
    <br/><br/>
   <b>{t("Construction.Sub2")}</b>{t("Construction.Sub2para")} 
   
     <br/><br/>


     <b>{t("Construction.Sub3")}</b> {t("Construction.Sub3para")}
     <br/><br/>
<b>{t("Construction.Sub4")}</b> {t("Construction.Sub4para")}
   
<br/><br/>
<b>{t("Construction.Sub4a")}</b> {t("Construction.Sub4apara")}
<br/><br/>
<b> {t("Construction.Sub5")}</b>{t("Construction.Sub5para")}
 <br/><br/> 
<b>{t("Construction.ConclusionHead")}</b>   <br/>
{t("Construction.Conclusionpara")} 
   
   
   
   
   
   
   
   
    </p>

    </Container>
  );
};

export default ConstructionSection;
