import React from 'react';
import {useAccordionToggle } from 'react-bootstrap'

import StyledWhiteButton from './WhiteButton.styled'

const  CustomToggle = ({children, eventKey}) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('hello'),
  );
    return (
        <StyledWhiteButton
        type="button"
        
        onClick={decoratedOnClick} >
            {children}
        </StyledWhiteButton>
    )

}
export default CustomToggle;
