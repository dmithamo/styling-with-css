import React from "react";
import styled from "styled-components";

// Use this to contain items that will be in the navItem
const navItems = [
  { text: "Press" },
  { text: "Blog" },
  { text: "Contact Me" },
  { text: "DMithamo", isLogo: true },
  { text: "Portfolio", isCallToAction: true },
];

const Header = ({ className }) => {
  return (
    <StyledNavBar className={className}>
      <Logo>{navItems.filter((navItem) => navItem.isLogo)[0].text}</Logo>
      <StyledSecondaryNav navItems={navItems} />
    </StyledNavBar>
  );
};

const SecondaryNav = ({ className, navItems }) => {
  return (
    <div className={className}>
      {navItems
        .filter((navItem) => !navItem.isLogo)
        .map((navItem) =>
          navItem.isCallToAction ? (
            <SpecialNavItem key={navItem.text}>{navItem.text}</SpecialNavItem>
          ) : (
            <NavItem key={navItem.text}>{navItem.text}</NavItem>
          ),
        )}
    </div>
  );
};

const StyledNavBar = styled.nav`
  width: 100%;
  margin: 0;
  background-color: orange;
  display: flex;
  padding: 0.6em 0;
  justify-content: space-between;
`;

const StyledSecondaryNav = styled(SecondaryNav)`
  display: flex;
  justify-content: flex-end;

  /* Using default direction === flex-direction: row;
  * Good for creating a horizontal nav-bar
  */
`;

const NavItem = styled.p`
  cursor: pointer;
  margin: 0 20px;
  padding: 10px;

  @media (max-width: 1200px) {
    display: none;
    &:last-of-type {
      display: inline;
    }
  }
`;

const SpecialNavItem = styled(NavItem)`
  color: white;
  background-color: black;
  border-radius: 8px;
  transition: all 0.3s;

  :hover {
    color: black;
    background-color: white;
  }

  /* To style an item on the nav differently */
`;

const Logo = styled(NavItem)`
  font-weight: bold;
`;

export default Header;
