import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Campaign = () => {
  return (
    <section className='ctn-cmp'>
      <div>
        <h4>Campaña</h4>
        <h2>#Navidad para todos</h2>
        <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        A maxime labore deleniti rerum ipsum aut tempore perspiciatis
            corrupti mollitia, adipisci placeat.</p>
        <Router>
          <Link to='/campaings'>
            <p className='read-more'>Leer Más</p>
          </Link>
        </Router>
      </div>
      <div className='ctn-video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J-JuH8jwmHg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>
  );
}
export default Campaign;