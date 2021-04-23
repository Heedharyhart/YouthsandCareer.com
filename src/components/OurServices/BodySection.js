import "./OurServices.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./images/Logo.jpg";
const BodySection = () => {
  return (
    <Container fluid>
      <Row id="bodySection">
        <Col sm={6} className="Body">
          <p id="BodyText">
            We’re experts and certified agents in the education sector. If
            you’re in a leadership role, you’ll recognise that to participate in
            the competitive education landscape, today’s leaders need to
            effectively market their school’s strengths and achievements beyond
            the traditional means. The Education Agency has developed a number
            of award-winning PR and Marketing campaigns for forward-thinking
            schools. We’ve worked with education providers to develop
            transformational marketing plans which have improved communications,
            built the organisation’s community profile and helped schools become
            more profitable.
          </p>
        </Col>
        <Col sm={6}>
          <img src={Logo} alt="YCLogo" id="BodyLogo" />
        </Col>
      </Row>
    </Container>
  );
};

export default BodySection;
