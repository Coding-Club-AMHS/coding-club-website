import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'

const HomePageScreen = ({className}) => {
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        //bandaid transition solution
        if(opacity < 1) setTimeout(() => {setOpacity(opacity+0.1)}, 300) 
    }, [opacity])
    return (
        <Container>
            <h1 style={{opacity: opacity}}>Welcome to the official Coding Club at Alexander Mackenzie High School! We are a community of coding enthusiasts.</h1>
        </Container>
    )
}

export default HomePageScreen;