import React from 'react';
import './AnimalList.css';

export default function AnimalList({ name, type, says, top, left }) {
  return (
    <div className='animalCard' style={{ position: 'absolute', top: top, left: left }}>
      <img className='animalImg' src={`./images/${type}.svg`} />
      <h3>{name}</h3>
      <p>{says}</p>
    </div>
  );
}
