import { QuestionIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import HomeTour from "../components/Explore/HomeTour";
import Map from "../components/Explore/Map/index";

// Layout Map
export default function Welcome() {
  return (
    <>
      <HomeTour />
      <Map />
    </>
  );
}
