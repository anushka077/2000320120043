import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { registerCompany } from './api/api';
import AllTrainsPage from './AllTrainsPage';
import SingleTrainPage from './SingleTrainPage';

const App = () => {
  const [token, setToken] = useState('');

  const handleRegister = async () => {
    try {
      const companyData = {
        companyName: 'Train central',
        ownerName: 'Ram',
        rollNo: '1',
        ownerEmail: 'ram@abc.edu',
        accessCode: 'FKDLjg',
      };
      const response = await registerCompany(companyData);
      setToken(response.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/trains">All Trains</Link>
            </li>
          </ul>
        </nav>
        {!token ? (
          <button onClick={handleRegister}>Register</button>
        ) : (
          <Switch>
            <Route exact path="/trains">
              <AllTrainsPage token={token} />
            </Route>
            <Route path="/trains/:trainId">
              <SingleTrainPage token={token} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;
