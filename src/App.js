import React, { Component } from 'react';
import {Home, About, Contact, Navbar, Post } from './components'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <div className="App">
          <Navbar/>
            <Route  exact path = "/" component = {Home} />
            <Route  path = "/about" component = {About} />
            <Route  path = "/contact" component = {Contact} />
            <Route  path = "/post/:post_id" component = {Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
