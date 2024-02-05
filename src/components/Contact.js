import React from "react";

function Contact({contact}) {
    return (
        <div ref={contact}>
            <hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700"/><p>Contact</p><hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700"/>
        </div>
    )
}

export default Contact;