import React, {Component} from "react";
import {Switch, Route } from 'react-router-dom';

import Registration from './Pages/Registration';
import Login from './Pages/Login'
import ResetPassword from "./Pages/ResetPassword";

const initialState = {
  currentUser: null
};


class App extends Component {

  constructor(props){
    super(props)
    this.state = {...initialState};
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){

  }



  render() {
  return (
    <div>
      <Switch>
        <Route exact path="/signup" render={() => (
          <Registration/>
        )}/>
        <Route exact path="/login" render={() => (
          <Login/>
        )}/>
               <Route exact path="/forgetPassword" render={() => (
          <ResetPassword/>
           )}/>
      </Switch>
    </div>
  
  );
  }
}

export default App;
