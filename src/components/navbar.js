import React, {useState} from 'react';
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
        name: "Operator",
        path: "/operator"
    },
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Contact Us",
        path: "/contact"
    }]
    const [showsideBar, setsideBar]= useState(false);
    const hideSidebar=()=>{
        setsideBar(false);
    }
  return (
    <>
    <div className="navbar containerr">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-links">
            {
                links.map(link =>(
                    <a href={link.path} key={link.name}>{link.name}</a>
                ))
            }
        </div>
        <div onClick={()=>setsideBar(!showsideBar)} className="sidebar-btn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    {showsideBar && <Sidebar links={links} hideSidebar={hideSidebar} />}
    </>
  )
}

export default NavBar;