import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: '#555',
    margin: '0 10px',
  },
  footer: {
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    fontSize: 12,
    padding: 20,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.link}>Home</div>
      <div className={classes.link}>About</div>
      <div className={classes.link}>Library</div>
      <div className={classes.link}>Curation</div>
      <div className={classes.link}>Account</div>
      <div className={classes.link}>Contact</div>
    </div>
  );
};
