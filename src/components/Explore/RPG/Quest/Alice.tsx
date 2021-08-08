import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { ReactourStepContentArgs } from "reactour";

// TODO: CHECK IF QUEST HAS ALREADY BEEN COMPLETED
// TODO: IF QUEST IS ALREADY COMPLETED, DISPLAY THANK YOU MESSAGES

export const getAliceQuestConfig = ({
  acceptQuest,
  declineQuest,
}: {
  acceptQuest: () => void;
  declineQuest: () => void;
}) => [
  {
    selector: ".step",
    content: (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/people/alice.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Heading>Alice</Heading>
          <Text>Huh... Clementines... Where are they?</Text>
        </Flex>
      </Flex>
    ),
    style: {
      minWidth: "400px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".step",
    content: (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/people/alice.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Heading>Alice</Heading>
          <Text>
            I'm trying to buy clementines for my sister, but I can't seem to
            find where they are. Can you help?
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
    selector: ".step",
    content: function SkipOrContinue(
      args: ReactourStepContentArgs
    ): React.ReactNode {
      // const goTo = args.goTo;
      return (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/people/alice.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Heading>Alice</Heading>
            <Text>
              Oh yeah, I can give you this <b>neat coupon</b> Joymart sent me a
              few weeks ago! ( ＾∇＾)
            </Text>
            <Flex justifyContent="space-between">
              <Button onClick={acceptQuest}>Offer to help</Button>
              <Button variant="outline" onClick={declineQuest}>
                Decline
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
];
