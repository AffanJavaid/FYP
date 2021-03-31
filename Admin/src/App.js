import { AuthContextProvider } from "./Context/AuthContext";
import Home from './Admin Components/Home'
import axios from "axios";

axios.defaults.withCredentials = true;

const  App = () => {
  
  return (
    <div >
    <AuthContextProvider>
      <Home/>
    </AuthContextProvider>
    </div>
  )
}

export default App; 
