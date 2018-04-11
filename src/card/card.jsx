import React from 'react';
import './card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="img" alt=""><img src={props.img}/></div>
      </div>
      <div className="back">
        <div className="name">{props.name}</div>
        <div className="deal">{props.deal}</div>
        <div className="style">{props.style}</div>
        <div className="price">{props.price}</div>
        <div className="location">{props.location}</div>
        <p className="description">Readymade vinyl chia, semiotics DIY selfies pinterest shoreditch. Health goth hammock direct trade williamsburg craft beer, air plant subway tile. Hoodie yuccie lyft ennui, la croix keytar activated charcoal. Mixtape fixie man braid post-ironic seitan jean shorts.</p>
      </div>
    </div>
  </div>
)



export default Card

