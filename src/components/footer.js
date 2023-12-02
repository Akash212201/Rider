import React from 'react'
import './style/footer.css';
import { FaLinkedinIn,FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Footer = () => {
    const footerItem=[
        {title: "Company", items: [{item1: "About us",path: ""},{item1: "Services",path: ""},{item1: "Contact",path: ""},]},
        {title: "Account", items: [{item1: "Register",path: ""},{item1: "Login",path: ""},{item1: "Dashboard",path: ""},]},
        {title: "Policies", items: [{item1: "Cookie Policy", path: ""},{item1: "Privacy Policy", path: ""},{item1: "Terms & Conditions", path: ""}]},
    ];
   
    return (
        <div class="footer">
            <div class="Footer_logo">
                <Link to="/" >Rickshaw Ride</Link>
            </div>
            <div class="o-layout o-layout--grids">
                <div class="bottomItem u-6@medium text-white">
                    <h1 className="text-3xl mb-3">Contact Info</h1>
                    <ul>
                        <li className="text-base mb-1">support@rickshawride.com</li>
                        <li className="text-base mb-1">+91 9149215780</li>
                        <li className="text-base mb-1">Sultanpur, Uttar Pradesh</li>
                        
                    </ul>
                </div>
                <nav class="bottomItem u-12@medium  u-offset-2@medium">
                    <ul class="FooterGrid">
                        {
                            footerItem.map((item, index) => (
                                <li key={index} className="Footer_list">
                                    <span className="columnTitle u-h6 text-3xl">{item.title}</span>
                                    <ul>
                                        {
                                        item.items.map((subItem, subIndex) => (
                                            <li key={subIndex} className="FooterItem">
                                                <Link className="footerLink" to={subItem.path}>{subItem.item1}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className="text-white bg-richblack-900 py-2 text-xl mt-10 flex justify-between items-center px-2 lg:px-28">
                <div className="flex justify-evenly items-center">
                    <div className="p-2 rounded-[50%] border m-1 hover:text-[#fff] hover:bg-[#000]"><FaLinkedinIn /></div>
                    <div className="p-2 rounded-[50%] border m-1 hover:text-[#fff] hover:bg-[#000]"><FaInstagram /></div>
                    <div className="p-2 rounded-[50%] border m-1 hover:text-[#fff] hover:bg-[#000]"><IoLogoFacebook /></div>
                </div>
                <div>© RickshawRide 2023</div>
            </div>
        </div>
    )
    //<p class="Footer_info ">RickshawRide is a ride booking webapp with a global digital platform and is not a direct air carrier. All flights advertised to which RickshawRide has access are owned and operated by a properly licensed third party air carrier, compliant with rules outlined by the European Union Aviation Safety Agency (or other appropriate authority under foreign law). RickshawRide does not carry additional liability insurance. Passengers are covered by the aircraft operator insurance.</p>
}

export default Footer