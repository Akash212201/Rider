import React from 'react'
import './style/footer.css';
const Footer = () => {
    const footerItem=[
        {title: "On-demand", items: [{item1: "Personal Ride", path: ""}]},
        {title: "Shared Ride", items: [{item1: "Available Rides", path: ""},{item1: "Propose a ride", path: ""}]},
        {title: "Memberships", items: [{item1: "Evalate", path: ""}]},
        {title: "Company", items: [{item1: "About us",path: ""},{item1: "Services",path: ""},{item1: "Blog",path: ""},{item1: "Contact",path: ""},]},
        {title: "Account", items: [{item1: "Register",path: ""},{item1: "Login",path: ""},{item1: "Dashboard",path: ""},]}
    ];
    const footerLink=[
        {
            title: "Cookie policy",
            path: ""
        },
        {
            title: "Terms & Conditions",
            path: ""
        },
        {
            title: "Privacy Policy",
            path: ""
        },
    ];
   
    return (
        <footer class="footer">
            <div class="Footer_logo">
                <a href="/" >Rickshaw Ride</a>
            </div>
            <div class="o-layout o-layout--grids">
                <div class="bottomItem u-11 u-6@medium ">
                    <span class="columnTitle">Follow us</span>
                    <ul class="SocialList">
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect>
                                    <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle>
                                    <rect x="36" y="36" width="184" height="184" rx="48" stroke-width="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect>
                                    <circle cx="180" cy="75.99998" r="8"></circle>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle>
                                    <path d="M168,88.00094H152a24,24,0,0,0-24,24v112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path>
                                    <line x1="96" y1="144.00094" x2="160" y2="144.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="socialIcon" target="_blank" rel="noopener" href="!#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect><rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect>
                                    <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line>
                                    <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path>
                                    <circle cx="88" cy="79.99998" r="8"></circle>
                                </svg>
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
            <div class="Footer_bottom o-layout o-layout--grids">
                <div class="bottomItem u-6@medium">
                    <p class="copyright">© RickshawRide 2023</p>
                </div>
                <nav class="bottomItem u-12@medium  u-offset-2@medium">
                    <ul class="FooterGrid GridBottom">
                        {
                            footerLink.map((item,index) => (
                                <li key={index} className="Footer_list">
                                    <a className="footerLink" href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div class="bottomItem u-6@medium ">
                    <p class="Footer_hq u-small">RickshawRide HQ - India
                    </p>
                </div>
                <div class="bottomItem u-14@medium  u-offset-2@medium">
                    <p class="Footer_info u-small">RickshawRide is a ride booking webapp with a global digital platform and is not a direct air carrier. All flights advertised to which RickshawRide has access are owned and operated by a properly licensed third party air carrier, compliant with rules outlined by the European Union Aviation Safety Agency (or other appropriate authority under foreign law). RickshawRide does not carry additional liability insurance. Passengers are covered by the aircraft operator insurance.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer