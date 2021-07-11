import React from "react";
import { Link } from 'gatsby';
import config, { blackColor } from "../../../data/SiteConfig";

import {
    Text,
    Box
} from '@chakra-ui/react';

const Button = ({ children, link, margin }) => (
    <Link to={link} target="_blank">
        <Box 
            border={`1px solid ${config.lightgrayColor}`}
            borderRadius="22px"
            display="inline-block"
            role="group"
            transition=".2s"
            margin={margin}
            _hover={{
                background: blackColor,
                borderColor: blackColor
            }}
        >
            <Text
                color={config.blackColor}
                fontSize="16px"
                padding="26px 40px"
                transition=".2s"
                fontWeight={500}
                _groupHover={{
                    color: config.backgroundColor
                }}
            >
                {children}
            </Text>
        </Box>
    </Link>
)

export default Button
