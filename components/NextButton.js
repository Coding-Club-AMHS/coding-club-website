import React from 'react';
import StyledButton from './NextButton.styled'
const NextButton = ({before,after, id=''}) => {

    return (
        <StyledButton id={id}>
            {before 
            ? <a href={before}><img src='/button.png' alt='Left button' style={{transform: 'rotate(180deg)'}}/></a> 
            : null}
            {after 
            ? <a href={after}><img src='/button.png' alt='Right button'/></a> 
            : null}
            
        </StyledButton >
    )
}

export default NextButton;