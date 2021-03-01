import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import '../styles/landing/landing.scss';

const Index = () => (
  <Layout 
    pageName="landing"
    cursorColor="255, 154, 133"
  >
    <SEO 
      title="Lisandro Pat"
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <section>
      Contenido.
    </section>
    <Footer />
  </Layout>
)

export default Index
