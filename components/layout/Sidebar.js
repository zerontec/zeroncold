import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
            <section className={`hidden-sidebar ${isSidebar ? "" : "close-sidebar"}`} style={{ right: `${isSidebar ? "0" : "-480px"}`, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                <div className="wrapper-box">
                    <div className="hidden-sidebar-close" onClick={handleSidebar}><span className="flaticon-remove" /></div>
                    <div className="logo"><Link href="#"><img src="/assets/images/logo-v5.png" alt="" /></Link></div>
                    <div className="content">
                        <div className="about-widget-two sidebar-widget">
                            <h3>Solicite una Vista Técnica <br /> </h3>
                            <div className="text">Puede solicitar una visita Técnica facilmente solo haga clik a el boton de abajo  llenado el formulario, luego de ello nos comunicaremos con usted para confirmar  .</div>
                        </div>
                        {/* News Widget */}
                        {/* <div className="news-widget sidebar-widget">
                            <div className="widget-title">News &amp; Updates</div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-1.jpg" alt="" /></Link></div>
                                <div className="category">Business Plans</div>
                                <h4><Link href="/blog-details">How to Manage Business’s <br />Online Reputation</Link></h4>
                            </div>
                            <div className="post-wrapper">
                                <div className="image"><Link href="/blog-details"><img src="/assets/images/resource/news-2.jpg" alt="" /></Link></div>
                                <div className="category">Marketing Stratergy</div>
                                <h4><Link href="/blog-details">Inside our Daily Routines as a <br />Good Consultant</Link></h4>
                            </div>
                        </div> */}
                        {/* Newsletter Widget */}
                        <div className="newsletter-widget">
                            {/* <div className="widget-title">Newsletter Subscription</div> */}
                            {/* <form action="#">
                                <input type="email" placeholder="Enter Email Address" />
                               
                            </form> */}
                            <button className="theme-btn btn-style-one"><span className="btn-title">Solicitar</span></button>
                        </div>
                    </div>
                </div>
            </section >






        </>
    )
}
