import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1 style={{ color: "white" }}>Matthew Schiavi</h1>
      {/* <p className="homeP" id="info">
      Hi my name is Matt. I am currently a Full Stack Engineer working on <a href="http://www.gritseed.com/">GritSeed</a> which is an engagement platform to recruit and retain.
    </p> */}
      <p className="homeP" id="info">
        Hi my name is Matt. I am currently a freelance Full Stack Engineer. I mainly work in React but have worked with AngularJS. My backend experience is primarily in Flask, ExpressJS and Ruby on Rails. Currently a huge fan of Docker, Docker-Compose, and github acitons!
      </p>
      <p className="homeP">My educational background is in Scientific Computing but I have since branched out to more traditional web development. I enjoy working on large projects that tend to be more complex and hold my interest. A challenging problem is a problem worth working on.</p>
      <p className="homeP">
        You can download my Resume <a href="https://github.com/MSchiavi/resume/raw/master/matthew_schiavi_resume.pdf">here</a>.
      </p>
    </div>
  );
}

export default Home;
