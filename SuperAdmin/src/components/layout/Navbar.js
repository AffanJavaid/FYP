import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to ='/'>Home</Link>
      <Link to ='/Register'>Register</Link>
      <Link to= '/Brands'>Brandss</Link>     
    </div>
  );
}

export default Navbar;
