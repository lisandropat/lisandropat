import React from "react";
import { Link } from "gatsby";
import config, { authorInstagram } from "../../data/SiteConfig";

import {
  Flex,
  HStack,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import Button from '../components/Button/Button';

import CircleText from '../components/CircleText/CircleText';

import Profile from '../images/lisandro.jpeg';

const About = () => (
  <Layout>
    <SEO 
      title={`About me ・ ${config.siteTitle}`}
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <Box textAlign="center">
      <Box maxWidth="1390px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto">
        <Box
          padding="2px 0 80px 0"
          margin="0 auto"
        >
          <Flex  
            alignItems="center" 
            mt="80px" 
            display={{ base: 'initial', lg: 'flex' }}
          >
            <Box
              backgroundColor={config.blackColor}
              backgroundImage={Profile}
              h={{ base: "400px", lg: "800px" }}
              borderRadius="40px"
              w="50%"
            />
            <Box
              textAlign="left"
            >
              <Box 
                ml="60px" 
                maxWidth="450px"
              >
                <Heading as="h2" fontSize="36px" letterSpacing="-1px" lineHeight="50px">
                  “Every project starts with an even better story”
                </Heading>
                <Text color={config.darkgrayColor} mt="40px">
                  Lisandro Patiño Magrans (aka Lisandro Pat) is an Argentinian designer who works on innovative projects focused on UI UX Design and visual experiences. Li works with different visual styles, gained throught his multidisciplinary career, which adapt to clients innovative proposals.
                </Text>
                <Text color={config.darkgrayColor} mt="30px">
                  Li graduated as a multimedia designer and became a self-taught frontend developer, finding his passion in the middle of both fields: the <Link to="/portfolio" style={{ textDecoration: 'underline' }}>product design</Link>. Until now, Lisandro spent most of his career solving national-level problems being part of a tech team in the Congress of Argentina, and now he wants to expand internationally.
                </Text>
                <Button margin="40px 0 0 0" link="https://drive.google.com/file/d/1GFkQO7BbbGiattK61VyehXmk9D1RtdcF/view?usp=sharing">
                  Download my resume <Text as="i" className="ri-download-2-line" position="relative" top="2px" marginLeft="10px" />
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box maxWidth="1100px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto">
        <Box
          margin="0 auto"
        >
          <Flex  
            alignItems="center" 
            mt="80px" 
            justifyContent="space-between"
          >
            <Box
              position="relative"
              textAlign="left"
              maxWidth="440px"
              fontSize="24px"
              fontWeight="600"
              letterSpacing="-1px"
              lineHeight="34px" 
              flex="1"
            >
              <Text
                position="absolute"
                fontSize="152px"
                left="-50px"
                fontStyle="italic"
                userSelect="none"
              >
                "
              </Text>
              <Text>
                I believe in tech’s protential to improve the world. My goal is to leave my print with revolutionary projects that have a huge impact on transforming Earth into a sustainable place, safer for all living beings.
              </Text>
              <Text mt="40px">
                I love working remotely from anywhere in the world, meeting friendly teams and going out for usability tests - <Text as="i" className="belong-to-the-wild" position="relative" top="6px">I belong to the wild.</Text>
              </Text>
            </Box>
            <Box flex="1" maxWidth="500px">
              <CircleText big text="Click here and say hi, promise I won't bite :)" link="mailto:contact@lisandropat.com" />
            </Box>
          </Flex>
          <Flex
            justifyContent="space-between"
          >
            <Heading as="h3"
              position="relative"
              textAlign="left"
              margin="80px 0 60px 0"
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
              Some <a href={`https://instagram.com/${authorInstagram}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Instagram</a> posts
            </Heading>
            <HStack spacing="16px"
              margin={{ base: "10px auto 0 auto", lg: '0' }}
              w={{ base: "220px", lg: 'auto' }}
            >
              <a href={config.authorYouTube} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-youtube-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={`https://twitter.com/${config.authorTwitter}`} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-twitter-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={`https://twitter.com/${config.authorInstagram}`} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-instagram-line" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={config.behanceProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-behance-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={config.dribbbleProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-dribbble-line" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={config.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-linkedin-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Box maxWidth="1390px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto">
        <Box
          padding="2px 0 80px 0"
          margin="0 auto"
        >
          <Flex  
            justifyContent="space-between"
            display={{ base: 'initial', lg: 'flex' }}
          >
            <Box
              backgroundColor={config.blackColor}
              backgroundImage={Profile}
              h={{ base: "400px", lg: "800px" }}
              borderRadius="40px"
              w="49%"
            />
            <Box
              backgroundColor={config.blackColor}
              backgroundImage={Profile}
              h={{ base: "400px", lg: "800px" }}
              borderRadius="40px"
              w="49%"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
    <Footer />
  </Layout>
)

export default About
