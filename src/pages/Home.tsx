import { QuestionIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  IconButton,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";

export default function Home() {
  // Create reference to store the Typed wrapper
  const el = React.useRef(null as any);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null as any);

  // TODO: add more languages?
  React.useEffect(() => {
    const options = {
      strings: [
        "Welcome to <b style='color: #ED8936'>Joymart</b>",
        "Bienvenido a <b style='color: #ED8936'>Joymart</b>",
        "欢迎来到<b style='color: #ED8936'>Joymart</b>",
        "Bienvenue chez <b style='color: #ED8936'>Joymart</b>",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current as string | Element, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

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
        maxWidth="calc(100vw - 40px)"
        top="80px"
        bottom={{
          base: "calc(50% + 12vh)",
          md: "calc(50% + 14vh)",
          lg: "calc(50% + 25vh)",
        }}
      >
        <Heading
          as="span"
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
          textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
        >
          <div className="wrap">
            <div className="type-wrap">
              <span
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                ref={el}
              />
            </div>
          </div>
        </Heading>
        <Text
          fontSize={{ base: "md", sm: "xl", md: "2xl" }}
          textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
        >
          An interactive and gamified online shopping experience
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
          _hover={{
            bg: "orange.500",
            transform: "scale(1.05)",
            transition: "all 0.8s ease",
          }}
          as="a"
          href="/explore"
          size="lg"
        >
          Start Shopping
        </Button>
        <Tooltip
          label={`Welcome! Click on the "Start Shopping" button to start!`}
          aria-label={`Welcome! Click on the "Start Shopping" button to start!`}
        >
          <IconButton
            aria-label="question-icon"
            icon={<QuestionIcon />}
            rounded={"full"}
            px={6}
            size="lg"
          />
        </Tooltip>
      </Stack>
    </Container>
  );
}
