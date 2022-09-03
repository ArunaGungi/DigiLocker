import axios from 'axios';
import "../static/stylesheets/viewfiles.css";
import { Link, Route,Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UploadDocComp from './UploadDocComp';

const DisplayDocsComp = () => {

        const[files,setFile] = useState([]);
        const navigate = useNavigate();
        var filepath="";
        const uploadMoreDocs = () => {
            navigate('/upload');
        }
        var userEmail = window.localStorage.getItem("userEmail");
        let body = {
            email:userEmail
        }
        console.log("user Email id in Display Docs component : ",body);
        useEffect(() => {
            axios.post("http://localhost:4002/api/v1/getFile",body)
            .then((allFiles) => setFile(allFiles.data)) 
        },[])

        const deleteFile = (_id) => {
            axios.delete(`http://localhost:4002/api/v1/deleteFile/${_id}`).then(
                () => {
                  window.location.reload(false);
                }
              )
        }
    return (
        <>
        <nav>
          <ul>
          <li><a><Link to="/" className={"w3-bar-item w3-button w3-padding-large"}>HOME</Link></a></li>
          <li><a><Link to="/afterlogin" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>SERVICES</Link></a></li>
          <li><a><Link to="/about" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>ABOUT US</Link></a></li>
          <li><a><Link to="/logout" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>LOGOUT</Link></a></li>
          <p>Store your documents digitally</p>
          <li><a><Link to="/digilocker" className={"digilocker"}>DigiLocker</Link></a></li>          
          </ul>
        </nav>

        <h2 style={{textAlign:"center"}}>All uploaded files</h2>
        <table id="customers">
            <tr>
                <th>Filename</th>
                <th>Filepath</th>
                <th>Download</th>
                <th>Delete</th>
            </tr>
            <tbody>
            {files.map((file, key) => (
                filepath += file.filepath,
                <tr key={key}>
                    <td>{file.filename}</td>
                    <td>{file.filepath}</td>
                    <td><Link to={file.filepath} target="_blank" download className={"download_button"}>Download</Link></td>
                    <td><button type='button' name="delete" className={"delete_button"} onClick={() => deleteFile(file._id)}>Delete</button></td>
                </tr>
            ))}
            </tbody> 
        </table>
        <button type='button' name="upload" className={"upload_button"} onClick={uploadMoreDocs}>Upload More Files</button>
        
        <Routes>
            <Route path = '/upload' element={<UploadDocComp/>}></Route>
        </Routes>
        </>
        
    )
}

export default DisplayDocsComp;