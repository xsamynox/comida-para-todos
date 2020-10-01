import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const OtherDonate = () => {
    return (
        <section className='ctn-otherdnt'>
            <h4>Donar</h4>
            <h2>Otras formas de Ayudar</h2>
            <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            A maxime labore deleniti rerum ipsum aut tempore perspiciatis
            corrupti mollitia, adipisci placeat.</p>
            <Router>
                <Link to='/donate'>
                    <p className='read-more'>Leer Más</p>
                </Link>
            </Router>
        </section>
    );
}
export default OtherDonate;