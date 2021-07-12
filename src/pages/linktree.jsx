import React from "react";
import config from "../../data/SiteConfig";

import {
  Box,
  Flex,
  Text,
  Button,
  Image
} from "@chakra-ui/react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import Logo from "../images/pat-white.svg";

const LinktreeButton = ({ link, icon, linkName }) => {
  return(
    <a href={link}>
      <Button 
        w="90%"
        h="56px"
        paddingBottom="6px"
        margin="16px 5%"
        display="block"
        border={`1px solid rgba(255,255,255,.25)`}
        background="transparent"
        fontSize=".875rem"
        transition=".2s"
        fontWeight={600}
        _hover={{
          color: config.blackColor,
          borderColor: config.themeColor,
          background: config.themeColor
        }}
      >
        <Text 
          as="i"
          className={icon} 
          position="relative"
          top="3px"
          fontWeight={500}
          fontSize="120%"
          display="inline"
          marginRight="6px"
          border="none" 
        />
        {linkName}
      </Button>
    </a>
  )
}

const SmallLinktreeButton = ({ link, linkName, badge }) => {
  const badgeSwitch = badge ? 'initial' : 'none';
  return(
    <a href={link} target="_blank" rel="noreferrer noopener">
      <Flex>
      <Text
        fontWeight={600}
        fontSize='.875rem'
        mt="7px"
        transition=".2s"
        _hover={{
          color: config.themeColor
        }}
      >
        <Text as="i" className="ri-arrow-drop-right-line" position="relative" top="2px" fontWeight="600" /> {linkName}
      </Text>
      <Box 
        display={badgeSwitch}
        marginLeft="10px"
        marginTop="6px"
        fontSize="80%"
        fontWeight={600}
        background="#F53B33"
        padding="2px 6px"
        maxHeight="23px"
        borderRadius="6px"
      >
        {badge}
      </Box>
      </Flex>
    </a>
  )
}

const Linktree = () => (
  <Layout>
    {/* eslint-disable-next-line */}
    <SEO 
      title={`Linktree ・ ${config.siteTitle}`}
      description="Links to all of my social profiles and YouTube videos made in spanish."
    />
    <Box
      position="relative"
      h="100%"
      w="100%"
      p={{ base: '10vh 0', md: '7.5vw 30vw'}}
      minHeight="100vh"
      minWidth="100vw"
      display="block"
      backgroundColor={config.blackColor}
      color="white"
      userSelect="none"
    >
      <Image 
        src={Logo} 
        alt={config.siteTitleShort}
        w="50px"
        m="0 auto 40px auto"
      />
      <LinktreeButton 
        linkName="YouTube"
        link={`${config.authorYouTube}?sub_confirmation=1`}
        icon="ri-youtube-line"
      />
      <LinktreeButton 
        linkName="Instagram"
        link={`https://instagram.com/${config.authorInstagram}`}
        icon="ri-instagram-line"
      />
      <LinktreeButton 
        linkName="Design portfolio"
        link="https://lisandropat.com"
        icon="ri-edit-line"
      />
      {/*<LinktreeButton 
        linkName="Blog de tecnología"
        link="https://travelxtech.com"
        icon="ri-usb-line"
      />*/}
      <LinktreeButton 
        linkName="Vegan blog"
        link="https://julsita.com"
        icon="ri-leaf-line"
      />
      <Box
        p={{ base: '2vh 5vw', md: '2vw 2.5vw'}}
      >
        <SmallLinktreeButton
          linkName="Último video de YouTube"
          link={config.lastYouTubeVideo}
          badge="Nuevo"
        />
        <SmallLinktreeButton
          linkName="Discord Server"
          link="https://discord.com/invite/FW8Qgdu"
        />
      </Box>
    </Box>
  </Layout>
)

export default Linktree
