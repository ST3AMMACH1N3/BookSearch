import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    handleDelete = id => {
        
    }

    render() {
        return (
            <div>
                <NavBar page='saved'/>
                <div className='wrapper'>
                    <Header />
                    Saved
                </div>
            </div>
        );
    }

}

export default Saved;