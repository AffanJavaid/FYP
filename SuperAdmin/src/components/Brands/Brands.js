import axios from "axios";
import React, { useEffect, useState } from "react";
import BrandList from "./BrandList";


function Brands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    const BrandRes = await axios.get("http://localhost:5000/brand/show");
    //const customersRes = await axios.get(
    //  "https://mern-auth-template-tutorial.herokuapp.com/customer/"
    //);
    setBrands(BrandRes.data);
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
      <BrandList brands={brands} />
    </div>
  );
}

export default Brands;
