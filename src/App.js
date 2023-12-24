import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Registerpage/Register";

import Login from "./components/Login/Login";

import Navbar from "./components/Navbar";
import Footer from "./Pages/Footer/Footer";

import Header from "./components/Header";
import Box1 from "./components/Box1/Box1";
import Upfoo from "./components/Upfoo/Upfoo";
import Main from "./components/Main/Main";
import Scroll from "./components/Scroll/Scroll";
import Box2 from "./components/Box2/Box2";
import Cards from "./components/Cards/Cards";
import Explore from "./Pages/Explore/Explore";
import Home from "./components/Home";
import Dashboard from "./Pages/dashboard/Index";
import Mylearning from "./components/Mylearning/Mylearning";
import Allcourses from "./Pages/All Courrses/Allcourses";
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import Index from "./Pages/dashboard/Index";
import Navi from "./components/dashboardnavigation/Navi";
import Cart from './Pages/Cart/Cart'
import Video from "./Pages/video/video";
import Dashbooard from "./Pages/dashboard/Index"
import { useEffect, useState } from "react";

function App() {
  const loggedIn = false;
  const [userToken,setUserToken] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setUserToken((localStorage.getItem("token")));
        navigate('/home')
      }else{
        navigate('/');
    }

  },[localStorage.getItem('token')])
  return (
    <>
      {userToken ? (
        <div className="main-container">
            <div className="navigation">
            <Navi />

            </div>
            <div className="content">
           

              <Routes>
                <Route path="/home" element={<Dashboard />} />

        
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Mylearning" element={<Mylearning />} />
                <Route path="/Allcourses" element={<Allcourses />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Contactus" element={<Contactus />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/video/:src" element={<Video />} />
              </Routes>
              <Footer />
            </div>
          {/* </BrowserRouter> */}
          <div className="footer"> </div>
        </div>
      ) : (
        <>
        <Navbar />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </>
      )}
    </>
  );
}

export default App;
