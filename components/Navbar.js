import React from 'react';
import StyledNavbar from './Navbar.styled';

const Navbar = ({isDark}) => {

    return (
        <StyledNavbar isDark={isDark}>
            <button onClick={() => {window.location = '/home'}}>Home</button>
            <button onClick={() => {window.location = '/about-us'}}>About Us</button>
            <button onClick={() => {window.location = '/contact-us'}}>Contact Us</button>
            <button onClick={() => {window.location = '/resources'}}>Coding Resources</button>

        </StyledNavbar>
    )
}

export default Navbar;