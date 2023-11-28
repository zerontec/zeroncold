
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Contactanos" wrapperCls="home_5">
                <div>
                    <section className="contact-details-section">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Nos encantaría ayudarte </h2>
                                <div className="text">Por favor no dude en ponerse en contacto con nosotros, nos encantaría escuchar sus opiniones, dudas que pueda tener </div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-46.png" alt="" /></div>
                                            <h5>Ubicación </h5>
                                            <h4></h4>
                                        </div>
                                        <ul>
                                            <li>236 North 9th Street, Reading, PA, USA</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-47.png" alt="" /></div>
                                            <h5> Atención </h5>
                                            <h4>Llamenos </h4>
                                        </div>
                                        <ul>
                                            <li><Link href="tel:+14849084464">+1 800 555 44 00 (Toll free)</Link></li>
                                            <li><Link href="tel:+14073293838">+1 407 329 3838</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-48.png" alt="" /></div>
                                            <h5>Drop a line</h5>
                                            <h4>Mail us @</h4>
                                        </div>
                                        <ul>
                                            <li><Link href="mailto:admin@zeroncold.com">admin@zeroncold.com</Link></li>
                                            {/* <li><Link href="mailto:career@Envolve.com">career@Envolve.com</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 contact-info-block">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-49.png" alt="" /></div>
                                            <h5>Off Hours</h5>
                                            <h4>Atencion Soporte </h4>
                                        </div>
                                        <ul>
                                            <li>Lun - Sab: 8.00 - 21.00 <br /> Dom 9.00 - 15.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section */}
                    <section className="contact-form-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="live-contact">
                                        <div className="image"><img src="/assets/images/resource/image-40.jpg" alt="" /></div>
                                        <div className="content">
                                            <div className="icon" style={{color:"#e91e63"}}><span className="flaticon-support-1" /></div>
                                            <h4 style={{color:"#0c2957"}}>Chatea con uno de nuestros operadores</h4>
                                            <div className="text" style={{color:"#0c2957"}}>puedes hablar directamente con unos de nuestros operadores  <br /></div>
                                            <div className="link-btn"><Link href="https://jivo.chat/PFAsPegKPB" className="theme-btn btn-style-one text-white" target="_blank" ><span className="btn-title">LIVE CHAT</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="sec-title">
                                        <h2>No lo dude para  <br />  enviarnos un mensaje</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <form method="post" action="assets/inc/sendmail.php" className="contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" className="form-control" name="form_name" placeholder="First Name" required />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="form_email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="form_phone" placeholder="Phone" required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <select className="selectpicker form-control" name="form_subject">
                                                    <option value="*">Discusss about</option>
                                                    <option value=".category-1">Business Aproach</option>
                                                    <option value=".category-2">Trades &amp; Stock Market</option>
                                                    <option value=".category-3">Strategy &amp; Planning</option>
                                                    <option value=".category-4">Software &amp; Research</option>
                                                    <option value=".category-5">Support &amp; Maintenance</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea name="form_message" className="form-control" placeholder="Message goes here" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div className="row m-0 justify-content-between">
                                                    <div className="note mb-30">
                                                        <p>*No compartimos su información con terceros .</p>
                                                    </div>
                                                    <button className="theme-btn btn-style-one mb-30" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Map Section */}
                    <section className="map-section-two">
                        {/*Map Outer*/}
                        <div className="map-outer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}