const TestimonialSection = () => {
    return (
        <>

            <div className="testimonial-section">


                <div className="testimonial-heading-flex">

                    <div className="heading">

                        <h2>Testimonial</h2>
                        <div className="dote"></div>

                    </div>

                    <div className="sub-heading">
                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>

                <div className="card-section">

                    <CardTestimonial />

                    <CardTestimonial />

                </div>



            </div>

        </>
    )
}

export default TestimonialSection


const CardTestimonial = () => {
    return (
        <>

            <div className="card-box-testimonial">

                <div className="img-name-box">

                    <div className="img-box">
                        <img src="public/images/client.png" alt="img" />
                    </div>

                    <div className="client-name">
                        <h2>Normal distribution</h2>
                    </div>


                </div>

                <div className="client-cmt">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making it look</p>
                </div>

                <div className="quote">
                    <img src="public/images/quote.png" alt="quote" />
                </div>



            </div>

        </>
    )
}