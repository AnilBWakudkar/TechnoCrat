import React from "react";
import { Link } from "react-router-dom";

const Joinus=()=>{
    return(
        <>
        {/* <!-- ---------------header contain--------------- --> */}
    <div className="header">
        {/* <div className="conatiner">
            <nav>
                <a to="index.html">
                    <img src="images/logo.jpg" width="70px" height="70px" to="/index.html"/>
                </a>
                <h1> TECHNOCRAT</h1>
                <ul id="sidemenu">
                    <i className="fa fa-times" onclick="closemenu()"></i>

                    <li><a to="About.html">ABOUT US </a><span><b>+</b></span></li>
                    <li><a to="Expertise.html">EXPERTISE</a><span><b>+</b></span></li>
                    <li><a to="Solutions.html">SOLUTIONS</a><span><b>+</b></span></li>
                    <li><a to="Thought-Center.html">THOUGHT CENTER</a><span><b>+</b></span></li>
                    <li><a to="ContactUs.html">CONTACT US</a><span><b>+</b></span></li>
                    <li><a to="JoinUs.html">JOIN US</a><span><b>+</b></span></li>
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
                        <a to="#"><i className="fa fa-facebook-official"></i></a>
                        <a to="#"><i className="fa fa-instagram"></i></a>
                        <a to="#"><i className="fa fa-youtube-play"></i></a>
                        <a to="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                    </p>
                </div>
                <div className="footer-col-2">
                    <a to="#" className="links">About Us</a>
                    <ul>
                        <li><a to="#">Overview</a></li>
                        <li><a to="#">Why Technocrat</a></li>
                        <li><a to="#">Our Journey</a></li>
                        <li><a to="#">Leadership</a></li>
                        <li><a to="#">Location</a></li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <a to="#" className="links">Expertise</a>
                    <ul>
                        <li><a to="#">Overview</a></li>
                        <li><a to="#">Why Technocrat</a></li>
                        <li><a to="#">Our Journey</a></li>
                        <li><a to="#">Leadership</a></li>
                        <li><a to="#">Location</a></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <a to="#" className="links">Solutions</a>
                    <ul>
                        <li><a to="#">Overview</a></li>
                        <li><a to="#">Why Technocrat</a></li>
                        <li><a to="#">Our Journey</a></li>
                        <li><a to="#">Leadership</a></li>
                        <li><a to="#">Location</a></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <a to="#" className="links">Though Center</a>

                </div>
                <div className="footer-col-4">
                    <a to="#" className="links">Contact Us</a>

                </div>
                <div className="footer-col-4">
                    <a to="#" className="links">Join Us</a>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- ----------copyright-------------------- --> */}
    <div className="copyright">
        <div className="useful-links">
            <a to="#">About</a>
            <a to="#">Accessibility</a>
            <a to="#">Help Center</a>
            <a to="#">Privacy Policy</a>
            <a to="#">Advertising</a>
            <a to="#">Get the App</a>
            <a to="#">More</a>
        </div>
        <div className="copyright-msg">
            <p>copyright &#169; 2022.All right reserved</p>
        </div>


    </div>


        </>
    );
}
export default Joinus;