import React from 'react';
import Book from '../Book';
import './style.css';

function BookList(props) {
    return (
        <div className='book-list'>
            {props.label}
            {props.books.length ? props.books.map((book, index) => {
                return <Book key={book._id || index} _id={book._id || index} info={book} actionLabel={props.actionLabel} handleAction={props.handleAction} />
            }) : <h2>Nothing Here</h2>}
        </div>
    )
}

export default BookList;