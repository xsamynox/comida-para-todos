import React, { Component, Fragment } from 'react';
import '../App.js';
import Header from '../components/Header';
import ImgPage from '../components/ImgPage'
import Footer from '../components/Footer'
import DonatePrice from '../components/Donate-price'
import OtherDonate from '../components/OtherDonate'
<<<<<<< HEAD
import CollabSection from '../components/CollabSection.jsx';
=======
import Carrousel from '../components/Carrousel';
import Insta from '../components/Instagram';
>>>>>>> a0fcc4ad6ea2010ac6415976f9b3c0f2b62f54bc

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
        <div className='container-otherDnt'>
          <Carrousel />
          <OtherDonate />
        </div>
<<<<<<< HEAD
        <div>
          <CollabSection />
        </div>
=======
        <Insta />
>>>>>>> a0fcc4ad6ea2010ac6415976f9b3c0f2b62f54bc
      </body>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  );
}
export default Home;
