import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ImgFoodBank from '../components/ImgFoodBank.jsx';
import TroublesomeFoodBank from '../components/TroublesomeFoodBank.jsx';
import FoodBankWorkModel from '../components/FoodBankWorkModel.jsx';
import ExpectedImpacts from '../components/ExpectedImpacts.jsx';
import '../styles/foodbank.css'

function Projects() {

    return (
        <Fragment>
            <Header />
            <ImgFoodBank />
            <TroublesomeFoodBank />
            <FoodBankWorkModel />
            <ExpectedImpacts />
            <Footer />
        </Fragment>
    )
}
export default withRouter(Projects);