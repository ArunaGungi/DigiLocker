import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../static/images/cards/digiLocker.png';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';

const useStyles = makeStyles({
  root: {
    maxWidth: 430,
  },
});

export default function WelcomeComp() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="DigiLocker"
          height="350"
          image={img}
          title="digiLocker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Secure your documents digitally
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
                Digital Locker will allow the users to store the files in a secured manner with 
                the help of OTP based system.
                One can access the files only when the OTP matches that is linked to the registered email
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
          </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
