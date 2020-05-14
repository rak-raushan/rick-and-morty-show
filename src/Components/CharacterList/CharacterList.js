import React, { Component } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import "./CharacterList.scss";

export class CharacterList extends Component {
    render() {
        let characterList = this.props.characters.map(character => {
            return <CharacterItem key={character.id} data={character} />;
        });

        if(!characterList.length) {
            characterList = "No Matching data found. Please check your filters."
        }

        return <div className="characters-wrap row">{characterList}</div>;
    }
}

export default CharacterList;
