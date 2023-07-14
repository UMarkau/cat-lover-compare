import { NavLink } from "react-router-dom";

import Styled from "./NavMenu.styled";

const navLinks = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/breeds",
    title: "Breeds",
  },
  {
    to: "/favourites",
    title: "Favourites",
  },
] as const;

export const NavMenu = () => {
  return (
    <Styled.Wrapper>
      {navLinks.map((link) => (
        <Styled.NavItem key={link.title}>
          <NavLink to={link.to}>{link.title}</NavLink>
        </Styled.NavItem>
      ))}
    </Styled.Wrapper>
  );
};
