import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import React from "react";
import { Navigation, Footer, Home, Profile } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Switch>
		      <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      <Footer />
        
      </div>
    </Router>
  );
}

export default App;
