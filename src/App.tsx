import React from "react";
import Literature from "./views/literature/Literature";
import Home from "./views/home/Home";
import Education from "./views/education/Education";
import "./App.css";
import NavMenu from "./views/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //test
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "rgb(64,78,124)", height: "100vh" }}>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/literature" component={Literature} />
          <Route path="/education" component={Education} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
