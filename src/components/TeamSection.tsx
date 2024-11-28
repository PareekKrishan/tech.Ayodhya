const TeamSection = () => {
    return (
        <>
            <div className="team-section">


                <div className="heading flex-center">
                    <h2>Meet The Team</h2>
                    <div className="dote"></div>

                </div>
                <div className="sub-heading">
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>



                <div className="card-section flex-center">

                    <CardTeam
                        img="public/images/t-1.png"
                        name="Michel"

                    />

                    <CardTeam
                        img="public/images/t-2.png"
                        name="Jacob"
                        style={{ marginTop: '130px' }}

                    />

                    <CardTeam
                        img="public/images/t-3.png"
                        name="Mary"
                        style={{ marginTop: '230px' }}
                    />

                </div>


            </div>


        </>
    )
}

const CardTeam = (props: any) => {
    return (
        <>
            <div className="team-card-box" style={props.style}>


                <div className="contant-box">
                    <div className="img-box">
                        <img src={props?.img} alt="" />
                    </div>

                    <div className="name">
                        <h2>{props?.name}</h2>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>


                    <div className="social-icon-box flex-center">

                        <a href="#">
                            <img src="public/images/fb.png" alt="fb" />
                        </a>

                        <a href="#">
                            <img src="public/images/twitter.png" alt="tw" />
                        </a>

                        <a href="#">
                            <img src="public/images/linkedin.png" alt="in" />
                        </a>

                        <a href="#">
                            <img src="public/images/insta.png" alt="insta" />
                        </a>

                    </div>


                </div>


                <div className="blue-bg-box ">



                </div>

            </div>


        </>
    )
}
export default TeamSection  