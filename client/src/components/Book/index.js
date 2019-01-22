import React from 'react';

function Book(props) {
    let { title, author, description, link, image } = props.info;
    return (
        <div>
            <h3>{title}</h3>
            <a href={link}><button type='button'>View</button></a>
            <button type='button' onClick={() => props.handleAction(props.info._id)}>{props.actionLabel}</button>
            <h4>{author}</h4>
            <img src={image} alt={`${title} thumbnail`} />
            <p>{description}</p>
        </div>
    )
}

export default Book;