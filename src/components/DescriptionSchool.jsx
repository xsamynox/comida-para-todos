import React, { Fragment } from 'react';
import Huertos from '../images/ProyEscuela/Huertos-Comunitarios.jpg';
import Talleres from '../images/ProyEscuela/img3.jpg';
import Centro from '../images/ProyEscuela/img2.jpg';
import Download from '../images/ProyEscuela/descargar.png';

const DescriptionSchool = () =>{
    return(
        <Fragment>
            <div className='cnt-UrbGard'>
                <div className='img-sch'>
            <img className='gardns' src={Huertos} alt="huertos"/>
            </div>
            <div className='text-projsch'>
            <p className='projschool'>Proyecto: Escuela</p>
            <p className='projschooltitle'>Huertos Comunitarios</p>
            <p className='p-s-txt'>Los Huertos Comunitarios son diseñados para poder educar en alimentación saludable, abastecer a la comunidad, generar encuentro e inclusión y reforzar soberanía y seguridad alimentaria como respuesta a la crisis socioambiental existente.</p>
            <div className='dwnld-btn'>
            <p className='download'>Descargar el documento completo</p>
            <button className='OneBtn'>Descargar Aquí
            <img className='dwnldarrow' src={Download} alt="descargar"/>
            </button>
            </div>
            </div>
            </div>

            <div className='cnt-workshop'>
            <div className='text-projsch'>
            <p className='projschool'>Proyecto: Escuela</p>
            <p className='projschooltitle'>Talleres de Cocina</p>
            <p className='p-s-txt'>Las Escuelas Comida para Todos, desarrollarán talleres de formación en cocina, con foco en los sectores más vulnerados por la actual crisis socioeconómica, destacando las mujeres e inmigrantes.</p>
            <div className='dwnld-btn'>
            <p className='download'>Descargar el documento completo</p>
            <button className='OneBtn'>Descargar Aquí
            <img className='dwnldarrow' src={Download} alt="descargar"/>
            </button>
            </div>
            </div>
            <div className='img-sch2'>
            <img className='gardns' src={Talleres} alt="talleres"/>
            </div>
            </div>

            <div className='cnt-UrbGard'>
                <div className='img-sch'>
            <img className='gardns' src={Centro} alt="huertos"/>
            </div>
            <div className='text-projsch'>
            <p className='projschool'>Proyecto: Escuela</p>
            <p className='projschooltitle'>Centro de Emprendimiento</p>
            <p className='p-s-txt'>Los Centro de Emprendimiento serán Espacios inclusivos que fomenten la colaboración y el empoderamiento de las personas, para el desarrollo de nuevas fuentes de ingresos y fortalecimiento comunitario.</p>
            <div className='dwnld-btn'>
            <p className='download'>Descargar el documento completo</p>
            <button className='OneBtn'>Descargar Aquí
            <img className='dwnldarrow' src={Download} alt="descargar"/>
            </button>
            </div>
            </div>
            </div>
       
      </Fragment>
    )
}
export default DescriptionSchool;