import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";

export default function Credits() {
  return (
    <Box bgColor="#FEF2A8">
      <Container
        minHeight="calc(100vh - 60px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDir="column" alignItems="center">
          <Image maxW={"550px"} src="/graphics/panels.svg" />
          <Flex
            maxW={"500px"}
            flexDir="column"
            p={8}
            borderRadius="25px"
            bgColor="white"
            borderLeft="25px solid #B2E7F1"
            borderRight="25px solid #B2E7F1"
          >
            <Heading mb={2}>About Joymart</Heading>
            <Stack textAlign="left">
              <Text>
                Joymart is an imaginary online shopping platform where I
                explored bringing the personal touch of in-person shopping into
                a convenient virtual experience.
              </Text>
              <Text
                fontWeight={800}
                textAlign="center"
                textTransform="uppercase"
              >
                Website Credits:
              </Text>
              <UnorderedList>
                <ListItem mx={8}>
                  Icons made by{" "}
                  <Link
                    fontWeight={600}
                    href="https://www.freepik.com"
                    title="Freepik"
                  >
                    Freepik
                  </Link>{" "}
                  from{" "}
                  <Link
                    fontWeight={600}
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                  >
                    www.flaticon.com
                  </Link>
                  .
                </ListItem>
                <ListItem mx={8}>
                  Shop items provided by{" "}
                  <Link fontWeight={600} href="walmart.com" title="Freepik">
                    Walmart
                  </Link>{" "}
                  and{" "}
                  <Link
                    fontWeight={600}
                    href="https://fakestoreapi.com/"
                    title="Flaticon"
                  >
                    Fake Store API
                  </Link>
                  .
                </ListItem>
                <ListItem mx={8}>Shop and layout graphics by Joy Liu.</ListItem>
                <ListItem mx={8}>Code and Concept by Joy Liu.</ListItem>
                <ListItem mx={8}>
                  Prototyped with Figma, developed with Typescript &amp;
                  React.js.
                </ListItem>
              </UnorderedList>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
