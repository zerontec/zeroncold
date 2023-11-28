'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="FAQ’S" wrapperCls="home_5">
                <div>
                    <section className="faq-section-two">
                        <div className="auto-container">
                            <div className="top-content text-center">
                                <div className="icon"><img src="/assets/images/icons/icon-40.png" alt="" /></div>
                                <h2>Como podemos ayudarte  </h2>
                                <form action="#">
                                    <input type="email" placeholder="Enter Your Keyword" />
                                    <button className="fa fa-search" />
                                </form>
                                <div className="text">cual es su pregunta? <Link href="mailto:admin@zeroncold.com" /> (or) <Link href="tel:+1 484 9084464">+1 484 9084464</Link></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="accordion-box style-two mb-30">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   ¿Cuánto tiempo se tarda en instalar un sistema de aire acondicionado?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">La duración de la instalación puede variar dependiendo del tipo de sistema y las características específicas de tu espacio. En general, la instalación puede tomar de unas pocas horas a varios días.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02. ¿Cuál es la mejor marca de sistemas de aire acondicionado que recomiendan?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Como proveedores de servicios de refrigeración, trabajamos con una variedad de marcas reconocidas y confiables. Recomendamos evaluar tus necesidades y presupuesto para determinar la mejor opción para ti.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.¿Cuál es la vida útil promedio de un sistema de refrigeración?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">La vida útil de un sistema de refrigeración puede variar según el mantenimiento adecuado y el uso regular. En general, se espera que los sistemas de refrigeración duren entre 10 y 15 años, pero es posible que algunos duren más con un buen cuidado.


                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="accordion-box style-two mb-30">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>04.   ¿Cuánto cuesta el mantenimiento preventivo de un sistema de refrigeración?</div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">El costo del mantenimiento preventivo puede variar según el tamaño y tipo de sistema de refrigeración. Te invitamos a contactarnos para obtener un presupuesto personalizado según tus necesidades específicas.


                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>05.  ¿Cuáles son los signos de que mi sistema de aire acondicionado necesita ser reparado?</div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Algunos signos comunes de que tu sistema de aire acondicionado puede necesitar reparación incluyen la falta de enfriamiento adecuado, ruidos inusuales, fugas de refrigerante o problemas con el flujo de aire.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>06.  ¿Qué debo hacer si mi sistema de refrigeración no enfría lo suficiente?</div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Si tu sistema de refrigeración no enfría lo suficiente, recomendamos verificar el filtro de aire, asegurarte de que las rejillas de ventilación no estén bloqueadas y verificar si hay fugas de refrigerante. Si los problemas persisten, es mejor comunicarse con un profesional para una evaluación más precisa.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="contact-section style-two pt-0">
                        <div className="auto-container">
                            {/* Subscribe Newsletter */}
                            <div className="subscribe-newsletter">
                                <div className="sec-title light text-center">
                                    <h2>Newsletter Subscription</h2>
                                    <div className="text">Subscribe us and get news, offers and all updates in Envolve to  your inbox directly</div>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="form-group">
                                        <i className="flaticon-mail" />
                                        <input type="text" placeholder="Enter your email address..." />
                                        <button type="submit" className="btn-style-four"><span className="btn-title">Subscribe Us</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}