    import React from 'react'
    import ai from '../Scroll/ai.jpeg'
    import aws from '../Scroll/aws.jpeg'
    import java from '../Scroll/java.jpeg'
    import software from '../Scroll/software.jpeg'
    import python from '../Scroll/python.jpeg'
    import mern from '../Scroll/mern.jpeg'
    import '../Scroll/Scroll.css'

    export default function Scroll() {
    return (

        <div className="scroll-container">
        <div className="scroll-content">
            <img src={ai} alt='' />
        <img src={aws} alt='' />
        <img src={java} alt=''/>
        <img src={software} alt=''/>
        <img src={python} alt='' />
        <img src={mern} alt='' />
        </div>
    </div>
        
        

    )
    }
