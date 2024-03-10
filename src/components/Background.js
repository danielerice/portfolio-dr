import React from "react";
import starryBG from "../assets/StarryBG.mov";

function Background() {
    return (
        <div>
            <video
            src={starryBG} 
            autoPlay 
            loop 
            muted
            />
        </div>
    );
};

export default Background;