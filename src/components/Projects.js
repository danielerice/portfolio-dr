import React, {useRef} from "react";
import Background from "./Background"
import GPT from "../assets/GPT.png";
import Codex from "../assets/Codex.png";
import Medium from "../assets/Medium.png"

function Projects ({projects}) {

    return (
        <>
            <Background/>
            <div className="projects-container">
                <div class="project-card">
                    <a href="#">
                        <img class="" src={GPT} alt="GPT" />
                    </a>
                    <div class="">
                        <a href="#">
                            <h5 class="">A text-based RPG game</h5>
                        </a>
                        <p class="">I used React, Rails and OpenAi's API to create this browser based game</p>
                        <a href="#" class="">
                            GitHub
                        </a>
                        <a href="#" class="">
                            Demo
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <a href="#">
                        <img class="" src={Codex} alt="" />
                    </a>
                    <div class="">
                        <a href="#">
                            <h5 class="">A recipe organization tool</h5>
                        </a>
                        <p class="">This site utilizes React Ruby and Bootstrap to efficiently organize recipes</p>
                        <a href="#" class="">
                            GitHub
                        </a>
                        <a href="#" class="">
                            Demo
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <a href="#">
                        <img class="" src={Medium} alt="" />
                    </a>
                    <div class="">
                        <a href="#">
                            <h5 class="">My own personal tech blog</h5>
                        </a>
                        <p class="">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" class="">
                            Link
                        </a>
                    </div>
                </div>
                

            </div>
        </>
    )
};

export default Projects;