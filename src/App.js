import React, { Component } from 'react';
import ContactApp from './Components/ContactApp';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>
        <ContactApp />
      </Router>
    )
  }
}

export default App;
