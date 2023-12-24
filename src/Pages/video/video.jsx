import React from 'react'
import { useParams } from 'react-router-dom'

const video = () => {
    const params = useParams;
  return (
    <div>
      <video src={params.src}></video>
    </div>
  )
}

export default video
