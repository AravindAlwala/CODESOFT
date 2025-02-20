const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/job-board', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/api/jobs', jobRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
