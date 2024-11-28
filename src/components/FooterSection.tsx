import { NavLink } from "react-router-dom"

const FooterSection = () => {


    const navLinks = [
        { name: 'Home', path: '/' },

        { name: 'About', path: '/About' },

        { name: 'Services', path: '/Services' },

        { name: 'Contact Us', path: '/Contact Us' },
    ]


    return (
        <>

            <div className="footer-section">


                <div className="heading flex-center">

                    <h2>Get in touch</h2>
                    <div className="dote"></div>

                </div>

                <div className="form-container">

                    <div className="row">

                        <div className='col-lg-6 col-md-8 mx-auto'>

                            <form action="#" method='post'>

                                <div className="form-row">

                                    <div className="form-group col-md-6 col-12">
                                        <input type="text" className='form-control' placeholder='Name' />
                                    </div>


                                    <div className="form-group col-md-6 col-12">
                                        <input type="email" className='form-control' placeholder='Email id' />
                                    </div>

                                </div>

                                <div className="form-row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Message" />
                                </div>

                                <div className="button">
                                    <button>SEND</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>






                <div className="footer-details">

                    <div className="brand-detail detail">

                        <h2>tech. <span>Ayodhyas</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indidunt ut labore et dolore magna</p>

                    </div>


                    <div className="links-detail detail">

                        <h2>BASIC LINKS</h2>

                        <div className="links flex-center">

                            {navLinks.map((nav) => (
                                <NavLink
                                    key={nav.name}
                                    to={nav.path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >

                                    {nav.name}
                                </NavLink>
                            ))}

                        </div>

                    </div>


                    <div className="contact-detail detail">

                        <h2>CONTACT DETAILS</h2>

                        <div className="phone contact-footer">

                            <div className="phone-logo-box">
                                <img src="public/images/telephone-white.png" alt="mobile-no" />
                            </div>

                            <p>+01 1234567890</p>

                        </div>


                        <div className="mail contact-footer">

                            <div className="mail-logo-box">
                                <img src="public/images/envelope-white.png" alt="emial" />
                            </div>


                            <p>mail@domain.com</p>

                        </div>



                    </div>


                    <div className="news-detail detail">

                        <h2>NEWSLETTER</h2>

                        <form action="#" method='post' className='form-footer flex-center'>

                            <input type="email" name="email" placeholder='Enter your email' />
                            <button>SUBSCRIBE</button>

                        </form>

                        <div className="social-box flex-center">

                            <a href="#" className='fb'>
                                <img src="public/images/info-fb.png" alt="social-logo" />
                            </a>

                            <a href="#" className='twr'>
                                <img src="public/images/info-twitter.png" alt="social-logo" />
                            </a>

                            <a href="#" className='in'>
                                <img src="public/images/info-linkedin.png" alt="social-logo" />
                            </a>

                            <a href="#" className='yt'>
                                <img src="public/images/info-youtube.png" alt="social-logo" />
                            </a>


                        </div>

                    </div>

                </div>

                <div className="copy-rights flex-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />

                    </svg><span>2028 All Rights Reserved. By tech.Ayodhyas</span>



                </div>

            </div>

        </>
    )
}

export default FooterSection