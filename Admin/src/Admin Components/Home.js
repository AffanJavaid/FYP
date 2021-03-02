import React,{Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import Main from './Main'
import AddStore from './AddStore'
import DailySales from './DailySales'
import Storelist from './StoreList'

class Home extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
        <Navbar/> 
        <switch>
          <Route path ='/DailySales' component={DailySales} />
          <Route path ='/AddStore' component={AddStore} />
          <Route path ='/DashBoard' component={Main} />
          <Route path ='/StoreList' component={Storelist}/> 
        </switch>
        </div>
      </BrowserRouter>
  );
}

}
export default Home;