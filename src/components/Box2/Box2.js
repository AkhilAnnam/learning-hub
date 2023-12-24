import React, { useRef } from "react";
import whatisonlinelearning from "../Box2/whatisonlinelearning.mp4";

function Box2() {
  
    const videoRef = useRef();
    const handlePlay = () =>{
        videoRef.current.click();
    }

  return (
    <div className="vid">
      <div className="vid1">
        {" "}
        <video src={whatisonlinelearning} alt="" controls ref={videoRef} autoPlay muted loop/>
        
      </div>

      <div className="vidtxt">
        “<strong> With just an internet connection and some design skills,<br/>
          creators can make a living from anywhere in the world, <br/>
          no matter their race, gender,or background.</strong>"
          <button className="btn" onClick={handlePlay}><h3>Get Started</h3></button>
      </div>
    
    </div>
    
  );
}

export default Box2;
