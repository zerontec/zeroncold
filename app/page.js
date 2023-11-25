import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home5/About"
import Banner from "@/components/sections/home5/Banner"
import Cases from "@/components/sections/home1/Cases"
import Clients from "@/components/sections/home1/Clients"
import Cta from "@/components/sections/home1/Cta"
import Feature from "@/components/sections/home5/Feature"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import Map from "@/components/sections/home1/Map"
import News from "@/components/sections/home5/News"
import Pricing from "@/components/sections/home1/Pricing"
import Services from "@/components/sections/home5/Services"
import Process from "@/components/sections/home5/Process"
import Testimonial from "@/components/sections/home5/Testimonial"
import WhyChooseUs from "@/components/sections/home5/WhyChooseUs"
import Projects from "@/components/sections/home5/Projects"
import Award from "@/components/sections/home5/Award"
import Contact from "@/components/sections/home5/Contact"
import Client from "@/components/sections/home5/Client"
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={3} wrapperCls="home_5">
                <Banner />

                
                <Feature />
                <About />
                <Services />
                <Process />
                <WhyChooseUs />
                {/* <Projects /> */}
                {/* <Services />
                <Testimonial /> */}
                
                {/* <News /> */}
                {/* <Award /> */}
                <Client />
                <Contact />
                

           
            </Layout>
        </>
    )
}