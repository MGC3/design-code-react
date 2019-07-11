import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Section from "../components/Section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero image={require("../images/wallpaper3.jpg")}>
        <HeroGroup>
          <HeroTitle>Learn to design and code React apps</HeroTitle>
          <HeroText>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </HeroText>
          <Link to="/page-2" className="HeroVideoLink">
            Watch the video
          </Link>
        </HeroGroup>
      </Hero>
    </div>

    {/* // TODO in Section 8
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify"
    ></Section> */}
  </Layout>
);

const Hero = styled.div`
  background: url(${props => props.image});
  height: 920px;
  background-size: cover;
  background-position: center;
`;

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
`;

const HeroText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  line-height: 1.5;
`;
export default IndexPage;
