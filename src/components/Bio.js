import React, {useRef} from "react";
import Background from "../assests/stars.png"

function Bio ({bio}) {

    return (
        <div ref={bio} className="md:container md:mx-auto py-12 text-xl">
            <p className="px-12 py-3">Hello, welcome to my portfolio! I am a software developer, former
                chef, United States Coast Guard veteran and recovering perfectionist. 
                I was first drawn to culinary school because I had found cooking to be the nexus of so many
                of my intellectual interests. To be a good chef you have to be curious about food, and that in
                turn leads to questions about food science, and then chemistry, biology, natural history, culture
                geography etc...
            </p>
            <p className="px-12 py-3">
                I see software engineering as a similar outlet for my curiosity. It seems I can't manage to 
                answer a question with out that answer spawning several more branching questions.
            </p>
            <p className="px-12 py-3">
                I'll to bring this spirit to an industry already dead set on question asking, answering and
                iterating.
            </p>
            <p className="px-12 py-3">
                I can't wait!
            </p>
        </div>
    )
};

export default Bio;