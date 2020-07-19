import React from 'react';
import './App.css';
import "fontsource-roboto"
import { Grid, Button } from '@material-ui/core'
import Nav from './components/Nav'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <Grid container direction="column" spacing={2} justify="center" align="center">
      <Grid item>
        <Nav />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Add new recipe
        </Button>
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

export default App;
