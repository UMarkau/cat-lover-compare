import styled from "styled-components";

export interface IButtonProps {
  isLoading?: boolean;
}

const Button = styled.button<IButtonProps>`
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 22px;
  background-color: ${({ theme }) => theme.orangeColor};
  color: ${({ theme }) => theme.whiteColor};
  ${({ isLoading }) => isLoading && "pointer-events: none;"}
`;

const StyledButton = {
  Button,
};

export default StyledButton;
