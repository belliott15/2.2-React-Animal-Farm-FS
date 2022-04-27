import React from 'react';
import './AnimalList.css';

export default function AnimalList({ name, type, says }) {
  return (
    <div className='animalCard'>
      <img className='animalImg' src={`./images/${type}.svg`} />
      <h3>{name}</h3>
      <h4>{says}</h4>
    </div>
  );
}
