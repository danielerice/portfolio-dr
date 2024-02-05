import React, {useRef} from "react";
import Me from "../assets/Me.png"

function Bio ({bio}) {

    return (
        <div ref={bio} className="container-full grid grid-cols-6 text-left md:mx-auto py-10">
            
            <div className="col-start-1 col-span-3 ml-20">
                <div className=" relative">
                    <p className="text-s md:text-l lg:text-xl">Hello, my name is Daniel. Welcome to my portfolio!
                     I am a software developer, classically trained chef, United States Coast Guard veteran and board game enthusiast.
                      I was drawn to culinary school because I find cooking to be the nexus of many of my intellectual interests. 
                      To be a good chef you must be curious about food, which provokes questions about an endless array of interconnected
                       topics such as food science, chemistry, biology, natural history, culture and geography.
                    </p>
                </div>
                <div className="mt-6 relative">
                <p className="mt-15 text-s md:text-l lg:text-xl">
                    My pursuit of a career in software engineering has proven to be a similar outlet for my curiosity. 
                    It seems that I can't manage to answer a question without that answer spawning several more branching questions.
                </p>
                </div>
                <div className="mt-6 relative">
                <p className="mt-15 text-s md:text-l lg:text-xl">
                I'm excited to bring this spirit of boundless learning to an industry  centered around question-asking, answering and iterating. 
                </p>
                </div>
            </div>
            <div className="col-start-5 col-span-2 mr-5 ">
                <img src={Me} alt="Me" className="rounded-md"/>
            </div>
        </div>
    )
};

export default Bio;