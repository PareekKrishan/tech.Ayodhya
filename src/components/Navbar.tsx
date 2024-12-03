import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }

        else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [isMenuOpen])

    return (
        <>
            <div className="brand-humburger-box">


                <div className="brand-name">
                    <h1>tech. <span>Ayodhyas</span></h1>
                </div>

                <div className="humburger-btn" onClick={toggleMenu}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>

                </div>




            </div>

            {isMenuOpen && <NavSmallScreen />}

            <NavFullScreen />
        </>
    );
};


const navLinks = [
    { name: 'Home', path: '/' },

    { name: 'About', path: '/About' },

    { name: 'Services', path: '/Services' },

    { name: 'Contact Us', path: '/Contact Us' },
]



const NavFullScreen = () => {




    return (
        <>


            <nav className="navbar-full">

                <div className="brand-name">
                    <h1>tech. <span>Ayodhyas</span></h1>
                </div>





                <div className="nav-links">

                    {navLinks.map((nav) => (
                        <NavLink
                            key={nav.name}
                            to={nav.path}
                            className={({ isActive }) => isActive ? 'selected' : ''}
                        >

                            {nav.name}


                        </NavLink>
                    ))}


                </div>


                <div className="call">
                    <div className="phone-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </div>
                    <div className="phone-no"> Call : +01123456789 </div>
                </div>


                <div className="search-icon">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </a>
                </div>

            </nav>

        </>
    )
}








const NavSmallScreen = () => {
    return (
        <>
            <div className='navbar-small'>






                <div className="nav-contant flex-center">

                    <div className="nav-links flex-center">


                        {navLinks.map((nav) => (
                            <NavLink
                                key={nav.name}
                                to={nav.path}
                            >


                                {nav.name}
                            </NavLink>
                        ))}

                    </div>

                    <div className="call-search flex-center">

                        <div className="call flex-center">

                            <div className="phone-logo ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>

                            <div className="phone-no"> Call : +01123456789 </div>

                        </div>


                        <div className="search-icon">

                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#030365" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </a>

                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Navbar