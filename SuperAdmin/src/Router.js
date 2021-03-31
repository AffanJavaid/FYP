import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Register from './components/auth/RegisterBrand';
import Brands from "./components/Brands/Brands";
function Router() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path = "/">
        <div>Home</div>
        </Route>  
        <Route path = "/Register"  component={Register} />
        <Route path = "/Brands" component={Brands} >
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
