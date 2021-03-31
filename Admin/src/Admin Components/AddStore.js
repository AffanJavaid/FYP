import axios from "axios";
import React, {  useState } from "react";


const  AddStore = () => {
  const [sid, setSID] = useState(0);
  const [password, setPassword] = useState("");
  const [sloc, setlocation] = useState("");
  const [bid, setBID] = useState(0);


  async function register(e) {

    e.preventDefault();

    try {
      const registerData = {
        sid,
        password,
        sloc,
        bid,        
      };

      await axios.post("http://localhost:5000/store/", registerData,{
        withCredentials:true
      });
      //await axios.post(
      // "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //  registerData
      //);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
    <div className="container">
    <h1>Register a new Store</h1>
    <form className="form" onSubmit={register}>
    <input
        type="Number"
        placeholder="Store ID"
        onChange={(e) => setSID(e.target.value)}
        value={sid}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="text"
        placeholder="Store Location"
        onChange={(e) => setlocation(e.target.value)}
        value={sloc}
      />
      <input
        type="Number"
        placeholder="Brand ID"
        onChange={(e) => setBID(e.target.value)}
        value={bid}
      />

      <button type="submit">Register</button>
    </form>
  </div>
  </div>
  )
}

export default AddStore