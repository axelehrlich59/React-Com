import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import marcom from './marcom';
import commercial from "./commercial";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
      <Sidebar/>
      <Route path="/" exact component={commercial}/>
      <Route path="/marcom" exact component={marcom}/>
      </div>
    </Router>

        );
  }
   


export default App;
