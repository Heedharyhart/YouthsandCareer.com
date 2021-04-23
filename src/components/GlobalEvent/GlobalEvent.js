import "../GlobalEvent/GlobalEvent.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Event from "./Event";


const Events = () => {
  const [schedules, setEvents] = useState([
    {
      id: 1,
      date: "6TH - 7TH APRIL 2021",
      subject: "ECOSOC YOUTH FORUM 10TH ANNIVERSARY PROGRAM",
    },
    {
      id: 2,
      date: "24TH - 25TH APRIL 2021",
      subject: "YOUTH INTERNATIONAL SUMMIT MODEL UNITED NATIONS",
    },
    {
      id: 3,
      date: "28TH - 30TH SEPTEMBER 2021",
      subject: "YOUTH4CHANGE DRIVING AMBITION MILAN, ITALY",
    },
    {
      id: 4,
      date: "12TH - 14TH OCTOBER 2021",
      subject: "UNIVERSITY OF NIGERIA CAREER FAIR",
    },
    {
      id: 5,
      date: "12TH - 14TH OCTOBER 2021",
      subject: "ABUJA STUDENT INTERNATIONAL RECRUITMENT FAIR",
    },
    {
      id: 6,
      date: "12TH - 14TH OCTOBER 2021",
      subject: "EDUTECH AFRICA",
    },
    {
      id: 7,
      date: "12TH - 14TH OCTOBER 2021",
      subject: "INTERNATIONAL CONFERENCE ON EDUCATION",
    },
    {
      id: 8,
      date: "12TH - 14TH OCTOBER 2021",
      subject: "INTERNATIONAL CONFERENCE ON EDUCATION QUALITY",
    },
  ]);

  return (
    <div>
     
      <div className="EventsImage">
        <p>
          Attend Global and Local Educational Events to get more exposure and
          Insights into your Career.
        </p>
      </div>
      <Container>
        <Row>
          <Col md={11} id="EventsHead">
            UPCOMING TRAININGS AND EVENTS
          </Col>
        </Row>
        {schedules.map((schedule) => (
          <Event id="Events" schedule={schedule} />
        ))} 
      </Container>
    </div>
  );
};

export default Events;
