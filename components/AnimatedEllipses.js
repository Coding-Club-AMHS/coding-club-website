import React, {useEffect, useState} from 'react';

const AnimatedEllipses = () => {
    const [dots, setDots] = useState('');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if(visible) setTimeout(() => {setDots(dots.length == 3 ? '' : dots+'.')}, 1000)
    }, [dots])

    //cleanup
    useEffect(() => {
        return() => {
            setVisible(false)
        }
    }, [])

    return(
        <section>Coding Club AMHS{dots}</section>
    )
}

export default AnimatedEllipses;