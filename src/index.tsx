import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./themes/GlobalStyle";
import { theme } from "./themes/theme";
import { Router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
