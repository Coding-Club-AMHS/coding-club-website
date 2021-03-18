import React from 'react';
import StyledHomePageScreen from './HomePageScreen.styled';


const HomePageScreen = () => {

    return (
        <StyledHomePageScreen>
            <div className="content">
                <h1>Welcome to the official Coding Club at Alexander Mackenzie High School! </h1>
                <h1 id="second">We are a team of passionate coders of various levels, who wish to create an engaging coding community!</h1>
            </div>
        </StyledHomePageScreen>
    )
}

export default HomePageScreen;