import React from 'react'
import aboutimg1 from '../Main/aboutimg1.jpg'
import '../Main/Main.css'
function Main() {
  return (
    <div className='main11'>
     <div className='left1'>
    Learning Hub.
    <p>Online learning is a type of educational activity that makes use of electronic mobile devices as a means to teach, as well as interact with students.</p>
     </div>
     <div className='right1'>
      <img src={aboutimg1} alt="background" />
    </div>
    </div>

  )
}

export default Main
