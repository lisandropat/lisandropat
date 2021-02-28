import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../styles/index.scss';

const Index = () => (
  <Layout id="home">
    <SEO 
      title="Lisandro Pat"
      description="Hi, I'm an argentinian multidisciplinary designer living in Valencia, Spain. I elaborate branding, motion, 3D and web experiences."
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default Index
