// import React from 'react'
// import { Link } from 'react-router-dom'


// function Navbar() {
//   return (
    
    
   
//     <div className='head'>
      
//        <Link to='/About' >About</Link>
//     <Link to='/Contact' >Contact</Link>
//    <Link to='/Loginpage'>Login</Link>
//    <Link to='Register'>Register</Link>
//     </div>
//   )
// }

// export default Navbar
// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #567;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const NavItem = styled.li`
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #afa;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
    
      <NavList>
        
        <NavItem><NavLink to="/Login">Login</NavLink></NavItem>
        <NavItem><NavLink to="/Register">Register</NavLink></NavItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
