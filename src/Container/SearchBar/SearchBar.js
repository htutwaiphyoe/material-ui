import React, { Component } from "react";
import classes from "./SearchBar.module.css";
class Search extends Component {
    test = (e) => {
        e.preventDefault();
        console.log(e);
    };
    render() {
        return (
            <div className={`ui segment ${classes.SearchBar}`}>
                <form onSubmit={this.test} className={`ui form`}>
                    <div className={`ui icon input ${classes.input}`}>
                        <input type="text" placeholder="Search..." />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
