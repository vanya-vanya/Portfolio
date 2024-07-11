import React from "react";


function ContactItem(props) {
    return (
        <a href={props.contactURL} target="_blank">
            <div class="contact-item">
                <span>{props.icon}</span>
                <p>{props.title}</p>
            </div>
        </a>
    )
};

export default ContactItem;
