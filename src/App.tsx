 
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar'
import './App.css';


class App extends Component {
  render()
   {

    return (
      <div className="App">
     

      <Router>
        <Fragment>
          <Navbar />
        </Fragment>
      </Router>
     
   
    </div>
  );
}
}

export default App;
