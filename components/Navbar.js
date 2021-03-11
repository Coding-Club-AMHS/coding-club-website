import React from 'react';
import StyledNavbar from './Navbar.styled';

const Navbar = () => {

    return (
        <StyledNavbar>
            <button onClick={() => {window.location = '/'}}>Home</button>
            <button onClick={() => {window.location = '/about-us'}}>About Us</button>
            <button onClick={() => {window.location = '/contact-us'}}>Contact Us</button>
            <button onClick={() => {window.location = '/resources'}}>Coding Resources</button>

        </StyledNavbar>
    )
}

export default Navbar;