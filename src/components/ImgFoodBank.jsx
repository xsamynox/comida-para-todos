import React from 'react';
import BtnDonate from './BtnDonate';

const ImgFoodBank = () => {
    return (
        <div className='img-foodbank'>
            <div className='firstDiv'>
                <hr className='firstLine' />
                <h4>Proyectos</h4>
                <h1>Banco de Alimentos</h1>
                <p className='text-initial'>
                    Desarrollamos el banco de alimentos para todos, basados en los principios de la logistica inversa, enfocado en los hogares como donantes y prestando servicios de RSE a las empresas distribuidoras de B2C/B2B de alimentos. <br /> <br />
                    Si quieres donar Alimentos dale click al botón Donar
                </p>
                <div style={{ marginTop: '15%' }}>
                    <BtnDonate />
                </div>
            </div>
        </div>
    )
}
export default ImgFoodBank;