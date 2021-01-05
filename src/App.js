import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

const LaptopsPage = () => (
  <div><h1>LAPTOPS PAGE</h1></div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/laptops' component={LaptopsPage} />
      </Switch>
    </div>
  );
}

export default App;
