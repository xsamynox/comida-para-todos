import React from 'react';
import twitter from '../images/iconos/twitter.png';
import facebook from '../images/iconos/facebook.png';
import instagram from '../images/iconos/instagram.png';


const UpperBar = () => {

    return (
        <div className="headerBar">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="instagram" alt="instagram " />
          </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="facebook" alt="logo-facebook" />
          </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="twitter" alt="logo-twitter" />
          </a>

        </div>
    )

}

export default UpperBar;