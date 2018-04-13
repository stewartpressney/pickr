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
        placeid: this.props.placeid,
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

    // placeChanged = (event) => {
    //   this.setState({
    //     placeid: event.target.value
    //   });
    // }

    render() {
      var myDeals = this.state.deals.filter(deal => deal.placeid === this.props.placeid);
      return (
        <div className='newDeal'>
          <header>
              <div className="wrapper">
              </div>
          </header>
          <div className='container'>
            <section className='display-deal'>
            <h1>Deals</h1>
                <div className="wrapper">
                  { myDeals.length === 0 ?
                    "none yet!  let's make a deal!" :
                    (<ul>
                        { myDeals.map((deal) => {
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
                          })
                        }
                      </ul>)
                  }
                </div>
            </section>
            <section className='add-deal'>
              <h1 className="heading">Create New Deal</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <input className="dealinputs" type="text" name="dealName" placeholder="Deal Name" onChange={this.handleChange} value={this.state.dealName} />
                      <input className="dealinputs" type="text" name="img" placeholder="Img. URL" onChange={this.handleChange} value={this.state.img} />
                      <input className="dealinputs" type="text" name="price" placeholder="Deal Price" onChange={this.handleChange} value={this.state.price} />
                    </div>
                    <div className="catagory">
                    <h1>Deal Catagory:</h1>
                      <CheckboxGroup className="style"
                        checkboxDepth={2} name="style"
                        value={this.state.style}
                        onChange={this.styleChanged}
                        className="CheckboxGroup">
                        <label><Checkbox className="checkbox" value="Food"/>Food</label>
                        <label><Checkbox className="checkbox" value="Drinks"/>Drink</label>
                        <label><Checkbox className="checkbox" value="Date"/>Date</label>
                        <label><Checkbox className="checkbox" value="Fun "/>Fun</label>
                        <label><Checkbox className="checkbox" value="Group"/>Group</label>
                      </CheckboxGroup>
                      </div>
                      <div className="avalibility">
                      <button className="createButton">Create Deal</button>
                      <h1>Day Avalible:</h1>
                      <CheckboxGroup
                        checkboxDepth={2} className="daysAvalable" name="daysAvalable"
                        value={this.state.daysAvalable}
                        onChange={this.daysChanged}
                        className="CheckboxGroup">
                        <label><Checkbox className="checkbox" value=" Mon "/>Mon</label>
                        <label><Checkbox className="checkbox" value=" Tue "/>Tue</label>
                        <label><Checkbox className="checkbox" value=" Wed "/>Wed</label>
                        <label><Checkbox className="checkbox" value=" Thu "/>Thu</label>
                        <label><Checkbox className="checkbox" value=" Fri "/>Fri</label>
                        <label><Checkbox className="checkbox" value=" Sat "/>Sat</label>
                        <label><Checkbox className="checkbox" value=" Sun "/>Sun</label>
                      </CheckboxGroup>
                      </div>
                  </form>
            </section>
          </div>
        </div>
      );
    }
  }
export default AddDeal