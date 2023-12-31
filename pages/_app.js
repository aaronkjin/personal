"use client";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
