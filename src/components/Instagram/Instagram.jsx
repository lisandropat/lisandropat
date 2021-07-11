import React from "react";
import config from "../../../data/SiteConfig";

import Img from "gatsby-image";

import {
  SimpleGrid,
  Link
} from '@chakra-ui/react';

import '../../styles/index.scss';

const Node = ({ node }) => (
    <Link 
        href={`https://www.instagram.com/p/${node.id}/`} 
        target="_blank"
        backgroundColor={config.blackColor}
        borderRadius="40px"
        overflow="hidden"
        width="auto"
        height="400px"
        className="spotlight-element"
    >
        <Img 
            fluid={node.localFile.childImageSharp.fluid} 
            imgStyle={{ objectFit: 'cover' }} 
            style={{ minHeight: '100%' }}
        />
    </Link>
)

export const InstagramPosts = ({ nodes }) => {
    return (
        <SimpleGrid  
            w="100%"
            spacing="24px"
            columns={{ base: '2', xl: '4' }}
            className="spotlight"
        >
            {nodes.edges.map(instagram => (
                <Node key={instagram.node.id} node={instagram.node} />
            ))}
        </SimpleGrid>
    )
}