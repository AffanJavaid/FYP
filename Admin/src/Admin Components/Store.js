import React,{useContext, useState} from "react";
import axios from 'axios';
import BrandContext from '../Context/BrandContexts';

function Store() {
  
//update location
 const [newLocation, setnewLocation]=useState('');

 const {Brand} = useContext(BrandContext);
 const {Stores} = useContext(BrandContext);
 function updateStore(id) {
    
    axios.put('http://localhost:5000/store/updateStore',{
        id:id,  
        newLocation:newLocation,

        }).then( () => {
          console.log("Updated");
        })
    }

//delete store
  function deleteStore(id) {
    axios.delete(`http://localhost:5000/store/deleteStore/${id}`,{
    }).then(()=>{
      console.log('deleted ');
    })
  }
//show Stores list    

function renderStores() {   
      return Stores.map((Store) => {
        if(Store.bid === Brand.bid)
        {
          return <li className="card-panel  red darken-1  z-depth-5">
          <h6 className="white-text text-darken-2>Store">  Id: {Store.sid}</h6>
          <br/>
          <h6 className="white-text text-darken-2" >Store Location: {Store.sloc}</h6> 
          <div className="center-align" >
          <input type="text" placeholder="New Location" 
          onChange={(e)=>{
            setnewLocation(e.target.value);
          }}/>           
          <button onClick={()=>updateStore(Store._id)}>Update</button>  
          <button onClick={()=>deleteStore(Store._id)}>Delete</button>     
          </div>
        </li>

        }
    
    });
  }
  
  return (
    <div>
     <h3 className="red-text text-darken-2"> Welcome {Brand.bname}</h3>        
      <ul>{renderStores()}</ul>
    </div>
  );
}

export default Store;
