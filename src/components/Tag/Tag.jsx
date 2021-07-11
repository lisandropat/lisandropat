import React from "react";
import { Link } from 'gatsby';
import config from "../../../data/SiteConfig";

import {
    Box,
    Text
} from '@chakra-ui/react';

const Tag = ({ text, link }) => (
    <Link to={link}>
        <Box 
            margin="0 10px 10px 0"
            border={`1px solid ${config.lightgrayColor}`}
            borderRadius="12px"
            display="inline-block"
            role="group"
            transition=".2s"
        >
            <Text
                color={config.darkgrayColor}
                fontSize="14px"
                padding="8px 12px"
                transition=".2s"
                _groupHover={{
                    color: config.blackColor
                }}
            >
                {text}
            </Text>
        </Box>
    </Link>
)

export default Tag
