import React, { Component } from 'react';
import './addDeal.css';
import firebase from 'firebase/app';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class AddDeal extends Component {
  constructor() {
      super();
      this.state = {
        dealName: '',
        img: '',
        price: '',
        style: [],
        daysAvalable: [],
        places: {},
        deals: [],
        placeid: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit(e) {
      // TODO: add validation.  don't submit unless enough fields are filled out.
      e.preventDefault();
      const dealsRef = firebase.database().ref('deals');
      const deal = {
        dealName: this.state.dealName,
        img: this.state.img,
        price: this.state.price,
        style: this.state.style,
        daysAvalable: this.state.daysAvalable,
        placeid: this.state.placeid,
      }
      dealsRef.push(deal);
      this.setState({
        dealName: '',
        img: '',
        price:'',
        style: [],
        daysAvalable: [],
        placeName: '',
      });
    }

    componentDidMount() {
      const dealsRef = firebase.database().ref('deals');
      dealsRef.on('value', (snapshot) => {
        let deals = snapshot.val();
        let newDeals = [];
        for (let dealId in deals) {
          let deal = deals[dealId];
          newDeals.push({
            id: dealId,
            dealName: deal.dealName,
            img: deal.img,
            price: deal.price,
            style: deal.style,
            daysAvalable: deal.daysAvalable,
            placeid: deal.placeid,
          });
        }
        this.setState({
          deals: newDeals
        });
      });

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

    removedeal(dealId) {
      const dealRef = firebase.database().ref(`/deals/${dealId}`);
      dealRef.remove();
    }

    styleChanged = (newStyle) => {
      this.setState({
        style: newStyle
      });
    }

    daysChanged = (newDay) => {
      this.setState({
        daysAvalable: newDay
      });
    }

    placeChanged = (event) => {
      this.setState({
        placeid: event.target.value
      });
    }

    render() {
      return (
        <div className='newDeal'>
          <header>
              <div className="wrapper">
                <h1 className="heading">Create New Deal</h1>
              </div>
          </header>
          <div className='container'>
            <section className='add-deal'>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <input className="dealinputs" type="text" name="dealName" placeholder="Deal Name" onChange={this.handleChange} value={this.state.dealName} />
                      <input className="dealinputs" type="text" name="img" placeholder="Img. URL" onChange={this.handleChange} value={this.state.img} />
                      <input className="dealinputs" type="text" name="price" placeholder="Deal Price" onChange={this.handleChange} value={this.state.price} />
                    </div>
                    <div className="catagory">
                    <h1>Deal Catagory:</h1>
                      <CheckboxGroup
                        checkboxDepth={2} name="style"
                        value={this.state.style}
                        onChange={this.styleChanged}
                        className="CheckboxGroup">
                        <label><Checkbox value="Food"/>Food</label>
                        <label><Checkbox value="Drinks"/>Drink</label>
                        <label><Checkbox value="Date"/>Date</label>
                        <label><Checkbox value="Fun "/>Fun</label>
                        <label><Checkbox value="Group"/>Group</label>
                      </CheckboxGroup>
                      </div>
                      <div className="avalibility">
                      <h1>Day Avalible:</h1>
                      <CheckboxGroup
                        checkboxDepth={2} name="daysAvalable"
                        value={this.state.daysAvalable}
                        onChange={this.daysChanged}
                        className="CheckboxGroup">
                        <label><Checkbox value="Mon"/>Mon</label>
                        <label><Checkbox value="Tue"/>Tue</label>
                        <label><Checkbox value="Wed"/>Wed</label>
                        <label><Checkbox value="Thu"/>Thu</label>
                        <label><Checkbox value="Fri"/>Fri</label>
                        <label><Checkbox value="Sat"/>Sat</label>
                        <label><Checkbox value="Sun"/>Sun</label>
                      </CheckboxGroup>
                      </div>

                      <div className="setlocation">
                      <h1>Set Location:</h1>
                      <select className="placeName" name="placeName" value={this.state.placeid} onChange={this.placeChanged}>
                        <option value="">Select A Location</option>
                        {Object.values(this.state.places).map((place) => (<option key={place.id} value={place.id}>{place.name}</option>))}
                      </select>
                    <button className="createButton">Create Deal</button>
                    </div>
                  </form>
            </section>
            <section className='display-deal'>
            <h1>Deals</h1>
                <div className="wrapper">
                  <ul>
                    {console.log(this.state.deals[0] && this.state.deals[0].places)}
                    {this.state.deals.map((deal) => {
                      return (
                        <li className="dealcard" key={deal.id}>
                          <h3>{deal.dealName}</h3>
                          <button className="deleteDeal" onClick={() => this.removedeal(deal.id)}>Remove Deal</button>
                          <img src={deal.img}/>
                          <p>Deal Price: {deal.price}</p>
                          <p>Deal Style:{deal.style}</p>
                          <p>Day's Avalible: {deal.daysAvalable}</p>
                          <h4>{
                            this.state.places[deal.placeid] ? this.state.places[deal.placeid].name : ""
                          }</h4>
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
export default AddDeal