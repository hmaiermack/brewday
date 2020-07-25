import React from 'react';
import './App.css';
import "fontsource-roboto"
import Home from './components/Home'
import Recipe from './components/Recipe/Recipe'
import PageNotFound from './components/PageNotFound'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/recipe/:id" component={Recipe} />
      <Route exact path ="/404" component={PageNotFound} />
    </Switch>

  );
}

export default App;
