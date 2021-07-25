import { extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";
import Text from "./components/Text";

// Add components here for custom chakra components
const overrides = {
  components: { Heading, Text },
};

export default extendTheme(overrides);
