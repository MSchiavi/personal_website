import React from 'react';
import Nav from './Nav';
import About from './About';
import Literature from './Literature';
import Home from './Home';
import Projects from './Projects'
import Education from './Education'
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
      <Route path ="/projects" component={Projects} />
      <Route path ="/education" component={Education} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
