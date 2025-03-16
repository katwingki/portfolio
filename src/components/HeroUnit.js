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
import resume from '../components/resume/Kathryn_Lam.pdf'
import { skillsMap } from '../data/data';


const useStyles = makeStyles((theme) => ({
  button: {
    background: "#ceddff",
    marginTop: "1.5%",
    width: "23vw",
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "#91a1c9",
    borderRadius: '50px',
    transition: 'background-color 0.3s ease',

    '@media (max-width:968px)': {
      marginLeft: "-14%"
    },
    // clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',

  },
  heroSecondRow: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "55%",
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
    top: "0.5%",
    margin: "1%",
    border: "2px solid rgba(235, 211, 211, 0.6)",
    borderRadius: "50px",
    padding: "2%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    '@media (max-width:968px)': {
      top: "-1%",
    },
  },
  paper: {
    width: "15.5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
    color: "black",
    borderWidth: '2%',
    borderColor: "#e1eaff",
    borderStyle: "solid",
    '@media (max-width:968px)': {
      width: "25vw",
    },
  },
  techGrid: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    '@media (max-width:668px)': {
      maxWidth: "60vh",
      flexWrap: "wrap",

    },
  },
  techTitle: {
    color: "white",
    borderRadius: "10px",
    textShadow: '2px 1px rgb(45, 136, 49)',
    '@media (max-width:968px)': {
      marginLeft: "-14%"
    },
  },
  socialIconWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '1%',
    marginLeft: '1%',
    '@media (max-width:968px)': {
      flexDirection: "row",
      marginLeft: "-14%"
    },
  },
  videoBkg: {
    width: '150%',
    height: "85vh",
    objectFit: "cover",
    //position: "relative",
    zIndex: 0, opacity: "0.85",
    '@media (max-width:668px)': {
      height: "130vh"
    },
  }

}));

function HeroUnit() {
  const classes = useStyles();

  const skillKeys = Object.keys(skillsMap);

  return (
    <Box style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
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
        }}

      >
        <Typography variant="h4" style={{ color: "white", textShadow: "0.2px 0.2px #ffffff" }}>Kathryn Lam</Typography>

        <Typography variant="h6" style={{ color: "white", textShadow: "1px 1px rgb(39, 185, 61)" }}>From Retail Founder to Senior Software Engineer & Tech Leader
        </Typography>
        <Typography variant="subtitle" style={{ color: "white", fontStyle: "italic", fontWeight: "bold", textShadow: "0.2px 0.2px #ffffff" }}>My journey from building a retail business to leading engineering teams proves that curiosity and grit can unlock any skill.
          <br />
          <br />

          As a Senior Software Engineer, I now spearhead full-cycle product development — architecting systems, managing cross-functional projects, and mentoring junior engineers.
          <br />
          <br />

          The applications I’ve built don’t just satisfy users; they’ve saved hundreds of labor hours through automation, directly boosting their operational efficiency.
          <br />
          <br />
        </Typography>

        <Typography variant="h6" style={{ color: "white", textShadow: "1px 1px rgb(39, 185, 61)" }}>When I’m not optimizing code…

        </Typography>
        <Typography variant="subtitle" style={{ color: "white", fontStyle: "italic", fontWeight: "bold", textShadow: "0.2px 0.2px #ffffff" }}>
          You’ll find me optimizing my kitchen! I hunt for 15-minute recipes that deliver restaurant-tier flavors. I live for streamlining processes, whether it’s shaving hours off CI/CD pipelines or weeknight dinners.

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
                target="_blank" rel="noopener noreferrer"
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
              <a className='social-icon-link' href='https://github.com/katwingki' target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </Box>
            <Box component={motion.div}
              whileHover={{
                scale: 1.4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.8 }}>
              <a className='social-icon-link' href='mailto: katwingki@gmail.com' target="_blank" rel="noopener noreferrer">
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
                target="_blank" rel="noopener noreferrer"
              >
                <AiFillMediumSquare />
              </a>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" className={classes.mainTechGrid}
            p={1}>
            <Typography variant="h4" className={classes.techTitle}>Technical Skills</Typography>
            <Box display="flex" className={classes.techGrid}>

              {skillKeys && skillKeys.map((skillKey, idx) => {
                return (
                  <Paper key={idx} className={classes.paper}>
                    <Typography variant='subtitle2' style={{ color: "black", textShadow: "1px 1px rgb(174, 164, 235)" }}>{skillKey}</Typography>

                    {skillsMap[skillKey].map((skill, skillIdx) => (<Typography variant="body2" key={skillIdx}>{skill}</Typography>))}
                  </Paper>)
              })}
            </Box>
            <Box display="flex" flexDirection="row"
              component={motion.div} whileHover={{
                scale: 1.1,
                transition: { duration: 0.32 }
              }}
              whileTap={{ scale: 0.8 }} >
              <a href={resume} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Paper className={classes.button}><Button><Typography variant="subtitle1" style={{ fontWeight: "bold" }}>RESUME </Typography></Button></Paper></a>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box >


  );
}

export default HeroUnit;

