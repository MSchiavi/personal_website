import React from 'react';
import './App.css';
import {Link, useLocation} from 'react-router-dom';

function Nav() {
    const linkStyle = {
        color: 'black',padding:'30px',textDecoration:'none'
    }
    const isHome = useLocation().pathname === '/';
  return (
      <nav>
          <ul className='nav-Links'>
            {!isHome &&
                <Link style = {linkStyle} to='/'>
                    <li>Home</li>
                </Link>
            }
            {isHome && 
                <Link style={linkStyle} to='/about'>
                    <li>About</li>
                </Link>
            }
            {isHome &&
                <Link style={linkStyle}  to ='/Literature'>
                    <li>Literature</li>
                </Link>
            }
          </ul>
      </nav>
  );
}

export default Nav;
