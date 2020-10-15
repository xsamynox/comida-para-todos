/* Segunda sección de la vista Hazte Voluntario - Forma Parte*/

import React from 'react';
import Voluntario1 from '../images/Voluntario1.jpg';
import Voluntario2 from '../images/voluntario2.jpg'

const SectionVolunteer = () => {
    return (
      <section className="volunteer">
      <section className="textContainer-volunteer2">
          <h2>¡Forma Parte!¡Hazte Voluntario!</h2>
          <p className="paragraph3">
            Nuestro voluntariado busca personas que deseen ayudar y aportar a la comunidad
            se unan a nuestra fundación, para así llevar alimento de calidad a las personas
            que más lo necesiten. Comida para Todos, se encuentra participando en 12 Comunas
            y se han entregado más de 81.000 almuerzos desde Mayo, sumáte y sé parte de gran
            iniciativa, ¡Te esperamos!
          </p>
        </section>
          <div className="container-volunteer">
            <div className="container-volunteer1">
              <img src={Voluntario1} className="volunteer-img" alt="Voluntario1" />
            </div>
            <div className="containerGarden2">
              <img src={Voluntario2} className="volunteer-img" alt="Voluntario2" />
            </div>
        </div>
       
    </section>
  );
};

export default SectionVolunteer;