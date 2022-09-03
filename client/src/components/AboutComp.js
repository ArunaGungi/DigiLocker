import '../static/stylesheets/about.css';
import { Link } from 'react-router-dom';

const AboutComp = () => {

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
        <div className={"root"}>
        <div className={"card1"}>
        <h2>What is DigiLocker?</h2>
        <p>Digilocker is designed to provide users the flexibility to store documents 
            digitally with OTP based authentication system to make sure the right person 
            has right provision to access their files.
        </p>
        <p><strong>Note:</strong>This system is a mimic of the original DigiLocker application
        initiative taken by Indian government.
        </p>
        <p>An act to implement the simple functionalities of the original DigiLocker</p>
        </div>
        <div className={"card2"}>
        <header>
        <h2>Benefits of DigiLocker</h2>
        </header>
        <section>
        <article>
            <p>1.You can access documents anytime and anywhere</p>
            <p>2. Secure access is provided with OTP based authentication</p>
            <p>3. When you register yourself with a valid email Id, the application will automatically 
                send the OTP to the registered one only, unlike asks you to again provide
                any email Id </p>
        </article>
        </section>
        </div>
        <div className={"card3"}>
        <footer>
        <h2>How is this different from other apps?</h2>
            <p>Well, if someone hacks your username and password details, they can easily login and access your documents or any important information.</p>
            <p>But, digilocker will only let you access files when OTP is provided sent to your registered email.
            <p>All the functionalities are developed to have a safe and secure place to store the documents</p>
            </p>
        </footer>
        </div>
        </div>
    </>
    )
}

export default AboutComp;