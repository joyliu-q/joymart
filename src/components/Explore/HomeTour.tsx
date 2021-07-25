import { QuestionIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
  IconButton,
  Flex,
  UnorderedList,
  ListItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import { set } from "idb-keyval";
import React from "react";
import Tour, { ReactourStepContentArgs } from "reactour";
import { tourIsShown } from "../../database";

export default function HomeTour() {
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  React.useEffect(() => {
    async function checkIsShown() {
      const isShown = await tourIsShown({ tourName: "home-tour" });
      setIsTourOpen(!isShown);
    }
    checkIsShown();
  }, []);
  return (
    <>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        getCurrentStep={async (current) => {
          if (current === steps.length - 1) {
            await set("home-tour", true);
          }
        }}
      />
      <Flex position="absolute" bottom="20px" right="20px">
        <IconButton
          className="help-button"
          aria-label="question-icon"
          icon={<QuestionIcon />}
          rounded={"full"}
          px={6}
          size="lg"
          zIndex={6}
          onClick={() => setIsTourOpen(true)}
        />
      </Flex>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

const steps = [
  {
    selector: ".first-step",
    content: (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Heading>Hello!</Heading>
          <Text>My name is Joy, and welcome to Joymart!</Text>
        </Flex>
      </Flex>
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
        <Flex pt="20px">
          <Image
            boxSize="100px"
            src="/graphics/joy.svg"
            mr="20px"
            className="bounce"
          />
          <Flex flexDirection="column" justifyContent="center">
            <Text>
              Before we start, let me give you a brief tour of our supermarket.
            </Text>
            <Flex justifyContent="space-between">
              <Button onClick={() => goTo(2)}>Ok, let's go!</Button>
              <Button variant="outline" onClick={() => goTo(steps.length - 1)}>
                Skip tour.
              </Button>
            </Flex>
          </Flex>
        </Flex>
      );
    },
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".third-step",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>Alright! Let's do this.</Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".third-step",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            Currently, we're in the <b>Layout Map view</b>. What you're seeing
            in the background is a <b>Layout</b> of our supermarket!
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".frozen-food",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            In the top left, we have the <b>Frozen Food</b> section!
          </Text>
          <Text>This includes milk, dairy, and other frozen items.</Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".fruits-and-veggies",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            In the bottom left, we have <b>Fruits</b> &amp; <b>Vegetables</b>!
          </Text>
          <Text>
            We have a wide assortment of items available. Joymart ensures our
            produce are fresh and sourced from local areas.
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".middle-aisles",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            The bulk of our items sit in the <b>middle aisles</b>. of our store.
            These include:
          </Text>
          <UnorderedList>
            <ListItem>Foods &amp; drinks</ListItem>
            <ListItem>Household items</ListItem>
            <ListItem>Miscellaneous supplies</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".furniture",
    content: () => (
      <Flex pt="20px" flexDir="column">
        <Flex>
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>
              Want <b>furniture</b>? Pick up some furniture and home decoration
              items in the upper right corner.
            </Text>
          </Flex>
        </Flex>
        <Flex
          borderLeft="2px solid #C4C4C4"
          bgColor="gray.50"
          p={4}
          color="gray.500"
        >
          Luckily this store is online, so there's not much heavy-lifting
          needed, right? ;)
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".electronics",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            Here we have some <b>electronics</b>.
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".clothes",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            At the bottom right, you can <b>purchase clothes</b>!
          </Text>
          <Text>
            To make up for the virtual experience, we added a little{" "}
            <b>mini-game</b> where you can try these clothes on. Feel free to
            take a look~
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".navigation-instructions",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            To navigate to a particular aisle or section mentioned above, you
            can click the sticker button in that section!
          </Text>
          <Text>
            Once you're in an aisle, feel free to{" "}
            <b>walk around to other aisles</b> or <b>click the back button</b>{" "}
            to get back to the layout map!
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".registers",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            Once you're done, you can click one of the registers at the very
            bottom to <b>check out</b>!
          </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".conclusion-two",
    content: () => (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Text>And that's it! </Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".help-button",
    content: function SkipOrContinue(
      args: ReactourStepContentArgs
    ): React.ReactNode {
      const goTo = args.goTo;
      return (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>
              If you ever need me again, you can click the help icon over here.
            </Text>
            <Text>
              Happy to <b>give another tour</b> or answer any <b>questions</b>!
            </Text>
            <Button onClick={() => goTo(0)}>Restart tour!</Button>
          </Flex>
        </Flex>
      );
    },
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
];
