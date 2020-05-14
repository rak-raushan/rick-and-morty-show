import React, { Component } from "react";
import FilterPanel from "./Components/FilterPanel/FilterPanel";
import FilterPanelSelected from "./Components/FilterPanelSelected/FilterPanelSelected";
import SearchSortPanel from "./Components/SearchSortPanel/SearchSortPanel";
import Spinner from "./Components/Spinner/Spinner";
import { getCharactersList } from "./api";
import { APIKeysObj } from "./constants";
import "./App.scss";

class App extends Component {
    constructor() {
        super();
        this.characterListCopy = [];
        // this.onPageChanged = this.onPageChanged.bind(this);
        this.formRef = React.createRef();
    }

    state = {
        charactersList: [],
        characterName: "",
        sortingOrder: "",
        species: "",
        gender: "",
        origin: ""
    };

    async componentDidMount() {
        const charactersList = await getCharactersList();
        this.characterListCopy = charactersList;
        this.setState({
            charactersList: charactersList
        });
    }

    performSearch = (searchValue) => {
        this.setState({
            characterName: searchValue
        });
    };

    handleSorting = (sortingOrder) => {
        this.setState({
            sortingOrder: sortingOrder
        });
    }

    performFilter = event => {
        if (event.target.id === "species-human") {
            this.setState({
                species: APIKeysObj.speciesHuman
            });
        } else if (event.target.id === "species-mytholog") {
            this.setState({
                species: APIKeysObj.speciesMytholog
            });
        } else if (event.target.id === "species-other") {
            this.setState({
                species: APIKeysObj.speciesOthers
            });
        } else if (event.target.id === "gender-male") {
            this.setState({
                gender: APIKeysObj.genderMale
            });
        } else if (event.target.id === "gender-female") {
            this.setState({
                gender: APIKeysObj.genderFemale
            });
        } else if (event.target.id === "origin-unknown") {
            this.setState({
                origin: APIKeysObj.originUnknown
            });
        } else if (event.target.id === "origin-post") {
            this.setState({
                origin: APIKeysObj.originPostApocalypticEarth
            });
        } else if (event.target.id === "origin-nuptia") {
            this.setState({
                origin: APIKeysObj.originNuptia4
            });
        } else if (event.target.id === "origin-other") {
            this.setState({
                origin: APIKeysObj.originOthers
            });
        }
    };

    performResetFilter = (item) => {

        console.log(this.state, item.key);
        const key = item.key;
        this.setState({
            charactersList: this.characterListCopy,
            [key]: "",
        });

        // this.formRef.current.reset();
    };

    // async onPageChanged(data) {
    //     const { currentPage } = data;
    //     const charactersList = await getCharactersList(currentPage);
    //     this.setState({ currentPage, charactersList });
    // }

    render() {
        const {
            charactersList,
            characterName,
            sortingOrder,
            species,
            gender,
            origin
        } = this.state;

        const selected = [
            {
                key: "species",
                value: species
            },
            {
                key: "gender",
                value: gender
            },
            {
                key: "origin",
                value: origin
            }
        ];

        let filteredList = charactersList.filter(character => {
            const lowercasedItem = character.name.toLowerCase();
            return lowercasedItem.includes(characterName);
        });

        if (sortingOrder === "asc") {
            filteredList.sort((a, b) => {
                return a.id - b.id;
            });
        } else if (sortingOrder === "desc") {
            filteredList.sort((a, b) => {
                return b.id - a.id;
            });
        }

        if (species !== "") {
            filteredList = filteredList.filter(item => {
                if(species === "Other Species ..."){
                    return !APIKeysObj.otherSpecies.includes(item.species) ;
                }
                return item.species.toLowerCase() === species.toLowerCase();

            });
        }

        if (gender !== "") {
            filteredList = filteredList.filter(item => {
                return item.gender.toLowerCase() === gender.toLowerCase();
            });
        }

        if (origin !== "") {
            filteredList = filteredList.filter(item => {
                if(origin === "Other Origins ..."){
                    return !APIKeysObj.otherOrigin.includes(item.origin.name) ;
                }
                return item.origin.name.toLowerCase() === origin.toLowerCase();
            });
        }

        console.log(filteredList);

        const CharacterListComponent = React.lazy(props =>
            import("./Components/CharacterList/CharacterList")
        );
        const slicedFilteredList = filteredList.slice(0, 20);
        
        return (
            <div className="App">
                <div className="container main-content">
                    <div className="row">
                        <div className="col-12 col-md-3 filter-panel">
                            <aside className="aside">
                                <FilterPanel
                                    filterData={this.state}
                                    handleFilter={
                                        this.performFilter
                                    }
                                    refProp={this.formRef}
                                />
                            </aside>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="selected-panel">
                                <FilterPanelSelected
                                    selected={selected}
                                    handleResetFilter={
                                        this.performResetFilter
                                    } />
                            </div>
                            <div className="search-sort-panel">
                                <SearchSortPanel
                                    handleSearch={
                                        this.performSearch
                                    }
                                    handleSorting={
                                        this.handleSorting
                                    }
                                />
                            </div>
                            <div className="characters-panel">
                                <main>
                                    <React.Suspense
                                        fallback={<Spinner />}
                                    >
                                        <CharacterListComponent
                                            characters={slicedFilteredList}
                                        />
                                    </React.Suspense>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
