import React from "react";
import { Link } from "react-router-dom";

const Solutions=()=>{
    return(
        <>
        {/* <!-- ---------------header contain--------------- --> */}
    <div className="header">
        {/* <div className="conatiner">
            <nav>
                <Link to="index.html">
                    <img src="images/logo.jpg" width="70px" height="70px" to="/index.html"/>
                </Link>
                <h1> TECHNOCRAT</h1>
                <ul id="sidemenu">
                    <i className="fa fa-times" onclick="closemenu()"></i>

                    <li><Link to="About.html">ABOUT US </Link><span><b>+</b></span></li>
                    <li><Link to="Expertise.html">EXPERTISE</Link><span><b>+</b></span></li>
                    <li><Link to="Solutions.html">SOLUTIONS</Link><span><b>+</b></span></li>
                    <li><Link to="Thought-Center.html">THOUGHT CENTER</Link><span><b>+</b></span></li>
                    <li><Link to="ContactUs.html">CONTACT US</Link><span><b>+</b></span></li>
                    <li><Link to="JoinUs.html">JOIN US</Link><span><b>+</b></span></li>
                </ul>
                <i className="fa fa-bars" onclick="openmenu()"></i>
            </nav>
        </div> */}
        <div className="container-3">
            <h1>WE MAKE IT HAPPEN</h1>
        </div>
    </div>
    {/* <!-- ---------main contain---------------- --> */}
    <div className="main-contain"></div>




















    {/* <!-- -------------footer contain-----------------> */}
    <div className="footer ">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h2>TEСHNОCRАT CONSULTING </h2>
                    <p style="color: blue;"><b>MR. MILIND SALVE</b> </p>
                    <p><b> Mob No</b>:- 8999210639</p>
                    <p style="color: blue;"> <b> Ms Sachi Waghmare</b> :</p>
                    <p> <b> Mob No</b>:-7276216671</p>
                    <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                    <p>Follow-us :-
                    <div className="social-icon">
                        <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                        <Link to="#"><i className="fa fa-instagram"></i></Link>
                        <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                    </div>
                    </p>
                </div>
                <div className="footer-col-2">
                    <Link to="#" className="links">About Us</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <Link to="#" className="links">Expertise</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Solutions</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Though Center</Link>

                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Contact Us</Link>

                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Join Us</Link>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- ----------copyright-------------------- --> */}
    <div className="copyright">
        <div className="useful-links">
            <Link to="#">About</Link>
            <Link to="#">Accessibility</Link>
            <Link to="#">Help Center</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Advertising</Link>
            <Link to="#">Get the App</Link>
            <Link to="#">More</Link>
        </div>
        <div className="copyright-msg">
            <p>copyright &#169; 2022.All right reserved</p>
        </div>


    </div>




        </>
    );
} ;
export default Solutions;