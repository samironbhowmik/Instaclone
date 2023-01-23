import { Link } from "react-router-dom";
import "../assets/landing.css"
import LandingImgage from "../images/landing.png"

const Landing = () => {
    return (
        <>
            <div className="landing-container">
                <div className="landing-left">
                    <div className="landing-left-img">
                        <img src={LandingImgage} alt="" srcset="" />
                    </div>
                </div>
                <div className="landing-right">
                    <div className="landing-right-content">
                        <h2>10x Team 04</h2>
                        <Link to="/postview">
                            <button>Enter</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;