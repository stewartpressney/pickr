import React from 'react';
import './navbar.css';


const Navbar = () => (
<div className="nav">
  <div className="headermenu">
    <a className="menuitem" href="/">Card</a>
    <a className="menuitem" href="/grid">Grid</a>
    <a className="menuitem" href="/admin">Admin</a>
  </div>
</div>
);

export default Navbar