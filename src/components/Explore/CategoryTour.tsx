import { QuestionIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
  IconButton,
  Flex,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { set } from "idb-keyval";
import React from "react";
import Tour, { ReactourStepContentArgs } from "reactour";
import { tourIsShown } from "../../database";

export default function CategoryTour({ category }: { category: string }) {
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  React.useEffect(() => {
    async function checkIsShown() {
      const isShown = await tourIsShown({ tourName: "category-tour" });
      setIsTourOpen(!isShown);
    }
    checkIsShown();
  }, []);

  const steps = [
    {
      selector: ".step",
      content: function SkipOrContinue(
        args: ReactourStepContentArgs
      ): React.ReactNode {
        const goTo = args.goTo;
        return (
          <>
            <Flex pt="20px" flexDir="column">
              <Flex>
                <Image
                  boxSize="100px"
                  src="/graphics/joy.svg"
                  mr="20px"
                  className="bounce"
                />
                <Flex flexDirection="column" justifyContent="center">
                  <Heading>Nice!</Heading>
                  <Text>
                    I see you found the category pages. Anything I can help
                    with?
                  </Text>
                </Flex>
              </Flex>
              <Flex flexDir="column">
                <Button onClick={() => goTo(1)}>
                  Can you give me a tour of this page?
                </Button>
                <Button
                  variant="outline"
                  onClick={() => goTo(steps.length - 1)}
                >
                  Just looking around
                </Button>
              </Flex>
            </Flex>
          </>
        );
      },
      style: {
        minWidth: "400px",
        fontFamily: "'Quicksand', sans-serif",
      },
    },
    {
      selector: ".step",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>Of course!</Text>
            <Text>
              We're currently in the <b>{category}</b> section, but the features
              apply to all!
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
      selector: ".items",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>On the left, you have the list of items in stock.</Text>
          </Flex>
        </Flex>
      ),
      style: {
        minWidth: "400px",
        fontFamily: "'Quicksand', sans-serif",
      },
    },
    {
      selector: ".itemMeta",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Stack direction="column">
            <Text>
              On the right, you have the list of items you have already added to
              your shopping cart.
            </Text>
            <Text>It's super easy to check what you need!</Text>
          </Stack>
        </Flex>
      ),
      style: {
        minWidth: "400px",
        fontFamily: "'Quicksand', sans-serif",
      },
    },
    {
      selector: ".itemRow",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>Each item is represented by a card!</Text>
            <Text>
              If you click on this card, more information about it will show up
              on the right.
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
      selector: ".routineEssentials",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Stack
            direction="column"
            flexDirection="column"
            justifyContent="center"
          >
            <Text>
              Sometimes, we tend to buy the same things periodically, such as
              food and toothpaste!
            </Text>
            <Text>
              Joymart's feature, <b>Routine Essentials</b>, make it easy for you
              to find the items you need.
            </Text>
          </Stack>
        </Flex>
      ),
      style: {
        minWidth: "600px",
        fontFamily: "'Quicksand', sans-serif",
      },
    },
    {
      selector: ".routineEssentials",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Stack
            direction="column"
            flexDirection="column"
            justifyContent="center"
          >
            <Text>
              If there's something you think you'll need again, simply add it to
              Routine Essentials! Next time, you can add them all to cart with{" "}
              <b>just one click</b>!
            </Text>
          </Stack>
        </Flex>
      ),
      style: {
        minWidth: "600px",
        fontFamily: "'Quicksand', sans-serif",
      },
    },
    {
      selector: ".map",
      content: () => (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Text>
              If you ever want to quickly jump into another section, simply
              click on the <b>map icon</b>!
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
      selector: ".backButton",
      content: () => (
        <Flex pt="20px" flexDir="column">
          <Flex>
            <Image boxSize="100px" src="/graphics/joy.svg" mr="20px" />
            <Flex flexDirection="column" justifyContent="center">
              <Text>
                You can also click the back button to return to where you
                started!
              </Text>
            </Flex>
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
                If you ever need me again, you can click the help icon over
                here.
              </Text>
              <Text>
                Happy to <b>give another tour</b> or answer any <b>questions</b>
                !
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

  return (
    <>
      <Flex position="fixed" bottom={4} right={4}>
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
          getCurrentStep={async (current) => {
            if (current === steps.length - 1) {
              await set("category-tour", true);
            }
          }}
        />
      </Flex>

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
