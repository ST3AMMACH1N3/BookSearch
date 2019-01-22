import React from 'react';
import Book from '../Book';

function BookList(props) {
    return (
        <div>
            {props.label}
            {props.books.map(book => {
                return <Book key={book._id} info={book} actionLabel={props.actionLabel} handleAction={props.handleAction} />
            })}
        </div>
    )
}

export default BookList;