import React from 'react';
import './adminTable.css';
import AddPlace from '../addPlace/addPlace';
import Navbar from '../navbar/navbar';



const AdminTable = (props) => (
  <div className="parallax">
    <Navbar className="Navbar" />
    <div className="wrapperdiv">
      <div align="center" >
        <AddPlace className="AddPlace" />
        </div>
    </div>
  </div>
)

export default AdminTable