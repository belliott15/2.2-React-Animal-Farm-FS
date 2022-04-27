import React from 'react';
import farmBackground from '../../background.png';
import './main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }){
  return (
    <div className='main' style={{ background: `url(${farmBackground})` }}>
      {
        animals.map((animal) => <AnimalList key={animal.name} {...animal} />)
      }
    </div>
  );
}