import styled, { css } from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Body = styled.div`
  z-index: 3;
  width: 80%;
  height: 80%;
  background-color: ${({ theme }) => theme.whiteColor};
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  border-radius: 15px;
  overflow: scroll;
  scrollbar-width: none;
  padding-top: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  position: relative;

  ${({ theme }) =>
    theme.breakpoints.desktop(css`
      width: 50%;
      height: 80%;
    `)}
`;

const CloseIcon = styled(AiOutlineCloseCircle)`
  color: ${({ theme }) => theme.orangeColor};
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const StyledModal = {
  Body,
  CloseIcon,
  IconWrapper,
};

export default StyledModal;
