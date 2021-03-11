import React, { useEffect, useState } from 'react';
import { StyledHeading } from './Heading.styled';
import AnimatedEllipses from './AnimatedEllipses';

const IntroScreen = () => {
    //dictates behaviour of the "click anywhere to continue" text 
    const [flashing, setFlashing] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if(visible) setTimeout(() => { setFlashing(!flashing) }, 1000)
    }, [flashing])

    //cleanup
    useEffect(() => {
        return() => {
            setVisible(false)
        }
    }, [])

    return (
        <StyledHeading>
            <div className="top">
                {/*this is for the flashing ...*/}
                <AnimatedEllipses />
            </div>
                {/*changes the colour of the click anywhere to continue text */}
            <div className={flashing ? "clicktextflash" : "clicktext"}>
                {"> click anywhere to continue <"}
            </div>
        </StyledHeading>
    )
}

export default IntroScreen;