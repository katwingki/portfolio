import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Typography } from '@material-ui/core';

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
import resume from '../components/resume/Kathryn_Lam_Resume.pdf'


const useStyles = makeStyles((theme) => ({
  button: {
    background: "#ceddff",
    marginTop: "1.5%",
    width: "43vw",
    borderStyle: "solid",
    borderWidth: "1%",
    borderColor: "#91a1c9"
  },
  buttonGrid: {
    position: "absolute",
    textAlign: "center",
    top: "78%",
    left: "32%",
    width: "80vw",
    '@media (max-width:968px)': {
      width: "25vw",
      top: "87%",
    },
  },
  mainTechGrid: {
    width: '50vw',
    position: "absolute",
    top: "45%",
    left: "18%",
    flexDirection: "column",
    textAlign: "center",
    marginLeft: "9%",
    borderRadius: "10px",
    justifyContent: "space-evenly",
    '@media (max-width:968px)': {
      top: "50%",
      flexDirection: "row"
    },
  },
  intro: {
    width: '90vw',
    position: "absolute",
    textAlign: "left",
    top: "1%",
    marginLeft: "4%",
    '@media (max-width:968px)': {
      top: "-5%",
    },

  },
  paper: {
    padding: theme.spacing(1),
    width: "10vw",
    margin: "2%",
    textAlign: 'center',
    color: "black",
    borderWidth: '2%',
    borderColor: "#e1eaff",
    borderStyle: "solid",
    fontWeight: "bold",
    '@media (max-width:968px)': {
      width: "25vw",
    },
  },
  techGrid: {
    textAlign: "center",
    marginLeft: "5%",
    margineRight: "2%",
    borderRadius: "10px",
    justifyContent: "space-evenly",
    '@media (max-width:968px)': {
      maxWidth: "20vh",
      flexWrap: "wrap",
      marginLeft: "2%",
    },
  },
  techTitle: {
    width: '80vw',
    position: "absolute",
    top: "40%",
    left: "50%",
    color: "white",
    borderRadius: "10px",
    '@media (max-width:968px)': {
      top: "45%",
      left: "42%",
    },
  },
  socialIconTop: {
    marginTop: "2%",
    marginLeft: "4%",
    '@media (max-width:968px)': {
      marginTop: "13%",
      marginLeft: "2%",
    },

  },
  socialIconOther: {
    marginLeft: "4%",
    '@media (max-width:968px)': {
      marginLeft: "2%"
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

      <Grid item xs={12} className={classes.intro} component={motion.div} animate={{ y: ["10%", "-100%"] }} transition={
        {
          y: {
            duration: 0.5,
            yoyo: 0.9,
            ease: "easeOut",
          }
        }}>
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
      <Typography variant="h6" className={classes.techTitle}>Technical Skills</Typography>
      <Box display="flex" flexDirection="column" className={classes.mainTechGrid}
        p={1}>
        <Box display="flex" className={classes.techGrid}>
          <Paper className={classes.paper}>PostgreSQL</Paper>
          <Paper className={classes.paper}>Node.js</Paper>
          <Paper className={classes.paper}>Express</Paper>
          <Paper className={classes.paper}>REST API</Paper>
        </Box>
        <Box display="flex" className={classes.techGrid}>
          <Paper className={classes.paper}>React</Paper>
          <Paper className={classes.paper}>Redux</Paper>
          <Paper className={classes.paper}>HTML</Paper>
          <Paper className={classes.paper}>CSS</Paper>
        </Box>

      </Box>
      <Box display="flex" flexDirection="row"
        className={classes.buttonGrid}
        component={motion.div} whileHover={{
          scale: 1.1,
          transition: { duration: 0.32 }
        }}
        whileTap={{ scale: 0.8 }} >
        <a href={resume} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
          <Paper className={classes.button}><Button><Typography variant="subtitle1" style={{ fontWeight: "bold" }}>RESUME </Typography></Button></Paper></a>

      </Box>
    </Grid >


  );
}

export default HeroUnit;

