import React from "react";
import config from "../../../data/SiteConfig";

import {
  Heading,
  Box
} from '@chakra-ui/react';

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/SEO/SEO";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import Image from '../../images/portfolio/zala.jpeg';

import '../../styles/case-study/case-study.scss';

const Zala = () => (
  <Layout
    pageName="case-study"
  >
    {/* eslint-disable-next-line */}
    <SEO 
      title={`Zala by ${config.siteTitle}`}
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <Box
      position="absolute"
      zIndex="2"
      bgGradient="linear(to-b, rgba(15,15,15,1), rgba(15,15,15,0))"
      h="40vh"
      w="100vw"
      top="55px"
    />
    <Box
        position="absolute"
        w="100vw"
        h="100vh"
        top="55px"
        overflow="hidden"
    >
      <Box 
        position="absolute"
        w="100vw"
        h="100vh"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={Image}
        opacity=".25"
        filter="blur(15px)"
      />
    </Box>
    <Heading as="h2"
      fontSize="36px"
      letterSpacing="-1px"
      position="absolute"
      zIndex="3"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      color={config.backgroundColor}
    >
      Case study in progress.
    </Heading>
    <Footer />
  </Layout>
)

export default Zala
