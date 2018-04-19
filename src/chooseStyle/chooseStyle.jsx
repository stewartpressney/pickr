import React, { Component } from 'react';
import './chooseStyle.css';
import firebase from 'firebase/app';
import AddDeal from '../addDeal/addDeal';
import { firebaseConfig } from '../config/firebase/dbconfig';


class ChooseStyle extends Component {
  constructor() {
    super();
    this.app = firebase.initializeApp(firebaseConfig);
    this.state = {
      name: '',
      address: '',
      phone: '',
      lat: '',
      lon: '',
      places: [],
      placeid: undefined,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//connect up to firebase
componentDidMount() {
  const placesRef = firebase.database().ref('places');
  placesRef.on('value', (snapshot) => {
    let places = snapshot.val();
    let newPlaces = {};
    for (let place in places) {
      newPlaces[place] = {
        id: place,
        name: places[place].name
      };
    }
    this.setState({
      places: newPlaces
    });
  });
}

  removeplace(placeId) {
    const placeRef = firebase.database().ref(`/places/${placeId}`);
    placeRef.remove();
  }

  //look for changes to state
    handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  placeChanged = (event) => {
    this.setState({
      placeid: event.target.value
    });
  }


  //move info to firebase
  handleSubmit(e) {
    e.preventDefault();
    const placesRef = firebase.database().ref('places');
    const place = {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      lat: this.state.lat,
      lon: this.state.lon
    }
    placesRef.push(place);
    this.setState({
      name: '',
      address: '',
      phone: '',
      lat:'',
      lon:''
    });
  }

  render() {
    var locationCardJsx = undefined;
    if (this.state.placeid && this.state.places[this.state.placeid]) {
      var place = this.state.places[this.state.placeid];
      locationCardJsx = (
        <li className="locationplace" key={place.id}>
          <button className="deletelocation"onClick={() => this.removeplace(place.id)}>Delete Location</button>
          <h3>{place.name}</h3>
          <p>{place.address}</p>
          <p>{place.phone}</p>
          <p>{place.lat}</p>
          <p>{place.lon}</p>
          <AddDeal placeid={place.id}/>
        </li>
      );
    }
    return (
      <div className='newPlace'>
        <div className="setlocation">
            <h1 className="heading">Select A Location:</h1>
            <select className="placeName" name="placeName" value={this.state.placeid} onChange={this.placeChanged}>
              <option value="">Select A Location</option>
              {Object.values(this.state.places).map((place) => (<option key={place.id} value={place.id}>{place.name}</option>))}
            </select>
          </div>
          <section className='display-place'>
            <div className="wrapper">
              <ul>
                {locationCardJsx}
              </ul>
            </div>
          </section>

    );
  }
}
export default ChooseStyle;

