import React from "react";
import { Link, graphql } from "gatsby";
import config from "../../data/SiteConfig";

import {
  Flex,
  HStack,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Button from '../components/Button/Button';

import CircleText from '../components/CircleText/CircleText';
import { InstagramPosts } from '../components/Instagram/Instagram';

import Profile from '../images/lisandro.jpeg';

const About = ({ data: { allInstaNode } }) => (
  <Layout>
    {/* eslint-disable-next-line */}
    <SEO 
      title={`About me — ${config.siteTitle}`}
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <Box textAlign="center">
      <Box maxWidth="1390px" padding={{ base: "0 20px", '2xl': '0' }} margin="0 auto">
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
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundImage={Profile}
              h={{ base: "400px", lg: "800px" }}
              borderRadius="40px"
              w={{ lg: "50%" }}
              mt={{ base: "70px", lg: '0' }}
            />
            <Box
              textAlign="left"
            >
              <Box 
                ml={{ lg: "60px" }} 
                maxWidth="450px"
                mt={{ base: "30px", lg: '0' }}
              >
                <Heading as="h2" fontSize={{ base: "24px", lg: "36px" }} letterSpacing="-1px" lineHeight={{ lg: "50px" }}>
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
            display={{ base: 'initial', lg: 'flex' }}
          >
            <Box
              position="relative"
              textAlign="left"
              maxWidth={{ base: '500px', lg: "440px" }}
              fontSize={{ base: "21px", lg: "24px" }}
              fontWeight="600"
              letterSpacing="-1px"
              lineHeight={{ base: "28px", lg: "34px" }}
              flex="1"
            >
              <Text
                position="absolute"
                fontSize={{ base: "124px", lg: "152px" }}
                left={{ base: "-30px", lg: "-50px" }}
                fontStyle="italic"
                userSelect="none"
              >
                "
              </Text>
              <Text>
                I believe in tech’s potential to improve the world. My goal is to leave my print with revolutionary projects that have a huge impact on transforming Earth into a sustainable place, safer for all living beings.
              </Text>
              <Text mt="40px">
                I love working remotely from anywhere in the world, meeting friendly teams and going out for usability tests - <Text as="i" className="belong-to-the-wild" position="relative" top={{ base: "10px", lg: "6px" }}>I belong to the wild.</Text>
              </Text>
            </Box>
            <Box flex="1" maxWidth="500px" maxHeight={{ base: "400px", lg: "500px" }} mt={{ base: "-60px", lg: '0' }}>
              <CircleText big text="Click here and say hi, promise I won't bite :)" link="mailto:contact@lisandropat.com" />
            </Box>
          </Flex>
          <Flex
            justifyContent="space-between"
            flexDirection="row-reverse"
            display={{ base: 'initial', lg: 'flex' }}
          >
            <HStack spacing="16px">
              <a href={config.authorYouTube} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-youtube-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={`https://twitter.com/${config.authorTwitter}`} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-twitter-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={`https://instagram.com/${config.authorInstagram}`} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-instagram-line" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              {/*<a href={config.behanceProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-behance-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>*/}
              <a href={config.dribbbleProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-dribbble-line" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
              <a href={config.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <Text as="i" className="ri-linkedin-fill" fontSize="18px" color={config.grayColor} transition=".2s" _hover={{ color: config.themeColor }} />
              </a>
            </HStack>
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
              Some <a href={`https://instagram.com/${config.authorInstagram}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Instagram</a> posts
            </Heading>
          </Flex>
        </Box>
      </Box>
      <Box maxWidth="1390px" padding={{ base: "0 20px", '2xl': '0' }} margin="0 auto">
        <Box
          padding="2px 0 80px 0"
        >
          <InstagramPosts nodes={allInstaNode} />
        </Box>
      </Box>
    </Box>
    <Footer />
  </Layout>
)

export const pageQuery = graphql`
  query InstagramQuery {
    allInstaNode(sort: {order: DESC, fields: timestamp}, limit: 4) {
        edges {
            node {
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                      quality: 70
                    )
                  }
                }
            }
        }
    }
  }
`

export default About