import React, { Component } from "react";
import "./FilterPanel.scss";

export class FilterPanel extends Component {
    render() {
        const {
            species,
            gender,
            origin } = this.props.filterData;
        return (
            <form
                className="filter-form"
                onChange={this.props.handleFilter}
                ref={this.props.refProp}
            >
                <div className="filter-panel-wrap">
                    <h2>Filters </h2>

                    <fieldset className="sorting-fieldset">
                        <label className="sorting-legend">Species</label>

                        <label htmlFor="species-human" className="sorting-label">
                            <input checked={species === "Human"} type="radio" name="species" className="filter-input" id="species-human" readOnly/>
                            <span className="sorting-label-text" />
                            Human
                        </label>
                        <label htmlFor="species-mytholog" className="sorting-label">
                            <input checked={species === "Mytholog"} type="radio" name="species" className="filter-input" id="species-mytholog" />
                            <span className="sorting-label-text" />
                            Mytholog
                        </label>
                        <label htmlFor="species-other" className="sorting-label">
                            <input checked={species === "Other Species ..."} type="radio" name="species" className="filter-input" id="species-other" />
                            <span className="sorting-label-text" />
                            Other Species ...
                        </label>
                    </fieldset>

                    <fieldset className="sorting-fieldset">
                        <label className="sorting-legend">Gender</label>

                        <label htmlFor="gender-male" className="sorting-label">
                            <input checked={gender === "Male"} type="radio" name="gender" className="filter-input" id="gender-male" />
                            <span className="sorting-label-text" />
                            Male
                        </label>
                        <label htmlFor="gender-female" className="sorting-label">
                            <input checked={gender === "Female"} type="radio" name="gender" className="filter-input" id="gender-female" />
                            <span className="sorting-label-text" />
                            Female
                        </label>
                    </fieldset>

                    <fieldset className="sorting-fieldset">
                        <label className="sorting-legend">Origin</label>

                        <label htmlFor="origin-unknown" className="sorting-label">
                            <input checked={origin === "Unknown"} type="radio" name="origin" className="filter-input" id="origin-unknown" />
                            <span className="sorting-label-text" />
                            Unknown
                        </label>
                        <label htmlFor="origin-post" className="sorting-label">
                            <input checked={origin === "Post-Apocalyptic Earth"} type="radio" name="origin" className="filter-input" id="origin-post" />
                            <span className="sorting-label-text" />
                            Post-Apocalyptic Earth
                        </label>
                        <label htmlFor="origin-nuptia" className="sorting-label">
                            <input checked={origin === "Nuptia 4"} type="radio" name="origin" className="filter-input" id="origin-nuptia" />
                            <span className="sorting-label-text" />
                            Nuptia 4
                        </label>
                        <label htmlFor="origin-other" className="sorting-label">
                            <input checked={origin === "Other Origins ..."} type="radio" name="origin" className="filter-input" id="origin-other" />
                            <span className="sorting-label-text" />
                            Other Origins ...
                        </label>
                    </fieldset>
                </div>
            </form>
        );
    }
}

export default FilterPanel;
