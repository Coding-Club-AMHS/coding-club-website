import React from 'react';
import StyledWhiteButton from './WhiteButton.styled'
const WhiteButton = ({text,onClick,type="button"}) => {

    return (
        <StyledWhiteButton onClick={onClick} type={type}>{text}</StyledWhiteButton>
    )
}

export default WhiteButton;