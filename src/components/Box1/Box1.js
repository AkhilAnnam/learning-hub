import React from 'react'
import samsung from '../Box1/samsung.svg'
import cisco from '../Box1/cisco.svg'
import citi from '../Box1/citi.svg'
import volkswagen from '../Box1/volkswagen.svg'
function Box1() {
    return (
        <div className='cent'>
            
                <p style={{fontSize:"1.5em",textAlign:"center"}}>Trusted by over 15,000 companies and millions of learners around the world</p>
            
            <div className='cen1'>
                <img src={samsung} alt="" />
                <img src={cisco} alt="" />
                <img src={citi} alt="" />
                <img src={volkswagen} alt="" />

            </div>


        </div>
    )
}

export default Box1
