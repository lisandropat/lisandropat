import React from "react";

import { GatsbyImage } from "gatsby-plugin-image"

import {
  SimpleGrid,
  Link
} from '@chakra-ui/react';

import '../../styles/index.scss';

const Node = ({ node }) => (
    <Link
        href={node.url}
        target="_blank"
        h={{ base: "200px", lg: "300px" }}
        borderRadius="40px"
        overflow="hidden"
        w="auto"
        className="spotlight-element"
        data-sal="zoom-in"
        data-sal-duration="100"
    >
        <GatsbyImage 
            image={node.localCover.childImageSharp.gatsbyImageData} 
            imgStyle={{ objectFit: 'cover' }} 
            style={{ minHeight: '100%' }}
        />
    </Link>
)

export const DribbbleShots = ({ nodes }) => {
    return (
        <SimpleGrid  
          w="100%"
          spacing={{ base: '12px', lg: '24px' }}
          columns={{ base: '2', xl: '4' }}
          className="spotlight"
        >
            {nodes.edges.map(dribbble => (
                <Node key={dribbble.node.id} node={dribbble.node} />
            ))}
        </SimpleGrid>
    )
}