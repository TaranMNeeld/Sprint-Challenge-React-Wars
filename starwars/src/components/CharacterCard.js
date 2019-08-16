import React from "react";
import "./Character.scss";
import { Label } from "semantic-ui-react";

const CharacterCard = (props) => {

    return (
        <div className="character-card">
            <Label className="name-label" size="massive">{props.name}</Label>
            <div className="character-info">
                <h3>{props.height}</h3>
                <h3>{props.mass}</h3>
                <h3>{props.gender}</h3>
            </div>
        </div>
    );
};

export default CharacterCard;