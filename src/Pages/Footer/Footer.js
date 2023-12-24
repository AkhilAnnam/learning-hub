import React from "react";
import facebook from '../Footer/facebook.png'
import insta from '../Footer/insta.png'
import twitter from '../Footer/twitter.png'
import '../Footer/Footer.css'
// import linkdin from '../Assests/linkdin.png'
function Footer() {
  return (
    <div className="foot">
      <div className="sb_foot section_padding">
        <div className="sb_foot-links">
          <div className="sb_foot-links_div">
            <h4>Web Development</h4>
            <a href="/">
                <p>html</p>
            </a>
            <a href="/">
                <p>css</p>
            </a>
            <a href="/">
                <p>js</p>
            </a>
          </div>  
          <div className="sb_foot-links_div">
            <h4>Marketing</h4>
            <a href="/">
                <p>business</p>
            </a>
            <a href="/">
                <p>growth</p>
            </a>
            <a href="/">
                <p>market</p>
            </a>
            </div> 
            <div className="sb_foot-links_div"> 
            <h4>Personal Development</h4>
            <a href="/kjern">
                <p>body language</p>
            </a>
            <a href="/wjrhj">
                <p>communication</p>
            </a>
            <a href="/mwhbf">
                <p>ethics</p>
            </a>
            </div>
            <div className="sb_foot-links_div"> 
            <h4>Music</h4>
            <a href="/">
                <p>voice</p>
            </a>
            <a href="/">
                <p>music</p>
            </a>
            <a href="/">
                <p>music</p>
            </a>
            </div>
            <div className="sb_foot-links_div"> 
            <h4>Photography</h4>
            <a href="/">
                <p>capturing</p>
            </a>
            <a href="/">
                <p>timing</p>
            </a>
            <a href="/">
                <p>photo</p>
            </a>
            </div>
            <div className="sb_foot-links_div"> 
            <h4>Coming Soon</h4>
            <div className="socialmedia">
                <p><img src={facebook} alt=''/></p>
                <p><img src={insta} alt=''/></p>
                <p><img src={twitter} alt=''/></p>
                {/* <p><img src={linkdin} alt=''/></p> */}
                </div>
            </div>
        </div>
        <hr></hr>

        <div className="sb_foot-below"> 
        <div className="sb_foot-copyright"> 
        <p>
            @{new Date().getFullYear()} LearningHub. All rights reserved.
        </p>
        </div>
        <div className="sb_foot-below-links">
            <a href="/"><div><p>Terms & Conditions</p></div></a>
            <a href="/"><div><p>Privacy</p></div></a>
            <a href="/"><div><p>Security</p></div></a>
            <a href="/"><div><p>Cookie Declaration</p></div></a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
