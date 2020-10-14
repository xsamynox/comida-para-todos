import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ImgCampaign from '../components/ImgCampaign.jsx';
import SecondSeCamp from '../components/SecondSeCamp.jsx';
import PreviousCampaigns from '../components/PreviousCampaigns.jsx';


function Campaigns() {

    return(
        <Fragment>
            <Header />
            <ImgCampaign />
            <SecondSeCamp />
            <PreviousCampaigns />
            <Footer />
        </Fragment>
    )

}
export default withRouter(Campaigns);