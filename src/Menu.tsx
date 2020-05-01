import React from 'react';
import './Menu.css';
import {useLocation} from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';

function Menu() {
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
    <Container>
      <Navbar sticky="bottom" variant="light">
        <Nav className="mr-auto">
          {!isHome && <Nav.Link href="/"><b>Home</b></Nav.Link>}
          {!isEducation && !isLiterature && <Nav.Link href="/education"><b>Education</b></Nav.Link>}
          {!isLiterature && !isEducation && <Nav.Link href="/literature"><b>Literature</b></Nav.Link>}
          {isHome && <Nav.Link href="https://github.com/MSchiavi"><b>Github</b></Nav.Link>}
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Menu;
