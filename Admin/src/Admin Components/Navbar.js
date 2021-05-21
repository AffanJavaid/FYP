import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";
const Navbar = () => {
  const {loggedIn} = useContext(AuthContext);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul className="right">
        {loggedIn === false && (
          <>
          <li><Link to="/Login">Login</Link></li>
          </>
        )}
        {loggedIn === true && (
          <>
          <li><Link to ="/AddStore">AddStore</Link></li>
          <li><Link to ='/DashBoard'>Main</Link></li>
          <li><Link to ='/Graph'>Graphs</Link></li>
          <li><Link to ='/DailySales'>DailySales</Link></li> 
          <li><Link to ='/Stores'>Stores</Link></li> 
          </>
        )}
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar