import React from "react";
import develop from "../Cards/develop.jpg";
import IT from "../Cards/IT.jpg";
import marketing from "../Cards/marketing.jpg";
import music from "../Cards/music.jpg";
import photography from "../Cards/photography.jpg";
import personaldevelop from "../Cards/personaldevelop.jpg";
import { Link, Router } from "react-router-dom";
import { Dropdown } from "antd";


function Cards() {
  return (
    <>
    <p style={{marginLeft:"250px",marginTop:"30px",fontSize:"2em" ,fontWeight:"bold"}}>Top Categories</p>
    <div className="cards6">
      
       <Link to="/Allcourses#Government">
       <div className="card">
        <img src={develop} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title" >{"Government"}</h2>
        </div>
      </div>
    </Link>
    <Link to="/Allcourses#Software">
    <div className="card">
        <img src={IT} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{"IT & Software"}</h2>
        </div>{" "}
      </div>
    </Link>
      
      <Link to="/Allcourses#Marketing">
      <div className="card">
        <img src={marketing} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{"Marketing"}</h2>
        </div>{" "}
      </div></Link>
      
      <Link to="/Allcourses#Music">
      <div className="card">
        <img src={music} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{"Music"}</h2>
        </div>{" "}
      </div></Link>
      
      <Link to="/Allcourses#Photography">
      <div className="card">
        <img src={photography} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{"Photography"}</h2>
        </div>{" "}
      </div></Link>
      
      <Link  to="/Allcourses#Personal_Development">
      <div className="card">
        <img src={personaldevelop} alt="" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{" Personal Development"}</h2>
        </div>
      </div></Link>
      
    </div>
    </>
  );
}

export default Cards;
