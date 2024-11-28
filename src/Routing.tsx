import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ServicesPage from "./ServicesPage"
import ContactUsPage from "./ContactUsPage"



function Routing() {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/About" element={<AboutPage />} />

                    <Route path="/Services" element={<ServicesPage />} />

                    <Route path="/Contact us" element={<ContactUsPage />} />




                </Routes>

            </BrowserRouter>

        </>
    )
}


export default Routing