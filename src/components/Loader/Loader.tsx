import { Container, Grid } from '@material-ui/core';
import React from 'react';

const Loader = (): JSX.Element => (
  <Container>
    <Grid
      container
      style={{ height: window.innerHeight - 50 }}
      alignItems="center"
      justify="center"
    >
      <Grid container alignItems="center" direction="column">
        <div className="lds-hourglass" />
      </Grid>
    </Grid>
  </Container>
);

export default Loader;
