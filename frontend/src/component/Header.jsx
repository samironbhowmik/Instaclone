import "../assets/header.css"
import { Link } from "react-router-dom";
import icon from "../images/icon.png";
import camera from "../images/camera.png";
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={icon} alt="" srcset="" />
                    <p>Instaclone</p>
                </div>
                <div className="camera">
                    <Link to="/upload">
                        <img src={camera} alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;