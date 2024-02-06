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
    <div className=''>
   <div className='p-4' style={{ padding: '50px 0', backgroundColor: '#f8f9fa', marginTop: 50, marginBottom: 100 }}>
     <div style={{ margin: '0 auto', maxWidth: 1200 }}>
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {projectTrainings.map(training => (
            <div  style={{ textAlign: 'center',  marginBottom: '20px' }}>
             <img
                src={training.image}
                alt={training.name}
                style={{ width: '100%', height: '200px', padding: '10px 0',objectFit: 'cover', borderRadius: '10px', marginBottom: '10px' }}
              />
                            <p style={{ fontSize: '20px', color: 'black',  marginLeft:'-170px', marginTop:'-20px'  }}>{training.name}</p>

              <p style={{ fontSize: '16px', color: '#495057', margin: '0' }}>{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
   
//           <div className="col-lg-8 col-md-12 col-12 text-center">
//             <span className="text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">World-class Instructors</span>
//             <h2 className="mb-2 display-4 fw-bold">Classes Taught by Industry Expert</h2>
//             <p className="lead">Geeks teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.</p>
//           </div>
//         </div>
   
//           {projectTrainings.map(training => (
//             <div key={training._id} className="col-xl-3 col-lg-4 col-md-6 col-12">
//               <div className="card mb-4 card-hover">
//               <img
//                 src={training.image}
//                 alt={training.name}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
//               />
//                 </div>
//                 <div className="card-body">
//                   <h3 className="mb-0 fw-semibold"><a href="#" className="text-inherit">{training.name}</a></h3>
                 
//                   <p style={{ fontSize: '16px', color: '#495057', margin: '0' }}>{training.description}</p>
//                   <div className="lh-1 d-flex justify-content-between">
//                     <div>
//                       <span className="fs-6">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
//                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                         </svg>
//                         <span className="text-warning">4.5</span>
//                       </span>
//                     </div>
//                     <div>
//                       <span className="fs-6 "><span className="text-dark">9,692</span> Students</span>
//                     </div>
//                     <div>
//                       <span className="fs-6 "><span className="text-dark">3</span> Course</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
         
//           ))}
//           <div className="col-md-12 mt-3 text-center">
//             <a href="#" className="btn btn-primary">See All Instructors</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

export default CommonUi;
