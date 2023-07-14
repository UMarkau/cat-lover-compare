import { PropsWithChildren } from "react";

import { Spinner } from "../Spinner";
import Styled, { IButtonProps } from "./Button.styled";

interface IProps {
  onClick: () => void;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  isLoading,
  className,
}: PropsWithChildren<IProps & IButtonProps>) => {
  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      isLoading={isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </Styled.Button>
  );
};
