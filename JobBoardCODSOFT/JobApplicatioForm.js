import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationForm = ({ jobId }) => {
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);

    try {
      await axios.post(`/api/job/${jobId}/apply`, formData);
      alert('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
      <button type="submit">Apply</button>
    </form>
  );
};

export default JobApplicationForm;
