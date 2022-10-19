import React from "react";

import "./Skill.scss";

const Skill = (props) => {
    const { name, image } = props;

    return (
        <div className="skill">
            <div className="skill__face skill__face-front">
                <img src={image} alt={name} />
            </div>
            <div className="skill__face skill__face-back">{name}</div>
        </div>
    );
};

export default Skill;
