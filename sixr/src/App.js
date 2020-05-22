import React from 'react';
import {Route} from 'react-router-dom'
// import './App.css';

//components
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Header />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;

