import React from 'react';
import { Routes, Route,Router } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './pages/home';
import Ride from './pages/ride';
import Operator from './pages/operator';
import About from './pages/about';
import Contact from './pages/contact';
import Search from './components/search';
import './App.css';
import Confirm from './components/confirm';
const App = () =>{
  
  return (
  <>
  <NavBar/>
  <Search/>
  <Ride/>
  </>
  );
}
export default App;