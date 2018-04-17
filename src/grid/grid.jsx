import React, { Component } from 'react';
import Card from '../card/card';
import './grid.css';
import Navbar from '../navbar/navbar';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from '../config/firebase/dbconfig';

class Grid extends Component {

  constructor(props){
    super(props);
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database();
    this.placeRef = this.app.database().ref().child('places');

    this.state = {
      cards : [],
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
        })
      })
      .catch(err => {
        console.error(err);
      })
    })
  }

  render() {
    return (
      (
        <div className="gridSection">
          <Navbar />
          <div className="gridOfCards">
            <div className="cardGrid">
              <ul >
              { this.state.cards.map((card, index) => { return (
                  <li key={card.id}>
                    <Card
                      name={card.name}
                      img={card.img}
                      style={card.style}
                      daysAvalable={card.daysAvalable}
                      deal={card.deal}
                      price={card.price}
                      location={card.location}
                    />
                  </li>
              )})}
            </ul>
          </div>
        </div>
      </div>
       )
    );
  }
}

export default Grid;


