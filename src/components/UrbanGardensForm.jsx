import React from 'react';
import '../styles/UrbanGardensForm.css';
import Plant from '../images/iconos/cil_plant.png';
import Avatar from '../images/iconos/user-outlinet.png';
import Post from '../images/iconos/carbon_email.png';
import Cell from '../images/iconos/clarity_phone-handset-line.png';
import Map from '../images/iconos/map-pin.png';

const UrbanGardensForm = () => {
    const [meters, setMeters] = React.useState('');
    const [name, setName] = React.useState ('');
    const [email, setEmail] = React.useState ('');
    const [phone, setPhone] = React.useState ('');
    const [direction, setDirection] = React.useState ('');

    const saveData = (e) => {
        e.preventDefault()
        if (!meters.trim()){
            console.log('Campo vacío')
            return
        }

        if (!name.trim()){
            console.log('Campo vacío')
            return
        }

        if (!email.trim()){
            console.log('Campo vacío')
            return
        }

        if (!phone.trim()){
            console.log('Campo vacío')
            return
        }

        if (!direction.trim()){
            console.log('Campo vacío')
            return
        }

        // Si los datos están correctos, éstos son procesados

        console.log('Procesando Datos...' + meters + name + email + phone + direction)
        e.target.reset()
        setMeters('')
        setName('')
        setEmail('')
        setPhone('')
        setDirection('')

    }
    return (
    <div>
        <section className="containerForm">
            <form onSubmit={ saveData}>
                <h3>Completa tus Datos</h3>
                <label>Metros de terreno a donar</label>
                <img src={Plant} className="plant" alt="plant" />
                <input type="text" placeholder="Ej: 5m2" className="meters" onChange={ (e) => setMeters(e.target.value)} />

                <label>Nombre Completo</label>
                <img src={Avatar} className="avatar" alt="avatar" />
                <input type="text" placeholder="Ej: Camila Fernanda Sepulveda Carrasco" Classname="name" onChange={ (e)=> setName(e.target.value)} />

                <label>Correo electrónico</label>
                <img src={Post} className="post" alt="post" />
                <input type="text" placeholder="Ej: Camila.sepulveda@gmail.com" Classname="email" onChange={ (e)=> setEmail(e.target.value)}/>

                <label>Teléfono</label>
                <img src={Cell} className="cell" alt="cell" />
                <input type="text" placeholder="Ej: +569 " Classname="phone" onChange={ (e)=> setPhone(e.target.value)} />

                <label>Dirección</label>
                <img src={Map} className="map" alt="map" />
                <input type="text" placeholder="" Classname="direction" onChange={ (e)=> setDirection(e.target.value)} />
                {/* <button className="formButton" type="submit">Siguiente</button> */}
                <input type="submit" />
            </form>
            </section>
        </div>
    );
}

export default UrbanGardensForm;


/* const rootElement = document.getElementById("root"); */
    /* ReactDOM.render(<UrbanGardensForm />, rootElement); */

/* const { register, handleSubmit } = useForm();
const onSubmit = data => {
    alert(JSON.stringify(data));
};

return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Completa tus Datos</h3>
            <hr />
            <label>Metros de terreno a donar</label>
            <input name="meters" ref={register} />
            <label>Nombre Completo</label>
            <input name="name" ref={register} />
            <label>Correo electrónico</label>
            <input name="email" ref={register} />
            <label>Teléfono</label>
            <input name="phone" ref={register} />
            <label>Dirección</label>
            <input name="direction" ref={register} />
            {/* <button className="formButton" type="submit">Siguiente</button> */
     /*        <input type="submit" />
        </form>
    </div>
 */