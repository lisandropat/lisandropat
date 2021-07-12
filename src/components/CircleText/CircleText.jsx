import React from "react";
import config from "../../../data/SiteConfig";

import {
    Box,
    Text
} from '@chakra-ui/react';

import '../../styles/animations.scss';

const CircleText = ({ text, link, big }) => {
    const heightSwitch = big ? '500px' : '300px';
    const idSwitch = big ? 'big' : 'small';
    const textSwitch = big ? "230px" : "130px";
    return(
        <Box
            overflow="hidden"
        >
            <a href={link} target="_blank" rel="noreferrer">
                <Box margin="0" h={heightSwitch}>
                    <Box
                        position="relative"
                        w="100%"
                        pb="100%"
                        overflow="hidden"
                    >
                        <Text as="i" className="ri-emotion-happy-line"
                            position="absolute"
                            top={textSwitch}
                            fontSize="40px"
                            left="50%"
                            transform="translateX(-50%)"
                        />
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve" id={`${idSwitch}-circle`} className="circle">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"/>
                            <g>
                                <use xlinkHref="#circlePath" fill="none"/>
                                <text fill={config.blackColor}>
                                    <textPath xlinkHref="#circlePath">{text}</textPath>
                                </text>
                            </g>
                        </svg>
                    </Box>
                </Box>
            </a>
        </Box>
    )
}

export default CircleText
