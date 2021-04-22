import "../Footer/Footer.css";
import { Link } from 'react-router-dom';

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";





const Footer = () => {
    return ( 
        <div>
            <footer>
                <div className="footer-links">
                <div className="footer-links-1">
                    <Link to="/AboutUs" className="fw-bold">About Us</Link>
                    <a href="">Our Partners</a>
                    <a href="">Advertise</a>
                    <Link to="/WorkWithUs">Get Involved</Link>
                </div>
                <div className="footer-links-1">
                    <a href="" className="fw-bold">Resourses</a>
                    <a href="">Blog</a>
                    <a href="">Virtual Tour</a>
                    <a href="">Tutorials</a>
                </div>
                <div className="footer-links-1">
                    <Link to="/OurServices" className="fw-bold">Services</Link>
                    <a href="">Advice</a>
                    <a href="">Scholarships</a>
                    <a href="">Tutorials</a>
                </div>
                </div>
               
                <div className="footer-b">
                    <p>Need Help ? <a href=""><FaRegCommentAlt></FaRegCommentAlt></a></p>
                </div>
            
               
                <div className="footer-c">
                    <div className="footer-c-1">
                    <p>
                        <span className="footer-c-11">	&copy;</span>
                        2021-2025  Youths and Careers
                    </p>
                    </div>
                  <div className="footer-c-2">
                      <a href="https://twitter.com/youthsandcareer?s=08" target= "_blank"><IoLogoTwitter></IoLogoTwitter></a>
                      <a href="https://www.facebook.com/pg/youthsandcareers/" target= "_blank" ><FaFacebook></FaFacebook></a>
                      <a href="https://instagram.com/youthsandcareers?igshid=1n4pz0nsnz4zf" target= "_blank" ><FiInstagram></FiInstagram></a>
                      <a href="" target= "_blank"><AiFillLinkedin></AiFillLinkedin></a>
                  </div>
                  <div className="footer-c-3">
                      <a className="a1" href="">Privacy Policy</a>
                      <a className="a1" href="">Terms of Use</a>
                      <a href="">Terms of Service</a>
                  </div>
                </div>
            
            </footer>
        </div>
         );
}
 
export default Footer;