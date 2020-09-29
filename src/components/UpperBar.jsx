import React from 'react';
import twitter from '../iconos/twitter.png';
import facebook from '../iconos/facebook.png';
import instagram from '../iconos/instagram.png';


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