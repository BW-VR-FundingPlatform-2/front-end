import React from 'react';
import { Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import createCampange from './components/CreateCampaign'
import BrowseProjects from './components/BrowseProjects';
import AboutUs from './components/AboutUs';
import { LogIn } from './components/LogIn';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/createcampange" component={createCampange} />
      <Route exact path="/browseprojects" component={BrowseProjects} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/login" component={LogIn} />
      <Footer />
    </div>
  );
}

export default App;

