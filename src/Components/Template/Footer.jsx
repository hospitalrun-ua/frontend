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

import { Logo } from './';

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
    flexGrow: 1,
    backgroundColor: theme.palette.primary['main'],
    padding: '4rem 0'
  },
  subheading: {
    color: theme.palette.text['secondary'],
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '170%'
  },
  listItem: {
    padding: 0
  },
  content: {
    color: theme.palette.text['secondary'],
    fontSize: '1rem',
    lineHeight: '170%'
  },
  contact: {
    padding: '.5rem 0',
    color: theme.palette.text['secondary'],
    lineHeight: '170%'
  },
  copyright: {
    borderTop: `1px solid ${theme.palette.text['secondary']}`,
    marginTop: '3rem',
    padding: '2rem 0',
    color: theme.palette.text['secondary']
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
              +38 (044) 281-42-87, 0-800-503-400 22, Bulvarno-Kudriavska St, Kyiv, 01601 UKRAINE
            </Typography>
          </Grid>

          <Grid
            className={classes.copyright}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={3}>
              <Logo />
            </Grid>
            <Grid item xs={12} sm={3}>
              Copyright PandAid (c) 2020
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
