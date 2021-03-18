import React from 'react';
import StyledButton from './NextButton.styled'
const NextButton = ({before,after, id='', isDark = false}) => {

    return (
        <StyledButton id={id} isDark = {isDark}>
            {before 
            ? <a href={before}><h1>{'〈'}</h1></a> 
            : null}
            {after 
            ? <a href={after}><h1>{'〉'}</h1></a> 
            : null}
            
        </StyledButton >
    )
}

export default NextButton;