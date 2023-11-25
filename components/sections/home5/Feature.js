import Link from "next/link"


export default function Feature() {
    return (
        <>
            <section className="feature-section-six">
                <div className="auto-container">
                    <div className="wrapper-box">
                        <div className="row">
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-27.png" alt="" /></div>
                                    <h4>Rapida Respuesta  </h4>
                                    <div className="text">Reportes inmediatos a  <br /> técnicos en el campo. </div>
                                    {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                </div>
                            </div>
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-27.png" alt="" /></div>
                                    <h4>Personal Experimentado </h4>
                                    <div className="text">Contamos con un equipo altamente experimentados  <br /></div>
                                    {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                </div>
                            </div>
                            <div className="col-lg-4 feature-block-six">
                                <div className="inner-box">
                                    <div className="icon"><img src="/assets/images/icons/icon-27.png" alt="" /></div>
                                    <h4>Soporte Personalizado</h4>
                                    <div className="text">Hacemos seguimiento antes durante y despues  <br />de cada trabajo . </div>
                                    {/* <Link href="#" className="read-more-link">Read More <i className="fa fa-caret-right" /></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
