import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/employer/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching employer jobs:', error));
  }, []);

  return (
    <div>
      <h1>Employer Dashboard</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerDashboard;
