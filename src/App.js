import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailedTodo from './components/DetailedTodo';
import TodosScreen from './screens/TodosScreen'

//Here you put the react router
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TodosScreen/>
        </Route>
        <Route path='/DetailedTodo/:id'>
          <DetailedTodo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;