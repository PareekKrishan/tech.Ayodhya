const Services = () => {
    return (
        <>
            <div className="services-section">

                <div className="heading flex-center">
                    <h2>Our Services</h2>
                    <div className="dote"></div>
                </div>

                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="card-section">


                    <CardServicer

                        icon="public/images/s-1.png"
                        name="Brand Promotion"

                    />

                    <CardServicer

                        icon="public/images/s-2.png"
                        name="Video Marketing"

                    />

                    <CardServicer

                        icon="public/images/s-3.png"
                        name="Site Analysis"

                    />

                    <CardServicer

                        icon="public/images/s-4.png"
                        name="Social Media Marketing"

                    />

                    <CardServicer

                        icon="public/images/s-5.png"
                        name="SEO Optimization"

                    />



                </div>

            </div>


        </>
    )
}

const CardServicer = (props: any) => {
    return (
        <>
            <div className="service-card-contant">


                <div className="icon-box flex-center">
                    <img src={props?.icon} alt="icon" />
                </div>


                <h2 className='service-name'>{props?.name}</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


            </div>
        </>
    )
}

export default Services  