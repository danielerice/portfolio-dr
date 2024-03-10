import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../assets/BurgerIcon.svg"

function NavBar () {

    return (
        <div className="sticky" id="navContainer">
                <div className="dropdown" style={{float: "right"}}>
                    <button className="dropbtn"><img src={BurgerIcon} className="burger"/></button>
                    <div className="dropdown-content">
                        <Link to="/projects">Link 1</Link>
                        <Link to="/bio">Link 2</Link>
                        <Link to="/contact">Link 3</Link>
                    </div>
                </div>
        </div>
    )
}

export default NavBar;