import React from 'react';
import { collaborators } from '../data/collaborators.json';
import '../styles/collaborationview.css'

const Collaborator = () => {
  return (
    <div className="container-collaborators">
      {collaborators.map((collaborator) => {
        return <a className="col-sm-2 contorn" href={collaborator.url} key={collaborator.name}><img alt='colaboradores' src={collaborator.img} /></a>
      })}
    </div>
  );
}

export default Collaborator;