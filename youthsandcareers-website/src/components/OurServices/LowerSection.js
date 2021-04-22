import "./OurServices.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

import { BiWorld } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import House from "./images/House.png";
import Oven from "./images/Oven.png";

const LowerSection = () => {
  return (
    <Container>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <FaUniversity />
        </Col>
        <Col sm lg="4" className="Topic">
          UNIVERSITY
        </Col>
        <Col xs lg="5">
          <p>
            We provide a list of every Universities in Nigeria with everything
            you need to know before making an application.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <GiTeacher />
        </Col>
        <Col sm lg="4" className="Topic">
          MENTORSHIP
        </Col>
        <Col xs lg="5">
          <p>
            We connect you with undergraduates studying your course, in your
            preferred institution.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <MdLibraryBooks />
        </Col>
        <Col sm lg="4" className="Topic">
          COURSES
        </Col>
        <Col xs lg="5">
          <p>
            Get access to every resources and information you need to know about
            your course of choice
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <BiWorld />
        </Col>
        <Col sm lg="4" className="Topic">
          GLOBAL AND LOCAL EVENTS
        </Col>
        <Col xs lg="5">
          <p>
            Get more exposure and insights into your career. Find Global and
            Local Educational events you can attend.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <RiTeamFill />
        </Col>
        <Col sm lg="4" className="Topic">
          SCHOLARSHIP
        </Col>
        <Col xs lg="5">
          <p>You will have access to local and international schoolarships .</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <img src={House} alt="" id="images" />
        </Col>
        <Col sm lg="4" className="Topic">
          ACCOMODATION
        </Col>
        <Col xs lg="5">
          <p>
            We direct you to our Partners Website where you get access to All
            available Accommodations around your School.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center" id="LowerSection">
        <Col xs lg="3" className="Logo" id="logo">
          <img src={Oven} alt="" id="images" />
        </Col>
        <Col sm lg="4" className="Topic">
          TUTORIALS
        </Col>
        <Col xs lg="5">
          <p>
            We link you up with Available and Trusted Tutorial Classes in your
            School of Choice.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LowerSection;
