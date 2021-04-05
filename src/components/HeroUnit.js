import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { motion } from "framer-motion";
import
{
  AiFillMail,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillGithub,
} from 'react-icons/ai';

import './HeroUnit.css';
import backgroundVideo from '../components/video/background.mp4';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function HeroUnit()
{
  const classes = useStyles();

  return (

    <Grid container spacing={2}>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: "100vh", objectFit: "cover", position: "relative", zIndex: 0 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Grid item xs={12} style={{ width: '90vw', position: "absolute", textAlign: "left", top: "1%", marginLeft: "5%" }} component={motion.div} animate={{ rotate: 360 }}>

        <h1 style={{ fontSize: "3.5vh", color: "white " }}>Kathryn Lam </h1>

        <h2 style={{ fontSize: "3vh", color: "white " }}>Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills.Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills.</h2>

        <Grid container spacing={1} style={{ textAlign: "center", marginTop: "1%" }}>

          <Grid item xs={3} style={{ padding: "0", top: "66%" }} component={motion.div} whileHover={{
            scale: 1.4,
            transition: { duration: 0.3 }
          }} whileTap={{ scale: 0.8 }}>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/kathrynlam/'
            >
              <AiFillLinkedin />
            </a>
          </Grid>
          <Grid item xs={3} style={{ padding: "0" }} component={motion.div} whileHover={{
            scale: 1.4,
            transition: { duration: 0.3 }
          }} whileTap={{ scale: 0.8 }}>
            <a className='social-icon-link' href='https://github.com/katwingki'>
              <AiFillGithub />
            </a>
          </Grid>
          <Grid item xs={3} style={{ padding: "0" }} component={motion.div} whileHover={{
            scale: 1.4,
            transition: { duration: 0.3 }
          }} whileTap={{ scale: 0.8 }}>
            <a className='social-icon-link' href='mailto: katwingki@gmail.com'>
              <AiFillMail />
            </a>
          </Grid>

          <Grid item xs={3} style={{ padding: "0" }} component={motion.div} whileHover={{
            scale: 1.4,
            transition: { duration: 0.3 }
          }} whileTap={{ scale: 0.8 }}>
            <a
              className='social-icon-link'
              href='https://medium.com/swlh/expo-firebase-authentication-cloud-firestore-using-async-await-react-hooks-700920ad4b2b'
            >
              <AiFillMediumSquare />
            </a>
          </Grid>

        </Grid>


      </Grid>



      <Grid item xs={12} style={{ width: '80vw', position: "absolute", top: "54%", background: "#303f61", textAlign: "center", marginLeft: "9%", borderRadius: "10px" }} component={motion.div} animate={{ rotate: 360 }}>

        <p style={{ color: "black", fontSize: "15px" }}>Technical Skills </p>
        <Grid container spacing={1} style={{ textAlign: "center", marginTop: "1%" }}>

          <Grid item xs={3}>
            <Paper className={classes.paper}>Postgres</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Node.js</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Express</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>React</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Redux</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>HTML</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>CSS</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} style={{ width: '30vw', position: "absolute", top: "84%", background: "#c1e1ec", textAlign: "center", marginLeft: "35%", borderRadius: "10px" }} component={motion.div} animate={{ rotate: 360 }}>

        <Paper className={classes.paper}><h1 style={{ color: "black", fontSize: "15px" }}>RESUME </h1></Paper>
      </Grid>
    </Grid >


  );
}

export default HeroUnit;

