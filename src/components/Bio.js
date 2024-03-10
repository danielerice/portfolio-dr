import React from "react";
import Me from "../assets/Me.png"
import Background from "./Background";

function Bio () {

    return (
        <>
            <Background/>
            <div className="bioContainer">
                <div className="blurb">
                    <p className="bioP">Hello, my name is Daniel. Welcome to my portfolio!
                        I am a software developer, classically trained chef, United States Coast Guard veteran and board game enthusiast.
                    </p>
                </div>
                <div className="imgContainer">
                    <img src={Me} alt="Me" className="me"/>
                </div>
            </div>
        </>
    )
};

export default Bio;