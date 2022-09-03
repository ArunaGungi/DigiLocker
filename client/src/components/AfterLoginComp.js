import '../static/stylesheets/services.css';
import uploadimg from '../static/images/cards/content.jpg';
import downloadimg from '../static/images/cards/Download.21144315_std.jpg';
import viewimg from '../static/images/cards/view.jpg';

import {Link, useNavigate} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import OTPFormComp from './OTPFormComp';

export const AfterLoginComp = (res) => {
    console.log(res);
    const navigate = useNavigate();

    const getUploadOTP = () => {
      let status = window.localStorage.getItem("isLoggedIn");
      console.log(status);
      if(status==="true") {
        navigate("/otp");
        window.localStorage.setItem("redirect","upload");
      }
      else {
        navigate('/login');
        window.localStorage.setItem("redirect","login");
      }
    }
    const getDownloadOTP = () => {
      let status = window.localStorage.getItem("isLoggedIn");
      if(status==="true") {
        navigate("/otp");
        window.localStorage.setItem("redirect","download");
      }
      else {
        navigate('/login');
        window.localStorage.setItem("redirect","login");
      }
    }
    const getViewOTP = () => {
      let status = window.localStorage.getItem("isLoggedIn");
      if(status==="true") {
        navigate("/otp");
        window.localStorage.setItem("redirect","view");
      }
      else {
        navigate('/login');
        window.localStorage.setItem("redirect","login");
      }
    }
    return (
      <div className={"root"}>
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
        
          <div className={"card1"} style={{"column-gap": "40px" }}>
                <img src={uploadimg} alt="Avatar" width={300} height={300}></img>
                    <div className={"container1"}>
                      <h4><b>John Doe</b></h4> 
                      <button id="upload" onClick={getUploadOTP}>Upload your documents</button> 
                    </div>
                </div>
                <div className={"card2"}>
                <img src={downloadimg} alt="Avatar"  width={300} height={300}></img>
                    <div className={"container2"}>
                      <h4><b>John Doe</b></h4> 
                      <button id="download" onClick={getDownloadOTP}>Download your documents</button> 
                    </div>
                </div>
                
                <div className={"card3"}>
                <img src={viewimg} alt="Avatar"  width={300} height={300}></img>
                    <div className={"container3"}>
                      <h4><b>John Doe</b></h4> 
                      <button id="view" onClick={getViewOTP}>View your documents</button> 
                    </div>
          </div>
    <Routes>
      <Route path="/otp" element = {<OTPFormComp/>}></Route>
    </Routes>
  </div>
    )
}
