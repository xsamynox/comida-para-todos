import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/UrbanGardensForm.css';
import UrbanGardenForm from '../components/UrbanGardensForm'

function UrbanGardens() {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div>
                <UrbanGardenForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default UrbanGardens;
