import React from 'react';
import CountUp from 'react-countup';


const Impacto = () => {
  return (
    <div className='img-impact'>
      <h2 className='impact'>Impacto</h2>
      <div className='ctn-impact' style={{ color: "white" }}>
        <div>
          <CountUp className='number-impact' start={-100} end={46} duration={6} suffix='M' />
          <p className='letter-impact'>Donaciones</p>
        </div>
        <div>
          <CountUp className='number-impact' end={160} duration={6} start={-100} suffix='K' />
          <p className='letter-impact'>Almuerzos<br /> Recaudados</p>
        </div>
        <div>
          <CountUp className='number-impact' end={72} duration={6} start={-100} />
          <p className='letter-impact'>Puestos<br /> de Trabajo</p>
        </div>
        <div>
          <CountUp className='number-impact' end={12} duration={6} start={-100} />
          <p className='letter-impact'>Comunas</p>
        </div>
      </div>
    </div >
  );
}
export default Impacto;