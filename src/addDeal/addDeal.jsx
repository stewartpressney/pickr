import React from 'react';
import './addDeal.css';

const AddDeal = (props) => (

<div className="addPlace">
<h1>Create New Deal</h1>
  <form>
    <input type="text" name="dealname" placeholder="Describe Deal"></input>
    <input type="text" name="img" placeholder="Copy an Img URL"></input>
    <input type="text" name="price" placeholder="Deal Price ($22.22)"></input>

      <select name="business">
        <option value="1">Steamworks Pub & Brewery</option>
        <option value="2">The Lamplighter Public House</option>
      </select>


    <div id="stylename" name="stylename">
    <label>Style of Deal</label>
      <ul>
        <li><input type="checkbox" value="Food"/>Food</li>
        <li><input type="checkbox" value="Drinks"/>Drinks</li>
        <li><input type="checkbox" value="Date"/>Date</li>
        <li><input type="checkbox" value="Fun"/>Fun</li>
        <li><input type="checkbox" value="Group"/>Group</li>
      </ul>
  </div>

  <div id="daysAvailable" name="daysAvailable">
    <label>Days Avalable</label>
      <ul>
        <li><input type="checkbox" value="Mon"/>Mon</li>
        <li><input type="checkbox" value="Tue"/>Tue</li>
        <li><input type="checkbox" value="Wed"/>Wed</li>
        <li><input type="checkbox" value="Thu"/>Thu</li>
        <li><input type="checkbox" value="Fri"/>Fri</li>
        <li><input type="checkbox" value="Sat"/>Sat</li>
        <li><input type="checkbox" value="Sun"/>Sun</li>
      </ul>
  </div>

  </form>
</div>

)

export default AddDeal