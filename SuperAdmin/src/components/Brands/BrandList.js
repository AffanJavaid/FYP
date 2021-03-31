import React from "react";

function BrandList({ brands }) {
  function renderBrands() {
    return brands.map((brand, i) => {
      return <li key={i}>{brand.bname}</li>;
    });
  }

  return (
    <div>
      <ol>{renderBrands()}</ol>
    </div>
  );
}

export default BrandList;
