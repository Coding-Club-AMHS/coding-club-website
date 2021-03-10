import React, {useEffect, useState} from 'react';

const AnimatedEllipses = () => {
    const [dots, setDots] = useState('');
    useEffect(() => {
        setTimeout(() => {setDots(dots.length == 3 ? '' : dots+'.')}, 1000)
    }, [dots])
    return(
        <section>Coding Club AMHS{dots}</section>
    )
}

export default AnimatedEllipses;