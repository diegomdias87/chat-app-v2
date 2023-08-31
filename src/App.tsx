import { ChakraProvider } from "@chakra-ui/react";

import Routes from "~/router";
import theme from "~/theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
);

export default App;
