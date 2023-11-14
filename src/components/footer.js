import React from 'react'
import './style/footer.css';
import Facebook from '../assests/facebook.png'
import Email from '../assests/email.png'
import Linkedin from '../assests/linkedin.png'
const Footer = () => {
    const footerItem=[
        {title: "On-demand", items: [{item1: "Personal Ride", path: ""}]},
        {title: "Shared Ride", items: [{item1: "Available Rides", path: ""},{item1: "Propose a ride", path: ""}]},
        {title: "Policies", items: [{item1: "Cookie Policy", path: ""},{item1: "Privacy Policy", path: ""},{item1: "Terms & Conditions", path: ""}]},
        {title: "Company", items: [{item1: "About us",path: ""},{item1: "Services",path: ""},{item1: "Blog",path: ""},{item1: "Contact",path: ""},]},
        {title: "Account", items: [{item1: "Register",path: ""},{item1: "Login",path: ""},{item1: "Dashboard",path: ""},]}
    ];
   
    return (
        <div class="footer">
            <div class="Footer_logo">
                <a href="/" >Rickshaw Ride</a>
            </div>
            <div class="o-layout o-layout--grids">
                <div class="bottomItem u-11 u-6@medium ">
                    <span class="columnTitle">Follow us</span>
                    <ul class="SocialList">
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <img src={Email} alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <img src={Facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <img src={Linkedin} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <nav class="bottomItem u-12@medium  u-offset-2@medium">
                    <ul class="FooterGrid">
                        {
                            footerItem.map((item, index) => (
                                <li key={index} className="Footer_list">
                                    <span className="columnTitle u-h6">{item.title}</span>
                                    <ul>
                                        {item.items.map((subItem, subIndex) => (
                                            <li key={subIndex} className="FooterItem">
                                                <a className="footerLink" href={subItem.path}>{subItem.item1}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className="text-white bg-slate-900 py-2 text-center text-xl mt-10">© RickshawRide 2023</div>
        </div>
    )
    //<p class="Footer_info ">RickshawRide is a ride booking webapp with a global digital platform and is not a direct air carrier. All flights advertised to which RickshawRide has access are owned and operated by a properly licensed third party air carrier, compliant with rules outlined by the European Union Aviation Safety Agency (or other appropriate authority under foreign law). RickshawRide does not carry additional liability insurance. Passengers are covered by the aircraft operator insurance.</p>
}

export default Footer