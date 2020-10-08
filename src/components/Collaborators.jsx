import React from 'react';
import { collaborators } from '../data/collaborators.json';

const Collaborator = () => {
  // collaborators.name.map((item, i) => {
  //   return (
  //     <option key={i} value={item}>
  //       {item}
  //     </option>
  //   )
  // });

  return (
    <div className="container">
      <div className="row">
        {collaborators && collaborators.map((collaborator) => {
          return <img className="col-sm-4" key={collaborator.name} src={collaborator.img} />
        })}
      </div>
    </div>
  );
}

export default Collaborator;