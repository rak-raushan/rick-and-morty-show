import React, { Component } from "react";
import "./SearchBar.scss";
export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    searchCharacter = ({ target }) => {
        this.setState({ searchValue: target.value });
    };

    handleSearch(event) {
        this.props.handleSearch(this.state.searchValue);
        event.preventDefault();
    }

    render() {
        return (
            <div className="search-wrap">
                <div>Search By Name </div>
                <div>
                    <input
                        type="text"
                        className="search-input"
                        onChange={this.searchCharacter}
                        name="search"
                        placeholder="Type smth..."
                    />
                    <button
                        className="search-button"
                        onClick={this.handleSearch}
                    >  Search
                </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
