import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const StyledBreedDetailsModal = {
  Wrapper,
  Image,
};

export default StyledBreedDetailsModal;
