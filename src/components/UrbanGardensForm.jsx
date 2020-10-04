import React from 'react';
import '../styles/UrbanGardensForm.css';
import Plant from '../images/iconos/cil_plant.png';
import Avatar from '../images/iconos/ant-design_user-outlined.png';
import Mail from '../images/iconos/carbon_email.png';
import Phone from '../images/iconos/clarity_phone-handset-line.png';
import Direction from '../images/iconos/map-pin.png';

const UrbanGardenFrom = () => {
    const [meters, setMeters] = React.useState('');
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [direction, setDirection] =React.useState('');

    const saveData = (e) => {
        e.preventDefault()

        if(!meters.trim()){
            console.log('Campo vacío')
            return
        }

        if(!name.trim()){
            console.log('Campo vacío')
            return
        }

        if(!mail.trim()){
            console.log('Campo vacío')
            return
        }

        if(!phone.trim()){
            console.log('Campo vacío')
            return
        }

        if(!direction.trim()){
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
        <div className="form-container">
        <div className="title-container">
        <h1 className="font-title">Completa tus Datos</h1>
        </div>
            <form onSubmit={ saveData } className="form">
            <img src={ Plant } className="icons"
                /* style={{ left: "9.15%",
                         right: "85.13%",
                         top: "18.91%",
                         Bottom: "76.22%"}}  */alt="icon" />
                <label for="meters">Metros de Terreno a Donar</label>
                <input
                type="text"
                placeholder="Ej: 5m2"
                className="meters"
                onChange={(e) =>setMeters(e.target.value)}
                />
                 <hr />
                <img src={ Avatar } className="icons" alt="" />
                <label for="name">Nombre Completo</label>
                <input
                type="text"
                placeholder="Ej: Camila Fernanda Sepúlveda Carrasco"
                className="name"
                onChange={(e) =>setName(e.target.value)}
                />
                <hr />
                <img src={ Mail } className="icons" alt="" />
                <label for="mail">Correo Electrónico</label>
                <input
                type="email"
                placeholder="Ej: camila.sepulveda@gmail.com"
                className="mail"
                onChange={(e) =>setMail(e.target.value)}
                />
                <hr />
                <img src={ Phone } className="icons" alt="" />
                <label for="phone">Teléfono</label>
                <input
                type="tel"
                placeholder="Ej: +569 39425756"
                className="phone"
                onChange={(e) =>setPhone(e.target.value)}
                />
                <hr />
                <img src={ Direction } className="icons" alt="" />
                <label for="direction">Dirección</label>
                <input
                type="text"
                placeholder="Ej: Litoral #320, Peñalolen"
                className="direction"
                onChange={(e) =>setDirection(e.target.value)}
                />
                <hr />
                <input
                type="submit"
                value="Siguiente"/>
            </form>
        </div>

        );
  };
  
  export default UrbanGardenFrom;