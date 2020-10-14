import React from 'react';
import descargar from '../images/transparency/descargar.png'

const ExpectedImpacts = () => {
  return (
    <section>
      <div className='expect-impact'>
        <h2 style={{ color: '#2B292D' }}>Índice de Impactos Esperados</h2>
        <div className='ctn-impact'>
          <div>
            <p className='number-impact1'>1500</p>
            <p className='font-impact'>Kg de comida recuperada</p>
          </div>
          <div>
            <p className='number-impact1'>40</p>
            <p className='font-impact'>Distribuidoras <br />en la Red</p>
          </div>
          <div>
            <p className='number-impact1'>4000</p>
            <p className='font-impact'>Hogares Donantes</p>
          </div>
          <div>
            <p className='number-impact1'>40</p>
            <p className='font-impact'>Comunidades Beneficiarias</p>
          </div>
        </div>
      </div >
      <div className='ctn-documents'>
        <h2>Descarga el documento completo</h2>
        <button className='volBtn'>Descarga aqui<img src={descargar} alt='' /></button>
      </div>
    </section>
  );
}
export default ExpectedImpacts;