import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DummyProtected from "./pages/DummyProtected"
import Login from "./pages/Login"
import AuthRoute from "./utils/AuthRoute"
import NavBar from "./components/Navbar"
import TransactionHistory from "./pages/TransactionHistory"
import Footer from "./components/Footer"

import Store from './context/Store'


function App() {
  let authenticated = true;
  return (
    <Store>
      <Router>
        <NavBar/>
        <Switch>
              <Route exact path="/" component={Login}/>
              <AuthRoute exact path="/dashboard" component={DummyProtected} />
              <AuthRoute exact path="/transactionHist" component={TransactionHistory}/>
        </Switch>
        <Footer/>
      </Router>
    </Store>
  );
}

export default App;
