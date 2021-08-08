import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Avatar,
  Image,
  Tooltip,
} from "@chakra-ui/react";

const LeaderboardUserRow = ({
  name,
  count,
}: {
  name: string;
  count: number;
}) => {
  return (
    <Stack
      display="flex"
      textAlign="left"
      flexDir="column"
      pl={4}
      pr={8}
      width="100%"
    >
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        bgColor="white"
        filter="drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.1))"
        borderRadius="50px"
        justifyContent="space-between"
        pr={4}
      >
        <Stack alignItems="center" direction="row">
          <Avatar
            src={`https://unsplash.it/102/102?image=${Math.floor(
              Math.random() * 50
            )}`}
          />
          <Text>{name}</Text>
        </Stack>
        <Text fontWeight={800}>{count}</Text>
      </Stack>
    </Stack>
  );
};
// TODO: currently a concept as users is not implemented
export default function Leaderboard() {
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
          {/* Goldstar Customers */}
          <Flex
            maxW={"500px"}
            flexDir="row"
            borderRadius="25px"
            bgColor="white"
            mb={4}
          >
            <Stack
              display="flex"
              flexDir="column"
              bg="teal.300"
              justifyContent="center"
              alignItems="center"
              borderLeftRadius="25px"
              color="white"
              px={4}
            >
              <Text
                fontWeight={800}
                textAlign="center"
                textTransform="uppercase"
              >
                Top Five Customers
              </Text>
              <Avatar
                src={`https://unsplash.it/102/102?image=${Math.floor(
                  Math.random() * 50
                )}`}
              />
              <Text fontSize="sm">Joy (@joyliu-q)</Text>
              <Text fontSize="sm" fontWeight={800}>
                Rank 10 Customer{" "}
                <Tooltip
                  label={`Your ranking is determined by the number of times you made a purchase and the purchase content.`}
                  aria-label={`Your ranking is determined by the number of times you made a purchase and the purchase content`}
                >
                  <QuestionIcon />
                </Tooltip>
              </Text>
            </Stack>
            <Stack
              display="flex"
              textAlign="left"
              flexDir="column"
              px={4}
              py={8}
              width="100%"
              spacing={4}
            >
              <LeaderboardUserRow name="Nou (@wonnou1)" count={12} />
              <LeaderboardUserRow name="Won (@2039ao)" count={10} />
              <LeaderboardUserRow name="Buddy (@buddy.sam)" count={10} />
              <LeaderboardUserRow name="Paige (@paige_4)" count={8} />
            </Stack>
          </Flex>
          {/* Top Quest Users */}
          <Flex
            maxW={"500px"}
            flexDir="row"
            borderRadius="25px"
            bgColor="white"
            mb={4}
          >
            <Stack
              display="flex"
              flexDir="column"
              bg="pink.300"
              justifyContent="center"
              alignItems="center"
              borderLeftRadius="25px"
              color="white"
              px={4}
            >
              <Text
                fontWeight={800}
                textAlign="center"
                textTransform="uppercase"
              >
                Top Quest Completers
              </Text>
              <Avatar
                src={`https://unsplash.it/102/102?image=${Math.floor(
                  Math.random() * 50
                )}`}
              />
              <Text fontSize="sm">Joy (@joyliu-q)</Text>
              <Text fontSize="sm" fontWeight={800}>
                18 completed
              </Text>
            </Stack>
            <Stack
              display="flex"
              textAlign="left"
              flexDir="column"
              px={4}
              py={8}
              width="100%"
              spacing={4}
            >
              <LeaderboardUserRow name="Sam (@sam.buddy)" count={16} />
              <LeaderboardUserRow name="Buddy (@buddy.sam)" count={7} />
              <LeaderboardUserRow name="Nou (@wonnou1)" count={5} />
              <LeaderboardUserRow name="Won (@2039ao)" count={4} />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
