import React from 'react';
import twitter from '../images/iconos/twitter.png';
import facebook from '../images/iconos/facebook.png';
import instagram from '../images/iconos/instagram.png';


const UpperBar = () => {

    return (
        <div className="headerBar">
            <img src={instagram} className="instagram" alt="instagram" />
            <img src={facebook} className="facebook" alt="facebook" />
            <img src={twitter} className="twitter" alt="twitter" />

        </div>
    )

}

export default UpperBar;