import React, { Fragment } from 'react';
import '../App.js';
import Header from '../components/Header';
import ImgPage from '../components/ImgPage'
import Footer from '../components/Footer'
import DonatePrice from '../components/Donate-price'
import OtherDonate from '../components/OtherDonate'
import CollabSection from '../components/CollabSection.jsx';

function Home() {
  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <body>
        <ImgPage />
        <div>
          <DonatePrice />
        </div>
        <div>
          <OtherDonate />
        </div>
        <div>
          <CollabSection />
        </div>
      </body>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  );
}
export default Home;
