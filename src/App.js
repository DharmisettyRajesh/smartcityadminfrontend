import './App.css';
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Stateprovider} from './Components/Stateprovide';
import Reducer ,{initialState}  from './InitialState';
import Upload from './Components/Upload';
function App() {
  
  return (
    <Stateprovider initialState={initialState} reducer={Reducer}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
              <Navigation />
              <Home />    
        </Route>
        <Route path="/signup" exact >
            <Navigation />
            <Signup />
        </Route>
        <Route path="/login" exact>
            <Navigation />
            <Login />
        </Route>
        <Route path="/upload" exact>
          <Navigation />
          <Upload />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </Stateprovider>
  );
}

export default App;
