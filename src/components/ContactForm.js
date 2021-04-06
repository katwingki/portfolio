import React, { useState } from 'react';
//import './ContactForm.css';
import { db } from '../api/firebase';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { Box, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
configureAnchors({ offset: -160, scrollDuration: 200 });
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    background: "#ceddff",
    borderRadius: "25px",
    transform: 'skewY(-4.5deg)',

  },
  form: {
    padding: "3% 3%"
  },
  textField: {
    width: "20vw"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    transform: 'skewY(-4.5deg)',
    textAlign: "center"

  }
}))


const ContactForm = () =>
{
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setLoading(true);
    if (!name) alert('Please enter your name');
    else if (!email) alert('Please enter your email');
    else if (!message) alert('Please enter a message');
    else
    {
      try
      {
        await db.collection('contactforms').add({
          name: name,
          email: email,
          message: message,
        });
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
        alert('Your message has been submitted');
      } catch (err)
      {
        alert(err.message);
        setLoading(false);
      }
    }
  };
  return (
    <ScrollableAnchor id={'contact-block'}>

      <div id='form-section'>
        <Typography variant="h6" className={classes.title}> Send me a message: </Typography>
        <div id='main-container-form'>
          <Box display="flex" flexDirection="column" className={classes.main}
            p={1}>
            <form className={classes.form}>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>Name: </Typography>
              <input
                className={classes.textField}
                type='text'
                value={name}
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
              />

              <br />
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>Email: </Typography>
              <input
                className={classes.textField}
                type='text'
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>Message: </Typography>
              <textarea
                className={classes.textField}
                rows={5}
                cols={25}
                value={message}
                placeholder='Enter your message'
                onChange={(e) => setMessage(e.target.value)}
              />
              <br />
              <button
                type='submit'
                style={{
                  background: loading ? '#d3d3d3' : ' rgb(25, 25, 128)',
                }}
                onClick={handleSubmit}
              >
                Submit
            </button>
            </form>
          </Box>
        </div>

      </div >
    </ScrollableAnchor >
  );
};

export default ContactForm;
