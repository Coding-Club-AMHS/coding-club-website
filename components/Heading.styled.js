import styled from 'styled-components';

export const StyledHeading = styled.div`

    height: 100vh;
    width: 100vw;
    background-color: black;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    

    .top {
        font-size: 600%;
        display:inline-flex;
    }

    .clicktext {
        color: #61de2a;
    }

    .clicktextflash {
        opacity: 0;
    }
    
`