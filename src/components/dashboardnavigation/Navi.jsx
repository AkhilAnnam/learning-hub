import React, { useState } from "react";
import { Link } from "react-router-dom";
// import LogoImage from "C:/Users/DASARI PRASHANTH/mydag/src/Assets/logo-dag.png"
import "../dashboardnavigation/Nav.module.css";
import ProfileDropdown from "../dropdown/ProfileDropdown";

function DagNavbar() {
  // State for managing menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
 

  // Function to toggle menu open/close state
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserDropdownOpen = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeUserDropdown = () => {
    setUserDropdownOpen(false);
  };

  const onClicked =()=>{
    localStorage.clear('token');
    window.location.reload();
    window.location.href='/'
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              {/* <img src={LogoImage} alt='Logo' className='logo-img' /> */}
            </Link>
          </div>
          {/* Navbar links */}
          <ul id="menu" className={menuOpen ? "mobile-menu" : ""}>
            {/* Individual menu items */}
            <li>
              <Link to="/home" onClick={closeMenu}>
                Dashboard{" "}
              </Link>
            </li>
            <li>
              <Link to="/Mylearning" onClick={closeMenu}>
                Free Learning
              </Link>
            </li>
            <li>
              <Link to="/Allcourses" onClick={closeMenu}>
                All Courses
              </Link>
            </li>
            {/* <li><Link to="/Studymaterials" onClick={closeMenu}>Study Materials</Link></li> */}
            <li>
              <Link to="/Aboutus" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={closeMenu}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeMenu}>
                <ProfileDropdown />
              </Link>
            </li>
         
          </ul>

          
        </div>
     

      </nav>
    </div>
  );
}

export default DagNavbar;
