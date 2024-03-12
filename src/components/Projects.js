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
                            href="https://github.com/danielerice/GPTQuest"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={GitHubLogo} className="project-icon"/>
                        </a>
                        <a href="https://www.loom.com/share/af0489adeb784b2d908fcfdb845306e2?sid=ca14765e-922b-466a-8fc5-1b2e0558c9fe" className="link" target="_blank">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={Codex} alt="" />
                <div >
                    <h5 >Recipe Codex</h5>
                    <p >This site utilizes React Ruby and Bootstrap to efficiently organize recipes</p>
                    <div className="project-links">
                        <a
                            rel="apple-touch-icon"
                            href="https://github.com/danielerice/Recipe-Codex"
                            target="_blank"
                            type="image/png" 
                        >
                            <img src={GitHubLogo} className="project-icon"/>
                        </a>
                        <a href="https://www.loom.com/share/64f2617a835546b0972b6fdf990efa5d?sid=9a7eeb0e-65d0-4eef-ad2c-5db75463a0af" className="link" target="_blank">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={Medium} alt="" />
                <div>
                    <h5 >My Personal Blog</h5>
                    <p >Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="project-links">
                        <a href="https://medium.com/@danielrice5627" className="link" target="_blank">
                            Link
                        </a>
                    </div>
                </div>
            </div>
            

        </div>
    )
};

export default Projects;