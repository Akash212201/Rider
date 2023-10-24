import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Loading from './components/loading';
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
        </div>
      )}
      
    </>
  );
}
export default App;