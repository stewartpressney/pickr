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
        <div className="style">Deal Catagory:   <strong>{props.style}</strong></div>
        <div className="days">Days Available:   <strong>{props.daysAvalable}</strong></div>
        <div className="price">Price:   <strong>{props.price}</strong></div>
        <div className="location">Location:   <strong>{props.location}</strong></div>
      </div>
    </div>
  </div>
)



export default Card

