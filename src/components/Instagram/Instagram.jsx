import React from "react";
import config from "../../../data/SiteConfig";

import Img from "gatsby-image";

import {
  Flex,
  Box,
  Link
} from '@chakra-ui/react';

import '../../styles/index.scss';

const Node = ({ node }) => (
    <Link href={`https://www.instagram.com/p/${node.id}/`} target="_blank">
        <Box
            backgroundColor={config.blackColor}
            /*backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage={`url("${node.localFile.url}")`}*/
            h={{ base: "260px", lg: "720px" }}
            borderRadius="40px"
            w={{ base: "45vw", lg: "47.5vw" }}
            overflow="hidden"
        >
            <Img 
                fluid={node.localFile.childImageSharp.fluid} 
                imgStyle={{objectFit: 'cover'}} 
                style={{ minHeight: '100%' }}
            />
        </Box>
    </Link>
)

export const InstagramPosts = ({ nodes }) => {
    return (
        <Flex  
            justifyContent="space-between"
            //display={{ base: 'initial', lg: 'flex' }}
            className="spotlight"
        >
            {nodes.edges.map(instagram => (
                <Box
                    className="spotlight-element"
                >
                    <Node key={instagram.node.id} node={instagram.node} />
                </Box>
            ))}
        </Flex>
    )
}