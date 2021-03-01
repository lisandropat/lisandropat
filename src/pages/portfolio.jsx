import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import '../styles/portfolio/portfolio.scss';

const Portfolio = () => (
  <Layout 
    pageName="portfolio"
    cursorColor="255, 154, 133"
  >
    <SEO 
      title="Lisandro Pat"
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <section>
      Portfolio.
    </section>
    <Footer />
  </Layout>
)

export default Portfolio
