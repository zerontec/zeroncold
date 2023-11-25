'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
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

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // }
}

export default function ContactSlider5() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src="/assets/images/logo-v5.png" alt="" /></div>
                        <h4>Dirección</h4>
                        <ul>
                            <li>236 North 9th Street, Reading, PA, USA</li>
                            <li>Lun - Sab: 08.00am a 9.00pm Dom:9.00am  a  6.00pm</li>
                            <li>+1 484 9084464 &amp; </li>
                            <li>admin@zeroncold.com</li>
                        </ul>
                        <Link href="#" className="read-more-link">Get Direction <i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src="/assets/images/logo-v5.png" alt="" /></div>
                        <h4>Más medios de Contactos</h4>
                        <ul>
                            <li>+1 407 3293838</li>
                            <li>+1 484 9084464 &amp; </li>
                            <li>admin@zeroncold.com</li>
                            <li><button>Chat</button></li>
        
                           
                        </ul>
                        <Link href="#" className="read-more-link">Get Direction <i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide>


                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </Swiper>
        </>
    )
}
