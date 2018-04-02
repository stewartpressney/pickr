import React from 'react';
import './card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="name">{props.name}</div>
        <div className="img">{props.img}</div>
      </div>
      <div className="back">
        <div className="style">{props.style}</div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  </div>
)

export default Card

