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
import Footer from "../components/Footer/Footer";

import { FirstProject, SecondProject } from "../components/IndexProjects"

import Tag from '../components/Tag/Tag';
import Button from '../components/Button/Button';

import CircleText from '../components/CircleText/CircleText';

import '../styles/landing/landing.scss';

const Index = () => (
  <Layout 
    pageName="landing"
  >
    {/* eslint-disable-next-line */}
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
          margin="80px 0"
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
        <Flex 
          justifyContent="space-between" 
          alignItems="center" 
          flexDirection="row-reverse" 
          display={{ base: 'initial', lg: 'flex' }}
        >
          <Link to="/portfolio/evidencia">
            <Box
              backgroundColor={config.blackColor}
              h={{ base: "400px", lg: "600px" }}
              borderRadius="40px"
              minWidth={{ lg: "500px" }}
              position="relative"
              overflow="hidden"
            >
              <FirstProject />
            </Box>
          </Link>
          <Box textAlign="left" margin={{ base: "40px auto 80px auto", lg: '0' }}>
            <Heading as="h4" 
              fontSize={{ base: "28px", lg: "36px" }}
              fontWeight="600"
            >
              Evidencia
            </Heading>
            <Text 
              color={config.darkgrayColor}
              marginTop={{ base: "26px", lg: "26px" }}
              maxWidth="300px"
            >
              One solution for many tomorrow's problems; a new way of legislating Argentina’s future.
            </Text>
            <Box mt="30px">
              <Tag text="UX Design" link="/portfolio" />
              <Tag text="UI Design" link="/portfolio" />
              <Tag text="Frontdev Dev" link="/portfolio" />
            </Box>
            <Link to="/portfolio/evidencia">
              <Box color={config.themeColor} mt="10px"
                role="group"
              >
                <Text as="span" _groupHover={{ textDecoration: 'underline' }}>
                  View case study
                </Text>
                <Text as="i" className="ri-arrow-right-line" 
                  ml="10px"
                  position="relative"
                  top="2px"
                />
              </Box>
            </Link>
          </Box>
        </Flex>
        <Flex 
          justifyContent="space-between" 
          alignItems="center" 
          mt="80px" 
          display={{ base: 'initial', lg: 'flex' }}
        >
          <Link to="/portfolio/zala">
            <Box
              backgroundColor={config.blackColor}
              h={{ base: "400px", lg: "600px" }}
              borderRadius="40px"
              minWidth={{ lg: "500px" }}
              position="relative"
              overflow="hidden"
            >
              <SecondProject />
            </Box>
          </Link>
          <Box textAlign="left" flex="2" margin={{ base: "40px auto 80px auto", lg: '0 0 0 100px' }}>
            <Heading as="h4" 
              fontSize={{ base: "28px", lg: "36px" }}
              fontWeight="600"
            >
              Zala
            </Heading>
            <Text 
              color={config.darkgrayColor}
              marginTop="26px"
              maxWidth="300px"
            >
              A new way of finding places to practice for musicians, actors and dancers.
            </Text>
            <Box mt="30px">
              <Tag text="UX Design" link="/portfolio" />
              <Tag text="UI Design" link="/portfolio" />
            </Box>
            <Link to="/portfolio/zala">
              <Box color={config.themeColor} mt="10px"
                role="group"
              >
                <Text as="span" _groupHover={{ textDecoration: 'underline' }}>
                  View case study
                </Text>
                <Text as="i" className="ri-arrow-right-line" 
                  ml="10px"
                  position="relative"
                  top="2px"
                />
              </Box>
            </Link>
          </Box>
        </Flex>
        <Button link="/portfolio" margin="160px auto">
          View more projects
        </Button>
      </Box>
    </Box>
    <CircleText text="Click here for a friendly chat :)" link="mailto:contact@lisandropat.com" />
    <Footer />
  </Layout>
)

export default Index
