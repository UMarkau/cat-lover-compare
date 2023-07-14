import { PropsWithChildren } from "react";

import Styled from "./Overlay.styled";

interface IProps {
  onClick?: () => void;
}

export const Overlay = ({ children, onClick }: PropsWithChildren<IProps>) => (
  <Styled.Wrapper onClick={onClick}>{children}</Styled.Wrapper>
);
