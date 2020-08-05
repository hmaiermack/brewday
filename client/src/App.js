import React from 'react';
import './App.css';
import "fontsource-roboto"
import Home from './components/Home'
import Recipe from './components/Recipe/Recipe'
import PageNotFound from './components/PageNotFound'
import { Switch, Route } from 'react-router-dom'
import { RecipeProvider } from '../src/context/RecipeContext'

function App() {

  return (
    <Switch>
      <RecipeProvider>
      <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/recipe/:id" component={Recipe} />
      </RecipeProvider>
      <Route exact path ="/404" component={PageNotFound} />
    </Switch>

  );
}

export default App;
