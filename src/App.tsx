import React from 'react';
import Menu from './Menu';
import Literature from './views/literature/Literature';
import Home from './views/home/Home';
import Education from './views/education/Education'
import './App.css';
import NavMenu from './views/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className = "App" style={{backgroundColor:'#d4d4d4'}}>
      <NavMenu />
      <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/literature" component={Literature} />
      <Route path ="/education" component={Education} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
