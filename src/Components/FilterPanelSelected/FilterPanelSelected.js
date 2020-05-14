import React, { Component } from "react";
import "./FilterPanelSelected.scss";
export class FilterPanelSelected extends Component {



    render() {

        const selectedFilters = this.props.selected.map((item) => {
            if (item.value) {
                return <div key={item.key} className="selectedBtn">{item.value}<span onClick={() => this.props.handleResetFilter(item)}>x</span></div>
            } else {
                return "";
            }
        });

        return (
            <div className="selected-wrap">
                <h2>Selected Filters</h2>
                {selectedFilters}
            </div>
        );
    }
}

export default FilterPanelSelected;