import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    marginTop: '5vh',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} TripForecast. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
