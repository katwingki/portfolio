import React from "react";
import '../App.css';
import HeroUnit from "./HeroUnit";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ContactForm from "./ContactForm";
import Projects from "./Projects";

const useStyles = makeStyles((theme) => ({
  contactMe: {
    width: '100%',
    height: '17rem',
    background: '#0e1830',
    transform: 'skewY(4.5deg)',
    padding: "50px 0",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    width: '100%',
    height: '1.5rem',
    background: 'black',
    transform: 'skewY(-9.5deg)',
    padding: "50px 0",
    display: "flex",
    justifyContent: "center"
  },
  projects: {
    width: '100%',
    paddingBottom: "5%",
    background: 'black',
    transform: 'skewY(-4.5deg)',
    display: "flex",
    justifyContent: "center",

  },
}))

function Home()
{
  const classes = useStyles();
  return (
    <div className="App">
      <Box style={{ position: "relative", display: "flex" }}>
        <HeroUnit />
      </Box>
      <Box className={classes.projects}>
        <Projects />
      </Box>
      <Box display="flex" justifyContent="center" className={classes.contactMe}>
        <ContactForm />
      </Box>
      <Box className={classes.footer}>
        <Typography variant="subtitle2" style={{ color: "white", transform: 'skewY(9.5deg)' }}>
          © {new Date().getFullYear()} Kathryn Lam. All rights reserved.
        </Typography>
      </Box>
    </div >
  )
}

export default Home;
