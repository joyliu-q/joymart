import { extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";

// Add components here for custom chakra components
const overrides = {
  components: { Heading },
};

export default extendTheme(overrides);
