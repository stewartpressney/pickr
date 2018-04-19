import React from 'react';
import './navbar.css';


const Navbar = () => (
<div className="nav">
  <div className="logowrapper">
    <a className="logo" href="/">GastownEats.ca</a>
  </div>
  <div className="headermenu">
    <a className="menuitem" href="/">SEARCH</a>
    <a className="menuitem" href="/grid">EXPLORE</a>
{/*    <a className="menuitem" href="/admin">ADMIN</a>*/}
  </div>
</div>
);

export default Navbar