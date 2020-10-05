import React from 'react';

const Payments = () => {
  return (
    <div className='cnt-payment'>
      <div className='ctn-pay '>
        <h2>Haz el cambio! Genera un<br /> Impacto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla. Aliquam arcu id sollicitudin amet.</p>
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
        <div className=''>
          <input className='other' type="text" placeholder='$ Otro' />
          <button className='volBtn'>Siguiente</button>
        </div>
      </div>

    </div>
  );
}

export default Payments;