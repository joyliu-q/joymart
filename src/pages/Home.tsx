import { QuestionIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      maxW={"8xl"}
      bgImage="url('/storefront.svg')"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      bgPos="center"
      minHeight="calc(100vh - 60px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDir="column"
        position="absolute"
        bottom={{
          base: "calc(50% + 12vh)",
          md: "calc(50% + 14vh)",
          lg: "calc(50% + 24vh)",
        }}
      >
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
          lineHeight={"110%"}
          textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
        >
          Welcome to{" "}
          <Text as={"span"} color={"orange.400"}>
            Joymart
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", sm: "xl", md: "2xl" }}
          textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
        >
          An interactive online shopping experience
        </Text>
      </Flex>

      <Stack
        mt={12}
        spacing={6}
        direction={"row"}
        bgColor="white"
        p={4}
        borderRadius="25px"
        boxShadow="0px 4px 4px rgba(255, 141, 169, 0.1);"
      >
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"orange.400"}
          _hover={{ bg: "orange.500" }}
          as="a"
          href="/explore"
          size="lg"
        >
          Start Shopping
        </Button>
        <IconButton
          aria-label="question-icon"
          icon={<QuestionIcon />}
          rounded={"full"}
          px={6}
          size="lg"
        />
      </Stack>
    </Container>
  );
}
