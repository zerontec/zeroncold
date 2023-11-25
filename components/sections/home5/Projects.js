import Link from "next/link"
import dynamic from 'next/dynamic'
const PortfolioFilter5 = dynamic(() => import('@/components/elements/PortfolioFilter5'), {
    ssr: false,
})

export default function Projects() {
    return (
        <>
            <section className="projects-section-three">
                <div className="auto-container">
                    <div className="sec-title style-four text-center">
                        <h2>Mira como trabajamos  <br /> </h2>
                        <span className="text-decoration-three" />
                    </div>
                   <PortfolioFilter5/>
                    <div className="bottom-text">hemos trabajado duro para impresionarte. <Link href="#">Solicita una Visita técnica  <i className="fa fa-caret-right" /></Link></div>
                </div>
            </section>
        </>
    )
}
