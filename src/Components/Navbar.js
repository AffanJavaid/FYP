import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Select </a>
        <ul className="right">
          <li><a href="/AddStore">AddStore</a></li>
          <li><a href='/AddManager'>AddManager</a></li>
          <li><a href='/AddCashier'>AddCashier</a></li>
          <li><a href='/DailySales'>DailySales</a></li> 
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar