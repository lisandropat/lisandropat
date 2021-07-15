import React from "react";
import { Link } from 'gatsby';
import config from "../../data/SiteConfig";

import {
  Box,
  Flex,
  SimpleGrid,
  Heading
} from '@chakra-ui/react';

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import CircleText from '../components/CircleText/CircleText';

const PortfolioItem = ({ delay, title, link }) => (
  <Link to={link} 
    data-sal="zoom-in"
    data-sal-delay={delay}
    data-sal-duration="100"
  >
    <Box
      backgroundColor={config.blackColor}
      h={{ base: "400px", lg: "540px" }}
      borderRadius="40px"
      w="auto"
      className="spotlight-element"
      textAlign="center"
      role="group"
      overflow="hidden"
    >
      <Box
        fontSize="36px"
        letterSpacing="-1px"
        lineHeight={{ base: "400px", lg: "540px" }}
        color="white"
        fontWeight="700"
        backgroundColor="rgba(0,0,0,.25)"
        padding="0 21px"
        opacity="0"
        transition=".5s"
        _groupHover={{
          opacity: 1
        }}
      >
        {title}
      </Box>
    </Box>
  </Link>
)

const Portfolio = () => (
  <Layout>
    {/* eslint-disable-next-line */}
    <SEO 
      title={`Portfolio — ${config.siteTitle}`}
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <Box textAlign="center">
      <Box maxWidth="1100px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto" display={{ base: 'none', lg: 'block' }}>
        <Box
          padding="80px 0 20px 0"
        >
          <Flex  
            alignItems="center" 
            display={{ base: 'initial', lg: 'flex' }}
          >
            <Box flex="2" maxWidth="760px" mr="60px">
              <Heading as="h2"
                textAlign="left"
                letterSpacing="-1px"
              >
                Crafting interfaces and visual experiences for digital products
              </Heading>
            </Box>
            <Box flex="1" maxWidth="300px">
              <CircleText text="Click here for a friendly chat :)" link="mailto:contact@lisandropat.com" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box maxWidth="1390px" padding={{ base: "70px 20px 0 20px", lg: '0 20px', '2xl': '0' }} margin="0 auto">
        <SimpleGrid  
          w="100%"
          spacing="24px"
          columns={{ base: '1', xl: '2' }}
          className="spotlight"
        >
          <PortfolioItem
            link="/portfolio/evidencia"
            title="Evidencia"
          />
          <PortfolioItem
            link="/portfolio/zala"
            title="Zala"
            delay="50"
          />
          <PortfolioItem
            link="/portfolio/vozhero"
            title="Vozhero"
          />
          <PortfolioItem
            link="/portfolio/gabriellac"
            title="Gabriella C"
            delay="50"
          />
        </SimpleGrid>
      </Box>
      <Box maxWidth="1100px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto">
        <Box
          padding="80px 0 20px 0"
        >
          <Heading as="h3"
            position="relative"
            textAlign="left"
            margin={{ base: "20px 0 60px 0", lg: "80px 0 60px 0" }}
            paddingLeft="26px"
            fontSize="14px"
            color={config.grayColor}
            fontWeight={400}
            _before={{
              content: '"-"',
              position: 'absolute',
              left: '5px',
              top: 0,
              transform: "scaleX(3)"
            }}
          >
            Latest <a href={config.dribbbleProfile} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Dribbble</a> shots
          </Heading>
        </Box>
      </Box>
      <Box maxWidth="1390px" padding={{ base: "0 20px", '2xl': '0' }} margin="0 auto">
        <SimpleGrid  
          w="100%"
          spacing={{ base: '12px', lg: '24px' }}
          columns={{ base: '2', xl: '3' }}
          className="spotlight"
        >
          <Box
            backgroundColor={config.blackColor}
            h={{ base: "200px", lg: "400px" }}
            borderRadius="40px"
            w="auto"
            className="spotlight-element"
            data-sal="zoom-in"
            data-sal-duration="100"
          />
        </SimpleGrid>
      </Box>
    </Box>
    <Footer />
  </Layout>
)

export default Portfolio
