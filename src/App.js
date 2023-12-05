// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdvertsPage from './pages/AdvertsPage';
import AdvertPage from './pages/AdvertPage';
import NewAdvertPage from './pages/NewAdvertPage';
import Navigation from './components/Navigation';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <Navigation />
        {isAuthenticated && <LogoutButton onLogout={handleLogout} />}
        <Switch>
          <Route path="/login" component={() => <LoginPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/adverts/new" component={NewAdvertPage} />
          <Route path="/adverts/:id" component={AdvertPage} />
          <Route path="/adverts" component={AdvertsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

