import Select from './Select';
import './Courses.css';
const Courses = () => {
    return ( 
    <div className="wrapper">
        <div className="jumbo">
           <p>
           We care about your future! 
           Get access to all<br/> the information you need about your course.  
           </p>
        </div>
        <div>
            <Select/>
        </div>
        <div className="test">
            <h3> Get a personalised course recommendation</h3>
            <p>Take this test to know which course is best for<br/> you.</p>
            <button>TAKE TEST NOW</button>
        </div>
        <div className="down">
            <p>
            Woud you like to speak to an undergraduate<br/> currently studying your course in your preffered<br/> institution? 
            <a href="www.google.com"> Click Here to Reach Out</a>
            </p>
        </div>
    </div> 
    );
}
 
export default Courses;