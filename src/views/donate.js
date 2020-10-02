import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
/* import Header from '../components/Header.jsx';
import Footer from '../components/Footer'; */
import UrbanGardensForm from '../components/UrbanGardensForm.jsx';


function Donate () {

    return(
        <Fragment>
            {/* <Header /> */}
            <UrbanGardensForm />
            {/* <Footer /> */}
        </Fragment>
    )
}
export default withRouter(Donate);