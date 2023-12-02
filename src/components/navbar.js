import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import logo from '../assests/logo.png';
import './style/navbar.css';
const NavBar =()=> {
    const links =[
    {
        name: "Home",
        path: "/home"
    },
    {
        name: "Ride",
        path: "/ride"
    },
    {
        name: "Contact Us",
        path: "/contact"
    },
]
    const [showsideBar, setsideBar]= useState(false);
    const hideSidebar=()=>{
        setsideBar(false);
    }
  return (
    <>
    <div className="navbar containerr ">
        <div className="logo">
            <Link to="/">
            <img src={logo} alt=""/>
            </Link>
            
        </div>
        <div className="nav-linkk">
        <div className="nav-links">
            {
                links.map(link =>(
                    <Link to={link.path} key={link.name}>{link.name}</Link>
                    
                ))
            }
            
        </div>
            <div>
            <Link to="/login"><button className="nav-btn">Login</button></Link>
            </div>
        </div>
        
        <div onClick={()=>setsideBar(!showsideBar)} className="sidebar-btn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    { showsideBar && <Sidebar links={links} hideSidebar={hideSidebar} />}
    </>
  )
}

export default NavBar;