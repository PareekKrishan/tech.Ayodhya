import About from "./components/About"
import FooterSection from "./components/FooterSection"
import Header from "./components/Header"
import Services from "./components/Services"
import TeamSection from "./components/TeamSection"
import TestimonialSection from "./components/TestimonialSection"
import WorkSection from "./components/WorkSection"

const HomePage = () => {
    return (
        <>

            <Header />
            <About />
            <Services />
            <WorkSection />
            <TeamSection />
            <TestimonialSection />
            <FooterSection />

        </>
    )
}

export default HomePage