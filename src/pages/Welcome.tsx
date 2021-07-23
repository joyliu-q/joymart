import { QuestionIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  IconButton,
  Flex,
  Center,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Tour, { ReactourStepContentArgs } from "reactour";

const steps = [
  {
    selector: ".first-step",
    content: (
      <Box pt="20px">
        <Text>Hello! My name is Joy, and welcome to Joymart!</Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".second-step",
    content: function SkipOrContinue(
      args: ReactourStepContentArgs
    ): React.ReactNode {
      const goTo = args.goTo;
      return (
        <Box pt="20px">
          <Text>
            Before we start, let me give you a brief tour of our supermarket.
          </Text>
          <Flex justifyContent="space-between">
            <Button onClick={() => goTo(2)}>Ok, let's go!</Button>
            <Button variant="outline" onClick={() => goTo(steps.length - 1)}>
              Skip tour.
            </Button>
          </Flex>
        </Box>
      );
    },
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".third-step",
    content: () => <Text>Alright! Let's do this.</Text>,
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".third-step",
    content: () => (
      <Box pt="20px">
        <Text>
          Currently, we're in the <b>Layout Map view</b>. What you're seeing in
          the background is a <b>Layout</b> of our supermarket!
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".frozen-food",
    content: () => (
      <Box pt="20px">
        <Text>
          In the top left, we have the <b>Frozen Food</b> section!
        </Text>
        <Text>This includes milk, dairy, and other frozen items.</Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".fruits-and-veggies",
    content: () => (
      <Box pt="20px">
        <Text>
          In the bottom left, we have <b>Fruits</b> &amp; <b>Vegetables</b>!
        </Text>
        <Text>
          We have a wide assortment of items available. Joymart ensures our
          produce are fresh and sourced from local areas.
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".middle-aisles",
    content: () => (
      <Box pt="20px">
        <Text>
          The bulk of our items sit in the <b>middle aisles</b>. of our store.
          These include:
        </Text>
        <UnorderedList>
          <ListItem>Foods &amp; drinks</ListItem>
          <ListItem>Household items</ListItem>
          <ListItem>Miscellaneous supplies</ListItem>
        </UnorderedList>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".furniture",
    content: () => (
      <Box pt="20px">
        <Text>
          Want <b>furniture</b>? Pick up some furniture and home decoration
          items in the upper right corner.
        </Text>
        <Flex
          borderLeft="2px solid #C4C4C4"
          bgColor="gray.50"
          p={4}
          color="gray.500"
        >
          Luckily this store is online, so there's not much heavy-lifting
          needed, right? ;)
        </Flex>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".electronics",
    content: () => (
      <Box pt="20px">
        <Text>
          Here we have some <b>electronics</b>.
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".clothes",
    content: () => (
      <Box pt="20px">
        <Text>
          At the bottom right, you can <b>purchase</b> clothes!
        </Text>
        <Text>
          To make up for the virtual experience, we added a little mini-game
          where you can try these clothes on. Feel free to take a look~
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".navigation-instructions",
    content: () => (
      <Box pt="20px">
        <Text>
          To navigate to a particular aisle or section mentioned above, you can
          click the sticker button in that section!
        </Text>
        <Text>
          Once you're in an aisle, feel free to{" "}
          <b>walk around to other aisles</b> or <b>click the back button</b> to
          get back to the layout map!
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".conclusion",
    content: () => (
      <Box pt="20px">
        <Text>
          Once you're done, you can click one of the registers at the very
          bottom to <b>check out</b>!
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".conclusion-two",
    content: () => (
      <Box pt="20px">
        <Text>And that's it for the layout of our supermarket! </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".help-button",
    content: () => (
      <Box pt="20px">
        <Text>
          If you ever need me again, you can click the help icon over here.
        </Text>
        <Text>
          Happy to <b>give another tour</b> or answer any <b>questions</b>!
        </Text>
      </Box>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
];

export default function Welcome() {
  const [isTourOpen, setIsTourOpen] = React.useState(true);

  return (
    <Container
      maxW={"8xl"}
      bgImage="url('/mapLayout.svg')"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      bgPos="center"
      minHeight="calc(100vh - 60px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
      {/*
      <Center
        width="calc(100% - 24px)"
        minHeight="150px"
        position="absolute"
        bottom={0}
        m={4}
        p={4}
        bgColor="gray.300"
      >
        <Flex flexDir="column">Hi!</Flex>
      </Center>
      */}
      <Flex position="absolute" bottom="20px" right="20px">
        <IconButton
          className="help-button"
          aria-label="question-icon"
          icon={<QuestionIcon />}
          rounded={"full"}
          px={6}
          size="lg"
          onClick={() => setIsTourOpen(true)}
        />
      </Flex>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Container>
  );
}
