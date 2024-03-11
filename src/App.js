import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import TournamentForm from './components/TournamentForm';
import TournamentOutput from './components/TournamentOutput';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';


function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <Router>
      <div>
      <Navbar registered={registered} />
      <div className="tournament-form-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" render={() => <RegisterPage setRegistered={setRegistered} />} />
          <Route path="/organize-tournament" component={TournamentForm} />
          <Route path="/tournament-details" component={TournamentOutput} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default App;