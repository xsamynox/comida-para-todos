import React from 'react';
import PaymentsMethods from './PaymentsMethods';

const Payments = () => {
  return (
    <section className='cnt-payment'>
      <div className='ctn-pay '>
        <h2>Haz el cambio! Genera un impacto</h2>
        <p>Con tu donación estarás alimentando la felicidad de miles de personas en nuestro país que lo necesitan a través de un almuerzo solidario nutritivo y de calidad.<span className='span1'>¡Ayúdanos a combatir el hambre en Chile!</span></p>
      </div>

      <form className='ctn-pay pay ctn-pay2'>
        <div className='pay'>
          <div className='radio-btn'>
            <input type="radio" name="pay" value="Mensual" />
            <label htmlFor="Mensual"><p>Mensual</p></label>
          </div>
          <div className='radio-btn'>
            <input type="radio" name="pay" value="Solo-esta-vez" />
            <label htmlFor="Solo-esta-vez"><p>Sólo esta vez</p></label>
          </div>
        </div>

        <div className='pay'>
          <div className='radio-btn'>
            <input type="radio" value="3000" name="price" />
            <label htmlFor="3000"><p>$3000</p>1 Almuerzo</label>
          </div>
          <div className='radio-btn'>
            <input type="radio" value="15000" name="price" />
            <label htmlFor="15000"><p>$15000</p>5 Almuerzos</label>
          </div>
          <div className='radio-btn'>
            <input type="radio" value="30000" name="price" />
            <label htmlFor="30000"><p>$30000</p>10 Almuerzos</label>
          </div>
        </div>
        <div className='pay container-pay'>
          <div>
            <input className='other' type="text" placeholder='$ Otro' />
          </div>
          <div>
            <button className="volBtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Siguiente</button>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="payments">
              <PaymentsMethods />
            </div>
          </div>
        </div>
      </form>

    </section >
  );
}

export default Payments;