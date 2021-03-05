
import './App.css';
import Navbar from "./components/Navbar"
import BuySell from "./Pages/BuySell"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <BuySell />
      </Router>
  

    </div>
  );
}

export default App;
