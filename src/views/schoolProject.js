import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import SPHeader from '../components/SchoolPHeader';
import ProblSchool from '../components/ProblematicSchool'
import DescriptionSchool from '../components/DescriptionSchool';

function SchoolProj() {
  
    return(
        <Fragment>
            <Header />
            <SPHeader />
            <ProblSchool />
            <DescriptionSchool />
            <Footer />
        </Fragment>
    )
}
export default withRouter(SchoolProj);