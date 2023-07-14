import styled from "styled-components";

const Wrapper = styled.ul`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  list-style: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.orangeColor};
  color: ${({ theme }) => theme.whiteColor};
`;

const NavItem = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 18px;
    text-decoration: none;
    color: ${({ theme }) => theme.whiteColor};
    &.active {
      text-decoration: underline;
      font-size: 20px;
    }
  }
`;

const StyledNavMenu = {
  Wrapper,
  NavItem,
};

export default StyledNavMenu;
