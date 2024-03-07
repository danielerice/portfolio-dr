import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Bio from "./Bio";
import Projects from "./Projects";
import { Link } from "react-router-dom";

function NavBar ({bio, projects, contact}) {

    function scrollToSection(section) {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <nav class="bg-black top-0 absolute w-screen">
            <div class="mx-auto">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                                <Link to="/bio" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Bio</Link>
                                <Link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
                                <Link to="contact" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;