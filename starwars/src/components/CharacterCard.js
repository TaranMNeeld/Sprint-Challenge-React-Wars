import React from "react";
import "./Character.scss";
import "semantic-ui-css/semantic.min.css";
import { Segment, Statistic } from "semantic-ui-react";

const CharacterCard = (props) => {

    return (
        <div className="character-card">
            <Segment stacked className="name-label">{props.name}</Segment>
            <Statistic className="stat-div">
                <Statistic.Value>{props.height}</Statistic.Value>
                <Statistic.Label className="stat">cm</Statistic.Label>
                <Statistic.Value>{props.mass}</Statistic.Value>
                <Statistic.Label className="stat">kg</Statistic.Label>
                <Statistic.Value>Gender</Statistic.Value>
                <Statistic.Label className="stat">{props.gender}</Statistic.Label>
            </Statistic>
        </div>
    );
};

export default CharacterCard;