import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Image src={props.image} />
    <Title>{props.title}</Title>
    <Subtitle>{props.text}</Subtitle>
  </Container>
);

const Container = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: grid;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  height: 110%;
  z-index: -1;
`;

const Title = styled.h3`
  margin: 20px 0 0 20px;
  width: 190px;
  color: white;
  font-size: 30px;
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  margin: 0 0 20px 20px;
  align-self: end;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
`;

export default Card;
