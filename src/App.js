import React, { Component } from 'react';
import './App.css';
import Card from './card/card';
import PickButton from './pickButton/pickButton';
import Navbar from './navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './config/firebase/dbconfig';





class App extends Component {

constructor(props){
  super(props);

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);


  this.state = {
    cards : [],
    currentCard: {}
  }
}

componentWillMount(){
  const currentCards = this.state.cards;
  this.database.on('child_added', snap => {
    currentCards.push({
      id: snap.key,
      name: snap.val().name,
      img: snap.val().img,
      style: snap.val().style,
      price: snap.val().price,
    })
    this.setState ({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  })
}



getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)]
  return(card);
}

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
      <Navbar className="Navbar" />
      <div className="cardRow">
      <Card name={this.state.currentCard.name}
            img={this.state.currentCard.img}
            style={this.state.currentCard.style}
            price={this.state.currentCard.price}
            />
      </div>
      <div className="buttonRow">
      <PickButton drawCard={this.updateCard} />
      </div>
      </div>
    );
  }
}

export default App;
