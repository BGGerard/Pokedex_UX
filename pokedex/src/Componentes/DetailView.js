import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, ability, speed, sdf, sat, df, atc, hp } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>Pokemon {id}</h1>
        <h1 className='data-name'>{name}</h1>
        <hr></hr>
        <p className="data-char">Type: {type}</p>
        <p className="data-char">Ability: {ability}</p>
        <hr></hr>
        <p className="data-char">Speed: {speed}</p>
        <p className="data-char">Special-defense: {sdf}</p>
        <p className="data-char">Special-attack: {sat}</p>
        <p className="data-char">Defense: {df}</p>
        <p className="data-char">Attack: {atc}</p>
        <p className="data-char">HP: {hp}</p>
      </div>
    </section>
  )
}

export default DetailView;