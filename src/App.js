import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import GridView from './component/gridView'
import Details from './component/details';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/Store';
function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route component={GridView} exact path="/"></Route>
          <Route component={Details} path="/details"></Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
