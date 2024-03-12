import React, {useRef} from "react";
import Background from "./Background"
import GPT from "../assets/GPT.png";
import Codex from "../assets/Codex.png";
import Medium from "../assets/Medium.png";
import GitHubLogo from "../assets/GitHubLogo.svg"

function Projects ({projects}) {

    return (
        <>
            <Background/>
            <div className="projects-container">
                <div className="project-card">
                    <img class="" src={GPT} alt="GPT"/>
                    <div className="">
                        <h5 className="">A text-based RPG game</h5>
                        <p className="">I used React, Rails and OpenAi's API to create this browser based game</p>
                        <div className="links">
                            <a
                                rel="apple-touch-icon"
                                href="https://github.com/danielerice"
                                target="_blank"
                                type="image/png" 
                            >
                                <img src={GitHubLogo} className="project-icon"/>
                            </a>
                            <a href="#" class="">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <a href="#">
                        <img className="" src={Codex} alt="" />
                    </a>
                    <div className="">
                        <h5 className="">A recipe organization tool</h5>
                        <p className="">This site utilizes React Ruby and Bootstrap to efficiently organize recipes</p>
                        <div className="links">
                            <a
                                rel="apple-touch-icon"
                                href="https://github.com/danielerice"
                                target="_blank"
                                type="image/png" 
                            >
                                <img src={GitHubLogo} className="project-icon"/>
                            </a>
                            <a href="#" class="">
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
                        <h5 className="">My own personal tech blog</h5>
                        <p className="">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <div className="links">
                            <a href="#" className="">
                                Link
                            </a>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
};

export default Projects;