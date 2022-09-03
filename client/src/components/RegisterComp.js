import '../static/stylesheets/register.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginComp from './LoginComp';
import { Link } from 'react-router-dom';

export default function RegisterComp() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const [cpassword, setPassword] = useState({
        confirmPassword:""
    })
    
    const loginUser = () => {
        navigate('/login');
    }
    const registerUser = () => {
            
            if(user.password === cpassword.confirmPassword) {
                console.log(user.password, cpassword.confirmPassword);
                axios.post('http://localhost:4002/api/v1/register/',user)
            .then(() => {
                console.log(user);
                window.alert("Registered successfully");
                navigate('/login');
            })
            .catch((error) => console.log(error));
            }
            else {
                window.alert("password mismatch!");
            }     
    }
    return (
        <>
        <nav>
		<ul>
            <li><a><Link to="/" className={"w3-bar-item w3-button w3-padding-large"}>HOME</Link></a></li>
			<li><a><Link to="/services" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>SERVICES</Link></a></li>
			<li><a><Link to="/about" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>ABOUT US</Link></a></li>
			<li><a><Link to="/signup" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>SIGN UP</Link></a></li>
			<li><a><Link to="/login" className={"w3-bar-item w3-button w3-padding-large w3-hide-small"}>SIGN IN</Link></a></li>
            <li><a><Link to="/digilocker" className={"digilocker"}>DigiLocker</Link></a></li>

			<p>Store your documents digitally</p>
		</ul>
		</nav>

        <div className={"container"}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" 
            value={user.email} onChange = { (e) => {
                setUser({...user, email:e.target.value})
            }}
            required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" 
            value={user.password} onChange = { (e) => {
                setUser({...user, password:e.target.value})
            }}
            required/>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" 
            value={cpassword.confirmPassword} onChange = { (e) => {
                setPassword({...cpassword, confirmPassword:e.target.value})
            }}
            required/>
            
            <button type="submit" className={"registerbtn"} onClick={registerUser}>Register</button>

            <p className={"signin"}>Already have an account? <a href="#" onClick={loginUser}>Sign in</a>.</p>
        </div>    

    <Routes>
        <Route path="/login" element={<LoginComp/>} />
    </Routes>
    </>
    )
}
