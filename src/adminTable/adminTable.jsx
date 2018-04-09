import React from 'react';
import './adminTable.css';

const adminTable = (props) => (
  <div className="placesTable">

    <h1>Places</h1>
    <button className="placeButton">Add New Place</button>

    <table className="dealTable">

      <tbody>


        {/* for place in places, loop through and create a table row for each*/}
        <tr>
          <td>
            <h3>Steamworks Pub | ID:1</h3>
            <p>375 Water St, Vancouver, BC V6B 5C6 | 6046892739</p>
          </td>
        <tr>
          <td>
            <span>
              {/* for deal in deals where name === place, loop through each deal card conponent */}
              <h2>Deals</h2>
              <button className="dealButton">Add New Deal</button>
            </span>
            <div>
              <p>DEAL-CARD</p>
            </div>
            <div>
              <p>DEAL-CARD</p>
            </div>
            <div>
              <p>DEAL-CARD</p>
            </div>
          </td>
        </tr>
        </tr>
      </tbody>
    </table>
  </div>
)

export default adminTable