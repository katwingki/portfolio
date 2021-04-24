import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Typography } from '@material-ui/core';
import { motion } from "framer-motion";
import {
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
    borderColor: "#91a1c9",
    '@media (max-width:968px)': {
      marginLeft: "-14%"
    },
  },
  heroSecondRow: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "42%",
    marginLeft: "10%",
    '@media (max-width:368px)': {
      top: "45%",
    },
  },
  mainSecondRow: {
    display: "flex",
    flexDirection: "row",
    '@media (max-width:668px)': {
      flexDirection: "column"
    },
  },
  mainTechGrid: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: "15%",

    borderRadius: "10px",
    justifyContent: "space-evenly",
    '@media (max-width:968px)': {
      padding: "0%"
    },
  },
  intro: {
    width: '90vw',
    position: "absolute",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    top: "8%",
    marginLeft: "4%",
    '@media (max-width:968px)': {
      top: "-1%",
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
    '@media (max-width:668px)': {
      maxWidth: "60vh",
      flexWrap: "wrap",

    },
  },
  techTitle: {
    color: "white",
    borderRadius: "10px",
    '@media (max-width:968px)': {
      marginLeft: "-14%"
    },


  },
  socialIconWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    '@media (max-width:968px)': {
      flexDirection: "row",
      marginLeft: "-14%"
    },
  },
  videoBkg: {
    width: '100%',
    height: "85vh",
    objectFit: "cover",
    position: "relative",
    zIndex: 0, opacity: "0.85",
    '@media (max-width:668px)': {
      height: "130vh"
    },
  }

}));

function HeroUnit() {
  const classes = useStyles();

  return (
    <Box>
      <video
        autoPlay
        loop
        muted
        className={classes.videoBkg}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Box className={classes.intro} component={motion.div} animate={{ y: ["10%", "-100%"] }} transition={
        {
          y: {
            duration: 0.5,
            yoyo: 0.9,
            ease: "easeOut",
          }
        }}>
        <Typography variant="h4" style={{ color: "white", textShadow: "0.2px 0.2px #ffffff" }}>Kathryn Lam</Typography>
        <Typography variant="subtitle" style={{ color: "white", fontStyle: "italic", fontWeight: "bold", textShadow: "0.2px 0.2px #ffffff" }}>As a founder and operator of a retail business turned Software Engineer, I am an example of how with eagerness and the right resources, any skill can be developed.

        Despite my efficiency and success as an individual, I also welcome team collaboration so we can learn from our combined knowledge to devise bold ideas.
      <br />
          <br />
       My career goal is to build applications that satisfy the targeted user experience, integrate seamlessly with the big picture, and work reliably long-term.
       </Typography>
      </Box>
      <Box className={classes.heroSecondRow}>
        <Box display="flex" flexDirection="column" className={classes.mainSecondRow}
          p={1}>
          <Box className={classes.socialIconWrap} >
            <Box display="flex" component={motion.div}
              whileHover={{
                scale: 1.4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.8 }}>
              <a
                className='social-icon-link'
                href='https://www.linkedin.com/in/kathrynlam/'
              >
                <AiFillLinkedin />
              </a>
            </Box>
            <Box component={motion.div}
              whileHover={{
                scale: 1.4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.8 }}>
              <a className='social-icon-link' href='https://github.com/katwingki'>
                <AiFillGithub />
              </a>
            </Box>
            <Box component={motion.div}
              whileHover={{
                scale: 1.4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.8 }}>
              <a className='social-icon-link' href='mailto: katwingki@gmail.com'>
                <AiFillMail />
              </a>
            </Box>
            <Box component={motion.div}
              whileHover={{
                scale: 1.4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.8 }}>
              <a
                className='social-icon-link'
                href='https://medium.com/swlh/expo-firebase-authentication-cloud-firestore-using-async-await-react-hooks-700920ad4b2b'
              >
                <AiFillMediumSquare />
              </a>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" className={classes.mainTechGrid}
            p={1}>
            <Typography variant="h6" className={classes.techTitle}>Technical Skills</Typography>
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


            <Box display="flex" flexDirection="row"

              component={motion.div} whileHover={{
                scale: 1.1,
                transition: { duration: 0.32 }
              }}
              whileTap={{ scale: 0.8 }} >
              <a href={resume} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <Paper className={classes.button}><Button><Typography variant="subtitle1" style={{ fontWeight: "bold" }}>RESUME </Typography></Button></Paper></a>

            </Box>
          </Box>
        </Box>
      </Box>

    </Box >


  );
}

export default HeroUnit;

