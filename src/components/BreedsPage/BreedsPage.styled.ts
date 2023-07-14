import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    theme.breakpoints.desktop(css`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    `)}
`;

const BreedItem = styled.div`
  width: 80%;
  height: 60px;
  a {
    color: ${({ theme }) => theme.orangeColor};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.whiteColor};
    font-size: 22px;
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  ${({ theme }) =>
    theme.breakpoints.desktop(css`
      width: auto;
      padding: 0 20px;
    `)}
`;

const StyledBreedsPage = {
  Wrapper,
  BreedItem,
};

export default StyledBreedsPage;
