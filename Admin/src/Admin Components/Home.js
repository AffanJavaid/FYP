import React,{ useContext } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import Main from './Main'
import AddStore from './AddStore'
import DailySales from './DailySales'
import Storelist from './StoreList'
import Chart from './Chart'
import AuthContext from "../Context/AuthContext";
import AdminLogin from './AdminLogin'

function Home() {
  const { loggedIn } = useContext(AuthContext);  
  return (
      
      <BrowserRouter>
        <div>
        <Navbar/> 
        <switch>
        {loggedIn === false && (
          <>
            <Route path='/Login' component={AdminLogin}/>
          </>
        )
        }
        {loggedIn === true &&(
          <>
          <Route path ='/DailySales' component={DailySales} />
          <Route path ='/AddStore' component={AddStore} />
          <Route path ='/DashBoard' component={Main} />
          <Route path ='/Stores' component={Storelist}/> 
          <Route path ='/Graph' component={Chart}/>
          </>
        )

        }

        </switch>
        </div>
      </BrowserRouter>
  );
}

export default Home;