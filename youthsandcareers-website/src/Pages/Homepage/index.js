import React, {Component} from 'react';
//import Navbar from './../components/Navbar';
import Modal from './../../components/Modal/Modal';
import MainSection from './../../components/MainSection/MainSection';
import Footer from './../../components/Footer/Footer';

class HomePage extends Component { 
  constructor(props){
    super(props)

  }
  render(){
    return(
        <section className="directory">
            <Modal/>
            <MainSection/>
            <Footer/>
        </section>
    );
  }
};

export default HomePage