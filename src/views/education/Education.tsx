import React from 'react';
import './Education.css';

function Education() {
  return (
    <div>
        <h1 style={{ color:'white' }}>Education</h1>
        <p className='educationP'>
            Degree:
        </p>
        <ul className = "educationUL">
            <li>GPA: 3.0 Bachelors Degree in Physics with Honors and a minor in Mathemtiacs, University at Buffalo</li>
            <li>GPA: 3.92 Masters Degree in Physics High Energy Theory, University at Buffalo
            </li>
        </ul>
        <p className='educationP'>
            Computer Science Courses I took
        </p>
            <ul className = "educationUL">
                <li>Introduction to Computer Science 1 & 2</li>
                <li>Computational Physics 1 & 2</li>
                <li>High Performance Computing</li>
            </ul>
        <p className='educationP'>
            While getting my degrees I participated in research which focused on Quantum Field Theory calculations. These calculations were typically done in programs such as <a href="https://www.wolfram.com/mathematica/">Mathematica</a> and <a href="https://en.wikipedia.org/wiki/FORM_(symbolic_manipulation_system)">Form</a>. Eventually to make predictions we would need to numerically integrate complicated forumale which was done in a fortran routine that utlized the <a href="https://en.wikipedia.org/wiki/VEGAS_algorithm">VEGAS algorithm</a>. 
        </p>
    </div>

  );
}

export default Education;
