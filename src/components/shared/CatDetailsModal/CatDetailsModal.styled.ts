import styled, { css } from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Button } from "..";

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const CopyLinkButton = styled(Button)``;

const commonIconStyle = css`
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${({ theme }) => theme.orangeColor};
`;

const AddToFavouritesIcon = styled(AiOutlineStar)`
  ${commonIconStyle}
`;

const RemoveFromFavouritesIcon = styled(AiFillStar)`
  ${commonIconStyle}
`;

const IconWrapper = styled.button<{ isLoading: boolean }>`
  ${({ isLoading }) =>
    isLoading &&
    `
    pointer-events: none;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `};
`;

const BreedsWrapper = styled.div`
  margin-top: 30px;
`;

const BreedsDescription = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.orangeColor};
`;

const StyledCatDetailsModal = {
  Wrapper,
  Image,
  ButtonsWrapper,
  CopyLinkButton,
  AddToFavouritesIcon,
  RemoveFromFavouritesIcon,
  IconWrapper,
  BreedsWrapper,
  BreedsDescription,
};

export default StyledCatDetailsModal;
