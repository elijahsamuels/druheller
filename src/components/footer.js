import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const copyrightDate = new Date().getFullYear();

const randomLinkGenerator = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 9);
    }
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
				<a href='https://www.facebook.com/dru.heller'>
				{/* <FontAwesomeIcon icon="fab fa-facebook-square" /> */}
				{/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}

					facebook
					</a>
			</div>
        <div align="center">© {copyrightDate} by 
            <a href='https://shibadeveloper.com'> Shiba</a> & <a href='https://www.elijahsamuels.com'>Samuels</a> <a href={randomLinkGenerator()}>Development</a> 
        </div>
    </div>
)

export default Footer;
