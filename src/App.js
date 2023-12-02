import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Ride from './pages/ride';
import Contact from './pages/contact';
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Footer from './components/footer'
const App = () =>{
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); 
  // }, []);

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
    <>
    <NavBar/>
    <div className="">
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/ride' element={<Ride/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path="/signup" element={<Signup />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
       <Route path="/update-password/:id" element={<UpdatePassword />}></Route>
       <Route path="/verify-email" element={<VerifyEmail />}></Route>
     </Routes>
    </div>

    <div>
  <Footer/>
    </div>
    </>
  );
}
export default App;