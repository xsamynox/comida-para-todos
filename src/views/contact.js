import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ContactImg from '../components/ContactImg';


function Contact() {
  
    return(
        <Fragment>
            <Header />
            <ContactImg />
            <div className="contactForm">
    {/* <div className="row card-panel">
    <form className="col s6">
    <label>Browser Select</label>
  <select class="browser-default">
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Sobre voluntariado</option>
    <option value="2">Sobre donaciones</option>
    <option value="3">Sobre otras formas de ayudar</option>
    <option value="4">Nosotros</option>
    <option value="5">Otro motivo</option>
  </select>
    {/* <div className="input-field col s6">
    <select>
      <option value="" disabled selected>Motivo</option>
      <option value="1">Sobre voluntariado</option>
      <option value="2">Sobre donaciones</option>
      <option value="3">Sobre otras formas de ayudar</option>
      <option value="4">Nosotros</option>
      <option value="5">Otro motivo</option>
    </select>
    <label>Motivo</label>
  </div> */}
  {/* <br/>
  <br/>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate"/>
          <label for="icon_prefix">Nombre Completo</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_email" type="tel" className="validate"/>
          <label for="icon_email">Correo Electrónico</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate"/>
          <label for="icon_telephone">Teléfono</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">Comentarios</label>
        </div>
      </div>
    </form>
  </div> */}
            </div>
            <Footer />
        </Fragment>
    )
}
export default withRouter(Contact);