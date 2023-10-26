import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Loading from './components/loading';
import Ride from './pages/ride';
import Footer from './components/footer';
const App = () =>{
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);
  
  return (
    <>
    {loading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <Ride/>
          <Footer/>
        </div>
      )}
    </>
  );
}
export default App;