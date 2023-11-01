import React from 'react';
import './App.css';
import EasyRide from './components/easyride';
import Hero from './components/hero';
const App = () =>{
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 
  // }, []);
  
  return (
    <>
    {/* {loading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <EasyRide/>
          <Footer/>
        </div>
      )} */}
     <Hero />
      <EasyRide/>
    </>
  );
}
export default App;