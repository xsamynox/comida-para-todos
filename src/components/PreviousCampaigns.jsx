import React, { Fragment } from 'react';
import Video from '../images/Campañas/video.mp4';
import CarrouselCamp from './CarrouselCamp';

/* import ChocolatEggs from '../images/Campañas/SemanaSanta.png';
import Mother from '../images/Campañas/DiaMadre.png'; */

const PreviousCampaigns = () => {

    return (
        <Fragment>
            <div className='ctn-campaigns'>
        <video width="1100">
            <source src={Video} type="video/mp4"/>
        </video>
        </div>
            <div className='previousCampaigns'>
                <h2>Campañas Anteriores</h2>
            </div>
            <div className='container-camp'>
                <CarrouselCamp />
            {/* <img src={ChocolatEggs} className="camfimg" alt="Beneficiarios" />
            <img src={Mother} className="camfimg" alt="Beneficiarios" /> */}
            </div>
            </Fragment>


    );
}

export default PreviousCampaigns;