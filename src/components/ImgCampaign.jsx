import React, { Fragment } from 'react';
import '../styles/urbanGarden.css'


const ImgCampaign = () => {
    return (
    <Fragment>
        <div className='campaignImg'>
          <div className='gardenDiv'>
            <hr className='gardenLine' />
            <h1>Campañas</h1>
            <p className='text-garden'>
            Como fundación hemos realizado diversas campañas para así llamar a la comunidad a participar
             y hacerse parte de Comida para Todos, realizando su donación o sumándose como Voluntarios.
            Aquí encontrarás nuestra campaña actual y campañas cerradas que hemos realizado con anterioridad.
            </p>
            <div className='gardenButtons'>
             {/*  <BtnProject /> */}
            </div>
          </div>
        </div>
      </Fragment>
        
    );
};

export default ImgCampaign;