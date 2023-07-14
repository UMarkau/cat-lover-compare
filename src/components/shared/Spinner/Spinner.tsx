import { Overlay } from "../Overlay";

import Styled, { ISpinnerProps } from "./Spinner.styled";

export const Spinner = ({ isFullScreen }: ISpinnerProps) => {
  return isFullScreen ? (
    <Overlay>
      <Styled.Wrapper isFullScreen />
    </Overlay>
  ) : (
    <Styled.Wrapper />
  );
};
