import "../Modal/Modal.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Modal = () => {
    return ( 
        <div className="modal-1">
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Do you want to be the first to recieve information about our webinars, scholarships, educational materials and general updates? then sign up for our monthly newsletter</h5>
          <button type="button" className="close" id = "modalClose" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <form>

  <div className="form-group">
  <table className = "elementsContainer">
    <tr>
    <td>
      <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><BsFillPersonFill></BsFillPersonFill></a>
      </td>
      <td>
      <input className="form-control" type="text" placeholder="Enter your First Name" aria-label="Search"></input>
      </td>      
    </tr>
  </table>
</div>

<div className="form-group">
<table className = "elementsContainer ">
    <tr>
    <td>
      <a className="btn btn-primary p-2" href="#" role="button"><AiOutlineMail></AiOutlineMail></a>
      </td>
      <td>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email"></input>
      </td>      
    </tr>
  </table>
</div>



<div className="form-check mx-auto">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
  <label className=" form-check-label" for="exampleCheck1">I agree to recieve regular updates about Webinars, Blog Posts and Services.</label>
</div >
<div className = "text-center">
<button type="submit" className="btn btn-custom my-2 mx-auto">SUBSCRIBE</button>
</div>

</form>
   </div>
        </div>
      </div>
    </div>
     </div>
     );
}
 
export default Modal;