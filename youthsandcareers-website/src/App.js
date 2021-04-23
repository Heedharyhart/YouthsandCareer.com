
import React, {Component} from "react";
import {Switch, Route } from 'react-router-dom';
import Registration from './Pages/Registration';
import Login from './Pages/Login'
import ResetPassword from "./Pages/ResetPassword";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
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
  return (
    <div>
    <Navbar />
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
 
    <Route exact path="/">
    <Modal></Modal>
    <MainSection></MainSection>
    </Route>

    <Route path="/WorkWithUs">
    <WorkWithUs></WorkWithUs>
    </Route>

    <Route path="/GlobalEvent">
    <Events></Events>
    </Route>

    <Route path="/Universities">
    <Universities></Universities>
    </Route>

    <Route path="/AboutUs">
    <AboutUs></AboutUs>
    </Route>

    
    <Route path="/Courses">
    <Courses></Courses>
    </Route>

    <Route path="/OurServices">
    <OurServices></OurServices>
    </Route>

      </Switch>
     <Footer></Footer>
    </div>
  
  );
  }









export default App;
