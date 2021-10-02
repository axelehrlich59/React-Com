import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import marcom from './marcom';
import commercial from "./commercial";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <Router>
        <Sidebar/>
          <Route path="/" exact component={commercial}/>
          <Route path="/marcom" exact component={marcom}/>
      </Router>
    </div>
   

        );
  }
   


export default App;
