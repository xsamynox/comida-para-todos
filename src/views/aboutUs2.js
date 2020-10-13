import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import AboutHeader from '../components/AboutHeader';
import FoodSecurity from '../components/FoodSecurity';
import Proposit from '../components/Proposit';
import Benef from '../components/Benef';

function AboutUs() {
  
    return(
        <Fragment>
            <Header />
            <AboutHeader />
            <FoodSecurity />
            <Proposit />
            <Benef />
            <Footer />
        </Fragment>
    )
}
export default withRouter(AboutUs);