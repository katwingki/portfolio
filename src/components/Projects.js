import React from 'react';
// import './Projects.css';
import '../App.css';
import { projects } from '../data/data';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({ offset: -160, scrollDuration: 200 });

const useStyles = makeStyles((theme) => ({
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
    width: "90vw",
    height: "40vh",
    backgroundColor: "white",
    borderRadius: "25px",
    borderColor: "#ceddff",
    borderWidth: "1vh",
    borderStyle: "solid",
    marginTop: "2%",

  },
  projectRow: {
    textAlign: "center",
    marginLeft: "9%",
    margineRight: "2%",
    borderRadius: "10px",
    justifyContent: "space-evenly",
    '@media (max-width:968px)': {
      maxWidth: "20vh",
      flexWrap: "wrap",
      marginLeft: "2%",
    },
  },
  projectRowLeft: {
    background: "blue"


  },
  projectRowRight: {
    background: "red"

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
        {/* <h4>
          Here is a list of projects built during the last 4 weeks of the
          program at Fullstack Academy Grace Hopper
        </h4> */}
        <Box display="flex" flexDirection="column" className={classes.mainProject}
          p={1}>
          <Box display="flex" className={classes.projectRow}>
            <Box display="flex" className={classes.projectRowLeft}>
              <Typography variant="h6" className={classes.title}> Project LEFT</Typography>
            </Box>
            <Box display="flex" className={classes.projectRowRight}>
              <Typography variant="h6" className={classes.title}> Project Right</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" className={classes.mainProject}
          p={1}>
          <Box display="flex" className={classes.projectRow}>
            <Box display="flex" className={classes.projectRowLeft}>
              <Typography variant="h6" className={classes.title}> Project LEFT</Typography>
            </Box>
            <Box display="flex" className={classes.projectRowRight}>
              <Typography variant="h6" className={classes.title}> Project Right</Typography>
            </Box>
          </Box>
        </Box>

      </div>
    </ScrollableAnchor>
  );
};

export default Projects;
