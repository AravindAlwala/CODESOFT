import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import JobApplicationForm from './components/JobApplicationForm';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="container">
        <SearchBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/jobs" component={JobListingsPage} />
          <Route path="/job/:id" component={JobDetailPage} />
          <Route path="/employer" component={EmployerDashboard} />
          <Route path="/candidate" component={CandidateDashboard} />
          <Route path="/apply/:id" component={JobApplicationForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
