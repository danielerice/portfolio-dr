import React from "react";
import Me from "../assets/Me.png"
import Background from "./Background";
import GitHubLogo from "../assets/GitHubLogo.svg"
import LinkedInLogo from "../assets/LinkedInLogo.svg"
import Open from "../assets/Open.svg"

function Bio () {

    return (
        <>
            <Background/>
            <div className="bioContainer">
                <div className="blurbs-container">
                    <h1 className="bio-header">~ABOUT ME~</h1>
                    <div className="blurb">
                        <p className="bioP">Experienced Coast Guard veteran, classically trained chef,
                         and eager full-stack web developer proficient in JavaScript and Ruby. 
                         Specialized in Rails and React.js, my insatiable curiosity and strong work ethic 
                         drive me to continuously expand my programming expertise. Known for asking insightful 
                         questions that propel me towards continuous learning and growth in the dynamic field of 
                         computer programming.
                        </p>
                    </div>
                    <div className="links">
                        <a
                            rel="apple-touch-icon"
                            href="https://github.com/danielerice"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={GitHubLogo} className="icon"/>
                        </a>
                        <a
                            className="resume"
                            target="_blank"
                            href="https://www.dropbox.com/scl/fi/4s08r3e22lqabb31gtz7b/Daniel-Rice-s-Resume.pdf?rlkey=wmne178mmn74jf3vrdbiughq0&dl=0"
                        >CV<img src={Open} className="open"/></a>
                        <a
                            rel="apple-touch-icon"
                            href="https://www.linkedin.com/in/daniel-rice-1406a52a3/"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={LinkedInLogo} className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={Me} alt="Me" className="me"/>
                </div>
            </div>
        </>
    )
};

export default Bio;