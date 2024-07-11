import React from "react";


function HobbieItem(props) {
    return (
        <div className="hobbie-item">
            <img src={props.imgURL}/>
            <caption className="caption-edit">{props.caption}</caption>
        </div>
    )
};

export default HobbieItem;
