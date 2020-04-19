import React from 'react';
import Nav from './Nav';
import About from './About';
import Literature from './Literature';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className = "App">
      <Nav />
      <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/about" component={About}/>
      <Route path ="/literature" component={Literature} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
