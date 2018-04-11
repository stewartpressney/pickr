import React, { Component } from 'react';
import './addPlace.css';
import firebase from 'firebase/app';



class AddPlace extends Component {
    constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      phone: '',
      lat: '',
      lon: '',
      places: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//connect up to firebase
componentDidMount() {
  const placesRef = firebase.database().ref('places');
  placesRef.on('value', (snapshot) => {
    let places = snapshot.val();
    let newState = [];
    for (let item in places) {
      newState.push({
        id: item,
        name: places[item].name,
        address: places[item].address,
        phone: places[item].phone,
        lat: places[item].lat,
        lon: places[item].lon,
      });
    }
    this.setState({
      places: newState
    });
  });
}

removeItem(itemId) {
  const itemRef = firebase.database().ref(`/places/${itemId}`);
  itemRef.remove();
}

//look for changes to state
  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

//move info to firebase
handleSubmit(e) {
  e.preventDefault();
  const placesRef = firebase.database().ref('places');
  const item = {
    name: this.state.name,
    address: this.state.address,
    phone: this.state.phone,
    lat: this.state.lat,
    lon: this.state.lon
  }
  placesRef.push(item);
  this.setState({
    name: '',
    address: '',
    phone: '',
    lat:'',
    lon:''
  });
}

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Add A Business</h1>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Business Name" onChange={this.handleChange} value={this.state.name} />
              <input type="text" name="address" placeholder="Business Address (123 1234 Street St, Vancouver, BC V6G1B4)" onChange={this.handleChange} value={this.state.address} />
              <input type="text" name="phone" placeholder="Business Phone Number" onChange={this.handleChange} value={this.state.phone} />
              <input type="text" name="lat" placeholder="Business Latitude" onChange={this.handleChange} value={this.state.lat} />
              <input type="text" name="lon" placeholder="Business Longitude" onChange={this.handleChange} value={this.state.lon} />
              <button>Add Item</button>
            </form>
          </section>
          <section className='display-item'>
            <div className="wrapper">
              <ul>
                {this.state.places.map((item) => {
                  return (
                    <li key={item.id}>
                      <h3>{item.name}</h3>
                      <p>{item.address}</p>
                      <p>{item.phone}</p>
                      <p>{item.lat}</p>
                      <p>{item.lon}</p>
                      <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default AddPlace;

