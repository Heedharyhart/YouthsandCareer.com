import "../Navbar/Navbar.css";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
         <div className ="sticky-top">
    <nav className="navbar  navbar-expand-lg  navbar-light bg-light bg-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://i.postimg.cc/C1fQy0Fj/logo-1-removebg.png" alt="" width="50" ></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <Link className="nav-link nav-link-home active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Universities
          </a>
          <ul className="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Federal</a></li>
            <li><a className="dropdown-item" href="#">State</a></li>
            <li><a className="dropdown-item" href="#">Private</a></li>
          </ul>
        </li>

  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/Courses">Courses</Link></li>
            <li><a className="dropdown-item" href="#">Mentorships</a></li>
            <li><a className="dropdown-item" href="#">Scholarships</a></li>
          </ul>
        </li>

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Explore
          </a>
          <ul className="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/GlobalEvent" >Global Events</Link></li>
            <li>
              <Link className="dropdown-item" to="/" >Virtual Tour</Link>
            </li>
            <li><Link className="dropdown-item" to="/WorkWithUs" >Get Involved</Link></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><Link className="dropdown-item" to="/AboutUs">About Us</Link></li>
          </ul>
        </li>
      </ul>
      <div className="nav-form">
      <table className = "elementsContainer d-flex ">
      <tr>
        <td>
        <input className="form-control me-2 " type="search" placeholder="Find a University or Course" aria-label="Search"></input>
        </td>
        <td>
        <a className="btn py-auto btn-primary" href="#" role="button"><BsSearch></BsSearch></a>
        </td>
      </tr>
    </table>
      </div>
      
   
    </div>
  </div>
</nav>
    </div> 
    );
}
 
export default Navbar;