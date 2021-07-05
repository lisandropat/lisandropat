import React from "react";
import config from "../../data/SiteConfig";

import {
  Box
} from "@chakra-ui/react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
//import Footer from "../components/Footer/Footer";

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
    <Box
      bgGradient="linear(to-tr, #412AA8, #8439A4)"
      display="block"
      w="97vw"
      m="70px 1.5vw 0 1.5vw"
      h="90vh"
      borderRadius="30px"
    >

    </Box>
    {/*<Footer />*/}
  </Layout>
)

export default Index
