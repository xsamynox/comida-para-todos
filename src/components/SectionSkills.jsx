import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SkillImg from '../images/DonaHabilidad/Portada.jpg';


const SectionSkills = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
         {/* <div className="CollaborationSection"> */}
         <div className="containerGarden">
         <img src={SkillImg} className="garden" alt="Huertos Comunitarios" />
         </div>
         <div className="textContainer">
         <p>Conoce más sobre el Proyecto</p>
          <h2>Huertos Comunitarios</h2>
          <h2 className="collabTitle">Colaboradores</h2>
          <p className="paragraph">
            <strong>Comida para Todos</strong> Los Huertos Comunitarios son diseñados con el próposito de poder educar sobre alimentación saludable,
                                                abastecer a la comunidad, generar encuentro e inclusión y seguridad alimentaria como respuesta a la crisis socioambiental existente.
          </p>
          <Router>
            <Link to='/donate'>
              <p className='read-more'>Leer Más</p>
            </Link>
          </Router>
        </div>
      {/* </div> */}
    </section>
  );
};

export default SectionSkills;















