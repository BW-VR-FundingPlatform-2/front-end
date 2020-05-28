import React from 'react';
import { Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CreateCampange from './components/CreateCampaign'
import BrowseProjects from './components/BrowseProjects';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Register from './components/Register'

//privateRoute
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/browseprojects" component={BrowseProjects} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/createcampange" component={CreateCampange}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Footer />
    </div>
  );
}

export default App;


