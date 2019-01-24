import React, { Component } from 'react';
import API from '../utils/API';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import BookList from '../components/BookList';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    handleSave = id => {
        API.saveBook(this.state.books[id])
            .then(() => alert(`${this.state.books[id].title} saved!`))
            .catch(err => alert(`${this.state.books[id].title} already saved!`));
    }

    handleSearch = query => {
        API.searchBook(query)
            .then(results => {
                results = results.data.map(book=> {
                    let { title, authors, description } = book.volumeInfo;
                    let image = book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail;
                    let link = book.volumeInfo.infoLink;
                    return { title, authors, description, image, link };
                })
                this.setState({ books: results })
            });
    }

    render() {
        return (
            <div>
                <NavBar page='search'/>
                <div className='wrapper'>
                    <Header />
                    <SearchBox handleClick={this.handleSearch}/>
                    <BookList label='Results' books={this.state.books} actionLabel='Save' handleAction={this.handleSave}/>
                </div>
            </div>
        );
    }

}

export default Search;