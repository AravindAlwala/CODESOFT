import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/job/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetailPage;
