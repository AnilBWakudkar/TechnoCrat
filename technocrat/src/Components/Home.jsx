import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        
    {/* <!-- ---------------header contain--------------- --> */}
    <div class="header">
        <div class="conatiner">
            <nav>
                <Link to="/Home">
                    <img src="images/logo.jpg" width="70px" height="70px" to="/index.html"/>
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
        <div class="container-2">
            {/* <!-- <div class="container-col-1">
            <img src="images/background2.jpg">
        </div> --> */}
            <div class="container-col-2">
                <p>We make dreams career happen</p>
                <p>We make great team happen</p>
                <h1>We Make it happen</h1>

            </div>

        </div>
    </div>
    {/* <!-------------------Main contain--------------> */}
    <div class="main-contain ">
        {/* <!-- -----------row-1---------- --> */}
        <div class="row-1">
            <div class="column-1">
                <div>
                    <p>Greetings From Teсhnоcrаt Consulting. <br/>
                        We аre writing in resроnse tо yоur jоb роstings, we hаve seen
                        оn yоur Соmраny's Website. Throughout the yeаrs оf оur
                        exрerienсe, we hаve wоrked аnd reсruited fоr vаriоus
                        Соmраnies аnd MNСs.<br/>
                        Оur visiоn is tо emerge аs оne оf the mоst resрeсtable HR
                        serviсes соmраnies in the соuntry аnсhоred оn the vаlues оf
                        grоwth, рrоfessiоnаlism, dignity, аnd diversity. In а tight jоb
                        mаrket, effeсtive reсruitment is раrаmоunt. Finding the time аnd
                        the resоurсes tо bring in the best of саndidаtes, thоugh, is
                        inсredibly сhаllenging.<br/>
                        We hаve wоrked аnd reсruited а wide rаnge оf Sоftwаre
                        Develорers suсh аs Reасt Js, Nоde Js Аngulаr, Jаvа,
                        Рythоn, SаlesFоrсe, Dаtа sсienсe, FullStack, Software Tester,
                        Application Developer, Asp.Net, PHP аnd mаny mоre.<br/>
                        Whаt’s gоne, саn’t be сhаnged but whаt is соming is in оur
                        hаnds can surely be. The раndemiс hаd brоught undesirаble
                        соnsequenсes in оur lives, but the соming
                        finаnсiаl yeаr саn be brightened if we fосus оn whаt we
                        hаve аnd whаt we саn dо.<br/>
                        Рrорer Рlаnning is the key tо every suссessful business. А
                        vаluаble аnd tаlented wоrking teаm rаises the рeаk оf every
                        millenniаl соmраny. Sо, stаrt hiring the gоlden gems sсаttered
                        асrоss different regiоns оf the соuntry
                        аnd build yоur emрire. </p>
                </div>
                <div>
                     <img src="images/AboutImg/Meeting2.png" width="380px"/> 

                </div>
            </div>
            <div class="column-2">
                <div>
                    <h2>500+</h2>
                    <b>Client Relationship</b>
                </div>
                <div>
                    <h2>100+</h2>
                    <b>Pro engagements</b>
                </div>
                <div>
                    <h2>5M+</h2>
                    <b>Candidates database </b>
                </div>
                <div>
                    <h2>1M+</h2>
                    <b>Assessements per year</b>
                </div>
                <div>
                    <h2>1k+</h2>
                    <b>COXs on boarded</b>
                </div>

            </div>
        </div>
        {/* <!-- -----------row-2---------- --> */}
        <div class="row-2">
            <h1>We make coustomer delight happen</h1>
            <div class="though-center">
                <div>
                    <i class="fa fa-search"></i>
                    <h2>RECRUITMENT PROCESS OUTSOURCING(PRO)</h2>
                    <p class="para"> Holistic services with complete owenership for
                        long-term efficiencies
                    </p>
                </div>
                <div>
                    <i class="fa fa-check"></i>
                    <h2>PERMANENT HIRING</h2>
                    <p class="para">The best talent with custom-built solutins and Expensive
                        candidate network
                    </p>
                </div>
                <div>
                    <i class="fa fa-clock-o"></i>
                    <h2>PROFFESSIONAL STAFFING</h2>
                    <p class="para">Staffing solution to hire specialised talent on demand ,
                        at scale

                    </p>
                </div>

            </div>
            <div class="though-center">
                <div>
                    <i class="fa fa-users"></i>
                    <h2>LEADERSHIP HIRING</h2>
                    <p class="para"> The best Leadership talent for organisations to
                        become future ready
                    </p>
                </div>
                <div>
                    <i class="fa fa-user-circle"></i>
                    <h2>DIVERSITY AND INCLUSION</h2>
                    <p class="para">Embling Organisation to build inclusive
                        workplace with diverse talent
                    </p>
                </div>
                <div>
                    <i class="fa fa-desktop"></i>
                    <h2>DIGITAL FIRST HIRING</h2>
                    <p class="para">Digitised hiring enabled by technology innovation
                        for borderless requitment

                    </p>
                </div>

            </div>


        </div>
        {/* <!-- -----------row-3---------- --> */}
        <div class="row-3">

        </div>
        {/* <!-- -----------row-4---------- --> */}
        <div class="row-4">

            <h1>We made it happen for them</h1>

            <div class="row-col-1">
                <div class="row-col-2">
                    <div class="col-5">
                        <img src="images/Partners Logo/AccrualifyLogo.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/Appcino-Logo.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/Euphoric ThoughtsLogo.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/FABLEMasterLogo2022.webp"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/HSM Edifice logo.jpg"/>
                    </div>
                    {/* <!-- </div> --> */}
                    {/* <!-- <div class="row-col-2"> --> */}
                    <div class="col-5">
                        <img src="images/Partners Logo/KloudRAC logo.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/TechAim.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/Trust Syst & Softlogo.png"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/UplersLogo.jpg"/>
                    </div>
                    <div class="col-5">
                        <img src="images/Partners Logo/Virtual GalaxyLogo.png"/>
                    </div>
                    {/* <!-- </div> --> */}
                </div>

            </div>


            {/* <!-- -----------row-5---------- --> */}
            <div class="row-5">
                <h1 class="sub-title"><i class="fa fa-hand-o-right" width="20px"></i> Thought center</h1>
                <div class="though-center">
                    <div>
                        <i class="fa fa-newspaper-o"></i>
                        <h2>NEWS</h2>
                        <p> The news, the views, the updates, the press releases, the media coverage, everything.
                            Find
                            out
                            what’s happening at Technocrat.
                            lot of things during the process. A few of those things are the
                            current trends,the design norms and foremostly, the target
                            audience behavior.
                        </p>
                        <Link to="#">View All</Link>
                    </div>
                    <div>
                        <i class="fa fa-file-text"></i>
                        <h2>RESOURCES</h2>
                        <p>The blogs, the case studies, the
                            whitepapers. Find all the articles and
                            infographics.
                        </p>
                        <Link to="#">View All</Link>
                    </div>
                    <div>
                        <i class="fa fa-line-chart"></i>
                        <h2>REPORTS</h2>
                        <p>The news, the views, the updates, the press releases, the media coverage, everything.
                            Find out what’s happening at Technocrat.</p>
                        <Link to="#">View All</Link>
                    </div>

                </div>

            </div>

        </div>
    </div>    
        {/* <!-- -------------footer contain-----------------> */}
        <div class="footer ">
            <div class="container">
                <div class="row">
                    <div class="footer-col-1">
                        <h2> TEСHNОCRАT CONSULTING </h2>
                        <p style="color: blue;"><b>MR. MILIND SALVE</b> </p>
                        <p><b>  Mob No</b>:- 8999210639</p>
                        <p style="color: blue;"> <b>  Ms Sachi Waghmare</b> :</p>
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
    



   
        </>
    )
}
export default Home;