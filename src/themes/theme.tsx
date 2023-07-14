import { DefaultTheme, FlattenSimpleInterpolation } from "styled-components";

export const theme: DefaultTheme = {
  lightGrayColor: "#F5F5F5",
  darkGrayColor: "#424242",
  whiteColor: "#fff",
  orangeColor: "#EEB111",
  breakpoints: {
    tablet: (styles: FlattenSimpleInterpolation) =>
      `@media (min-width: 600px) {${styles}}`,
    desktop: (styles: FlattenSimpleInterpolation) =>
      `@media (min-width: 1025px) {${styles}}`,
  },
};
