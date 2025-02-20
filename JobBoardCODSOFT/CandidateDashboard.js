import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('/api/candidate/applications')
      .then(response => setApplications(response.data))
      .catch(error => console.error('Error fetching applications:', error));
  }, []);

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <ul>
        {applications.map(application => (
          <li key={application.id}>{application.jobTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateDashboard;
