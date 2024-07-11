import React from "react";


function ProjectItem(props) {
    return (
        <div className="project-item">
            <img src={props.imgURL}/>
            <h3>{props.title}</h3>
            <p>{props.tech}</p>
            <a href={props.githubURL} target="_blank">See on GitHub</a>
        </div>
    )
};

export default ProjectItem;
