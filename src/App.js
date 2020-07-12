import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ProductsList from "./components/products-list.component";

import './App.css';

function App() {
  return (
 
  <Router>
    <Navbar/>
    <br/>
    <Route path="/" exact component={ProductsList} />
     
 </Router>
  );
}

export default App;
