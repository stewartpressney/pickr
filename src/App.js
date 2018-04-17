import React, { Component } from 'react';
import './App.css';
import Card from './card/card';
import PickButton from './pickButton/pickButton';
import Navbar from './navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './config/firebase/dbconfig';
// import { Link } from 'react-router-dom';

class App extends Component {

constructor(props){
  super(props);
  this.app = firebase.initializeApp(firebaseConfig);
  this.database = this.app.database();
  this.placeRef = this.app.database().ref().child('places');
  this.updateCard = this.updateCard.bind(this);


  this.state = {
    cards : [],
    currentCard: {}
  }
}

componentWillMount(){
  this.database.ref('deals').on('child_added', deal => {
    const currentCards = this.state.cards;
    this.database.ref('places').child(deal.val().placeid).once('value').then(place => {

      currentCards.push({
        id: deal.key,
        name: place.val().name,
        img: deal.val().img,
        style: deal.val().style,
        daysAvalable: deal.val().daysAvalable,
        deal: deal.val().dealName,
        price: deal.val().price,
        location: place.val().address,
      })
      this.setState ({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    })
    .catch(err => {
      console.error(err);
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
              daysAvalable={this.state.currentCard.daysAvalable}
              deal={this.state.currentCard.deal}
              price={this.state.currentCard.price}
              location={this.state.currentCard.location}
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