import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';

function Contact() {

  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  )
}
export default withRouter(Contact);