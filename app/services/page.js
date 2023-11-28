
import Layout from "@/components/layout/Layout"
import ServiceSlider4 from "@/components/slider/ServiceSlider4"
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5"
import VideoSlider13 from "@/components/slider/VideoSlider13"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Servicios" wrapperCls="home_5">
                <div>
                    <section className="services-section-six">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Professionales <br /> dedicados  ofrecercer sus servicios </h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-34.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-up" /></div>
                                                <h4>Mantenimiento preventivo:</h4>
                                            </div>
                                            <div className="overlay"><Link href="/finance-restructuring"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Ofrecemos servicios de mantenimiento regular para asegurar el óptimo funcionamiento de los sistemas de refrigeración. Realizamos inspecciones, limpieza, ajustes y pruebas para evitar problemas futuros.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-35.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h4>Reparación de sistemas de refrigeración</h4>
                                            </div>
                                            <div className="overlay"><Link href="/audit-assurance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Nuestro equipo de técnicos altamente capacitados está preparado para diagnosticar y reparar cualquier tipo de avería en sistemas de refrigeración, incluyendo compresores, evaporadores, condensadores y sistemas de control.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-36.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-business-and-finance" /></div>
                                                <h4>Instalación de sistemas de refrigeración:</h4>
                                            </div>
                                            <div className="overlay"><Link href="/trades-stock-markets"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Brindamos servicios completos de instalación de sistemas de refrigeración, ya sea para hogares, oficinas o comercios. Nos encargamos de todo el proceso, desde el diseño hasta la puesta en marcha del sistema.</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-37.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>Servicio de carga de refrigerante:</h4>
                                            </div>
                                            <div className="overlay"><Link href="/strategy-planning"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Realizamos la recarga de refrigerante en sistemas de aire acondicionado y refrigeración, asegurando el correcto nivel de refrigerante para un rendimiento óptimo y eficiencia energética.</div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-38.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-thought" /></div>
                                                <h4>Optimización de sistemas de refrigeración:</h4>
                                            </div>
                                            <div className="overlay"><Link href="/software-research"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Analizamos y evaluamos los sistemas existentes para identificar posibles mejoras en términos de eficiencia energética y rendimiento. Podemos ofrecer soluciones y recomendaciones para optimizar el funcionamiento de los sistemas.</div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/images/resource/image-39.jpg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-gear-1" /></div>
                                                <h4>Reparación y mantenimiento de equipos de refrigeración comercial: </h4>
                                            </div>
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Nos especializamos en la reparación y mantenimiento de equipos de refrigeración comercial como vitrinas, cámaras frigoríficas, congeladores y enfriadores de bebidas.</div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    {/* Services Section five */}
                  
                    {/* Testimonail Section Seven */}
                    <section className="testimonial-section-seven">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Muchos más Servicios </h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            {/*Theme Carousel*/}
                            <TestimonialSlider5 />
                        </div>
                    </section>
                    {/* Feature Section Two */}

                        <ServiceSlider4/>   

                        <hr/>
                              
                        <div className="widget widget_contact" style={{ backgroundImage: 'url(assets/images/background/bg-25.jpg)' }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Tiene alguna duda?</h4>
                                                <div className="phone-number"><Link href="tel:+14073293838">+1 407 329 3838</Link></div>
                                                <div className="email"><Link href="mailto:admin@zeroncold.com">admin@zeroncold.com</Link></div>
                                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">Reservar cita</span>
                                                </Link></div>
                                            </div>
                                        </div>
                   
                </div>

            </Layout>
        </>
    )
}