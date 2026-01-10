import React, {useState} from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../assets/BurgerIcon.svg"

function NavBar () {

    const [show ,setShow] = useState(false);

    return (
        <div className="sticky" id="navContainer">
                <p className="navBlurb" style={{float: "left", fontWeight: 600}}>Daniel Rice - Software Developer</p>
                <div className="dropdown" style={{float: "right"}}>
                    <button onClick={() => setShow(!show)} className="dropbtn" role="navagation menu toggle"><img src={BurgerIcon} className="burger"/></button>
                    <div className={ show ? "dropdown-content show" : "dropdown-content"}>
                        <Link to="/" role="internal link to bio">Bio</Link>
                        <Link to="/projects" role="internal link to projects">Projects</Link>
                        <Link to="/contact" role="internal link to Contact info">Contact</Link>
                    </div>
                </div>
        </div>
    )
}

export default NavBar;