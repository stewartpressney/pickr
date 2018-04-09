import React from 'react';
import './addDeal.css';

const AddDeal = (props) => (

<div className="addPlace">
<h1>Create New Deal</h1>
  <form>
    <input type="text" name="dealname" placeholder="Describe Deal"></input>
    <input type="text" name="img" placeholder="Copy an Img URL"></input>
    <input type="text" name="price" placeholder="Deal Price ($22.22)"></input>

      <select name="Business">
        <option value="1">Steamworks Pub</option>
        <option value="2">Lamplighter Pub</option>
        <option value="3">Noodlebox</option>
        <option value="4">Local</option>
      </select>


    <div id="stylename">
    <label>Catagory</label>
      <ul>
        <li><input type="checkbox"/>Food</li>
        <li><input type="checkbox"/>Drinks</li>
        <li><input type="checkbox"/>Date</li>
        <li><input type="checkbox"/>Fun</li>
        <li><input type="checkbox"/>Group</li>
      </ul>
  </div>

  </form>
</div>

)

export default AddDeal