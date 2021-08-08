import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { ReactourStepContentArgs } from "reactour";

// TODO: CHECK IF QUEST HAS ALREADY BEEN COMPLETED
// TODO: IF QUEST IS ALREADY COMPLETED, DISPLAY THANK YOU MESSAGES

export const getCarlQuestConfig = ({
  acceptQuest,
  declineQuest,
}: {
  acceptQuest: () => void;
  declineQuest: () => void;
}) => [
  {
    selector: ".step",
    content: function SkipOrContinue(
      args: ReactourStepContentArgs
    ): React.ReactNode {
      const goTo = args.goTo;
      return (
        <Flex pt="20px">
          <Image boxSize="100px" src="/graphics/people/carl.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Heading>Carl</Heading>
            <Text>Hey there, fella! How's your day going?</Text>
            <Flex justifyContent="space-between">
              <Button onClick={() => goTo(2)}>Pretty good!</Button>
              <Button variant="outline" onClick={() => goTo(1)}>
                Eh, it could be better.
              </Button>
            </Flex>
          </Flex>
        </Flex>
      );
    },
    style: {
      minWidth: "500px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
  {
    selector: ".step",
    content: (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/people/carl.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Heading>Carl</Heading>
          <Text>Could be better, huh? I feel that way on some days, too.</Text>
          <Text>
            It is okay to have bad days. You will sail through like a pro!
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
    content: (
      <Flex pt="20px">
        <Image boxSize="100px" src="/graphics/people/carl.svg" mr="20px" />
        <Flex flexDirection="column" justifyContent="center">
          <Heading>Carl</Heading>
          <Text>Yeah, I'm having a pretty 'ight day I think.</Text>
          <Text>
            Mostly been a bit quiet at home during this pandemic. Hope this
            virtual shopping trip can cheer me up.
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
          <Image boxSize="100px" src="/graphics/people/carl.svg" mr="20px" />
          <Flex flexDirection="column" justifyContent="center">
            <Heading>Carl</Heading>
            <Text>
              Hmm, why don't we both try to talk to every person here inside
              this shopping mall?
            </Text>
            <Flex justifyContent="space-between">
              <Button onClick={acceptQuest}>Let's do it!</Button>
              <Button variant="outline" onClick={declineQuest}>
                I'll pass for now.
              </Button>
            </Flex>
          </Flex>
        </Flex>
      );
    },
    style: {
      minWidth: "500px",
      fontFamily: "'Quicksand', sans-serif",
    },
  },
];
