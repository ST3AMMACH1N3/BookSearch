import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    render() {
        return (
            <div>
                <NavBar page='search'/>
                <div className='wrapper'>
                    <Header />
                    Search
                </div>
            </div>
        );
    }

}

export default Search;