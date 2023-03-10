import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="conatiner">
                    <nav>
                        <Link to="index.html">
                            <img src="../public/images/logo.jpg" width="70px" height="70px"  alt=" " to="index.html" />
                        </Link>
                        <h1> TECHNOCRAT</h1>
                        <ul id="sidemenu">
                            <i className="fa fa-times" onclick="closemenu()"></i>

                            <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>
                            <li><Link to="/experties">EXPERTISE</Link><span><b>+</b></span></li>
                            <li><Link to="/solutions">SOLUTIONS</Link><span><b>+</b></span></li>
                            <li><Link to="/thoughcenter">THOUGHT CENTER</Link><span><b>+</b></span></li>
                            <li><Link to="/contact">CONTACT US</Link><span><b>+</b></span></li>
                            <li><Link to="/joinus">JOIN US</Link><span><b>+</b></span></li>
                        </ul>
                        <i className="fa fa-bars" onclick="openmenu()"></i>
                    </nav>
                </div>
                {/* <div className="container-2">
            
            <div className="container-col-2">
                <p>We make dreams career happen</p>
                <p>We make great team happen</p>
                <h1>We Make it happen</h1>

            </div>

        </div> */}
            </header>
        </>

    );
};
export default Navbar;