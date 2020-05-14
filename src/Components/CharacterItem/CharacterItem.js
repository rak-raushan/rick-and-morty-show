import React, { Component } from "react";
import "./CharacterItem.scss";

export class CharacterItem extends Component {
    render() {
        const { name, id, created, status, species, gender, origin, location, image } = this.props.data;
        const years = new Date(new Date() - new Date(created)).getFullYear() - 1970;

        return (
            <div className="character-item col-6 col-md-3">
                <div className="main">
                    <div className="character-item__thumb">
                        <figure className="item-thumb-wrap">
                            <img
                                src={image}
                                alt={name}
                                className="item-thumb-image"
                            />
                        </figure>
                        <div className="title">
                            <h2 className="character-item__title">{name}</h2>
                            <p>id: {id} - created {years} years ago </p>
                        </div>
                    </div>

                    <div className="info_block">
                        <ul className="">
                            <li className="row">
                                <div className="col-4">STATUS</div>
                                <div className="col-8">{status}</div>
                            </li>
                            <li className="row">
                                <div className="col-4">SPECIES</div>
                                <div className="col-8">{species}</div>
                            </li>
                            <li className="row">
                                <div className="col-4">GENDER</div>
                                <div className="col-8">{gender}</div>
                            </li>
                            <li className="row">
                                <div className="col-4">ORIGIN</div>
                                <div className="col-8">{origin.name}</div>
                            </li>
                            <li className="row">
                                <div className="col-4">LAST LOCATION</div>
                                <div className="col-8">{location.name}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterItem;
