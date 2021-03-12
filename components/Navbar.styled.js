import styled from 'styled-components';

const StyledNavbar = styled.nav`
    background-color: ${({isDark}) => isDark ? 'black' : 'white'};
    min-height: 5vh;
    min-width: 100vw;
    top:0;
    left:0;
    position:fixed;
    z-index: 100;
    justify-content: center;
    align-items: center;
    display:flex;

    button {
        background-color: ${({isDark}) => isDark ? 'black' : 'white'};
        border: none;
        color: ${({isDark}) => isDark ? 'white' : 'black'};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    button:hover {
        color:${({isDark}) => isDark ? '#DFF4E5' : '#2DE1FC' };
    }
    * {
        margin: auto;
    }
`

export default StyledNavbar;