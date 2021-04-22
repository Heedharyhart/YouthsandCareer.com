import React from "react";
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


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return <div>
    <Router>
    
    <Navbar />

    <Switch>
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
    </Router>
    
  </div>;
}

export default App;
