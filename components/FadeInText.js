import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/Home.module.css'

const FadeInText= (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(()=> {
        const observer = new IntersectionObserver(entries=> {
            entries.forEach(entry=> setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInText;