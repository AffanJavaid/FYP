import Navbar from './Components/Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Components/Home'
import AddStore from './Components/AddStore'
import DailySales from './Components/DailySales'
import AddCashier from './Components/AddCashier'
import AddManager from './Components/AddManager'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
       <Navbar/>
       <Route path ='/home' component={Home} /> 
       <Route path ='/DailySales' component={DailySales} />
       <Route path ='/AddCashier' component={AddCashier} />
       <Route path ='/AddManager' component={AddManager} />
       <Route path ='/AddStore' component={AddStore} />   
    </div>
    </BrowserRouter>

  );
}

export default App;
