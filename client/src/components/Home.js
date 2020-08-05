import React from 'react';
import { Grid, Button } from '@material-ui/core'
import Nav from './Nav'
import RecipeList from './RecipeList'
import CreateButton from './CreateButton';

function Home() {
  return (
    <Grid container direction="column" spacing={2} justify="center" align="center">
      <Grid item>
        <Nav />
      </Grid>
      <Grid item>
        <CreateButton />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <RecipeList />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
}

export default Home;