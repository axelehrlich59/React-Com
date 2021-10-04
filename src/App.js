import logo from './logo.svg';
import './commercial.css';
import './marcom.css';
import Sidebar from './sidebar';
import {marcomBloc1} from './marcom';
import {marcomBloc2} from './marcom';
import {commercialBloc1} from "./commercial";
import {commercialBloc2} from "./commercial";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display:'flex', width:'100%', backgroundColor:'#E0E0E0'}}>
      <Router>
        <Sidebar/>
        <switch style={{width:'100%', height:'100%'}}>
        <Route exact path="/commercial" component={commercialBloc1}/>
        <Route exact path="/commercial" component={commercialBloc2}/>
        <Route exact path="/marcom" component={marcomBloc1}/>
        <Route exact path="/marcom" component={marcomBloc2}/>
        </switch>
              
          
      </Router>
    </div>
   

        );
  }
   


export default App;
