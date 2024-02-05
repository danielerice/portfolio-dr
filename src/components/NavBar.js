import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Bio from "./Bio";
import Projects from "./Projects";

function NavBar ({bio, projects, contact}) {

    function scrollToSection(section) {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <nav class="bg-black top-0">
            <div class="mx-auto">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <button onClick={() => scrollToSection(bio)} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Bio</button>
                                <button onClick={() => scrollToSection(projects)} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</button>
                                <button onClick={() => scrollToSection(contact)} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;