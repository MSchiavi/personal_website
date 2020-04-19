import React from 'react';
import Menu from './Menu';
import Literature from './Literature';
import Home from './Home';
import Education from './Education'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className = "App">
      <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/literature" component={Literature} />
      <Route path ="/education" component={Education} />
      </Switch>
      <Menu />
    </div>
    </Router>
  );
}

export default App;
