import React from 'react'
import { BrowserRouter, Route ,Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact  from './pages/Contact'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="nav" style={{backgroundColor:'red'}}>
      <Link to="/"> Home </Link>
      <Link to="/Contact"> Contact </Link>
      <Link to="/About">About </Link>
      <Link to="/Services"> Services</Link>
    </div>
    <Route path="/" exact component={Home}/>
    <Route path="/Contact"  component={Contact}/>
    <Route path="/About"  component={About}/>
    <Route path="/Services"  component={Services}/>
    <Route path="/Services/:id " component={ServiceDetail}/>
    </BrowserRouter>
     
    </>
    
    
  );
}

export default App;
