import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  config,
});

export default theme;
