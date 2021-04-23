import "../WorkWithUs/WorkWithUs.css";
import { Container, Row } from "react-bootstrap";




const WorkWithUs = () => {
    return ( <div>

<div>
      <h1 className="WorkWithHead">Join Youths and Careers Today</h1>
      <div className="WorkWithBG">
        <h1>WORK WITH US</h1>
        <p>Be a change maker and make impact Today</p>
      </div>
    </div>


         <Container fluid className="BodySection">
      <Row>
        <p>
          Are you passionate about solving problems and challenges faced by
          students and individuals in their academic career? Are you a
          target-driven individual and can work effectively without close
          moniitoring? Are you highly versatile or open to learning new things
          and having new experiences ?
        </p>
      </Row>
      <Row>
        <p>
          Youths and Careers is interested in working with changemakers like
          you! Do not worry about your proficiency level in the skills you
          possess - we simply need you to be willing and dedicated. We help in
          providing University admission seekers with the required information,
          materials, guidance and all necessary resources in order to ensure
          they have a better and seameless experience starting their career
          sojourn.
        </p>
      </Row>
      <Row>
        <p>
          Kindly reach out to us through our email (
          <a href="">youthsandcareers@gmail.com</a>) or social media handles
          (Instagram & Facebook; <a href="">youthsandcareers</a> and Twitter -
          <a href="">youthsandcareer</a>) indicating your interest and
          background. Also, tell us what you would bring to Youths and Careers
          if hired.
        </p>
      </Row>
    </Container>
    </div> );
}
 
export default WorkWithUs;