import React from 'react';
import charts from '../images/Transparency/charts.png';
import descargar from '../images/Transparency/descargar.png';
import details from '../images/FoodBank/detailscharts.png';

const Distribution = () => {
  return (
    <section>
      <div className='section-distribution'>
        <div className='ctn-distribution'>
          <h4>Distribución</h4>
          <h2>Costos de la donación</h2>
          <p><strong>El 65% de los recursos de la Fundación</strong> se destinan a los Restaurantes, los que se encargan de realizar las comidas, apadrinar  comunidades vunerables entregándoles capacitaciones, además de compartir buenas prácticas sobre alimentación saludable.</p>
          <img style={{ marginTop: '3%' }} src={details} alt='detalles gráfica' />
        </div>
        <div>
          <img className='charts' src={charts} alt='grafica' />
        </div>
      </div>
      <div className='ctn-documents'>
        <h2>Descarga el documento completo</h2>
        <button className='volBtn'>Descarga aqui<img src={descargar} alt='' /></button>
      </div>
    </section>
  );
}
export default Distribution;