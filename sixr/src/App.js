import React from 'react';
import {Route} from 'react-router-dom'
// import './App.css';

//components
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import CreateCampaign from './components/CreateCampaign';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/createcampaign' component={CreateCampaign} />
    </div>
  );
}

export default App;

