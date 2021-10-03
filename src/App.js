import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import marcom from './marcom';
import {commercialBloc1} from "./commercial";
import {commercialBloc2} from "./commercial";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display:'flex', width:'100%', backgroundColor:'#E0E0E0'}}>
      <Router>
        <Sidebar/>
        <switch style={{width:'100%'}}>
        <Route exact path="/" component={commercialBloc1}/>
        <Route path="/" component={commercialBloc2}/>
        <Route path="/marcom" exact component={marcom}/>
        </switch>
          
      </Router>
    </div>
   

        );
  }
   


export default App;
