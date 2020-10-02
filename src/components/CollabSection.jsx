import React from 'react';
import Hands from '../images/imagen4.png';
import CafeSanJuan from '../images/cafe-san-juan 1.png';
import Foodies from '../images/foodies 1.png';
import Cultiva from '../images/logo-fundacion-cultiva 1.png';
import Ñam from '../images/logo-niam 1.png';


const CollabSection = () => {
    return (
        <div className="CollaborationSection">
            <div className="textContainer">
                <h2 className="collabTitle">Colaboradores</h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    A maxime labore deleniti rerum ipsum aut tempore perspiciatis
                    corrupti mollitia, adipisci placeat. Consequuntur, officiis labore
                    sed dicta dolor unde ullam sunt.
            <section style={{ textAlign: "center", paddingTop: "5%" }}>
                        <p className="read-more">Leer Más</p>
                    </section>
                </p>
            </div>
            <div className="containerHands">
                <img src={Hands} className="hands" alt="hands" />
            </div>
            <div className="companies">
                <img src={CafeSanJuan} className="cafeSanJuan" style={{ width: "20%" }} alt="cafeSanJuan" />
                <img src={Foodies} className="foodies" style={{ width: "30%" }} alt="foodies" />
                <img src={Cultiva} className="cultiva" style={{ width: "35%" }} alt="cultiva" />
                <img src={Ñam} className="ñam" style={{ width: "25%" }} alt="ñam" />
            </div>
            <div>
            </div>
        </div>
    );
};

export default CollabSection;