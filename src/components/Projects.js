import React, {useRef} from "react";
import GPT from "../assets/GPT.png";
import Codex from "../assets/Codex.png";
import Medium from "../assets/Medium.png"

function Projects ({projects}) {

    return (
        <div ref={projects} className="container-full justify-content-center gap-12 grid grid-cols-5 relative mt-96">

            <div class="col-start-2 max-w-sm bg-white border border-gray-200 rounded-lg m-auto">
                <a href="#">
                    <img class="rounded-t-lg" src={GPT} alt="GPT" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900">A text-based RPG game</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I used React, Rails and OpenAi's API to create this browser based game</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        GitHub
                    </a>
                    <a href="#" class="inline-flex items-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Demo
                    </a>
                </div>
            </div>

            <div class="col-start-3 max-w-sm bg-white border border-gray-200 rounded-lg m-auto">
                <a href="#">
                    <img class="rounded-t-lg" src={Codex} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900">A recipe organization tool</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This site utilizes React Ruby and Bootstrap to efficiently organize recipes</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        GitHub
                    </a>
                    <a href="#" class="inline-flex items-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Demo
                    </a>
                </div>
            </div>

            <div class="col-start-4 max-w-sm bg-white border border-gray-200 rounded-lg m-auto">
                <a href="#">
                    <img class="rounded-t-lg" src={Medium} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900">My own personal tech blog</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Link
                    </a>
                </div>
            </div>
            

        </div>
    )
};

export default Projects;