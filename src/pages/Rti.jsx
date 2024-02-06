import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import TableSection from '../components/Tabledata'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

 
export default function Rti() {
  const [tableData, setTableData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/meetinglist/RTI');
        setTableData(response.data.meetingRTIs);
        console.log('Fetched RTI data:', response.data.meetingRTIs);
      } catch (error) {
        console.error('Error fetching RTI data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <Header2 name="RTI"/>
        <TableSection data={tableData}/>
        <Footer/>
    </div>
  )
}
