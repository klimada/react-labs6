import React from 'react'
import PageEmployee from './PageEmployee'
import PageEmployeesList from './PageEmployeesList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PageEmployeesList /> 
      </Route>
      <Route exact path="/new">
        <PageEmployee /> 
      </Route>
    </Switch>   
  </Router>
)

export default App