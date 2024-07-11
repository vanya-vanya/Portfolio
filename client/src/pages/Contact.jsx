import React from "react";
import ContactItem from "../components/ContactItem";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
    return (
        <div className="content">
            <h1>Contact Me</h1>
            <div class="contact-container">
                <ContactItem
                    icon={<PhoneIcon fontSize="large" style={{ color: "#660000" }} alt="Cell phone" />}
                    contactURL="tel:+359882954590"
                    title="Phone"
                />
                <ContactItem
                    icon={<MailIcon fontSize="large" style={{ color: "#660000" }} alt="Email" />}
                    contactURL="malto:frenafrani@gmail.com"
                    title="Gmail"
                />
                <ContactItem
                    icon={<LinkedInIcon fontSize="large" style={{ color: "#660000" }} alt="LinkedIn" />}
                    contactURL="https://www.linkedin.com/in/ivan-nosenko-b1a650160/"
                    title="LinkedIn"
                />
                <ContactItem
                    icon={<GitHubIcon fontSize="large" style={{ color: "#660000" }} alt="Github" />}
                    contactURL="https://github.com/vanya-vanya"
                    title="GitHub"
                />
                <ContactItem
                    icon={<TelegramIcon fontSize="large" style={{ color: "#660000" }} alt="Telegram" />}
                    contactURL="https://t.me/vanya_ace"
                    title="Telegram"
                />
            </div>
        </div>
    );
}

export default Contact;
