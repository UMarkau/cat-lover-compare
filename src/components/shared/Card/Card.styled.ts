import styled from "styled-components";

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.whiteColor};
  overflow: hidden;
  width: 250px;
  height: 300px;
  transition: all 0.2s ease-in-out;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const StyledCard = {
  Wrapper,
};

export default StyledCard;
