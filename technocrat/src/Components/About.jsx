import React from "react";
import { Link } from "react-router-dom";


function About() {

    return (
        <>

            {/* <!-- ---------------header contain--------------- --> */}
            <div class="header">
                <div class="conatiner">
                    <nav>
                        <Link to="index.html">
                            <img src="images/logo.jpg" width="70px" height="70px" href="/index.html" />
                        </Link>
                        <h1> TECHNOCRAT</h1>
                        <ul id="sidemenu">
                            <i class="fa fa-times" onclick="closemenu()"></i>

                            <li><Link to="/src/Components/About.jsx">ABOUT US </Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/Expertise.jsx">EXPERTISE</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/Solutions.jsx">SOLUTIONS</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/ThoughtCenter.jsx">THOUGHT CENTER</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/Contact.jsx">CONTACT US</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/Joinus.jsx">JOIN US</Link><span><b>+</b></span></li>
                        </ul>
                        <i class="fa fa-bars" onclick="openmenu()"></i>
                    </nav>
                </div>
                <div class="container-3">
                    <h1>Making bussiness growth</h1>
                </div>
            </div>
            {/* <!-- ---------main contain---------------- --> */}
            <div class="main-contain">
                <div class="row-1">
                    <div class="column-1">
                        <div class="col-div-1">
                            <img src="images/AboutImg/Meeting.png" />
                            {/* <!-- <img src="images/AboutImg/Meeting2.png"> --> */}
                        </div>
                        <div class="col-div-2">
                            <p>We are Technocrat<br />

                                We аll аre living in аn erа where the evоlutiоn оf
                                teсhnоlоgy is inсreаsing аt а rаte thаt we саnnоt even
                                imаgine. It hаs entirely сhаnged the wаy we live, think,
                                relаtes tо eасh оther. This ever-trаnsfоrming erа hаs
                                аlsо сhаnged the demаnds аnd needs оf сlients, their
                                wаy оf wоrking, аnd the set оf саndidаtes they wаnt is
                                аlsо сhаnged. <br />
                                Therefоre, we аt Teсhnоkrаt, аre highly investing in
                                new teсhnоlоgies intending tо рrоvide а оne-stор
                                sоlutiоn tо the Оrgаnisаtiоns for their Humаn Resоurсe
                                "We take pride in putting our clients first. We
                                recognize that they are what keeps our firm
                                growing."
                                We аlsо believe thаt “If you want tо sell sоmething tо а
                                сustоmer, then the first thing yоu need tо dо is to buy the
                                Trust оf Сustоmer by рrоviding соrreсt аnd reliаble
                                infоrmаtiоn with рrорer guidаnсe.”
                                We feel thаt thаt the jоb desсriрtiоn mentiоned in yоur
                                website, we hаve the required рersоnnel with the relevаnt
                                exрerienсe whо wоuld serve yоur рurроse fоr reсruiting
                                the саndidаtes whiсh yоur соmраny desires. This
                                орроrtunity wоuld аdd greаtly tо оur Саreer Оbjeсtives
                                fоr а detаiled ассоunt оf оur рrоfessiоnаl bасkgrоund аnd
                                ассоmрlishments рleаse refer tо the аttасhed website.
                                We lооk fоrwаrd tо а detаiled disсussiоn оver the
                                fасe-tо- fасe interасtiоn.
                                Рrоblem<br />
                                Henсe, we here аt Technocraft аim tо sоlve the рrоblem
                                оf every оrgаnizаtiоn sо thаt they саn fосus оn their соre
                                business whiсh will leаd tо оverаll grоwth in the
                                industry.<br />
                                In the wоrld оf teсhnоlоgy, сlients аnd саndidаtes wаnt
                                the рresenсe оf а trusted humаn раrtner tо gо аlоng the
                                jоurney. It is here, where we mаke оurselves unique
                                frоm оur соmрetitоrs by delivering tоugh соmрetitiоn
                                аnd аn аffоrdаble аnd reliаble humаn exрerienсe <br />

                                <b style="color: rgb(48, 126, 126);">"We take pride in putting our clients first. We
                                    recognize that they are what keeps our firm
                                    growing."</b> <br />
                                We аlsо believe thаt “If you want tо sell sоmething tо а
                                сustоmer, then the first thing yоu need tо dо is to buy the
                                Trust оf Сustоmer by рrоviding соrreсt аnd reliаble
                                infоrmаtiоn with рrорer guidаnсe.”
                                We feel thаt thаt the jоb desсriрtiоn mentiоned in yоur
                                website, we hаve the required рersоnnel with the relevаnt
                                exрerienсe whо wоuld serve yоur рurроse fоr reсruiting
                                the саndidаtes whiсh yоur соmраny desires. This
                                орроrtunity wоuld аdd greаtly tо оur Саreer Оbjeсtives
                                fоr а detаiled ассоunt оf оur рrоfessiоnаl bасkgrоund аnd
                                ассоmрlishments рleаse refer tо the аttасhed website.
                                We lооk fоrwаrd tо а detаiled disсussiоn оver the
                                fасe-tо- fасe interасtiоn
                            </p>
                        </div>
                    </div>

                </div>
                <div class="row-2">
                    <h1>How do we make it happen<i class="fa fa-question"></i></h1>
                    <div class="column">
                        <div class="col-1">
                            <i class="fa fa-commenting"></i>
                            <h2>CONSULT</h2>
                            <ul>
                                <li>Industry Benchmarking</li>
                                <li> Market Mapping</li>
                                <li>Organisation Design</li>
                                <li>Budgeting</li>
                                <li> Compensation Benchmarking</li>
                            </ul>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-globe"></i>
                            <h2>ACCESS</h2>
                            <ul>
                                <li>Talent Landscape</li>
                                <li>Requirement Plan </li>
                                <li>Search Strategy</li>
                                <li>Sourcing and Head-hunting</li>
                                <li> Channel Management</li>
                            </ul>
                        </div>

                        <div class="col-1">
                            <i class="fa fa-search"></i>
                            <h2>ACCESS</h2>
                            <ul>
                                <li>Assessment Development</li>
                                <li>Assessment / Interview Platform</li>
                                <li>AI-powered Proctoring</li>
                                <li>Multi-skill Content Library</li>
                                <li>Interview Services </li>
                            </ul>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-check"></i>
                            <h2>SELECT</h2>
                            <ul>
                                <li>Application Management</li>
                                <li> Stakeholder Management</li>
                                <li>Funnelling and Selection</li>
                                <li> Decisioning and Negotiation</li>
                                <li>Reference Checks</li>
                            </ul>
                        </div>

                        <div class="col-1">
                            <i class="fa fa-handshake-o"></i>
                            <h2>ONBOARD</h2>
                            <ul>
                                <li>Offer Management</li>
                                <li>Candidate Engagement</li>
                                <li>BGV and Documentation</li>
                                <li>SLA and Compliance</li>
                                <li>Analytics and Reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row-3">
                    <h1>Making great teams happen</h1>
                    <div class="col-3">
                        <div class="row-col-3">
                            <div class="imgs">
                                <img src="images/AboutImg/Aquisition.png" />
                            </div>
                            <div class="content">
                                <h2> Innovation in talent acquisition</h2>
                                <p>Since 1999, we have seen the evolution of talent acquisition in the country
                                    and transformed ourselves with the changing recruitment dynamics. That has
                                    helped us a great deal in innovating our solutions for clients from time to time.
                                </p>
                            </div>
                        </div>
                        <div class="row-col-4">
                            <div class="imgs">
                                <img src="images/AboutImg/Net of High Quality Prof.png" />
                            </div>
                            <div class="content">
                                <h2>Network of high quality professionals</h2>
                                <p>Our world-class recruitment service platform makes it easy for us to nurture
                                    relationships with over 5 million candidates and 2,000+ institutions spanning
                                    100+ locations pan-India. Our extensive talent network covers candidates across
                                    various specialties, domains, and levels.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row-col-3">
                            <div class="imgs">
                                <img src="images/AboutImg/Meeting the talent.png" />
                            </div>
                            <div class="content">
                                <h2>Meeting the talent needs of all industries</h2>
                                <p>Over these years, we have partnered with businesses of different sizes and nature,
                                    from brick and mortar organisations to new-age startups. From finding the right
                                    talent across functional domains to serving businesses across industry verticals,
                                    we do it all.
                                </p>
                            </div>
                        </div>
                        <div class="row-col-4">
                            <div class="imgs">
                                <img src="images/AboutImg/Trusted by.png" />
                            </div>
                            <div class="content">
                                <h2>Trusted by leading enterprises</h2>
                                <p>Our team comprises 2,000+ highly motivated professionals with 58% diversity and 20%
                                    tenured team with 5+ years of continued success. We have helped 1,000+ enterprise
                                    customers find the right talent and served 50+ Fortune 500 companies across domains so far.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row-col-3">
                            <div class="imgs">
                                <img src="images/AboutImg/Driving Digitization.png" />
                            </div>
                            <div class="content">
                                <h2>Driving digitisation across verticals</h2>
                                <p>We have been able to convert over 1M+ digitised transactions across processes like campus
                                    assessments and onboarding. Currently, we are administering over 1 million assessments
                                    every year across India.
                                </p>
                            </div>
                        </div>
                        <div class="row-col-4">
                            <div class="imgs">
                                <img src="images/AboutImg/Scalingup RPO.png" />
                            </div>
                            <div class="content">
                                <h2>Scaling up RPOs and turnkey engagements</h2>
                                <p>We have successfully onboarded more than 100+ RPO engagements, scaling from 200 to
                                    5,000 every year.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}




















            {/* <!-- -------------footer contain-----------------> */}
            <div class="footer ">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h2>TEСHNОCRАT CONSULTING </h2>
                            <p style="color: blue;"><b>MR. MILIND SALVE</b> </p>
                            <p><b> Mob No</b>:- 8999210639</p>
                            <p style="color: blue;"> <b> Ms Sachi Waghmare</b> :</p>
                            <p> <b> Mob No</b>:-7276216671</p>
                            <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                            <p>Follow-us :-
                                <div class="social-icon">
                                    <Link to="#"><i class="fa fa-facebook-official"></i></Link>
                                    <Link to="#"><i class="fa fa-instagram"></i></Link>
                                    <Link to="#"><i class="fa fa-youtube-play"></i></Link>
                                    <Link to="#"><i class="fa fa-linkedin"></i></Link>
                                </div>
                            </p>
                        </div>
                        <div class="footer-col-2">
                            <Link to="#" class="links">About Us</Link>
                            <ul>
                                <li><Link to="#">Overview</Link></li>
                                <li><Link to="#">Why Technocrat</Link></li>
                                <li><Link to="#">Our Journey</Link></li>
                                <li><Link to="#">Leadership</Link></li>
                                <li><Link to="#">Location</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col-3">
                            <Link to="#" class="links">Expertise</Link>
                            <ul>
                                <li><Link to="#">Overview</Link></li>
                                <li><Link to="#">Why Technocrat</Link></li>
                                <li><Link to="#">Our Journey</Link></li>
                                <li><Link to="#">Leadership</Link></li>
                                <li><Link to="#">Location</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <Link to="#" class="links">Solutions</Link>
                            <ul>
                                <li><Link to="#">Overview</Link></li>
                                <li><Link to="#">Why Technocrat</Link></li>
                                <li><Link to="#">Our Journey</Link></li>
                                <li><Link to="#">Leadership</Link></li>
                                <li><Link to="#">Location</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <Link to="#" class="links">Though Center</Link>

                        </div>
                        <div class="footer-col-4">
                            <Link to="#" class="links">Contact Us</Link>

                        </div>
                        <div class="footer-col-4">
                            <Link to="#" class="links">Join Us</Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ----------copyright-------------------- --> */}
            <div class="copyright">
                <div class="useful-links">
                    <Link to="#">About</Link>
                    <Link to="#">Accessibility</Link>
                    <Link to="#">Help Center</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Advertising</Link>
                    <Link to="#">Get the App</Link>
                    <Link to="#">More</Link>
                </div>
                <div class="copyright-msg">
                    <p>technocratconsulting &#169; 2021.All right reserved</p>

                </div>


            </div>




            {/* <!-- ----------js for menu---------------- --> */}
            {/* <script>
        var sm = document.getElementById("sidemenu");

        function openmenu() {
            sm.style.right = "0";
        }
        function closemenu() {
            sm.style.right = "-200px";
        }
    </script> */}




        </>
    )
}

export default About();