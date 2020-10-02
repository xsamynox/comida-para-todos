import React, { Component, Fragment } from 'react';
import '../App.js';
import Header from '../components/Header';
import ImgPage from '../components/ImgPage'
import Footer from '../components/Footer'
import DonatePrice from '../components/Donate-price'
import OtherDonate from '../components/OtherDonate'
import CollabSection from '../components/CollabSection.jsx';
import Carrousel from '../components/Carrousel';
import Insta from '../components/Instagram';

function Home() {
  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div>
        <ImgPage />
        <div>
          <DonatePrice />
        </div>
        <div className='container-otherDnt'>
          <Carrousel />
          <OtherDonate />
        </div>
        <div>
          <CollabSection />
        </div>
        <Insta />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  );
}
export default Home;
