import React, {useEffect, useState} from 'react';
import {StyledHeading} from './Heading.styled';
import AnimatedEllipses from './AnimatedEllipses';

const IntroScreen = () => {
    const [flashing, setFlashing] = useState(false);
    useEffect(() => {
        setTimeout(() => {setFlashing(!flashing)}, 1000)
    }, [flashing])
    return (
        <StyledHeading>
          <div className="top">
            <AnimatedEllipses/>
          </div>
          <div className={flashing ? "clicktextflash" : "clicktext"}>
            {"> click anywhere to continue <"}
          </div>
        </StyledHeading>
    )
}

export default IntroScreen;