import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../assets/BurgerIcon.svg"

function NavBar () {

    return (
        <div className="sticky" id="navContainer">
                <div className="dropdown" style={{float: "right"}}>
                    <button className="dropbtn" role="button"><img src={BurgerIcon} className="burger"/></button>
                    <div className="dropdown-content">
                        <Link to="/projects">projects</Link>
                        <Link to="/bio">bio</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                </div>
        </div>
    )
}

export default NavBar;