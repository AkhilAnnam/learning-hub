import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle,Button } from 'reactstrap';
import '../Mylearning/Myleraning.css'
import MyCard from '../MyCard/MyCard';

function Mylearning() {
    const [Products,setProducts] = useState([]);
    const videoRef= useRef();

    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/fetch")
    // http://localhost:3000/Mylearning
    .then((res)=>setProducts(res.data))
    .catch((err)=>{console.log(err);})
    },[]);


    const [marketing,setMarketing] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/fetch1")
    // http://localhost:3000/Mylearning
    .then((res)=>setMarketing(res.data))
    .catch((err)=>{console.log(err);})
    },[])

    const [photography,setPhotography] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/photography")
    // http://localhost:3000/Mylearning
    .then((res)=>setPhotography(res.data))
    .catch((err)=>{console.log(err);})
    },[])

    const [governament,setGovernment] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/government")
    // http://localhost:3000/Mylearning
    .then((res)=>setGovernment(res.data))
    .catch((err)=>{console.log(err);})
    },[])

    const playvideo =()=>{
      if(videoRef.current){
        videoRef.current.play();
      }
    }

    
  return (
    <div className='free-free'>
      <Container className='free-course'>
      <p>Software</p>
      <Row xs="1" sm="2" md="4">
       
      {Products.map(item =>  (
        <Col key={item.id}>
          <MyCard title={item.title} name={item.name} price={item.price} rating={item.rating} video={item.video}  />
        
                        
        </Col>
      ))}
      </Row>
      <p>Marketing</p>
      <Row xs="1" sm="2" md="4">
      {marketing.map(item =>  (
        <Col >
          <MyCard title={item.title} name={item.name} price={item.price} rating={item.rating} video={item.video}  />
                        
        </Col>
      ))}
      </Row>
      <p>Photography</p>
      <Row xs="1" sm="2" md="4">
      {photography.map(item =>  (
        <Col>
          <MyCard title={item.title} name={item.name} price={item.price} rating={item.rating} video={item.video}  />
                        
        </Col>
      ))}
      </Row>
      <p>Government</p>
      <Row xs="1" sm="2" md="4">
      {governament.map(item =>  (
        <Col>
          <MyCard title={item.title} name={item.name} price={item.price} rating={item.rating} video={item.video}  />
                        
        </Col>
      ))}
      </Row>
      </Container>
    </div>
  )
}

export default Mylearning
//import React from "react";
// import {
//   Card,
//   CardBody,
//   CardText,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from "reactstrap";
// import htmlvideo from "../Mylearning/Ass/htmlvideo.mp4";
// import css from "../Mylearning/Ass/css.png";
// import js from "../Mylearning/Ass/js.png";
// import basichtml from "../Mylearning/Ass/basichtml.png";
// import { Navigate, Route, Router, useNavigate } from "react-router-dom";

// // import StartRating from './StarRating'

// function Mylearning(Price) {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="free_course">
//       <div>
//        Some of the Free Basic courses for you.
//        To make impact on you how they Are usefull to you
//       </div>
//       </div>
//       <div>
//         <img src={js} alt="" />
//       </div>
//       <center>
//         <h3>SoftWare</h3>
//       </center>
//       <div className="basicfree">
//         <Card
//           style={{
//             width: "18rem",
//           }}
//           //   className="position-relative"
//         >
//           {/* <video
//     alt="Sample"
//     src={htmlvideo}
//     controls
//     className="card-img-overlay"
//   /> */}
//           <img
//             src={basichtml} // Replace with the actual path to your thumbnail image
//             alt="Video Thumbnail"
//             className="card-img-top"
//             //  style={{ width: '50%', height: '50%', objectFit: 'cover' }}
//           />

//           <CardBody>
//             <CardTitle tag="h5">Basic HTML Course</CardTitle>

//             <CardText>its helps to improve your skills for FREE</CardText>
//             {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//      {`Price: $${'999'}`}
//     </CardSubtitle> 
//     <Button color="primary">Buy Now!</Button> */}
//             <Button
//               outline
//               color="secondary"
//               onClick={() => {
//                 navigate("/video/y ");
//               }}
//             >
//               Add to Cart
//             </Button>
//           </CardBody>
//         </Card>
//         <Card
//           style={{
//             width: "18rem",
//           }}
//         >
//           <img alt="Sample" src={css} />
//           <CardBody>
//             <CardTitle tag="h5">Basic CSS Course</CardTitle>
//             {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle> */}
//             <CardText>
//               It is used to change the Colors of Page.its helps to improve your
//               skills for FREE
//             </CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//         <Card
//           style={{
//             width: "18rem",
//           }}
//         >
//           <img alt="Sample" src={js} />
//           <CardBody>
//             <CardTitle tag="h5">Basic Javascript Course</CardTitle>
//             {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle> */}
//             <CardText>
//               It is used for interactive with webpage. its helps to improve your
//               skills for FREE.
//             </CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//       </div>

//       <div>
//         <center>
//           <h3>Governament Preparation</h3>
//         </center>
//         <div className="basicfree">
//           <Card
//             style={{
//               width: "18rem",
//             }}
//           >
//             <img alt="Sample" src={basichtml} />
//             <CardBody>
//               <CardTitle tag="h5">Basic C Course</CardTitle>

//               <CardText>its helps to improve your skills for FREE</CardText>
//               <Button>Button</Button>
//             </CardBody>
//           </Card>
//           <Card
//             style={{
//               width: "18rem",
//             }}
//           >
//             <img alt="Sample" src={css} />
//             <CardBody>
//               <CardTitle tag="h5">Basic C++ Course</CardTitle>

//               <CardText>
//                 It is used to change the Colors of Page.its helps to improve
//                 your skills for FREE
//               </CardText>
//               <Button>Button</Button>
//             </CardBody>
//           </Card>
//         </div>
//       </div>

//       <div>
//         <center>
//           <h3>Marketing</h3>
//         </center>
//         <div className="basicfree">
//           <Card
//             style={{
//               width: "18rem",
//             }}
//           >
//             <img alt="Sample" src={basichtml} />
//             <CardBody>
//               <CardTitle tag="h5">Basic HTML Course</CardTitle>

//               <CardText>its helps to improve your skills for FREE</CardText>
//               <Button>Button</Button>
//             </CardBody>
//           </Card>
//           <Card
//             style={{
//               width: "18rem",
//             }}
//           >
//             <img alt="Sample" src={css} />
//             <CardBody>
//               <CardTitle tag="h5">Basic CSS Course</CardTitle>
//               {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle> */}
//               <CardText>
//                 It is used to change the Colors of Page.its helps to improve
//                 your skills for FREE
//               </CardText>
//               <Button>Button</Button>
//             </CardBody>
//           </Card>
//         </div>
//       </div>
//       <div className="basicfree2">
//         <h3>Photography</h3>
//         <Card
//           style={{
//             width: "18rem",
//           }}
//         >
//           <img alt="Sample" src={css} />
//           <CardBody>
//             <CardTitle tag="h5">Basic CSS Course</CardTitle>
//             {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle> */}
//             <CardText>
//               It is used to change the Colors of Page.its helps to improve your
//               skills for FREE
//             </CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//         <Card
//           style={{
//             width: "18rem",
//           }}
//         >
//           <img alt="Sample" src={css} />
//           <CardBody>
//             <CardTitle tag="h5">Basic CSS Course</CardTitle>
//             {/* <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle> */}
//             <CardText>
//               It is used to change the Colors of Page.its helps to improve your
//               skills for FREE
//             </CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default Mylearning;
