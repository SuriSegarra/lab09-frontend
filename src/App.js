import React, { Component } from 'react'
import {
  Route, 
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import List from './components/List.js'
import Home from './components/Home.js';
import Createweed from './components/Createweed.js';
import Detail from './components/Detail.js';
import UpdateWeed from './components/Updateweed.js';


export default class App extends Component {
  render() {
    return (
      
        <Router>
          {/* <Link to='/'>HomePage </Link> */}
          
          
          <Switch>
            {/* this is your home route */}

            <Route exact path='/list' component={List}/>
            <Route exact path='/add' component={Createweed}/>
            <Route exact path='/update/:id' component={UpdateWeed}/>
            {/* home esta abajo de list porque va solo leer / solo y no la L desoues de el / de list */}
            <Route exact path='/' component={Home}/>
            <Route exact path='/detail/:id' component={Detail}/>
          </Switch>
        </Router>
      
    );
  }
}



