import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job-listing">{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;
