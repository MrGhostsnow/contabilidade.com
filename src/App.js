import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import PricingBenefits from "./components/PricingBenefits/index";
import PricePlans from "./components/PricePlans/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PricingBenefits />
      <PricePlans />
    </ThemeProvider>
  );
}

export default App;
