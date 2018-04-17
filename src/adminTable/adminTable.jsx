import React from 'react';
import './adminTable.css';
import AddPlace from '../addPlace/addPlace';
import Navbar from '../navbar/navbar';


const AdminTable = (props) => (
  <div className="parallax">
    <Navbar className="Navbar" />
    <AddPlace className="AddPlace" />
  </div>
)

export default AdminTable