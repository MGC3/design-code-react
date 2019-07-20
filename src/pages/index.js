import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { fadeUp } from "../styles/KeyFrames";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Section from "../components/Section";
import Card from "../components/Card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero image={require("../images/wallpaper3.jpg")}>
        <HeroGroup>
          <HeroTitle>
            Learn to <br /> design and code React apps
          </HeroTitle>
          <HeroText>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </HeroText>
          <VideoLink to="/page-2">Watch the video</VideoLink>
        </HeroGroup>
      </Hero>
      <div className="Cards">
        <CardsTag>11 courses, more coming</CardsTag>
        <CardGroup>
          <Card
            title="React for Designers"
            text="12 sections"
            image={require("../images/wallpaper.jpg")}
          ></Card>
          <Card
            title="Design System"
            text="10 sections"
            image={require("../images/wallpaper2.jpg")}
          ></Card>
          <Card
            title="Sound Design"
            text="5 sections"
            image={require("../images/wallpaper3.jpg")}
          ></Card>
          <Card
            title="ARKit 2"
            text="10 sections"
            image={require("../images/wallpaper4.jpg")}
          ></Card>
        </CardGroup>
      </div>
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
  @media (max-width: 640px) {
    padding: 100px 20px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  @media (max-width: 640px) {
    font-size: 40px;
  }
  opacity: 0;
  animation: ${fadeUp};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const HeroText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  line-height: 1.5;
  @media (max-width: 640px) {
    font-size: 24px;
  }
  opacity: 0;
  animation: ${fadeUp} 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const VideoLink = styled(Link)`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    color: black;
  }
`;

const CardsTag = styled.h2`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  /* build the grid */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default IndexPage;
