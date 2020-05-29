import React from 'react';
import { Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CreateCampaign from './components/CreateCampaign'
import BrowseProjects from './components/BrowseProjects';
import AboutUs from './components/AboutUs';
// Replaced by Ryans App
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import LoginByRyan from './components/LoginByRyan'

//privateRoute
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/browseprojects" component={BrowseProjects} />
      <Route exact path="/about" component={AboutUs} />
      {/* <Route exact path="/login" component={LogIn} /> */}
      <Route exact path="/login" component={LoginByRyan} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/createcampaign" component={CreateCampaign}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Footer />
    </div>
  );
}

export default App;

