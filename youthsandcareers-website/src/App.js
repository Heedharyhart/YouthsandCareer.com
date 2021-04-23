
import React, {Component} from "react";
import {Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage'
import Registration from './Pages/Registration';
import Login from './Pages/Login'
import ResetPassword from "./Pages/ResetPassword";
//import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
//import MainSection from "./components/MainSection/MainSection";
//import Footer from "./components/Footer/Footer";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import Events from "./components/GlobalEvent/GlobalEvent";
import Universities from "./components/Universities/Universities";
import AboutUs from "./components/AboutUs/AboutUs";
import Courses from "./components/Courses/Courses";
import OurServices from "./components/OurServices/OurServices";

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
    return(
      <>
    <div>
      <div>
      <Navbar />
      </div>
      <div>
      <Switch>
        <Route exact path="/" render={() => (
          <HomePage/>
        )}/>
        <Route exact path="/signup" render={() => (
          <Registration/>
        )}/>
        <Route exact path="/login" render={() => (
          <Login/>
        )}/>
               <Route exact path="/forgetPassword" render={() => (
          <ResetPassword/>
           )}/>
 
    

    <Route path="/WorkWithUs" render={() => (
            <WorkWithUs/>
           )}/>

    <Route path="/GlobalEvent" render={() => (
            <Events/>
           )}/>

    <Route path="/Universities" render={() => (
            <Universities/>
           )}/>

    <Route path="/AboutUs" render={() => (
           <AboutUs/>
           )}/>

    
    <Route path="/Courses"render={() => (
           <Courses/>
           )}/>

    <Route path="/OurServices"
      render={() => (
           <OurServices/>
           )}/>

      </Switch>
      </div>
     
    </div>
    </>
    );
  }
}

export default App;

  



