import "../MainSection/MainSection.css";

import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


import { FaUniversity } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";



const MainSection = () => {
    return ( 
    <div>


            <div className="main-section-1 py-4">
            <div className="container">
            <header>
            {/* className="mt-5 ms-lg-5 ms-md-4 ms-sm-3" */}
                <div className="container ">
                <h2 className="text-primary">We Help You Make Better Informed Career Decisions</h2>
                <p>With our Pool of resources, Expertise and Compassion we help students make informed career decisions towards studying their dream courses in their most preferred institution</p>
                <div className="my-4">
                <a className="btn btn-primary" href="#" role="button">Get Started</a>
                <a className="btn btn-outline-primary text-light ms-3" href="#" role="button">Login</a>
                </div>
                </div>
            </header>
            </div>
            </div>





            <div className="main-section-2">
            <div className="container-ms  bg-light">
                        <div className="container">
                            <div className="btn-2 text-center ">
                            <button type="button" class="btn btn-primary">WHAT WE OFFER</button>
                            </div>
                        

            <div className="row row-cols-1 row-cols-md-2 g-4 p-4">
            <div className="col ">
            <div className="card rounded m-4">
            <div className="icons1 text-center text-primary">
            <FaUniversity></FaUniversity>
            </div>

            <div className="card-body">
            <h5 className="card-title text-center">UNIVERSITY</h5>
            <p className="card-text text-center lh-base ">Select a university of your choice and we would provide you with all necessary information.</p>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card rounded m-4">
            <div className="icons1 text-center text-primary">
            <MdLibraryBooks></MdLibraryBooks>
            </div>
                
            <div className="card-body">
            <h5 className="card-title text-center">COURSES</h5>
            <p className="card-text text-center lh-base">Get access to every resources and information you need to know about your course of choice.</p>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card rounded m-4">
            <div className="icons1 text-center text-primary">
            <IoMdGlobe></IoMdGlobe>
            </div>

            <div className="card-body card-body-3">
            <h5 className="card-title text-center ">GLOBAL AND LOCAL EVENTS</h5>
            <p className="card-text text-center lh-base">Get more exposure and insights into your career. Find  global and local educational events you can attend.</p>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card rounded m-4">
            <div className="icons1 text-center text-primary">
            <IoIosPeople></IoIosPeople>
            </div>

            <div className="card-body card-body-4">
            <h5 className="card-title text-center">MENTORSHIP</h5>
            <p className="card-text text-center lh-base">Experience one-on-one mentorship with our facilitators who have acquired vast knowledge and experiences in the field.</p>
            </div>
            </div>
            </div>
            </div>
                </div>
                        
                </div>
            </div>


        


                <div className="main-section-3">
                <div className="container-4 py-4 ">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                            <h4 className = "mb-0">LATEST NEWS</h4>
                            <div className="container-5 my-3 py-3 mx-auto">
                            <div class="container rounded bg-light">
        <div className="row row-cols-1">
            <div className="col lh-base">
                <h5 className="text-dark pt-3">March 30,2021</h5>
                <p>Unilag releases cut off mark for 2021/2022 Academic session.</p>
                <div class="border-top border-primary w-100  my-3" ></div>
            
                        
            </div>
            <div className="col">
                <h5 className="text-dark">March 25,2021</h5>
                <p>Lagos State University releases its supplementary admission list for 2018/2019 session.</p>
                <div class="border-top border-primary w-100  my-3" ></div>
            </div>
            <div className="col">
                <h5 className="text-dark">March 10,2021</h5>
                <p>Lagos State Scholarship released new scholarship beneficiaries for 2018/2019 session.</p>
                <div class="border-top border-primary w-100  my-3" ></div>
        </div>
            <div className="col">
                <h5 className="text-dark">February 25,2021</h5>
                <p>Obafemi awolowo university commences admission process for the 2019/2020 session.</p>
        </div>
        </div>
        </div>
            </div>
            </div>
        <div className="col-lg-6 col-md-6 my-auto ">
                <p className = "fs-5 lh-base text-light">Do you want to be the first to recieve information about offers, services, scholarships, educational materials and general updates? Then sign up for our monthly newsletter</p>
                <table className = "elementsContainer ">
            <tr>
                <td>
                <input className="form-control  " type="search" placeholder="Email Address" aria-label="Search"></input>
                </td>
                <td>
                <a className="btn btn-primary py-auto " href="#" role="button">Subscribe</a>
                </td>
            </tr>
            </table>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
    



            <div className="main-section-4 py-5 px-5 bg-light">
                <h4 className="text-primary my-3 text-center">VIRTUAL TOUR</h4>
                <p className="mt-3 mb-5 mx-auto"> we help you navigate your preferred institution without stress. start a virtual tour now to know what it feels like to study in your most preferred university.</p>
            
            <div>             

            <Carousel className = "carousel-dark overflow-hidden">
              
  <Carousel.Item>
    <div className="container">
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">University of Lagos</p>
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Convenant University</p>
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Olabisi Onabanjo University</p>
        </div>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className="container">
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">University of Lagos</p>
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Convenant University</p>
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Olabisi Onabanjo University</p>
        </div>
    </div>
  </Carousel.Item>

  <Carousel.Item>
    <div className="container">
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">University of Lagos</p>
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Convenant University</p>
       
        </div>
        <div className="">
        <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4?ecver=2&enablejsapi=1" frameborder="1"></iframe>
        <p className="">Olabisi Onabanjo University</p>
        </div>
      </div>
  </Carousel.Item>

  </Carousel>
        <div className=" text-center mt-4">
        <a href="#">LOAD MORE...</a>
        </div>
 
  
   </div>
   </div>




            <div className="main-section-5 py-5 px-5 ">
        
                <h4 className=" text-center">REVIEWS FROM PAST USERS</h4>

                <div class="container ">
              
                <div class="card" >
                  <div className="text-center">
                  <img src="https://github.com/Heedharyhart/YouthsandCareer.com/blob/main/youthsandcareers-website/src/Images/Daniel%20picture.png?raw=true" class="card-img-top w-25" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Daniel</h5>
                  <h6>University of Lagos</h6>
                  <p className="section-5-p1">Mass Communication</p>
                  <p class="card-text"> <FaQuoteLeft></FaQuoteLeft> Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                  </div>
               
                            <div className="text-end">
                <small>25/03/2021</small>  
                  </div> 
                </div>
              </div>
               

               
                <div class="card" >
                  <div className="text-center">
                  <img src="https://i.postimg.cc/DzGfryPV/about2.png" class="card-img-top w-25" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Favour Imiegha</h5>
                  <h6>University of Ilorin</h6>
                  <p className="section-5-p1">Botany</p>
                  <p class="card-text"> <FaQuoteLeft></FaQuoteLeft> Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                  </div>
               
                            <div className="text-end">
                <small>01/04/2021</small>  
                  </div> 
                </div>
              </div>
             
               
               
               
                <div class="card" >
                <div className="text-center">
                  <img src="https://i.ibb.co/QQsXxBz/about1.png" class="card-img-top w-25" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Sumayyah</h5>
                  <h6>Convenant University</h6>
                  <p className="section-5-p1">Medicine</p>
                  <p class="card-text"><FaQuoteLeft></FaQuoteLeft> Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                  </div>
               
                            <div className="text-end">
                <small>19/04/2021</small>  
                  </div>
                
                </div>
              </div>
                </div>
              </div>
                  
          <div>
          </div>
     











        
  

            <div className="main-section-6 p-4">
            <h4 className="text-center mb-3">UPCOMING TRAININGS AND EVENTS</h4>
            <div className="main-6-container mx-auto">
                <div className="main-6-container-1">
                    <div className="main-6-container-11">
                    <p className="p-left">6th - 7th APRIL</p>
                    </div>
                    <div className="main-6-container-12">
                    <p className="pt-3">ECOSOC YOUTH FORUM 10TH ANNIVERSARY PROGRAM</p>
                    </div>
                </div>
                <div className="main-6-container-1">
                <div className="main-6-container-11 main-6-container-13">
                <p className="p-left">24th - 25th APRIL</p>
            </div>
            <div className="main-6-container-12 main-6-container-14 ">
            <p className="pt-3">YOUTH INTERNATIONAL SUMMIT MODEL UNITED NATIONS</p>
            </div>
                </div>
                <div className="main-6-container-1">
                <div className="main-6-container-11  ">
                <p className="p-left">28th - 30th SEPT.</p>
            </div>
            <div className="main-6-container-12 ">
            <p className="pt-3">Youths4Climate: Driving Ambition, Italy, Milan. </p>
            </div>
                </div>
            </div>
            </div>



    </div> );
}
 
export default MainSection;