import React from "react";
import config from "../../data/SiteConfig";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

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
    <section>
      Landing.
    </section>
    <Footer />
  </Layout>
)

export default Index
