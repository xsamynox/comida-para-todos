import React from 'react';
import desperdicios from '../images/FoodBank/desperdicios.jpg';
import porcentaje1 from '../images/FoodBank/porcentaje1.png';
import porcentaje2 from '../images/FoodBank/porcentaje2.png';
import descargar from '../images/Transparency/descargar.png'

const TroublesomeFoodBank = () => {
  return (
    <section>
      <div className='ctn-troublesome'>
        <img className='img-desperdicios' src={desperdicios} alt='desperdicios' />
        <div>
          <h2>Problemática</h2>
          <div className='ctn-arrow'>
            <p><strong>Cada vez son más los alimentos que son desperdiciados por en el mundo por los humanos, donde:</strong></p>
            <h3>Más de <span className='font-span'>1.300.000 millones</span> de toneladas de Alimentos</h3>
            <p>Es decir, un tercio de la producción global.</p>
          </div>
        </div>
      </div>
      <div className='ctn-porcentaje'>
        <img className='img-porcentaje' src={porcentaje1} alt='porcentaje' />
        <img className='img-porcentaje' src={porcentaje2} alt='porcentaje' />
      </div>
      <div className='line-blue'>
        <h4>Trabajamos para <span className='font-span'>REDUCIR</span> el Hambre, <span className='font-span'>MEJORAR</span> la Nutrición y <span className='font-span'>EVITAR</span> el Despercicio de Alimentos.</h4>
      </div>
    </section>
  );
}
export default TroublesomeFoodBank;