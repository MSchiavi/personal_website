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
    <div className = "App" style={{backgroundColor:'#d4d4d4'}}>
      <Switch>
      <Route path ="/" exact component={Home}/>
      <Route path ="/literature" component={Literature} />
      <Route path ="/education" component={Education} />
      </Switch>
      <Menu />
    </div>
    <div style={{backgroundColor:"#d4d4d4",minHeight:'100vh'}}></div>
    </Router>
  );
}

export default App;
