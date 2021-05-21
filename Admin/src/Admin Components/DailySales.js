import React,{useContext, useState} from "react";
import BrandContext from '../Context/BrandContexts';

function DailySales() {
  
const {Brand} = useContext(BrandContext);
const {Stores} = useContext(BrandContext);

  function renderStores() {   
      return Stores.map((Store) => {
        if(Store.bid === Brand.bid)
        {
          return <tr>
                <td>{Store.sid}</td>
                <td>{Store.sloc}</td>
                <td>Sales</td>
            </tr>
        }
    
    });
  }
  
  return (
    <div>
     <h5 className="red-text text-darken-2"> Welcome {Brand.bname}</h5>  
     <table className="striped ">
        <thead className="white-text purple darken-4">
          <tr>
              <th>Store Id</th>
              <th>Store Location</th>
              <th>Store Sales</th>
              <th>Store Sales</th>
          </tr>
        </thead>
        <tbody className="white-text purple darken-1 ">{renderStores()}</tbody>
          
      </table>
    </div>
  );
}

export default DailySales;

