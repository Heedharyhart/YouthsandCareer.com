
import "../AboutUs/AboutUs.css";
import {Card} from 'react-bootstrap';
import img from './about1.png';
import img2 from './about2.png';
import img3 from './about3.png';
import img4 from './about4.png';


const AboutUs = () => {
    return ( 
    <div className="Aboutus">
      
        <div className="header">
            <div className="about">
            <h2>About Us</h2>
            </div>
        </div>    
        <div className="our-story">
            <h4>our story</h4>
            <h6>Making Impacts. Making life easier. For Youths.</h6>
        </div>
        <div className="our-story-par">
            <p>We are a group of passionate students who have seen and understand the struggles youths 
                (students, Jambites, Admission seekers,undergraduates) go through just to choose the right career path. 
                Choosing a School or Deciding to study a course is not as easy as it sounds. And we are here to make that easy.
            </p>

            <p>Our project started as an idea from the Side Hustle internship, One of Nigeria’s leading 
               Internship programs to empower youths. We were given a list of  topics to choose from and, 
               together, chose this to work on- what better way to make impacts and make life easy for Nigerian youths?
                We desire a country where every youth has access to vital information, guidance and resources when kickstarting 
                their career sojourn. We hope to achieve a Nigeria, where every youth is a changemaker, regardless of their background. 
            </p>

            <p>With this vision, we came up with YouthsandCareers, an online platform that guides and advices students
                 on University and Course choice; provides all vital information and resources about all universities and 
                 accredited courses in Nigeria; connects prospective students with personal mentors in their preferred school; 
                 showcases a virtual tour of Nigerian schools and make known to students available scholarships they can benefit 
                 from as well as Global educational events they can attend to get more exposure into their career. The aim of this 
                 platform is to ensure that the process of making career decisions is an easy one.
            </p>

            <p>We identify as Team Impact and we have put in lots of efforts, energy, grit and dedication to make life easy for our fellow 
               youths. As you would see on this website, we have conducted extensive research and surveys to ensure our product caters for
               the needs of our end users.
            </p>

            <p>Without doubt, Team Impact comprises hardworking, intelligent, zealous youths who possess an array of outstanding skills,
                 including, Problem-solving, Leadership, Team work, time and product management skills. What would you say of 30+ youths 
                 who came together and built a solid product without prior acquaintance, all online?
            </p>

            <p>We at YouthsandCareers believe that pursuing the right career is critical in today’s world, 
                because it affords youths the needed skills, 
                knowledge and experience needed to build a platform and make desired and impactful changes.
            </p>
        </div>
        <div className="our-vision">
            <h4>our vision</h4>
            <p>
            To make useful and relevant information, resources and guidance easily accessible to every career-driven youth in Nigeria. 
            To contribute to the achievemnet of SDG 4 (Quality Education)
            </p>
        </div>
        <div className="our-mission">
            <h4>our mission</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <h4>meet our team</h4>
        <div className="card1">
          <Card style={{width: "18rem", display: "flex", alignItems:"center", justifyContent: "center"}}  border="primary">
            <Card.Img
                src={img}
                variant="top"
                style={{width: "200px", padding: "20px 10px"}}
            />
            <Card.Title style={{fontSize: "15px"}}>Summayah Ajani Adetomiwa </Card.Title>
            <Card.Subtitle style={{color: "#4571DA", padding: "10px" , fontWeight:"550"}}> team lead</Card.Subtitle>
          </Card>
        </div>
        <div className="card2">
          <Card  border="primary" className="space">
            <Card.Img
                src={img2}
                variant="top"
                style={{width: "200px", padding: "20px 10px"}}
            />
            <Card.Title style={{fontSize: "15px"}}>Favour Imiegha </Card.Title>
            <Card.Subtitle style={{color: "#4571DA", padding: "10px" , fontWeight:"550"}}>assistant team lead</Card.Subtitle>
          </Card> 

          <Card border="primary"className="space">
            <Card.Img
                src={img3}
                variant="top"
                style={{width: "200px", padding: "20px 10px"}}
            />
            <Card.Title style={{fontSize: "15px"}}>Solagbade Jubril</Card.Title>
            <Card.Subtitle style={{color: "#4571DA", padding: "10px" , fontWeight:"550"}}>sub team head</Card.Subtitle>
          </Card>

          <Card border="primary"className="space">
            <Card.Img
                src={img4}
                variant="top"
                style={{width: "200px", padding: "20px 10px"}}
            />
            <Card.Title style={{fontSize: "15px"}}> Nancy Okereke</Card.Title>
            <Card.Subtitle style={{color: "#4571DA", padding: "10px", fontWeight:"550"}}>sub team head</Card.Subtitle>
          </Card>

        </div>
       
    </div> 
    );
}
 
export default AboutUs;