import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import NavBar from './components/navbar';
import Home from './pages/home';
import Ride from './pages/ride';
import Operator from './pages/operator';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import PPolicy from './pages/footer_pages/PPolicy';
import Tnc from './pages/footer_pages/tnc';
const App = () =>{
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  //   <>
  //  {loading ? (
  //       <Loading />
  //     ) : (
  //       <div>
  //       <Hero />
  //       <WhyUs />
  //       <Services/>
  //       <EasyStep />
  //       <Ride/>
  //       </div>
  //     )} 
  //     <Footer/>
  //      <WhyUs />
  //   </> 
  
  return (
    
    <Router>
    {/* <NavBar/> */}
    <Tnc/>
    <PPolicy/>
    <div className="">
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/ride' element={<Ride/>}/>
       <Route path='/operator' element={<Operator/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
    <Footer/>
    </Router>
  );
}
export default App;