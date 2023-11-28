'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function ServiceSlider4() {
    return (
        <>
            <div className="position-relative">
                <Swiper {...swiperOptions} className="theme_carousel">
             
                    <SwiperSlide className="service-block-three">
                        <div className="inner-box">
                            <div className="image"><div className="image"><img src="/assets/images/resource/image-23.jpg" alt="" /></div></div>
                            <div className="content">
                                <div className="icon"><span className="flaticon-customer-service" /></div>
                                <h4>Optimización de eficiencia energética:</h4>
                                <Link href="#" className="read-more-link">Leer más <i className="fa fa-caret-right" /></Link>
                            </div>
                            <div className="overlay-content">
                                <div className="content-wrapper">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-customer-service" /></div>
                                        <h4>Optimización de eficiencia energética:</h4>
                                    </div>
                                    <div className="outer-box">
                                        <div className="text">Optimizar el consumo de energía de sus sistemas de refrigeración, lo que puede resultar en ahorros significativos en los costos de energía.</div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="service-block-three">
                        <div className="inner-box">
                            <div className="image"><img src="/assets/images/resource/image-22.jpg" alt="" /></div>
                            <div className="content">
                                <div className="icon"><span className="flaticon-career" /></div>
                                <h4>Instalación y mantenimiento de <br />sistemas de Refrigeración </h4>
                                <Link href="#" className="read-more-link">Leer más <i className="fa fa-caret-right" /></Link>
                            </div>
                            <div className="overlay-content">
                                <div className="content-wrapper">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-career" /></div>
                                        <h4>Instalación y mantenimiento de <br />sistemas de Refrigeración </h4>
                                    </div>
                                    <div className="outer-box">
                                        <div className="text"> instalación y mantenimiento de sistemas de refrigeración en entornos comerciales, como restaurantes, supermercados y tiendas minoristas.</div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className="service-block-three">
                        <div className="inner-box">
                            <div className="image"><img src="/assets/images/resource/image-23.jpg" alt="" /></div>
                            <div className="content">
                                <h4>Carga de gas refrigerante</h4>
                                <div className="icon"><span className="flaticon-question" /></div>
                                <Link href="#" className="read-more-link">Leer más<i className="fa fa-caret-right" /></Link>
                            </div>
                            <div className="overlay-content">
                                <div className="content-wrapper">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-question" /></div>
                                        <h4> Carga de gas refrigerante</h4>
                                    </div>
                                    <div className="outer-box">
                                        <div className="text">recarga y reemplazo de gas refrigerante en sus sistemas de refrigeración, asegurándote de que funcionen de manera óptima.
                                         
                                        </div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className="service-block-three">
                        <div className="inner-box">
                            <div className="image"><div className="image"><img src="/assets/images/resource/image-24.jpg" alt="" /></div></div>
                            <div className="content">
                                <div className="icon"><span className="flaticon-customer-service" /></div>
                                <h4>Limpieza y Desifección</h4>
                                <Link href="#" className="read-more-link">Leer más <i className="fa fa-caret-right" /></Link>
                            </div>
                            <div className="overlay-content">
                                <div className="content-wrapper">
                                    <div className="icon-box">
                                        <div className="icon"><span className="flaticon-customer-service" /></div>
                                        <h4>Limpieza y Desifección</h4>
                                    </div>
                                    <div className="outer-box">
                                        <div className="text">Servicio de limpieza y desinfección de sistemas de aire acondicionado: servicio especializado para limpiar y desinfectar los sistemas de aire acondicionado, eliminando la acumulación de suciedad, polvo y gérmenes.</div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>



                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </div>
        </>
    )
}
