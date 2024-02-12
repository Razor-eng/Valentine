import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <Link to={"/"}>
            <div className="container">
                <div className="heart-container">
                    <div className="heart"></div>
                </div>
            </div>
        </Link>
    )
}

export default Navbar
