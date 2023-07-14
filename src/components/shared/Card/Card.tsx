import { PropsWithChildren } from "react";
import Styled from "./Card.styled";

export const Card = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return <Styled.Wrapper onClick={onClick}>{children}</Styled.Wrapper>;
};
