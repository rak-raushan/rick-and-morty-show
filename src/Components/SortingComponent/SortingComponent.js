import React, { Component } from 'react';
import "./SortingComponent.scss";


class SortingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortingOrder: ""
        }

        this.handleSortByChange = this.handleSortByChange.bind(this);
    }

    handleSortByChange = (event) => {
        this.setState({ sortingOrder: event.target.value }, () => {
            this.props.handleSorting(this.state.sortingOrder);
        } );
    };



    render() {
        return (
            <div className="sorting-wrap">
                <select value={this.state.sortingOrder} onChange={this.handleSortByChange}>
                    <option value=""> Sort By ID </option>
                    <option value="asc"> Ascending </option>
                    <option value="desc"> Descending </option>
                </select>
            </div>
        );
    }
}

export default SortingComponent;