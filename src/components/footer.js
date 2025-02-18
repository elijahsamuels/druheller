import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const copyrightDate = new Date().getFullYear();

const randomLinkGenerator = () => {
	const randomNumber = () => Math.floor(Math.random() * 9)
	let shiba = 'https://shibadeveloper.com'
	let samuels = 'https://www.elijahsamuels.com'
	return randomNumber() < 5 ? shiba : samuels;
}

const Footer = () => (
	<div className="footer" style={{ 
			justifyContent: 'space-evenly',
			paddingTop: '10px',
	}}>

		<div align="center">

			<a href='https://www.facebook.com/dru.heller' className="social-icons"><p hidden={true}>Facebook</p><FaFacebookSquare className="social-icons"/></a>
			<a href='https://www.youtube.com/results?search_query=dru+heller' className="social-icons"><p hidden={true}>YouTube</p><FaYoutube className="social-icons" /></a>

		</div>
			<div align="center" >© {copyrightDate} by 
					<a href='https://shibadeveloper.com' className="menu-link"> Shiba</a> & <a href='https://www.elijahsamuels.com' className="menu-link">Samuels</a> <a href={randomLinkGenerator()} className="menu-link">Development</a> 
			</div>
	</div>
)

export default Footer;
