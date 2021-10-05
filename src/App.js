import logo from './logo.svg';
import './commercial.css';
import './marcom.css';
import Sidebar from './sidebar';
import commercialBloc1 from './commercialBloc1';
import commercialBloc2 from './commercialBloc2';
import marcomBloc1 from './marcomBloc1';
import marcomBloc2 from './marcomBloc2';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App" style={{display:'flex', width:'100%', backgroundColor:'#E0E0E0'}}>
      <Router>
        <Sidebar/>
        <switch style={{width:'100%', height:'100%'}}>
        <Route exact path="/" component={commercialBloc1}/>
        <Route exact path="/" component={commercialBloc2}/>
        <Route exact path="/marcom" component={marcomBloc1}/>
        <Route exact path="/marcom" component={marcomBloc2}/>
        </switch>
              
          
      </Router>
    </div>
   

        );
  }
   


export default App;
