import React from 'react';
import './App.css';
import {Link, useLocation} from 'react-router-dom';

function Nav() {
    const linkStyle = {
        color: 'black',padding:'30px',textDecoration:'none'
    };
    const navStyleEducation = {
        marginTop: '160%', marginLeft: '-50%',fontSize: '20px'
    };
    const navStyleLiterature = {
        marginTop: '10%', marginLeft: '-50%',fontSize: '20px'
    };
    const isHome = useLocation().pathname === '/';
    const isEducation = useLocation().pathname ==='/education';
    const isLiterature = useLocation().pathname ==='/literature'
  return (
      <nav >
          <ul className='nav-Links'>
            {!isHome && !isEducation && !isLiterature  &&
                <Link style = {linkStyle} to='/'>
                    <li className="myLi">Home</li>
                </Link>
            }
            {isEducation && 
                <Link style = {{...linkStyle,...navStyleEducation}} to='/'>
                    <li className="myLi"> Back Home</li>
                </Link>
            }
            {isLiterature && 
                <Link style = {{...linkStyle,...navStyleLiterature}} to='/'>
                    <li className="myLi"> Back Home</li>
                </Link>
            }
            {isHome &&
                <Link style={linkStyle}  to ='/education'>
                    <li className="myLi">Education</li>
                </Link>
            }
            {isHome &&
                <Link style={linkStyle}  to ='/literature'>
                    <li className="myLi">Literature</li>
                </Link>
            }
            {/* {isHome && 
                <Link style={linkStyle} to='/projects'>
                    <li className="myLi">Projects</li>
                </Link>
            } */}
          </ul>
      </nav>
  );
}

export default Nav;
