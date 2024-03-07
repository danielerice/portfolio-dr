import React from "react";
import NavBar from "./NavBar";

function Home () {
    return (
        <div className="container mx-auto py-56 text-center relative">
            <p className="text-center sm:text-left ml-20 text-xs sm:visible sm:text-s md:text-xl cursor-default">Hi, I'm Daniel,</p>
            <h1 className="subpixel-antialiased cursor-default py-3 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ">Software Developer</h1>
            <h1 className="subpixel-antialiased cursor-default py-3 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ">and Lifelong Learner</h1>
            <p className="text-right px-40 invisible sm:visible text-xs sm:text-m md:text-xl cursor-default">I like building things</p>
            <p className="text-right px-20 invisible text-xs sm:visible sm:text-m md:text-xl cursor-default">connecting with people</p>
            <p className="text-right px-10 invisible text-xs sm:visible sm:text-m md:text-xl cursor-default">and solving puzzles</p>
        </div>
    )
};

export default Home;