import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
	flexDirection: "column",
    minHeight: "100%",
  }, 
  container: {
    flex: "1",
  }
}));

const HomePage = () =>  {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Header />
      <Container className={classes.container}>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>Actual requests</Typography>
          <HospitalList />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
