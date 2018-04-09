import React from 'react';
import './addPlace.css';

const AddPlace = (props) => (
<div className="addPlace">
<h1>Create Business</h1>
  <form>
    <input type="text" name="name" placeholder="Business Name"></input>
    <input type="text" name="Address" placeholder="Business Address (123 1234 Street St, Vancouver, BC V6G1B4)"></input>
    <input type="text" name="Phone" placeholder="Business Phone Number"></input>
    <input type="text" name="name" placeholder="Business Latitude"></input>
    <input type="text" name="name" placeholder="Business Longitude"></input>
  </form>
</div>
)
export default AddPlace