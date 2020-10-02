import React, { Fragment } from 'react';
import BtnVolunteer from './BtnVolunteer';
import BtnKnow from './BtnKnow';

const ImgPage = () => {

  return (
    <Fragment>
      <div className='firstImg'>
        <div className='firstDiv'>
          <hr className='firstLine' />
          <p>Sobre Nosotros</p>
          <h1>Comida para todos</h1>
          <p className='text-initial'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis posuere sit sapien, ut suspendisse cursus. Congue phasellus tincidunt posuere sit fringilla. Aliquam arcu id sollicitudin amet. </p>
        </div>
        <div className='textButtons'>
          <BtnVolunteer />
          <BtnKnow />
        </div>
      </div>
    </Fragment>
  )
}
export default ImgPage;