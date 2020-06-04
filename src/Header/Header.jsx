import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ol>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;