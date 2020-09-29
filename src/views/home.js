import React, { Fragment } from 'react';
import '../App.js';
import Header from '../components/Header';
import Footer from '../components/Footer'

function Home() {
  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>

  );
}
export default Home;
