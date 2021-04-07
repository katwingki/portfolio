import React from 'react';
// import './Projects.css';
import '../App.css';
import { projects } from '../data/data';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { Box, TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { motion } from "framer-motion";

import { makeStyles } from '@material-ui/core/styles';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({ offset: -160, scrollDuration: 200 });

const useStyles = makeStyles((theme) => ({
  body2: {
    textAlign: "justify",
    textIndent: "5%"
  },
  icon: {
    fontSize: "5.5vh",
    color: "#0e1830",
    '@media (max-width:668px)': {
      //flexDirection: "column"
      fontSize: "4.5vh"
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",//X
    justifyContent: "flex-start",//Y
    marginTop: "5%",
    marginBottom: "5%",
    transform: 'skewY(4.5deg)',
  },
  mainProject: {
    width: "85vw",
    backgroundColor: "#ceddff",
    borderRadius: "25px",
    borderColor: "#91a1c9",
    borderWidth: "1vh",
    borderStyle: "solid",
    marginTop: "2%",
    '@media (max-width:668px)': {
      //flexDirection: "column"
      width: "80vw"
    },

  },
  mediaFrame: {
    position: "relative",
    width: "100%",
    height: "280px",
    display: "block",
    '@media (max-width:668px)': {
      height: "200px"
    },

  },
  paper: {
    width: "12vw",
    margin: "0.2%",
    textAlign: 'center',
    color: "black",
    borderWidth: '2%',
    borderColor: "#91a1c9",
    borderStyle: "solid",
    fontWeight: "bold",
    '@media (max-width:668px)': {
      width: "22vh",
      fontSize: "3.2vw"
    },
  },
  projectRow: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",//X
    margin: "1%",
    justifyContent: "flex-start",
    '@media (max-width:968px)': {
      flexDirection: "column",
      margin: "0%"
    },
  },
  projectRowLeft: {
    background: "#ceddff",
    color: "black",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",//X
    justifyContent: "flex-start",//Y
    margin: "1%",
    '@media (max-width:968px)': {
      width: "90%"
    },


  },
  projectRowRight: {
    background: "#ceddff",
    width: "40%",
    display: "flex",
    alignItems: "center",//X
    justifyContent: "flex-start",//Y
    margin: "0.5%",
    '@media (max-width:968px)': {
      width: "90%"
    },

  },
  socialIcons: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "2%",
    '@media (max-width:968px)': {
      //flexDirection: "column"
      width: "80%"
    },

  },
  subtitle: {
    fontStyle: "bold",

  },
  techGrid: {
    borderRadius: "10px",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: "2%",
    '@media (max-width:668px)': {
      flexWrap: "wrap",
    },
  },

  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
}))


const Projects = () =>
{
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'projects'}>
      <div className={classes.main}>
        <Typography variant="h6" className={classes.title}>Projects</Typography>
        <Box display="flex" flexDirection="column" className={classes.mainProject}
          p={1} component={motion.div} whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
          }}>
          <Box display="flex" className={classes.projectRow}>
            <Box display="flex" className={classes.projectRowLeft} >
              <Typography variant="h6" className={classes.subtitle}> {projects[0].title}</Typography>
              <Typography variant="body2" className={classes.body2}> {projects[0].descriptions[0]}</Typography>
              <Typography variant="body2" className={classes.body2}> {projects[0].descriptions[1]}</Typography>
              <Typography variant="body2" className={classes.body2}> {projects[0].descriptions[2]}</Typography>
              <Box display="flex" flexDirection="column" className={classes.mainTechGrid}
                p={1} component={motion.div}


                animate={{ y: ["10%", "-200%"] }} transition={
                  {
                    y: {
                      duration: 0.5,
                      yoyo: 0.9,
                      ease: "easeOut",
                    }
                  }}>
                <Box display="flex" className={classes.techGrid}>
                  <Paper className={classes.paper}>React Native</Paper>
                  <Paper className={classes.paper}>Expo</Paper>
                  <Paper className={classes.paper}>Firebase</Paper>
                  <Paper className={classes.paper}>JavaScript</Paper>
                </Box>
              </Box>
              <Box className={classes.socialIcons}>
                <a className={classes.icon} href={projects[0].link}>
                  <AiOutlineLink />
                </a>
                <a className={classes.icon} href={projects[0].github}>
                  <AiFillGithub />
                </a>
                <a className={classes.icon} href={projects[0].youtube}>
                  <TiSocialYoutubeCircular />
                </a>
              </Box>
            </Box>
            <Box display="flex" className={classes.projectRowRight}>
              <iframe
                src={projects[0].iframelink}
                allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
                allowFullScreen
                frameborder='3'
                className={classes.mediaFrame}
              ></iframe>
            </Box>
          </Box>
        </Box>


      </div>
    </ScrollableAnchor>
  );
};

export default Projects;
