import React from 'react'
import CountUp from 'react-countup'
import aboutimg2 from './aboutimg2.jpg'
import aboutimg3 from './aboutimg3.jpg'
import '../Aboutus/Aboutus.css'
function Aboutus() {
  return (
    <div className='about_page'> 
      <div className='about_up'>
      <div className='about_img1'>
        <img src={aboutimg2} alt='' />
      </div>
      <div className='about_about'>
      <h2>ABOUT US</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.</p>

      </div>
      </div>
      
        <div className='about__counter' >
      <div>
              <div className='first-row'>
                <div className='single_counter'> 
                  <span className='counter'>
                    <CountUp start={0} end={25} duration={2}
                      suffix='k' />
                  </span>
                  <p className='counter__title'>Completed Projects</p>
                </div>
                <div className='single__counter'>
                  <span className='counter'>
                    <CountUp start={0} end={12} duration={2}
                      suffix="M" />
                  </span>
                  <p className='counter_title'>Students Around World</p>
                </div>
              </div>
              <div className='first-row'>
                <div className='single_counter'>
                  <span className='counter'>
                    <CountUp start={0} end={25} duration={2}
                      suffix='k' />
                  </span>
                  <p className='counter__title1'>Completed Projects</p>
                </div>
                <div className='single__counter'>
                  <span className='counter'>
                    <CountUp start={0} end={12} duration={2}
                      suffix="M" />
                  </span>
                  <p className='counter_title'>Students Around World</p>
                </div>
              </div>
            </div>
          </div>
          <div className='about_why'>
          <div className='why'>
          <h2>WHY IS LEARNING HUB?</h2>
            <p>Learning Hub is an online transformative upskilling platform for working tech professionals.
              Our industry-vetted approach towards teaching & training young professionals not only helps them upskill               but also #CreateImpact in the real world. We are devoted to creating an ecosystem that nurtures our
             learners and assists them in unlocking talent, skills & opportunities at every stage of their careers.</p>
          </div>
          <div className='about_img3'>
            <img src={ aboutimg3} alt='' />
          </div>
          </div>
          </div>
           
    
  )
}

export default Aboutus


// import React from 'react'
// // import { Container, Row, Col } from 'reactstrap';
// import aboutimg1 from './aboutimg1.jpg' 
//  import CountUp from 'react-countup'
// import aboutimg2 from './aboutimg2.jpg'
//  import aboutimg3 from './aboutimg3.jpg'
//  import '../Aboutus/Aboutus.css'
// function AboutUs() {
//   return <section>
//     <Container>
//       <Row>
//         <Col lg='100' md='100' className=''>
//           <div className='about__fle'>
//             <img src={aboutimg2} alt=''
//               className='w-100  ' />
//           </div>
//         </Col>
//         <Col lg='10' md='10'>
//           <div className='about__fle'>
//           <div className='about__content'>
//             <h2>ABOUT US</h2>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//               It has survived not only five centuries, but also the leap into electronic typesetting,
//               remaining essentially unchanged.</p>

//             <div className='about__counter'  >
//               <div className='d-flex gap 5 align-items-center'>
//                 <div className='single_counter'>
//                   <span className='counter'>
//                     <CountUp start={0} end={25} duration={2}
//                       suffix='k' />
//                   </span>
//                   <p className='counter__title'>Completed Projects</p>
//                 </div>
//                 <div className='single__counter'>
//                   <span className='counter'>
//                     <CountUp start={0} end={12} duration={2}
//                       suffix="M" />
//                   </span>
//                   <p className='counter_title'>Students Around World</p>
//                 </div>
//               </div>
//               <div className='d-flex gap 5 align-items-center'>
//                 <div className='single_counter'>
//                   <span className='counter'>
//                     <CountUp start={0} end={25} duration={2}
//                       suffix='k' />
//                   </span>
//                   <p className='counter__title1'>Completed Projects</p>
//                 </div>
//                 <div className='single__counter'>
//                   <span className='counter'>
//                     <CountUp start={0} end={12} duration={2}
//                       suffix="M" />
//                   </span>
//                   <p className='counter_title'>Students Around World</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
        
//         </Col>
//       </Row>
        
//       <Row> 
//         <Col lg='6' md='6'>
//           <div className='Why'>
//             <h2>WHY IS LEARNING HUB?</h2>
//             <p>Learning Hub is an online transformative upskilling platform for working tech professionals.
//               Our industry-vetted approach towards teaching & training young professionals not only helps them upskill
//               but also #CreateImpact in the real world. We are devoted to creating an ecosystem that nurtures our
//               learners and assists them in unlocking talent, skills & opportunities at every stage of their careers.</p>
//           </div>
//         </Col>
//         <Col lg='6' md='6'>
//           <div className='why1'>
//             <img src={aboutimg3} alt=''
//               className='w-100' />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// }

// export default AboutUs
  
