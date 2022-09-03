import '../static/stylesheets/home.css';
import img from '../static/images/cards/web_2_en.jpg';
import registerIcon from '../static/images/cards/register_icon.jpg';
import otpicon from '../static/images/cards/OTP_Icon.jpg';
import arrowicon from '../static/images/cards/Arrow_Icon.png';
import downloadicon from '../static/images/cards/Download_Icon.webp';
import {Link} from 'react-router-dom';

const HomeComp = () => {
    return (
        <div className={"homepage"}>
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
		<img src={img} width={1700} height={500}></img>
		<div className={"section2"}>
			<h2 className={"steps"}>Getting started is easy and quick</h2>
			<img src={registerIcon} className={"registerIcon"}></img>
			<img src={arrowicon} className={"arrowicon"}></img>
			<img src={otpicon} className={"otpicon"}></img>
			<img src={arrowicon} className={"arrowicon"}></img>
			<img src={downloadicon} className={"downloadicon"}></img>
	</div>
	</div>
    )
}

export default HomeComp;