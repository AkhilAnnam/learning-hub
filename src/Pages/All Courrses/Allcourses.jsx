import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import '../All Courrses/Allcourses.css'
import {useHistory} from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {Tooltip }from "antd"
import { useLocation } from "react-router-dom";

function Allcourses() {
  const [software, setSoftware] = useState([]);
  const location = useLocation();
  const Government = useRef();
  const Marketing = useRef();
  const Software = useRef();
  const Music = useRef();
  const Photography = useRef();
  const Personal_Development = useRef();
  
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/software")
      // http://localhost:3000/Mylearning
      .then((res) => setSoftware(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    const navigate = location.hash.substring(1);
    if(navigate==='Government'){
      Government.current.scrollIntoView({behavior:"smooth"});
    }else if(navigate === 'Marketing'){
      Marketing.current.scrollIntoView({behavior:"smooth"});
    }else if(navigate === 'Software'){
      Software.current.scrollIntoView({behavior:'smooth'});
    }else if(navigate === "Music"){
      Music.current.scrollIntoView({behavior:'smooth'});
    }else if(navigate === "Photography"){
      Photography.current.scrollIntoView({behavior:'smooth'});
    }else if(navigate === "Personal_Development"){
      Personal_Development.current.scrollIntoView({behavior:'smooth'});
    }
  })

  const [marketing1, setMarketing1] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/marketing1")
      // http://localhost:3000/Mylearning
      .then((res) => setMarketing1(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [personal, setPersonal] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/personaldevelopment")
      // http://localhost:3000/Mylearning
      .then((res) => setPersonal(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [government1, setGovernment1] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/government1")
      // http://localhost:3000/Mylearning
      .then((res) => setGovernment1(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [phtography1, setPhtography1] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/phtography1")
      // http://localhost:3000/Mylearning
      .then((res) => setPhtography1(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [music, setMusic] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/music")
      // http://localhost:3000/Mylearning
      .then((res) => setMusic(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div className="Allcourse"> 
      <Container className="All-course">
        <p ref={Software}>Software</p>
        <Row xs="1" sm="2" md="4">
          {software.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
              <img src={item.video} alt="" />

                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>
                  
                  
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <p ref={Marketing} >Marketing</p>
        <Row xs="1" sm="2" md="4">
          {marketing1.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
              <img src={item.video} alt="" />

                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <p ref={Personal_Development}>Personal Development</p>
        <Row xs="1" sm="2" md="4">
          {personal.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
              <img src={item.video} alt="" />

                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <p ref={Government}>Government</p>
        <Row xs="1" sm="2" md="4">
          {government1.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
               
              <img src={item.video} alt="" style={{}}/>
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <p ref={Photography}>Photography</p>
        <Row xs="1" sm="2" md="4">
          {phtography1.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
              <img src={item.video} alt="" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <p ref={Music}>Music</p>
        <Row xs="1" sm="2" md="4">
          {music.map((item) => (
            <Col>
              <Card className="my-2 p-2" color="primary" outline>
               <img src={item.video} alt="" />

                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.title}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.Rating}
                  </CardSubtitle>
                  <Tooltip title="Add to Cart"><Button onClick={(item)=>addToCart}>{item?.price}</Button></Tooltip>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Allcourses;
