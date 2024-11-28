import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
            <div className="header-section">
                <Navbar />
                <HeaderContant />


            </div>
        </>
    )
}





const HeaderContant = () => {
    return (
        <>
            <div className="header-contant flex-center">

                <div className="contant-text">


                    <h1>The best Marketing</h1>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking</p>

                    <div className="btn flex-center">
                        <a href="#" className='contact-us'>Contact Us</a>
                        <a href="#" className='quote'>Get a Quote</a>
                    </div>


                </div>


                <div className="contant-image">
                    <img src="public/images/slider-img.png" alt="img" />
                </div>
            </div>
        </>
    )
}
export default Header  