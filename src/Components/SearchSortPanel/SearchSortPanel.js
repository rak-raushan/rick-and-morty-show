import React, { Component } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SortingComponent from "../SortingComponent/SortingComponent";

class SearchSortPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="searchSort row">
                <div className="col-12 col-md-6">
                    <SearchBar handleSearch={this.props.handleSearch} />
                </div>
                <div className="col-12 col-md-6">
                    <SortingComponent handleSorting={this.props.handleSorting} />
                </div>
            </div>
        );
    }
}

export default SearchSortPanel;