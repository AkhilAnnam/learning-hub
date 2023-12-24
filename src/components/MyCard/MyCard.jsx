import React from "react";
import Youtube from "react-youtube"
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const MyCard = ({video,name,title,rating,price}) => {
    let youtubePlayer = null
    const optns = {
        height : "100%",
        width:"100%",
        playerVars :{
            autoPlay : 0
        }

    }

    const playVideo = () =>{
        if(youtubePlayer){
            youtubePlayer.target.playVideo();
        }
    }

  return (
    <Card className="my-2 p-2" color="primary" outline>
        <Youtube key={video} iframeClassName="iframe"  videoId={video} opts={optns} onReady={(event)=>(youtubePlayer = event) }/>
     
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {title}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {rating}
        </CardSubtitle>
        <Button onClick={playVideo}>{price}</Button>
      </CardBody>
    </Card>
  );
};

export default MyCard;
