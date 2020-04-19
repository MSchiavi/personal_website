import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
    
  return (
    <div>
    <h1>
      Matthew Schiavi
    </h1>
    <p id="info">
      Hi my name is Matt. I am currently a Full Stack Engineer working on <a href="http://www.gritseed.com/">GritSeed</a> which is an engagement platform to recruit and retain.
    </p>
    <p>
        My educational background is in Scientific Computing but I have since branched out to more traditional web development. I enjoy working on large projects that tend to be more complex and hold my interest. A challenging problem is a problem worth working on. 
    </p>
    <p>
        You can find my Resume <a> Resume</a>
    </p>
  </div>
  );
}


export default Home;
