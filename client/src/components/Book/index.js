import React from 'react';
import './style.css';

function Book(props) {
    let { title, authors, description, link, image } = props.info;
    return (
        <div className='book'>
            <h3>{title}</h3>
            <a className='book-button' href={link} target='_blank' rel='noopener noreferrer'><button type='button'>View</button></a>
            <button className='book-button'
                    type='button'
                    onClick={e => {
                        props.handleAction(props._id);
                        e.target.disabled = true;
                    }}>
                {props.actionLabel}
            </button>
            <h4>{authors.join(', ')}</h4>
            <img src={image} alt={`${title} thumbnail`} />
            <p>{description}</p>
        </div>
    )
}

export default Book;