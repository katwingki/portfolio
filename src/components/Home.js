import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { motion } from "framer-motion";
import backgroundVideo from '../components/video/background.mp4';


import '../App.css';
import HeroUnit from "./HeroUnit";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from "./ContactForm";
import Projects from "./Projects";
const useStyles = makeStyles((theme) => ({
  projects: {
    width: '100%',
    height: "235vh",
    background: 'black',
    transform: 'skewY(-4.5deg)',
    display: "flex",
    justifyContent: "center",
    '@media (max-width:968px)': {
      //flexDirection: "column"
      height: "320vh"
    },

  },

}))

const defaultPropsProjects = {
  //background: 'linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)'
  projects: {
    width: '100%',
    height: "240vh",
    maxHeight: "340vh",

    background: 'black',
    transform: 'skewY(-4.5deg)',
    display: "flex",
    justifyContent: "center",

  },
};
const defaultPropsContactMe = {
  style: { width: '100%', height: '19rem', background: '#0e1830', transform: 'skewY(4.5deg)', padding: "50px 0" },
};
const defaultPropsFooter = {
  style: { width: '100%', height: '1.5rem', background: 'black', transform: 'skewY(-9.5deg)', padding: "50px 0" },
};


function Home()
{
  const classes = useStyles();
  return (
    <div className="App">
      <Box style={{ position: "relative" }}>
        <HeroUnit />
      </Box>

      <Box className={classes.projects}>
        {/* <h2 style={{ color: "white", transform: 'skewY(4.5deg)' }}>Projects</h2> */}
        <Projects />
      </Box>
      <Box display="flex" justifyContent="center"  {...defaultPropsContactMe}>
        {/* <Box borderRadius="50%" {...defaultProps} />
        <Box borderRadius="borderRadius" {...defaultProps} />
        <Box borderRadius={16} {...defaultProps} /> */}

        <ContactForm />
      </Box>
      <Box display="flex" justifyContent="center" {...defaultPropsFooter}>
        <Typography variant="subtitle2" style={{ color: "white", transform: 'skewY(9.5deg)' }}>
          © {new Date().getFullYear()} Kathryn Lam. All rights reserved.
        </Typography>
      </Box>
    </div >

  )
}

export default Home;
