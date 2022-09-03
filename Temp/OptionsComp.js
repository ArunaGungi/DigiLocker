import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function OptionsComp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}><Button variant="contained" color="primary">Login</Button></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please provide your login credentials such as username, password to login to the application
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><Button variant="contained" color="primary" back>Sign Up</Button></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please enter your email address to register your details in the application
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><Button variant="contained" color="primary">Services</Button></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Services provided by DigiLocker are to upload your document, download and delete your document by providing the OTP shared to your registered email address
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
