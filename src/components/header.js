import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
const Header = ({ siteTitle }) => (
  <div>
    <TopNav>
      <TopNavGroup>
        <Link to="/">
          <img src={require("../images/logo-designcode.svg")} width="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </TopNavGroup>
    </TopNav>
  </div>
);

const TopNav = styled.div``;

const TopNavGroup = styled.div``;

export default Header;
