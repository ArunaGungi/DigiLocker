import '../static/stylesheets/register.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import RegisterComp from './RegisterComp';
import { AfterLoginComp } from './AfterLoginComp';

export default function LoginComp() {
    
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4002/api/v1/login')
        .then((allUsers) => {
            setUsers(allUsers.data)
        })
    },[])

    console.log(users);

    const register = () =>{
        navigate('/signup');
    }
    const checkUser = () => {
        let found=0;
        users.map((eachUser) => {
            if(found!==1) {
                if(eachUser.email === user.email && eachUser.password === user.password) {
                    found=1;
                }
                else {
                    found=0;
                }
            }
        });
        if(found === 1) {
            
            window.alert("Valid credentails"); 
            window.localStorage.setItem("userEmail",user.email);
            window.localStorage.setItem("isLoggedIn",true);
            navigate('/afterlogin');
        }
        else   {
            window.localStorage.setItem("userEmail","");
            window.localStorage.setItem("isLoggedIn",false);   
            window.alert("InValid credentails"); 
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
            <h1>Login</h1>
            <p>Please fill in this form to login to your account.</p>
            <hr></hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" onChange={
                (e) => {
                    setUser({...user, email:e.target.value})
                }
            }
            required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={
                (e) => {
                    setUser({...user, password:e.target.value})
                }
            } 
            required/>

            <hr></hr>
            <button type="submit" class="registerbtn" onClick={checkUser}>Login</button>
        <p>Don't have an account? <a href="#" onClick={register}>Sign up</a>.</p>
        </div>    
    <Routes>
      <Route path="/afterlogin" element = {<AfterLoginComp/>}></Route>
      <Route path="/signup" element={<RegisterComp/>}></Route>
    </Routes>

    </>
    
    )
}
