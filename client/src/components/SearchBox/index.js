import React, { Component } from 'react';

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
            <div>
                <h3>Book Search</h3>
                <span>Book: </span>
                <input type='text' name='query' value={this.state.query} onChange={this.handleChange}/>
                <button type='button' onClick={() => this.props.handleClick(this.state.query)}>Search</button>
            </div>
        )
    }
}

export default SearchBox;