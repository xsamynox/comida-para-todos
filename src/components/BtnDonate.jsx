import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const BtnDonate = () => {

  return (
    <div>
      <Router>
        <Link to='/donate'><button className="btn-donate" name='Dona Aqui'>Dona Aquí</button></Link>
      </Router>
    </div>
  );
}

export default BtnDonate;
