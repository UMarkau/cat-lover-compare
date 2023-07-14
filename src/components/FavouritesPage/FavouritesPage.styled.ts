import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  ${({ theme }) =>
    theme.breakpoints.desktop(css`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    `)}
`;

const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledFavouritesPage = {
  Wrapper,
  CatImage,
};

export default StyledFavouritesPage;
