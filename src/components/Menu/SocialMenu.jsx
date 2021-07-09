import React from "react";
import config from "../../../data/SiteConfig";

import {
    Link,
    Text
} from '@chakra-ui/react';

const SocialLink = ({ link, title }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="social-link" _hover={{ textDecoration: 'none' }}>
        <Text display={{ lg: 'none' }}>
            {title}
        </Text>
        <Text as="i" display={{ base: 'none', lg: 'initial' }} className={`ri-${title}-fill`} fontSize="18px" />
    </Link>
)

const SocialMenu = () => (
    <>
        <SocialLink link={config.behanceProfile} title="behance" />
        <SocialLink link={config.dribbbleProfile} title="dribbble" />
        <SocialLink link={config.linkedinProfile} title="linkedin" />
    </>
)

export default SocialMenu