import React, {useRef} from "react";
import GPT from "../assets/GPT.png";
import Codex from "../assets/Codex.png";
import Medium from "../assets/Medium.png";
import GitHubLogo from "../assets/GitHubLogo.svg"

function Projects ({projects}) {

    return (
        <div className="projects-container">
            <div className="project-card">
                <img src={GPT} alt="GPT"/>
                <div >
                    <h5 >GPT Quest</h5>
                    <p >I used React, Rails and OpenAi's API to create this browser based game</p>
                    <div className="project-links">
                        <a
                            rel="apple-touch-icon"
                            href="https://github.com/danielerice"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={GitHubLogo} className="project-icon"/>
                        </a>
                        <a href="#" className="link">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <a href="#">
                    <img src={Codex} alt="" />
                </a>
                <div >
                    <h5 >Recipe Codex</h5>
                    <p >This site utilizes React Ruby and Bootstrap to efficiently organize recipes</p>
                    <div className="project-links">
                        <a
                            rel="apple-touch-icon"
                            href="https://github.com/danielerice"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={GitHubLogo} className="project-icon"/>
                        </a>
                        <a href="#" className="link">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <a href="#">
                    <img className="" src={Medium} alt="" />
                </a>
                <div class="">
                    <h5 >My Personal Blog</h5>
                    <p >Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="project-links">
                        <a href="#" className="link">
                            Link
                        </a>
                    </div>
                </div>
            </div>
            

        </div>
    )
};

export default Projects;