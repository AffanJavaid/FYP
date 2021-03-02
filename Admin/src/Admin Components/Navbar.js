import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Select </a>
        <ul className="right">
          <li><Link to ="/Home">Home</Link></li>
          <li><Link to ="/AddStore">AddStore</Link></li>
          <li><Link to ='/DashBoard'>Main</Link></li>
          <li><Link to ='/DailySales'>DailySales</Link></li> 
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar