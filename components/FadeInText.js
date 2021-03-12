import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/Home.module.css'

const FadeInText= (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(()=> {
        const observer = new IntersectionObserver(entries=> {
            entries.forEach(entry=> {
                setTimeout(() => {setVisible(entry.isIntersecting)}, 500)
                
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className={isVisible ? styles.fadeinsectionisvisible : styles.fadeinsection} ref={domRef} >
            {props.children}
        </div>
    );
}

export default FadeInText;