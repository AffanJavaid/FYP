
import React from 'react'
import {FaBars} from 'react-icons/fa'; 
import {IoMdNotifications} from 'react-icons/io'; 
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import logo from '../images/logo1.jpeg';

export default function Navbar() {
    return <ProductConsumer>
        {
            value =>
            {
                const {cartItems, handleSidebar, handleCart} = value
                return <NavWrapper>
                    <div className="nav-center">
                        <FaBars className="nav-icon" onClick={handleSidebar} />
                        <img src={logo} alt="SwiftSense-logo" width="250" height="50" />
                        <div className="nav-cart">
                            <IoMdNotifications className="notification" onClick={handleCart}></IoMdNotifications>
                            <div className="notification-number">
                                {cartItems}
                            </div>
                        </div>
                    </div>
                    
                </NavWrapper>
            }
        }

    </ProductConsumer>
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: gray;
  background: var(--mainGrey);
  border-bottom: 3px solid ;
  border-color: #5fb7ea;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    max-height: 26px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }
  .nav-cart {
    position: relative;
    height:50px;
    font-size: 2rem;
    color: black;
  }
  .notification-number {
    background-color: #5fb7ea;  
   // background: var(--primaryColor);
   // color: var(--mainWhite);
    color: white;
    font-size: 0.85rem;
    position: absolute;
    top: 4px;
    right: -1px;
    padding: 0 4px;
    border-radius: 50%;
  }
`;
/*

const NavWrapper = styled.nav`
position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var;
  border-bottom-color: black;


  
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    max-height: 50px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    height:40px;
    font-size: 1.5rem;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }


`;
*/
