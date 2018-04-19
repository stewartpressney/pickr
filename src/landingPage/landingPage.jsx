import React from 'react';
import './landingPage.css';
import Navbar from '../navbar/navbar';
import Footbar from '../footbar/footbar';
import Logo from '../img/logo.png';


const LandingPage = () => (
  <div className="wraper">
    <Navbar className="Navbar" />
    <div className="logoimgBorder">
      <img className="imgLogo" src={Logo} alt="imgLogo"/>
    </div>
    <a href="/search"><button className="button">SEARCH</button></a>
    <Footbar className="footbar" />
  </div>
);

export default LandingPage