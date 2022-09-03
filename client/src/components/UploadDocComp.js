import "../static/stylesheets/uploadfile.css";
import { Link, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DisplayDocsComp from "./DisplayDocsComp";
import { Routes } from "react-router-dom";

const UploadDocComp = () => {

    const navigate = useNavigate();

    const [file,setFile] = useState();
    const [filename, setFileName] =useState("");

    const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
    console.log(filename);

    const uploadFile = async () => { 
        const formData = new FormData();
        const userEmail = window.localStorage.getItem("userEmail");
        formData.append("file",file);
        formData.append("filename",filename); 
        formData.append("email",userEmail);

      try {
        await axios.post("http://localhost:4002/api/v1/uploadFile",formData)
        console.log("file uploaded successfully");
        window.alert("File uploaded successfully");
        navigate("/displayfiles");
      }
      catch(error) {
        console.log(error);
      }
    }

    return(
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
          <div className="form">
            <input type="file" id="file" onChange = {saveFile} multiple/>
            <p>Drag your files here or click in this area.</p>    
            <button type="submit" onClick={uploadFile}>Upload</button>
          </div>
      <Routes>
          <Route path="/displayfiles" element={<DisplayDocsComp/>}></Route>
      </Routes>
      </>

      
    )
    
}
export default UploadDocComp;