import React from "react";
import ProjectItem from "../components/ProjectItem";

function Projects() {

    return (
        <div className="content">
            <h1 className="title">Projects</h1>
            <div className="project-container">
                <ProjectItem
                    imgURL="img/flag-of-laos.jpg"
                    title="Flag of Laos"
                    tech="(HTML5, CSS3)"
                    githubURL="https://github.com/vanya-vanya/Flag-of-Laos"
                />
                <ProjectItem
                    imgURL="img/web-design-agency.jpg"
                    title="Web Design Agency"
                    tech="(HTML5, CSS3)"
                    githubURL="https://github.com/vanya-vanya/Web-Design-Agency"
                />
                <ProjectItem
                    imgURL="img/pricing-table.jpg"
                    title="Pricing Table"
                    tech="(HTML5, CSS3)"
                    githubURL="https://github.com/vanya-vanya/Pricing-Table"
                />
                <ProjectItem
                    imgURL="img/mondrian-art.jpg"
                    title="Mondrian Art"
                    tech="(HTML5, CSS3)"
                    githubURL="https://github.com/vanya-vanya/Mondrian-Art"
                />
                <ProjectItem
                    imgURL="img/tindog.jpg"
                    title="TinDog"
                    tech="(Bootstrap)"
                    githubURL="https://github.com/vanya-vanya/TinDog"
                />
                <ProjectItem
                    imgURL="img/dicee-game.jpg"
                    title="Dicee Game"
                    tech="(JavaScript)"
                    githubURL="https://github.com/vanya-vanya/Dicee-Game"
                />
                <ProjectItem
                    imgURL="img/drum-kit.jpg"
                    title="Drum Kit"
                    tech="(JavaScript)"
                    githubURL="https://github.com/vanya-vanya/Drum-Kit"
                />
                <ProjectItem
                    imgURL="img/simon-game.jpg"
                    title="Simon Game"
                    tech="(JavaScript, jQuery)"
                    githubURL="https://github.com/vanya-vanya/Simon-Game"
                />
                <ProjectItem
                    imgURL="img/my-blog.jpg"
                    title="My Blog"
                    tech="(Node, Express, EJS)"
                    githubURL="https://github.com/vanya-vanya/My-Blog"
                />
            </div>
        </div>
    );
}

export default Projects;
