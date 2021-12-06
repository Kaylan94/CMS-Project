import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BuilderComponent } from '@builder.io/react';

const useStyles = makeStyles(theme => ({
  cart: {
    padding: 20,
    width: 300,
  },
  noItemsMessage: {
    padding: 20,
    color: '#888',
    textAlign: 'center',
  },
}));

export function Cart() {
  const classes = useStyles();
  return (
    <div className={classes.cart}>
      <div className={classes.noItemsMessage}>We'd love to hear from you!</div>
      <BuilderComponent model="cart-content" />
    </div>
  );
}
