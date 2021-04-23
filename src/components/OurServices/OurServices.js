import "./OurServices.css";
import { Container } from "react-bootstrap";
import TopSection from "./TopSection";
import BodySection from "./BodySection";
import LowerSection from "./LowerSection";

const OurServices = () => {
  return (
    <Container fluid>
      <TopSection />
      <BodySection />
      <LowerSection />
    </Container>
  );
};

export default OurServices;
