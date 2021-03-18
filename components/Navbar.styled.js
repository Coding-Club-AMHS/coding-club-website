import styled from 'styled-components';

const StyledNavbar = styled.nav`
    background-color: rgba(0,0,0,0);
    min-height: 5vh;
    min-width: 100vw;
    top:0;
    left:0;
    position:fixed;
    z-index: 100;
    justify-content: center;
    align-items: center;
    display:flex;
    border-bottom: solid ${({isDark}) => isDark ? 'white' : 'black'};

    button {
        background-color: rgba(0,0,0,0);
        border: none;
        color: ${({ isDark }) => isDark ? 'white' : 'black'};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    button:hover {
        color:${({ isDark }) => isDark ? '#DFF4E5' : 'rgba(0,0,0,0.5)'};
    }
    * {
        margin: auto;
    }
`

export default StyledNavbar;