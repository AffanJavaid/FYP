
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaAtlassian } from "react-icons/fa";
//import styled from 'styled-components';
//import { Button } from 'bootstrap';


// Importing routing pages
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import Admin from './pages/AdminPage';
import Cashier from './pages/CashierPage';
import Contact from './pages/ContactPage';
import Manager from './pages/ManagerPage';
import Manufacturer from './pages/ManufacturerPage';
import Marketing from './pages/MarketingPage';
import Product from './pages/ProductPage';
import Default from './pages/DefaultPage';
import SuperAdmin from './pages/SuperAdminPage';

// Importing from components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


// 
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar , footer*/}
        <Navbar />
        <Sidebar />
      
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/SuperAdmin"  component={SuperAdmin}/>
          <Route path="/admin"  component={Admin}/>
          <Route path="/manufacturer"  component={Manufacturer}/>
          <Route path="/manager"  component={Manager}/>
          <Route path="/cashier"  component={Cashier}/>
          <Route path="/marketing"  component={Marketing}/>
          <Route path="/product/:id"  component={Product}/>
          <Route path="/contact"  component={Contact}/>
          <Route component={Default}/>
        </Switch>

        <Footer />

      </>
    );
  }
}

export default App;

/* import AdminLogin from './Admin Components/AdminLogin'

function App() {
  return (
    <AdminLogin />
  );
}

export default App;

*/
