import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      });
    } else {
      this.setState({
        hasScrolled: false,
      });
    }
  };

  render() {
    return (
      <TopNav className={this.state.hasScrolled ? "HeaderScrolled" : ""}>
        <TopNavGroup>
          <TopNavLink to="/">
            <img src={require("../images/logo-designcode.svg")} width="30" />
          </TopNavLink>
          <TopNavLink to="/courses">Courses</TopNavLink>
          <TopNavLink to="/downloads">Downloads</TopNavLink>
          <TopNavLink to="/workshops">Workshops</TopNavLink>
          <TopNavButton to="/buy">Sign Up</TopNavButton>
        </TopNavGroup>
      </TopNav>
    );
  }
}

const TopNav = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 640px) {
    padding: 15px 0;
  }

  &.HeaderScrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
  }
`;

const TopNavScrolled = styled(TopNav)``;

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
  border-radius: 10px;
  padding: 10px 20px;
  transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    color: black;
    transform: translateY(-3px);
  }
`;

const TopNavButton = styled(Link)`
  padding: 10px 20px;
  font-size: 20px;
  background: #56ccf2;
  border: none; /* get rid of button defaults */
  font-weight: 700;
  border-radius: 10px;
  outline: none; /* get rid of outline/glow on element when clicking */
  cursor: pointer; /* turns cursor into pointer on hover */
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    color: black;
    transform: translateY(-3px);
  }
`;

export default Header;
