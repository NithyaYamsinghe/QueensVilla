import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact  path="/" component={Home}/>
      <Route  exact  path="/rooms/" component={Rooms}/>
      <Route  exact  path="/rooms/:slug" component={SingleRoom}/>
      <Route  component={Error}/>
    </Switch>
    </React.Fragment>
    
  );
}

export default App;
