import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableSection = ( {data}) => {

  console.log(data);
  const [tableData, setTableData] = useState([]);

 



 

  return (
    <section id="constructions" className="constructions">
      <div className="container" data-aos="fade-up">
        <div className="table-section">
          <h2 className="text-center mb-4">Downloadable Files</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index,) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
