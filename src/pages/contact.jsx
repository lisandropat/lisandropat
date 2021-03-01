import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import '../styles/contact/contact.scss';

const Contact = () => (
  <Layout 
    pageName="contact"
    cursorColor="255, 154, 133"
  >
    <SEO 
      title="Lisandro Pat"
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <Header />
    <section>
      Contact.
    </section>
    <Footer />
  </Layout>
)

export default Contact
