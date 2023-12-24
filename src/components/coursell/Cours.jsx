import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg",
    // caption: "Learn from Home",
    title:"Learn From Home .",
    content : "Grow your Skills to advance your career path"
    // key: 1,
  },
  { 
    src: "https://img.freepik.com/premium-vector/realistic-digital-online-concept-education-application-learning-gradient-website-background-decor-by-book-lecture-pencil-computer-mouse-keyboard-graduation-hat-3d-illustration-copy-space_255625-31.jpg?w=900",
    // altText: "Slide 2",
    // caption: "Slide 2",
    content:"learn anytime , anywhere with Learn Hub" ,
    
    key: 2,
    
  },
  {
    src: "https://img.freepik.com/free-vector/online-education-student-workplace-with-computer-table-pc-monitor-armchair-home-working-place-desk_33099-2176.jpg?w=996&t=st=1702357615~exp=1702358215~hmac=e6ccae1a2c659820abc4e813936c76d95ce78deb03c32f376b4d6a6725076421",
    // altText: "Slide 3",
    // caption: "Slide 3",
    // content:"learning hub .... in card 3",
    key: 3,
  },
];

function Cours(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{ width: '100%', height: '400px',position:"relative"}} src={item.src} alt={item.altText} />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
        <p style={{position:'absolute',top:"8rem",left:"10rem",fontSize:'50px'}}>{item?.title}</p>
        <div style={{width:"350px",position:'absolute',top:"12rem",left:"10rem",fontSize:'30px'}}><p >{item?.content}</p></div>
        

      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      style={{paddingToptop: '1000px'}}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Cours;
