import React from 'react';
import './AnimalList.css';

export default function AnimalList({ name, type, says, top, left, size }) {
  return (
    <div className='animalCard' style={{ position: 'absolute', top: top, left: left }}>
      <img className='animalImg' src={`./images/${type}.svg`} style={{ height: size }} />
      <h3>{name}</h3>
      <p>{says}</p>
    </div>
  );
}
