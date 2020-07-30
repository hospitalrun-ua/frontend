import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import './Footer.css';
import { footerLogo, facebookIcon, twitterIcon, linkedInIcon } from '../../assets/icons';

const menuItemsMock = [
  {
    'subhead': 'About PandAid',
    'children': ['About', 'Blog']
  },
  {
    'subhead': 'Partners',
    'children': ['Dozorro', 'Google', 'Amazon']
  },
  {
    'subhead': 'Resources',
    'children': ['Analytics & Monitoring']
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    backgroundColor: theme.palette.primary['main'],
    padding: '4rem 0'
  },
  subheading: {
    color: '#B9C6E4',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '170%'
  },
  listItem: {
    padding: 0
  },
  content: {
    color: '#B9C6E4',
    fontSize: '1rem',
    lineHeight: '170%'
  },
  contact: {
    padding: '.5rem 0',
    color: '#B9C6E4',
    lineHeight: '170%'
  },
  copyright: {
    borderTop: `1px solid ${'#B9C6E4'}`,
    marginTop: '3rem',
    padding: '2rem 0',
    color: '#B9C6E4'
  },
  socIconsWrapper: {
    marginTop: "24px",
    width: '100px',
  },
  socIcon : {
    maxHeight: '21px',
    maxWidth: '20px',
    '& svg': {
      height: '100%',
      width: 'auto',
    },
    '&:first-child': {
      maxHeight: '20px',
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {
            menuItemsMock.map((section) => (
              <Grid key={section.subhead} item xs={6} md={3}>
                <Typography variant="h6" className={classes.subheading}>
                  { section.subhead }
                </Typography>

                <List>
                  {
                    section.children.map(link => (
                      <ListItem key={link} className={classes.listItem}>
                        <Link className={classes.content} href="#">{link}</Link>
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            ))
          }

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" className={classes.subheading}>
              Contacts
            </Typography>
            <Typography variant="body1" className={classes.contact}>
              +38 (044) 281-42-87, 0-800-503-400 22, Bulvarno-Kudriavska St,<br></br> Kyiv, 01601 UKRAINE
            </Typography>
            <Grid
              direction="row"
              justify="space-between"
              container
              className={classes.socIconsWrapper}
            >
              <a href="https://www.facebook.com/PandAid-100100004981155/" className={classes.socIcon}>{facebookIcon}</a>
              <a href="https://github.com/hospitalrun-ua" className={classes.socIcon}>{twitterIcon}</a>
              <a href="https://www.linkedin.com/company/pandaid-ua/" className={classes.socIcon}>{linkedInIcon}</a>
            </Grid>
          </Grid>

          <Grid
            className={classes.copyright}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={3}>
            {footerLogo}
            </Grid>
            <Grid item xs={12} sm={3}>
            Terms of Service
            </Grid>
            <Grid item xs={12} sm={3}>
            Privacy Policy
            </Grid>
            <Grid item xs={12} sm={3}>

            Copyright (©) 2020

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </footer>
  )
}
