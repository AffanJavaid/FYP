import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const BrandContext = createContext();

function BrandContextProvider(props) {
  
const [Brand, setBrand] = useState([]);
const [Stores, setStores ] = useState([])
async function getBrands() {
    const Brand = await axios.get('http://localhost:5000/brand/name'); 
    const Store = await axios.get("http://localhost:5000/store/show");

    
    //const loggedInRes = await axios.get(
    //  "https://mern-auth-template-tutorial.herokuapp.com/auth/loggedIn"
    //);
    setBrand(Brand.data);
    setStores(Store.data);
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    //Router component is children 
    <BrandContext.Provider value={{ Brand, Stores }}>
      {props.children}
    </BrandContext.Provider>
  );
}

export default BrandContext;
export { BrandContextProvider };
