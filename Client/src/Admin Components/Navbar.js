import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Select </a>
        <ul className="right">
          <li><Link to ='/AddManager'>AddManager</Link></li>
          <li><Link to ='/AddCashier'>AddCashier</Link></li>
          <li><Link to ="/AddStore">AddStore</Link></li>
          <li><NavLink to ='/DailySales'>DailySales</NavLink></li> 
        </ul>
      </div>
    </nav> 
  ) 
}

export default Navbar