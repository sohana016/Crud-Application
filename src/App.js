import logo from './logo.svg';
import './App.css';
import { Route,Switch,Redirect  } from 'react-router-dom';
import 'antd/dist/antd.css';
import GridView from './component/gridView'
import Details from './component/details';
function App() {
  return (
    <div className="App">
  
  <Switch>
                    
                    <Route component ={GridView} exact path="/"></Route>
                    <Route component ={Details} path="/details"></Route>
                   
                   
                  
           </Switch>
{/* <GridView/> */}

    </div>
  );
}

export default App;
