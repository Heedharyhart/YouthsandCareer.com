import "../GlobalEvent/GlobalEvent.css";


import { Row, Col } from "react-bootstrap";
import EventButton from "./EventButton";

const Event = ({ schedule }) => {
  return (
    <Row className="styleEvent">
      <Col xs={6} md={2} id="date">
        {schedule.date}
      </Col>
      <Col xs={12} md={10} id="subject">
        {schedule.subject} <EventButton />
      </Col>
    </Row>
  );
};

export default Event;
