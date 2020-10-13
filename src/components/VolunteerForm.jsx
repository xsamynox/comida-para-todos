import React from 'react';
import '../styles/UrbanGardensForm.css';
import Plant from '../images/iconos/cil_plant.png';
import Avatar from '../images/iconos/user-outlined.png';
import Mail from '../images/iconos/carbon_email.png';
import Phone from '../images/iconos/clarity_phone-handset-line.png';
import Direction from '../images/iconos/map-pin.png';
import Modal from '../images/HazteVol/unnamed 1.png';
import close from '../images/iconos/close.png';
import instagram from '../images/iconos/instagram.png';
import facebook from '../images/iconos/facebook.png';
import twitter from '../images/iconos/twitter.png';
import logo from '../images/Donate-Food/logo.png';


const VolunteerForm= () => {
    const [meters, setMeters] = React.useState('');
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [direction, setDirection] = React.useState('');

    const saveData = (e) => {
        e.preventDefault()

        if (!meters.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!name.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!mail.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!phone.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!direction.trim()) {
            console.log('Campo vacío')
            return
        }

        // Si los campos estan correctos, se procesan los datos

        console.log('Procesando Datos... ' + meters + name + mail + phone + direction)
        e.target.reset()
        setMeters('')
        setName('')
        setMail('')
        setPhone('')
        setDirection('')

    }

    return (
        <div className="form">
            <form onSubmit={saveData} className="form-container">
                <div className="title-container">
                    <h1 className="font-title">Completa tus Datos</h1>
                </div>
                <div className="items">
                    <img src={Plant} className="icons" alt="icon" />
                    <label className='lbl-form' for="meters">Nombre Completo<span className='cat'>*</span></label>
                    <input
                        type="text"
                        placeholder="Ej: Camila Fernanda Sepulveda Carrasco"
                        className="space"
                        style={{ fontSize: '0.75em' }}
                        onChange={(e) => setMeters(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Avatar} className="icons" /* style={{ width: "25px", height:"25px" }} */ alt="" />
                    <label className='lbl-form' for="name">Edad<span className='cat'>*</span></label>
                    <input
                        type="text"
                        placeholder="Ej: 23 años"
                        className="space"
                        style={{ fontSize: '0.75em' }}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Mail} className="icons" alt="" />

                    <label className='lbl-form' for="mail">Correo Electrónico<span className='cat'>*</span></label>
                    <input

                        type="email"
                        placeholder="Ej: camila.sepulveda@gmail.com"
                        className="space"
                        style={{ fontSize: '0.75em' }}
                        onChange={(e) => setMail(e.target.value)}
                    /></div>
                <div className="items">
                    <img src={Phone} className="icons" alt="" />
                    <label className='lbl-form' for="phone">Teléfono<span className='cat'>*</span></label>
                    <input
                        type="text"
                        placeholder="Ej: +569 39425756"
                        className="space"
                        style={{ fontSize: '0.75em' }}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Direction} className="icons" alt="" />
                    <label className='lbl-form' for="direction">Dirección<span className='cat'>*</span></label>
                    <input
                        type="text"
                        placeholder="Ej: Litoral #320, Peñalolen"
                        className="space"
                        style={{ fontSize: '0.75em' }}
                        onChange={(e) => setDirection(e.target.value)}
                    />
                </div>
                <div className="items">
                    {/* <button className="formButton" type="submit">Siguiente</button> */}
                    <button className="next-button" type="submit" data-toggle="modal" data-target="#exampleModal">Siguiente</button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <img className='img-modal' src={Modal} alt="gracias por aportar" />
                                <div className='ctn-modal'>
                                    <a href className='close-modal' data-dismiss="modal"><img src={close} alt=""></img></a>
                                    <div>
                                        <img className='logo-cpt' src={logo} alt='logo-cpt' />
                                    </div>
                                        <div className='margin-modal'>
                                            <h2>¡Gracias, futuro voluntario!</h2>
                                            <p><strong>Nos comunicaremos contigo por medio de tu correo para que formes parte de nuestro equipo. </strong></p>
                                            <div className='rrss'>
                                                <h4>Comparte en tus Redes Sociales</h4>
                                                <a href="https://www.instagram.com/comida_para_todos_cl/" target="_blank" rel="noopener noreferrer">
                                                    <img src={instagram} className="instagram" alt="instagram " />
                                                    </a>
                                                    <a href="https://www.facebook.com/Comida-para-Todos-100133851719302" target="_blank" rel="noopener noreferrer">
                                                        <img src={facebook} className="facebook" alt="logo-facebook" />
                                                        </a>
                                                        <a href="https://twitter.com/ChileComida" target="_blank" rel="noopener noreferrer">
                                                            <img src={twitter} className="twitter" alt="logo-twitter" />
                                                        </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default VolunteerForm;
