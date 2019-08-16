import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./Character.scss";

const Characters = () => {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://lambda-swapi.herokuapp.com/api/people/")
            .then((response) => {
                return setCharacters(response.data.results);
                
            })
            .catch(error => {
                console.log(error.response);
            });
    }, []);

    console.log(characters);

    return (
        <div>
            {
                 characters.map((character) => {
                    return <CharacterCard key={character.name} name={character.name} height={character.height} mass={character.mass} gender={character.gender} />
                 })
            }
        </div>
    );
}
export default Characters;