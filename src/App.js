import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <>        
              <Home />
              <div className="bg-bpink text-center text-fslarge text-fwbase">
                <h1>Hello Dashboard Team!</h1>
              </div>
            <>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
