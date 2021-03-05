
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar"
import DummyProtected from "./pages/DummyProtected"
import Login from "./pages/Login"
import dummyProtected from './pages/DummyProtected';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/dashboard" component={DummyProtected}/>
            <Route path="/" component={Login}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
