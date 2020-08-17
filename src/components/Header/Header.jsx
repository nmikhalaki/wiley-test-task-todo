import React from 'react'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ol>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;