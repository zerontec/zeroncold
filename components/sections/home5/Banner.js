import Link from "next/link"


export default function Banner() {
    return (
        <>
            <section className="banner-section-two">
                <div className="shape-one"><img src="/assets/images/shape/shape-11.png" alt="" /></div>
                <div className="shape-two"><img src="/assets/images/shape/shape-12.png" alt="" /></div>
                <div className="shape-three"><img src="/assets/images/shape/shape-13.png" alt="" /></div>
                <div className="shape-four"><img src="/assets/images/shape/shape-14.png" alt="" /></div>
                <div className="shape-five"><img src="/assets/images/shape/shape-15.png" alt="" /></div>
                <div className="shape-six"><img src="/assets/images/shape/shape-16.png" alt="" /></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div>
                            <h2>Especialistas <br /> <span>en equipos   </span> de Refrigeración</h2>
                            <div className="text">Prestamos Servicios de mantenimiento y Reparación equipos de refrigeración <br />no dudes en contactarnos estamos para servirles.</div>
                            <div className="btn-box">
                                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Conoce más <i className="fa fa-caret-right" /></span></Link>
                                <Link href="#" className="theme-btn btn-style-six">Como Trabajamos <i className="fa fa-caret-right" /></Link>
                            </div>
                        </div>
                        <div className="image"><img src="/assets/images/main-slider/mockup-1.png" alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
