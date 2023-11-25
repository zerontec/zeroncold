import Link from "next/link"


export default function Process() {
    return (
        <>
            <section className="process-section-four">
            <div style={{color:"white", paddingBottom:30, marginBottom:30, marginLeft:50 }}><h1>Parte de El proceso:</h1></div>
                <div className="auto-container">
       
                    <div className="row">
                        
                        <div className="col-lg-4 process-block-four">
                          
                            <div className="inner-box">
                                <div className="icon"><img src="/assets/images/icons/icon-28.png" alt="" /></div>
                                <h4>Realice Cita</h4>
                                <div className="text">Contactenos por algunos de nuestros medios  <br />  Telefono, webchat, email, cita online  <br /> todos aqui.</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-four">
                            <div className="inner-box">
                                <div className="icon"><img src="/assets/images/icons/icon-29.png" alt="" /></div>
                                <h4>Visita Técnica</h4>
                                <div className="text">Nuestros técnicos en el campo son informados  <br /> y acudiran a darle respuesta inmediata <br /> hacemos seguimiento constante de ello  .</div>
                            </div>
                        </div>
                        <div className="col-lg-4 process-block-four">
                            <div className="inner-box">
                                <div className="icon"><img src="/assets/images/icons/icon-30.png" alt="" /></div>
                                <h4>Implementación de solución</h4>
                                <div className="text">De ser el caso nuestros técnico implementaran la solución  <br /> inmediatamente de ser reportado como listo se hara el seguimiento  <br /></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text">Quiere realizar una solicitud de trabajo  <Link href="#">Realicela aqui  <i className="fa fa-caret-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
