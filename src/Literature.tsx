import React from 'react';
import './Literature.css';

function Literature() {
  return (
    <div>
        <h1>Literature</h1>
        <p style={{marginTop:'5%',fontSize:'20px'}}className='literatureP'>
          Here are some things I have either written or have been apart of.  
        </p>
        <ul className='literatureUL'>
            <li>The outcome of my research during my Masters resulted in a publication which can be viewed <a href="https://arxiv.org/abs/1904.08960">here.</a></li> The calculation we did was technically challenging and one of the first of its kind.
        </ul>
    </div>
  );
}

export default Literature;
