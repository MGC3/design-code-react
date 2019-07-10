import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Section from "../components/Section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to design and code React apps</h1>
    <p>
      Complete courses about the best tools and design systems. Prototype and
      build apps with React and Swift.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify"
    ></Section>
  </Layout>
);

export default IndexPage;
