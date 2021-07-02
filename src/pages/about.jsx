import React from "react";
import config from "../../data/SiteConfig";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import '../styles/about/about.scss';

const About = () => (
  <Layout 
    pageName="about"
  >
    <SEO 
      title={`About me ・ ${config.siteTitle}`}
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <section>
      About.
    </section>
    <Footer />
  </Layout>
)

export default About
