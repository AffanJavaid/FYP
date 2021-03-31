import axios from "axios";
import React, { useState } from "react";


function RegisterBrand() {
    
  const [bid, setID] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bname, setName] = useState("");
  const [btype, setType] = useState("");
  const [bowner, setOwner] = useState("");
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        bid,
        email,
        password,
        bname,
        btype,
        bowner,
      };

      await axios.post("http://localhost:5000/brand/", registerData, {
        withCredentials:true
      });
      //await axios.post(
      //  "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //  registerData
       //);

    } catch (err) {
      console.error(err);
    }
  }
    
    return (
        <div>
 <h1>Register a new Brand</h1>
      <form onSubmit={register}>
      <input
        type="Number"
        placeholder="Brand ID"
        onChange={(e) => setID(e.target.value)}
        value={bid}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="String"
        placeholder="Brand Name"
        onChange={(e) => setName(e.target.value)}
        value={bname}
      />
      <input
        type="String"
        placeholder="Brand type"
        onChange={(e) => setType(e.target.value)}
        value={btype}
      />      
      <input
        type="String"
        placeholder="Brand Owner"
        onChange={(e) => setOwner(e.target.value)}
        value={bowner}
      />
        <button type="submit">Register</button>
      </form>            
        </div>
    )
}

export default RegisterBrand;