import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ProductsList from "./components/products-list.component";
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile';
import ViewProduct from './components/viewproduct';

import './App.css';


function App() {
  return (
 
  <Router>
    <Navbar/>
    <br/>
    <Route path="/" exact component={ProductsList} />
    <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/viewproduct/:id" component={ViewProduct} />
            <Route exact path="/profile" component={Profile} />
    </div>
        
 </Router>
  );
}

export default App;
