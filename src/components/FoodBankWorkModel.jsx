import React from 'react';
import house from '../images/FoodBank/casa.png';
import shipping from '../images/FoodBank/envios.png';
import transport from '../images/FoodBank/transporte.png';
import olla from '../images/FoodBank/olla.png';
import family from '../images/FoodBank/familia.png';
import arrow from '../images/transparency/arrow.png';

const FoodBankWorkModel = () => {
  return (
    <div className='section-transparency1'>
      <h2>Modelo de Trabajo</h2>
      <div className='ctn-transparency text-work'>
        <div>
          <img className='icon-trn1' src={house} alt='Donaciones web' />
          <p><strong>Entrega de Alimentos</strong></p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work1' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn1' src={shipping} alt='Donaciones' />
          <p><strong>Recibimos donaciones</strong></p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work1' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn1' src={transport} alt='Gorro chef' />
          <p><strong>Se transportan a  ollas Comunes</strong></p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work1' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn1' src={olla} alt='Transportes' />
          <p><strong>Se cocinan los Alimentos</strong></p>
        </div>
        <div className='ctn-arrow'>
          <img className='arrow-work1' src={arrow} alt='flecha' />
        </div>
        <div>
          <img className='icon-trn1' src={family} alt='Familia' />
          <p><strong>Se entregan a las Familias</strong></p>
        </div>
      </div>
    </div>
  );
}
export default FoodBankWorkModel;