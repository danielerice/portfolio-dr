import React, {useRef} from "react";

function Projects ({projects}) {

    return (
        <div ref={projects} style={{paddingTop: "1000px"}}>
            <p>Projects</p>
        </div>
    )
};

export default Projects;