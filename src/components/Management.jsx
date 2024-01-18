import React from 'react';

const ManagementOfficer = ({ id, name, department, position }) => {
  return (
    <div className="management-officer">
      <h3>ID: {id}</h3>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Position: {position}</p>
    </div>
  );
};

const ManagementMap = () => {
  // Sample data for management officers
  const managementOfficers = [
    { id: 1, name: 'John Doe', department: 'Finance', position: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'HR', position: 'Manager' },
    { id: 3, name: 'Alice Johnson', department: 'Marketing', position: 'Subordinate' },
    // Add more management officers as needed
  ];

  return (
    <div className="management-map">
      <h2>Management Officers</h2>
      <div className="officers">
        {managementOfficers.map(officer => (
          <ManagementOfficer
            key={officer.id}
            id={officer.id}
            name={officer.name}
            department={officer.department}
            position={officer.position}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagementMap;
