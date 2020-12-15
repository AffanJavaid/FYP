import Navbar from './Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import AddStore from './AddStore'
import DailySales from './DailySales'
import AddCashier from './AddCashier'
import AddManager from './AddManager'
const Home = () => {
  return (
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <h1 className="center">Swift Sense</h1>
          <Route path ='/DailySales' component={DailySales} />
          <Route path ='/AddCashier' component={AddCashier} />
          <Route path ='/AddManager' component={AddManager} />
          <Route path ='/AddStore' component={AddStore} />   
        </div>
      </BrowserRouter>
  )
}

export default Home