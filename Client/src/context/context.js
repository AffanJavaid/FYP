import React, { Component } from 'react';
import {linkData} from './linkData';

const ProductContext  = React.createContext();

// Provider
class ProductProvider extends Component 
{
    state=
    {
      sidebarOpen:false,
      cartOpen: false,
      cartItems: 0,
      links: linkData,   
    }
    //handle siebar
    handleSidebar =()=>
    {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }

    //handle Cart
    handleCart =()=>
    {
        this.setState({cartOpen:!this.state.sidebarOpen})
    }
     
    //close cart

    closeCart =()=>
    {
        this.setState({cartOpen: false})
    }

    //open
 
    openCart =()=>
    {
        this.setState({cartOpen: true})
    }

    render()
    {
        return(
            <ProductContext.Provider value=
            {
                {
               //     sidebarOpen:this.state.sidebarOpen,
                    ...this.state,
                    handleSidebar:this.handleSidebar,
                    handleCart:this.handleCart,
                    closeCart:this.closeCart,
                    openCart:this.openCart,
                }
            }>
                {this.props.children }
            </ProductContext.Provider>
        );
    }
}

// Consumer
const ProductConsumer= ProductContext.Consumer;

export {ProductProvider,ProductConsumer}
