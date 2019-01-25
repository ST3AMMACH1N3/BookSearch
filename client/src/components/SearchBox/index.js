import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        });
    }

    render() {
        return (
            <div className='book-search'>
                <h3>Book Search</h3>
                <p>Book: </p>
                <input className='search-input'type='text' name='query' value={this.state.query} onChange={this.handleChange}/>
                <button className='search-button' type='button' onClick={() => this.props.handleClick(this.state.query)}>Search</button>
            </div>
        )
    }
}

export default SearchBox;