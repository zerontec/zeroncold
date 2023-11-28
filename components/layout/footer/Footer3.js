import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer className="main-footer style-three">
                <div className="pattern" style={{ backgroundColor:"#0c2957" }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget about-widget">
                                    <h3 className="widget-title" style={{color:"white"}}>Zeroncold</h3>
                                    <div className="widget-content">
                                        
                                        <div className="text" style={{color:"white"}}> Nos esforzamos por brindar un excelente servicio.  <br /> </div>
                                        <ul className="list">
                                            <li><Link href="#">Tecnicos Experimentados</Link></li>
                                            <li><Link href="#">Soporte </Link></li>
                                            <li><Link href="#">Transparencia </Link></li>
                                        </ul>
                                        {/* <div className="image"><img src="/assets/images/resource/certificate.png" alt="" /></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget links-widget-two">
                                    <h3 className="widget-title">Lugares</h3>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/about"> Empresa</Link></li>
                                                    <li><Link href="/contact">Contactanos</Link></li>
                                                    <li><Link href="/faq">FAQ’s</Link></li>
                                                    {/* <li><Link href="/team-1">Meet Team</Link></li>
                                                    <li><Link href="/blog-1">News</Link></li> */}
                                                    
                                                    <li><Link href="/services">Servicios</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    {/* <li><Link href="/career">Careers</Link></li> */}
                                                    {/* <li><Link href="#">Features</Link></li>
                                                    <li><Link href="#">Feedback</Link></li> */}
                                                    {/* <li><Link href="/pricing-1">Pricing</Link></li> */}
                                                    {/* <li><Link href="#">Locations</Link></li> */}
                                                    <li><Link href="#">Policies</Link></li>
                                                    {/* <li><Link href="#">Industries</Link></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget twitter-widget">
                                    <h3 className="widget-title">Contactanos</h3>
                                    <div className="widget-content">
                                        <div className="image-box">
                                            <img src="/assets/images/resource/twitter-thumb.jpg" alt="" />
                                            <h4>Numeros directo </h4>
                                            <div style={{fontSize:20, fontWeight:15,color:"white", marginTop:10}} >+1 484 9084464</div>
                                            <div style={{fontSize:20, fontWeight:15,color:"white", marginTop:10}} >+1 407 329 3838</div>
                                        </div>
                                        {/* <div className="text"><Link href="#">#Consultancy</Link> UK rank <Link href="#">#Envolve</Link> as the 1st best management consultancy overall certified companies.</div>
                                        <p><Link href="#">onnet.twitter.com/2kbwebdesign</Link></p>
                                        <div className="date"><i className="far fa-clock" />24th Feb, {new Date().getFullYear()}</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom-three">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright-text"><Link href="#">© {new Date().getFullYear()} zeroncold,</Link> All Rights Reserved.</div>
                            <ul className="menu">
                                <li><Link href="#">Privacy Policy </Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-area">
                        <div className="auto-container">
                            <ul className="social-icon row m-0">
                                <li><Link href="#">Facebook</Link></li>
                                <li><Link href="#">Twitter</Link></li>
                                <li><Link href="#">Google +</Link></li>
                                <li><Link href="#">Linkedin</Link></li>
                                <li><Link href="#">Youtube </Link></li>
                                <li><Link href="#">Pinterest</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
