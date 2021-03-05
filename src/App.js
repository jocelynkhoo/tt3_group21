import './App.css';
import BuySell from "./pages/BuySell"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DummyProtected from "./pages/DummyProtected"
import Login from "./pages/login.js"
import AuthRoute from "./utils/AuthRoute"
import NavBar from "./components/Navbar"
import TransactionHistory from "./pages/TransactionHistory"
import Footer from "./components/Footer"
import UserDetails from "./components/UserDetails"
import Currentprices from "./utils/Currentprices"

import Store from './context/Store'


function App() {
  let authenticated = true;
  return (
    <Store>
      <Router>
        <NavBar/>
        <Switch>
              <Route exact path="/" component={Login}/>
              <AuthRoute exact path="/dashboard" component={DummyProtected}/>
              <AuthRoute exact path="/buysell" component={BuySell}/>
              <AuthRoute exact path ='/transaction' exact component= {TransactionHistory}/>
              <AuthRoute exact path ='/profile' exact component= {UserDetails}/>
              <AuthRoute exact path ='/investments' exact component= {Currentprices}/>
        </Switch>
        <Footer/>
      </Router>
    </Store>
  );
}

export default App;
