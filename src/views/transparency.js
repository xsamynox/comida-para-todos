import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/transparency.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ImgTransparency from '../components/ImgTransparency.jsx';
import WorkModel from '../components/WorkModel';
import Capabilities from '../components/CapabilitiesSection.jsx';
import Distribution from '../components/Distribution.jsx'

function Transparency() {
    return (
        <Fragment>
            <Header />
            <ImgTransparency />
            <WorkModel />
            <Capabilities />
            <Distribution />
            <Footer />
        </Fragment>
    );
}
export default withRouter(Transparency);