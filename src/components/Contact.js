import React from "react";
import Background from "./Background"
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const [state, handleSubmit] = useForm("xzbnvjlr");

    const contactForm = (
        <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
                <input
                    placeholder="John Doe"
                    className="input-field"
                    id="name"
                    type="text"
                    name="name"
                />
                <label htmlFor="email" className="input-label">
                    Name:
                </label>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className="input">
                <input
                    placeholder="example@soemthing.com"
                    className="input-field"
                    id="email"
                    type="email" 
                    name="email"
                />
                <label htmlFor="email" className="input-label">
                    Email Address:
                </label>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="input">
                <textarea
                    placeholder="Your message here"
                    className="input-field"
                    id="message"
                    type="text"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <label htmlFor="email" className="input-label">
                    Message:
                </label>
            </div>
            <div className=".action">
                <button className="action-button" type="submit" disabled={state.submitting}>
                    Send
                </button>
            </div>
        </form>
    )

    return (
        <>
            <Background/>
            <div className="contact-card">
                <div className="card-heading">
                    <h2/>Let's stay in touch!<h2/>
                    <small>Phone: 206-755-2605
                    ||   Email: danielrice5627@gmail.com</small>
                </div>
                { state.succeeded ? <p>Thanks for joining!</p> : contactForm }
            </div>
        </>
    )
}

export default Contact;