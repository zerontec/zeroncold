
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="la Empresa" wrapperCls="home_5">
                <div>
                    <section className="about-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 content-column">
                                    <div className="sec-title">
                                        <h2>Profesionales dispuestos a <br /> prestar servicios de calidad </h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">En Zeroncold, nos enorgullece brindar servicios de refrigeración de alta calidad para satisfacer las necesidades de nuestros clientes. Con años de experiencia en el sector, nos hemos convertido en líderes en el mantenimiento, reparación e instalación de sistemas de refrigeración en hogares, oficinas y comercios. </div>
                                    </div>
                                    <div className="author-box">
                                        
                                        <div className="author-info">
                                            <h4>Luis Eduardo Zeron </h4>
                                            <h5>CEO</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="experience-years-block">
                                        <div className="image">
                                            <img src="/assets/images/resource/image-46.jpg" alt="" />
                                            <h2 style={{color:"gray"}}>10</h2>
                                        </div>
                                        <div className="text">Años de  <br /> experiencia</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image"><img src="/assets/images/resource/image-45.jpg" alt="" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2>Razones para elegirnos <br /> </h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-bot" /></div>
                                            <h4>Atención Personalizada  <br /> support</h4>
                                            <div className="text">Nos tomamos el tiempo para entender las necesidades específicas de cada cliente y ofrecer soluciones personalizadas </div>
                                        </div>
                                    </div>
                                    <div className="whay-choose-block">
                                        <div className="inner-box">
                                            <div className="icon"><span className="flaticon-diamond" /></div>
                                            <h4>Experiencia y expertise:  <br /> </h4>
                                            <div className="text">Contamos con una sólida experiencia en el sector de la refrigeración, lo que nos permite ofrecer un servicio de calidad y soluciones eficientes para todo tipo de sistemas.<br /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Funfacts Section Two */}
                   
                    {/* Services Section five */}
                    <section className="services-section-five style-three">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Areas de trabajo</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">Nuestro equipo de técnicos altamente capacitados se compromete a garantizar la eficiencia y el rendimiento óptimo de tus sistemas de refrigeración. Trabajamos estrechamente con nuestros clientes para entender sus necesidades específicas y ofrecer soluciones personalizadas que se ajusten a su presupuesto. <br /> these perfectly simple and easy to distinguish.</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-bank" /></div>
                                            <h4>Hogar  <br /> </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-insurance" /></div>
                                            <h4>Empresa   <br /> </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 service-block-five">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon"><span className="flaticon-trolley" /></div>
                                            <h4>Comercio </h4>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </section>
                    {/* Award Section */}
                    {/* <section className="award-section style-two" style={{ backgroundImage: 'url(assets/images/background/bg-21.jpg)' }}>
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sec-title light">
                                        <h2>Our awards and achivements</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">To take a trivial example, which of us ever undertakes laborious physical exercise, except <br />obtain some advantage from it enjoy a pleasure.</div>
                                    </div>
                                    <div className="wrapper-box">
                                        <div className="row">
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-8.png" alt="" /></div>
                                                    <h4>Best consulting <br /> company</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-9.png" alt="" /></div>
                                                    <h4>Best outsourcing <br /> advisors</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 award-block">
                                                <div className="inner-box">
                                                    <div className="image"><img src="/assets/images/resource/award-10.png" alt="" /></div>
                                                    <h4>Customer choice for <br /> support</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-text">We have won 27 more awards in our career. <Link href="#">View All Awards <i className="flaticon-right" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* Testimonail Section Two */}
                  
                    {/* Client Logo */}
                    <section className="client-section-two style-three">
                        <div className="auto-container">
                            <div className="top-content row m-0 align-items-center justify-content-between">
                                <div className="sec-title">
                                    <h2>Orgullosos de Trabajar para usted </h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="text">Además, nos mantenemos actualizados con las últimas tecnologías y tendencias en refrigeración para asegurarnos de brindar servicios de vanguardia. Ya sea que necesites una reparación rápida, una instalación completa o un mantenimiento regular, puedes confiar en nuestro equipo experto.</div>
                            </div>
                            {/* <div className="wrapper-box">
                                <div className="outer-box">
                                    <div className="row m-0">
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-7.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-8.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-9.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-10.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-11.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-12.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-13.png" alt="" /></div>
                                        </div>
                                        <div className="column col-lg-3 col-md-6">
                                            <div className="image"><img src="/assets/images/resource/client-14.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}