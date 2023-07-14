import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const StyledOverlay = {
  Wrapper,
};

export default StyledOverlay;
