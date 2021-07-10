import React from "react";
import config from "../../data/SiteConfig";
import { Link } from 'gatsby';

import {
  Box,
  Text,
  Flex,
  Heading
} from "@chakra-ui/react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
//import Footer from "../components/Footer/Footer";

//import CircleText from '../components/CircleText/CircleText';

import '../styles/landing/landing.scss';

const Index = () => (
  <Layout 
    pageName="landing"
  >
    <SEO 
      title={config.siteTitle}
      description={config.siteDescription}
    />
    <Header />
    <Box textAlign="center">
      <Box maxWidth="1100px" padding={{ base: "0 20px", xl: '0' }} margin="0 auto">
        <Box
          padding="200px 0 120px 0"
          margin="0 auto"
        >
          <Heading as="h2" fontSize={{ base: "32px", lg: "48px" }} w={{ xl: '1100px' }} textAlign={{ base: 'left', xl: 'center' }}>
            Hi, I’m Lisandro, <Link to="/portfolio" style={{ textDecoration: 'underline' }}>UI & UX Motion Designer</Link>.
            <Box display={{ base: 'inline', xl: "block" }} paddingLeft={{ base: "6px", xl: '0' }}>
              I create beautiful experiences for <Text as="span" className="line-through-users">users</Text>
            </Box>
          </Heading>
        </Box>
        <Heading as="h3"
          position="relative"
          textAlign="left"
          margin="80px 0 120px 0"
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
          Featured projects
        </Heading>
        <Flex justifyContent="space-between" alignItems="center">
          <Box textAlign="left">
            <Heading as="h4" 
              fontSize="36px"
              fontWeight="600"
            >
              Evidencia
            </Heading>
            <Text 
              color={config.darkgrayColor}
              marginTop="26px"
              maxWidth="300px"
            >
              One solution for many tomorrow's problems; a new way of legislating Argentina’s future.
            </Text>
          </Box>
          <Box
            backgroundColor={config.blackColor}
            h="600px"
            borderRadius="40px"
            minWidth="500px"
          />
        </Flex>
      </Box>
    </Box>
    {/*<CircleText text="Click here for a friendly chat :)" link="mailto:contact@lisandropat.com" />*/}
    {/*<Footer />*/}
  </Layout>
)

export default Index
