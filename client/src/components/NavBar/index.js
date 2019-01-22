import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar(props) {
    return (
        <div className='nav-bar'>
            <span className='logo'>Google Books</span>
            <Link to='/' className={props.page === 'search' ? 'nav-link active' : 'nav-link'}>Search</Link>
            <Link to='/saved' className={props.page === 'saved' ? 'nav-link active' : 'nav-link'}>Saved</Link>
        </div>
    )
}

export default NavBar;