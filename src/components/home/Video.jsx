import React, { Component } from "react";
import { Container } from 'reactstrap';

import "./Video.css";

class Video extends Component {
  render() {
    return (
      <Container fluid className="Video">
        <video 
          src="/medias/Epidemium.mp4"
          autoPlay
          loop
          muted
        />
      </Container>
    );
  }
}

export default Video;
