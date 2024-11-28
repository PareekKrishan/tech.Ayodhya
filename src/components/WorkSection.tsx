const WorkSection = () => {
    return (
        <>
            <div className="work-section">

                <div className="heading-section flex-center">
                    <h2>How We Work</h2>
                    <div className="dote"></div>
                </div>

                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                <div className="work-detail-box flex-center">

                    <div className="card-box flex-center">
                        <CardWork

                            icon="public/images/work-i1.png"
                            heading="We Generate A Good Idea Frist"

                        />
                        <CardWork

                            icon="public/images/work-i2.png"
                            heading="Then We Start Applying Ideas"

                        />


                    </div>

                    <div className="img-box">
                        <img src="public/images/work-img.png" alt="img" />
                    </div>

                </div>


                <div className="btn">
                    <a href="#">Read More</a>
                </div>

            </div>
        </>
    )
}

const CardWork = (props: any) => {
    return (
        <>
            <div className="work-card">

                <div className="icon-heading-box flex-center">
                    <div className="icon">
                        <img src={props?.icon} alt="icon" />
                    </div>
                    <h2>{props?.heading}</h2>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            </div>
        </>
    )
}
export default WorkSection  