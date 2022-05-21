import './Crtacc.scss';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import {Navigate, useNavigate} from "react-router-dom";

function Crtacc() {
  const navigate = useNavigate();
  function validation() {
    var returnval = true;

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('conpass').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emails = document.getElementById('emails').value;
    if (user === "") {
      document.getElementById('username').innerHTML = "<br/> ** Please fill the username field";
      return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
      document.getElementById('username').innerHTML = " <br/> ** Username lenght must be between 2 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById('username').innerHTML = " <br/> ** only characters are allowed";
      return false;
    }
    if (pass === "") {
      document.getElementById('passwords').innerHTML = " <br/> ** Please fill the password field";
      return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
      document.getElementById('passwords').innerHTML = " <br/> ** Passwords lenght must be between  5 and 20";
      return false;
    }
    if (pass !== confirmpass) {
      document.getElementById('confrmpass').innerHTML = " <br/> ** Password does not match the confirm password";
      return false;
    }
    if (confirmpass === "") {
      document.getElementById('confrmpass').innerHTML = " <br/> ** Please fill the confirmpassword field";
      return false;
    }
    if (mobileNumber === "") {
      document.getElementById('mobileno').innerHTML = " <br/> ** Please fill the mobile NUmber field";
      return false;
    }
    if (isNaN(mobileNumber)) {
      document.getElementById('mobileno').innerHTML = " <br/> ** user must write digits only not characters";
      return false;
    }
    if (mobileNumber.length !== 10) {
      document.getElementById('mobileno').innerHTML = " <br/> ** Mobile Number must be 10 digits only";
      return false;
    }
    if (emails === "") {
      document.getElementById('emailids').innerHTML = " <br/> ** Please fill the email idx` field";
      return false;
    }
    if (emails.indexOf('@') <= 0) {
      document.getElementById('emailids').innerHTML = " <br/> ** @ Invalid Position";
      return false;
    }
    if ((emails.charAt(emails.length - 4) !== '.') && (emails.charAt(emails.length - 3) !== '.')) {
      document.getElementById('emailids').innerHTML = " <br/> ** . Invalid Position";
      return false;
    }
    console.log(returnval)
    if (returnval===true) {
     navigate("/RenderBChart")
    }
    else{
      <Navigate replace to = "/"/>
    }
  }
  return (
  <><div className='body'>
      <div className='body__left'>
          <div className='body__leftcard'>
            <Typography gutterBottom variant="h5" component="div">
               Choose A Date Range
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Lorem ipsum dolor sit amet,consectetur<br/>adipiscing elit. Mauris imperdiet bibendum 
            </Typography>     
         </div>
      </div>
        <div className='body__right'>
          <div className='body__cacard'>
                    <h1>Create An Account</h1>
                    
			<form action="#" onSubmit={validation} className="body__form">
      <div className="body__form-group">
					<label className="font-weight-bold">Your Email: </label><br/>
					<input type="text" name="email" className="body__form-control" id="emails" autoComplete="off"/>
					<span id="emailids" className="text-danger font-weight-bold"> </span>
				</div>
				<div className="body__form-group">
					<label className="font-weight-bold">Your Password: </label><br/>
					<input type="text" name="pass" className="body__form-control" id="pass" autoComplete="off"/>
					<span id="passwords" className="text-danger font-weight-bold"> </span>
				</div>

				<div className="body__form-group">
					<label className="font-weight-bold">Confirm Your Password: </label><br/>
					<input type="text" name="conpass" className="body__form-control" id="conpass" autoComplete="off"/>
					<span id="confrmpass" className="text-danger font-weight-bold"> </span>
				</div>

        <div className="body__form-group">
					<label htmlFor="user" className="font-weight-bold">Your Full Name: </label><br/>
					<input type="text" name="user" className="body__form-control" id="user" autoComplete="off"/>
					<span id="username" className="text-danger font-weight-bold"> </span>
				</div>

				<div className="body__form-group">
					<label className="font-weight-bold">Your Mobile Number: </label>
          <br/>
					<input type="text" name="mobile" className="body__form-control" id="mobileNumber" autoComplete="off"/>
					<span id="mobileno" className="text-danger font-weight-bold"> </span>
				</div>
        <Checkbox/><span style={{fontSize:"10px"}}>I Read and Agree to Terms and Conditions**</span> <br/>
        <div className="body__form-group">
				<input type="submit" name="submit" value="CREATE ACCOUNT" className="btn btn-success" autoComplete="off"/>
        </div>
        </form><br></br>        
                    </div>
          </div>   
          </div>      
    </>
  );
  
}

export default Crtacc
