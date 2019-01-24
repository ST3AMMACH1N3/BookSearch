import React, { Component } from 'react';
import API from '../utils/API';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import BookList from '../components/BookList';

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        API.getBooks().then(results => {
            this.setState({
                books: results.data
            })
        })
    }

    handleDelete = id => {
        API.deleteBook(id)
            .then(this.setState({
                books: this.state.books.filter(book => book._id !== id)
            }))
    }

    render() {
        return (
            <div>
                <NavBar page='saved'/>
                <div className='wrapper'>
                    <Header />
                    Saved
                    <BookList label='Saved Books' books={this.state.books} actionLabel='Delete' handleAction={this.handleDelete}/>
                </div>
            </div>
        );
    }

}

export default Saved;