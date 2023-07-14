import styled from "styled-components";

export interface ISpinnerProps {
  isFullScreen?: boolean;
}

const Wrapper = styled.div<ISpinnerProps>`
  width: 48px;
  height: 48px;
  border: ${({ theme, isFullScreen }) =>
    `5px solid ${isFullScreen ? theme.orangeColor : theme.lightGrayColor}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 3;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledSpinner = {
  Wrapper,
};

export default StyledSpinner;
