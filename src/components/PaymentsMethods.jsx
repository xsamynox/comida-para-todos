import React from 'react';
import OnePay from '../images/iconos/onepay.png'
import Webpay from '../images/iconos/webpay.png'
import Match from '../images/iconos/mach.png'



const PaymentsMethods = () => {
  return (
    <div>
      <h2>Elige medio de pago</h2>
      <div className='pay'>
        <div className='pay'>
          <div className='radio-btn-pay'>
            <input type="radio" name="WebPay" value="WebPay" />
            <p>Pago con tarjeta de Débito o Crédito</p>
            <img className='img-pay' src={Webpay} alt="" />
          </div>
          <div className='radio-btn-pay'>
            <input type="radio" name="OnePay" value="OnePay" />
            <p>Pago con tarjeta de crédito sin cuotas</p>
            <img className='img-pay' src={OnePay} alt="" />
          </div>
        </div>
        <div className='pay'>
          <div className='radio-btn-pay'>
            <input type="radio" name="Match" value="Match" />
            <p>Pago a través de Match</p>
            <img className='img-pay' src={Match} alt="" />
          </div>
          <div className='radio-btn-pay'>
            <input type="radio" name="Transferencia" value="Transferencia" />
            <p>Transferencia Bancaria</p>
          </div>
        </div>
        <div className='btns-pay'>
          <button className="btn-cancel" type="button">Cancelar</button>
          <button className="volBtn" type="button">Donar</button>
        </div>
      </div>

    </div>
  );
}
export default PaymentsMethods;