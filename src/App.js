import React, { Component } from 'react'
import {
  Route, 
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import List from './components/List.js'
import Home from './components/Home.js';



export default class App extends Component {
  render() {
    return (
      
        <Router>
          {/* <Link to='/'>HomePage </Link> */}
          <Link to='/list'>Weed</Link>
          <Switch>
            {/* this is your home route */}

            <Route exact path='/list' component={List}/>
            {/* home esta abajo de list porque va solo leer / solo y no la L desoues de el / de list */}
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/detail:_strain' compoment={Detail}/> */}
          </Switch>
        </Router>
      
    );
  }
}



