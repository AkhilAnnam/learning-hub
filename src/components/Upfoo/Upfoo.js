import React from "react";
import instructor from "../Upfoo/instructor.jpg";

function Upfoo() {
  return (
    <div className="upfo">
      <div className="upfo1">
        <img src={instructor} alt="" style={{width:"100%" , height:"100%"}} />
      </div>
      <div className="upfo2">
        <h1>Become an Expert.</h1>
        <div >
          
            Tell me and I forget.<br/>
            Teach me and I remember.<br/>
             Involve me and I learn.
         
        </div>
      </div>
    </div>
  );
}

export default Upfoo;
