import React from 'react'
import Container from 'react-bootstrap/Container';
import teaVideo from "../image/tea video.mp4";
import '../pages/Video.css'
export default function Video() {
  return (
    <div>
        <Container>
                 <video autoPlay muted loop playsInline className="video">
                    <source src={teaVideo} type="video/mp4" />
                 </video>
        </Container>
    </div>
  )
}
