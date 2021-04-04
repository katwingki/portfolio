import React from 'react';
import backgroundVideo from '../components/video/background.mp4';
import Container from '@material-ui/core/Container';
import { motion } from "framer-motion";


import './video.css';
import Box from '@material-ui/core/Box';

function Video()
{
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: "80vh", objectFit: "cover", position: "relative", zIndex: 0 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Container style={{ position: "absolute", top: 30, left: 120, zIndex: 1, textAlign: "left" }} component={motion.div} animate={{ rotate: 360 }}>
        <h1 style={{ color: "white " }}>Kathryn Lam </h1>
        <h2 style={{ color: "white " }}>Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills</h2>
      </Container>
      <Container style={{ position: "absolute", top: 220, right: 120, zIndex: 3, textAlign: "center", background: "#c1e1ec", borderRadius: "4%" }} component={motion.div} animate={{ rotate: 360 }}>
        <h1 style={{ color: "black", fontSize: "20px" }}>Technical Skills </h1>
        <h2 style={{ color: "black", fontSize: "20px" }}>Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills</h2>
      </Container>
    </>

  );
}

export default Video;
