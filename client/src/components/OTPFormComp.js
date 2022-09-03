import { Route, Routes, useNavigate } from "react-router-dom";
import UploadDocComp from "./UploadDocComp";
import axios from "axios";
import { Link } from "react-router-dom";
import '../static/stylesheets/otp.css';
import { useEffect, useState } from "react";
import DisplayDocsComp from "./DisplayDocsComp";

const OTPFormComp = () => {

  const navigate = useNavigate();
  const [OTP,setOTP] = useState({
    otp:"",
    OTPfromServer:""
  });
  
  useEffect( () => {  
    async function sendOTP() {
      console.log("Entered sendOTP function");
      let userEmail = window.localStorage.getItem("userEmail");
      let otpForm = {
        "email":userEmail
      }
      console.log("User registered email id:",userEmail); 
      var result = await axios.post("http://localhost:4002/api/v1/otp", otpForm);
      console.log("Response:",result.data);

      setOTP({...OTP, OTPfromServer:result.data.otp})
      console.log("OTP from email: "+OTP.OTPfromServer);
    }
    sendOTP();
  },[1])
  
  const validateOTP = () => {
      try {

        var otpfromForm = OTP.otp;
        
        otpfromForm=otpfromForm.toString();
        
        console.log("OTP from form: "+otpfromForm);
        console.log("OTP from email: "+OTP.OTPfromServer);

        if(otpfromForm == OTP.OTPfromServer) {
            window.alert("OTP Validated successfully");
            var redirect = window.localStorage.getItem("redirect");
            if(redirect === "upload") 
              navigate('/upload');
            else if(redirect === "download")
              navigate('/dowload');
            else if(redirect === "view")
              navigate('/displayfiles');
        }
        else {  
          window.alert("OTP Validation Failed");
        } 
      }
      catch (error) {
        console.log("Error occurred in OTP form comp:",error);
      }
  }
    
    return (
      <>
      <nav>
          <ul>
          <li><a><Link to="/" className={"w3-bar-item w3-button w3-padding-large"}>HOME</Link></a></li>
          <li><a><Link to="/services" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>SERVICES</Link></a></li>
          <li><a><Link to="/about" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>ABOUT US</Link></a></li>
          <li><a><Link to="/logout" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>LOGOUT</Link></a></li>
          <p>Store your documents digitally</p>
          <li><a><Link to="/digilocker" className={"digilocker"}>DigiLocker</Link></a></li>          
          </ul>
      </nav>
        <div className={"container"}>
            <label for="otp"><center><b>Enter the OTP sent to your registered email id</b></center></label>
            <input type="text" placeholder="Enter OTP" name="otp" id="otp" 
            value={OTP.otp} onChange = { (e) => {
                setOTP({...OTP, otp:e.target.value})
            }}
            required/><button type="submit" className={"otpbutton"} onClick={validateOTP}>Send</button>
        </div>
      <Routes>
          <Route path="/upload" element={<UploadDocComp/>}></Route>
          <Route path="/displayfiles" element={<DisplayDocsComp/>}></Route>
      </Routes>  
      </>
      
    )
}

export default OTPFormComp;