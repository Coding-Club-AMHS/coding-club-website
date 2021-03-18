import styled from 'styled-components';

const StyledButton = styled.button`
    z-index: 10;
    background-color: rgba(0,0,0,0);
    border: none;
    text-decoration: none;

    img {
        max-height: 15vh;
        max-width: 15vw;
        height:auto;
        width: auto;
    }

    a {
        text-decoration: none;

    }

    h1:hover {
        text-decoration: none;
        color: powderblue;
        color:${({ isDark }) => !isDark ? 'powderblue' : 'slategray'};

    }

    h1 {
        color: ${({ isDark }) => isDark ? '#292b2c' : 'white'};
        font-size: 600%;
        font-family:Arial, Helvetica, sans-serif;
        text-decoration: none;
        font-weight: normal;
    }
`

export default StyledButton;