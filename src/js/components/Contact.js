import React from 'react';
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import contact_bg from "../../images/contact_bg.png";

function Contact() {
    return (
        <div className="contact" >
            <div className="contact__title" style={{backgroundImage: `url(${contact_bg})`}}/>
            <div className="contact-container">
                <ContactInfo/>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;