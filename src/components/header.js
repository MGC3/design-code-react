import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
const Header = ({ siteTitle }) => (
  <div>
    <TopNav>
      <TopNavGroup>
        <TopNavLink to="/">
          <img src={require("../images/logo-designcode.svg")} width="30" />
        </TopNavLink>
        <TopNavLink to="/courses">Courses</TopNavLink>
        <TopNavLink to="/downloads">Downloads</TopNavLink>
        <TopNavLink to="/workshops">Workshops</TopNavLink>
        <TopNavLink to="/buy">
          <button className="TopNavButton">Buy</button>
        </TopNavLink>
      </TopNavGroup>
    </TopNav>
  </div>
);

const TopNav = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  @media (max-width: 640px) {
    padding: 15px 0;
  }
`;

const TopNavGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
    a:nth-child(4) {
      display: none;
    }
    /* ^ kind of weird to just completely hide the 4th here */
  }
`;

const TopNavLink = styled(Link)`
  color: white;
  font-weight: 700;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    color: black;
    transform: translateY(-3px);
  }
`;

export default Header;
