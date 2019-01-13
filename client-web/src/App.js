import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Questionnaire from './Questionnaire'
import Profile from './Profile'
import './App.css';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Route exact path="/" component={Questionnaire} />
               <Route path="/profile/:code" component={Profile} />
            </div>
         </Router>
      );
   }
}

export default App;
