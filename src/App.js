
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from "./components/Navbar"
import TransactionHistory from "./Pages/TransactionHistory"
 

function App() {
  return (

    <Router>
      <NavBar/>
      <Switch>
        
      </Switch>
    </Router>
  );
}

export default App;
