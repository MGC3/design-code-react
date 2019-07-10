import React from "react";
import styled from "styled-components";

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
);

const SectionGroup = styled.div`
  /* TODO: pick up and learn from lesson 8
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px; */
`;

const SectionLogo = styled.img``;

const SectionTitleGroup = styled.div``;

const SectionTitle = styled.h3``;

const SectionText = styled.p``;

export default Section;
