import React, { Component } from 'react';
import './pickButton.css';

class PickButton extends Component{
  constructor(props){
    super(props);
    this.drawCard = this.drawCard.bind(this);
  }

  drawCard(){
    this.props.drawCard();
  }

render(props){
  return(
    <div className="buttonContainer">
      <button className="btn" onClick={this.drawCard}>Get Random Card</button>
    </div>
    )
  }
}

export default PickButton;