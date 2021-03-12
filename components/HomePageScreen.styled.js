import styled from 'styled-components';
import Container from 'react-bootstrap/Container'

const StyledHomePageScreen = styled(Container)`
display: flex;
flex-direction: column;
align-items:center;
animation: fadeIn 3s;
animation-fill-mode: forwards;  
text-align: center;
justify-content: center;
min-height: 100vh;
min-width: 100vw;

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: rotate(15deg) scale(0.5);
        
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

h1 {
    font-size: 6vmin;
    font-weight: bold;
    width: 90vw;
    padding: 2%;
    color: #002642;
}

#second {
    font-size: 5vmin;
    width: 75vw;
    font-weight: normal;
    color:black;
}

`

export default StyledHomePageScreen;