/// <reference types="react-scripts" />
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkGrayColor: string;
    lightGrayColor: string;
    whiteColor: string;
    orangeColor: string;
    breakpoints: {
      tablet: (styles: FlattenSimpleInterpolation) => string;
      desktop: (styles: FlattenSimpleInterpolation) => string;
    };
  }
}
