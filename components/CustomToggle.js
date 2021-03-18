import React from 'react';
import {useAccordionToggle } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const  CustomToggle = ({children, eventKey}) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('hello'),
  );
    return (
        <button
        type="button"
        
        onClick={decoratedOnClick} >
            {children}
        </button>
    )

}
export default CustomToggle;
