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
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "black",
    fontWeight: "bold"
  },
  button: {
    background: "#ceddff",
    marginTop: "1%"
  },
  intro: {
    width: '90vw',
    position: "absolute",
    textAlign: "left",
    top: "15%",
    marginLeft: "4%",
    '@media (max-width:968px)': {
      top: "13%",
    },

  },
  techGrid: {
    width: '80vw',
    position: "absolute",
    top: "38%",
    left: "7%",
    // background: "#303f61",
    textAlign: "center",
    marginLeft: "9%",
    borderRadius: "10px",
    '@media (max-width:968px)': {
      top: "58%",
    },
  },
  socialIconTop: {
    marginTop: "2%",
    marginLeft: "4%",
    '@media (max-width:968px)': {
      marginTop: "13%",
      marginLeft: "-2%",
    },

  },
  socialIconOther: {
    marginLeft: "4%",
    '@media (max-width:968px)': {
      marginLeft: "-2%"
    },
  }

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
        style={{ width: '100%', height: "85vh", objectFit: "cover", position: "relative", zIndex: 0, opacity: "0.85" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Grid item xs={12} className={classes.intro} component={motion.div} animate={{ rotate: 360 }}>
        <Typography variant="h3" style={{ color: "white" }}>Kathryn Lam</Typography>

        <Typography variant="h6" style={{ color: "white" }}>Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills.Motivate and passionate Software Engineer who is ready to contribute her problem-solving and skills.</Typography>
        {/* <Grid container spacing={1} style={{ textAlign: "center", marginTop: "1%" }}> */}

        <Grid item xs={3} className={classes.socialIconTop} component={motion.div} whileHover={{
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
        <Grid item xs={3} className={classes.socialIconOther} component={motion.div} whileHover={{
          scale: 1.4,
          transition: { duration: 0.3 }
        }} whileTap={{ scale: 0.8 }}>
          <a className='social-icon-link' href='https://github.com/katwingki'>
            <AiFillGithub />
          </a>
        </Grid>
        <Grid item xs={3} className={classes.socialIconOther} component={motion.div} whileHover={{
          scale: 1.4,
          transition: { duration: 0.3 }
        }} whileTap={{ scale: 0.8 }}>
          <a className='social-icon-link' href='mailto: katwingki@gmail.com'>
            <AiFillMail />
          </a>
        </Grid>

        <Grid item xs={3} sm={1} className={classes.socialIconOther} component={motion.div} whileHover={{
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

        {/* </Grid> */}


      </Grid>



      <Grid item xs={12} className={classes.techGrid} >
        <Typography variant="h6" style={{ color: "white" }}>Technical Skills</Typography>

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
        <Grid container spacing={1} style={{ textAlign: "center", marginLeft: "25%", marginTop: "1%" }}>

          <Grid item xs={6}>

            <Paper className={classes.button}><Button><Typography variant="subtitle1" style={{ fontWeight: "bold" }}>RESUME </Typography></Button></Paper>
          </Grid>
        </Grid>

      </Grid>


    </Grid >


  );
}

export default HeroUnit;

