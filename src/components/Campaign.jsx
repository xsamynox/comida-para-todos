import React from 'react';
import BtnVolunteer from './BtnVolunteer';
import BtnDonate from './BtnDonate'


const Campaign = () => {
  return (
    <section className='ctn-cmp'>
      <div>
        <h4>Campaña</h4>
        <h2>#Un18ParaTodos</h2>
        <p className='paragraph'>¡Celebremos juntos estas fiestas! Ayudemos a nuestra comunidad a tener un 18 digno y con comida de calidad, dona para un almuerzo asadero o súmate como voluntario en estas fiestas.</p>
        <div className='ctn-btns'>
          <BtnDonate className='separation' />
          <BtnVolunteer />
        </div>
      </div>
      <div className='ctn-video video640'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J-JuH8jwmHg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  );
}
export default Campaign;