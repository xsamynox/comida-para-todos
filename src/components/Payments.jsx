import React from 'react';

const Payments = () => {
  return (
    <div className='cnt-payment'>
      <div className='ctn-pay '>
        <h2>Haz el cambio! Genera un<br /> Impacto</h2>
        <p>Con tu donación estarás alimentando la felicidad de miles de personas en nuestro país que lo necesitan a través de un almuerzo solidario nutritivo y de calidad.
            <span className='span1'>¡Ayúdanos a combatir el hambre en Chile!</span></p>
      </div>
      <div className='ctn-pay pay ctn-pay2'>
        <div className='pay'>
          <div className='radio-btn center'>
            <input type="radio" name="mensual" value="Mensual" />
            <label for="Mensual">Mensual</label>
          </div>
          <div className='radio-btn center'>
            <input type="radio" name="Solo-esta-vez" value="Solo-esta-vez" />
            <label for="Solo-esta-vez">Sólo está vez</label>
          </div>
        </div>

        <div className='pay'>
          <div className='radio-btn'>
            <input type="radio" name="mensual" value="Mensual" />
            <label for="Mensual">$3000 <br />1 Almuerzo</label>
          </div>
          <div className='radio-btn'>
            <input type="radio" name="Solo-esta-vez" value="Solo-esta-vez" />
            <label for="Solo-esta-vez">$15000 <br />5 Almuerzo</label>
          </div>
          <div className='radio-btn'>
            <input type="radio" name="Solo-esta-vez" value="Solo-esta-vez" />
            <label for="Solo-esta-vez">$30000 <br />10 Almuerzo</label>
          </div>
        </div>
        <div className='pay container-pay'>
          <div>
            <input className='other' type="text" placeholder='$ Otro' />
          </div>
          <div className='ctn-cmp'>
            <button className="volBtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Siguiente</button>
          </div>
          <div class="collapse" id="collapseExample">
            <div class="">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Payments;