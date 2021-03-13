import styled from 'styled-components';

const StyledButton = styled.button`
    z-index: 10;
    background-color: rgba(0,0,0,0);
    border: none;

    img {
        max-height: 15vh;
        max-width: 15vw;
        height:auto;
        width: auto;
    }

    img:hover {
        transform:scale(1.5);
    }

    a {
        color: red;
    }
`

export default StyledButton;