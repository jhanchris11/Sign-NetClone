/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

import SignUp from './components/SignUp/SignUp';

import Video from './components/video/video'
import { Provider } from 'react-redux'
import store from './store/store'
import dashboard from './pages/dashboard/dashboard';
import Login from './pages/Login/Login';
import Home from './components/Home/Home';
/*Invocar el estado para que redux vea si el usuario cierra la pestaña */
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/video' component={Video} />
            <Route exact path="/signin" component={Login} />
            <Route exact path='/dashboard' component={dashboard} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>

  );
}
export default App;
