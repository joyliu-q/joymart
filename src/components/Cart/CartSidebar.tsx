import {
  Text,
  Flex,
  Heading,
  Stack,
  Button,
  Box,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Image,
  Link,
} from "@chakra-ui/react";
import {
  CartItems,
  ITEMS_MAP,
  RoutineEssentialItems,
} from "../../database/index";
import React from "react";
import RoutineEssentialsList from "./RoutineEssentialsList";
import Confetti from "react-confetti";

const CONFETTI_COLORS = [
  "#FF8DA9",
  "#FF8086",
  "#7AD0DF",
  "#FFE266",
  "#D3E080",
  "#A183E2",
];

export default function CartSidebar({
  cart,
  routineEssentials,
}: {
  cart: CartItems;
  routineEssentials: RoutineEssentialItems;
}): React.ReactElement {
  const [subtotal, setSubtotal] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Calculate subtotal based on cart
  React.useEffect(() => {
    async function refreshData() {
      let total = 0;

      Object.entries(cart).forEach((entry) => {
        const [id, { count }] = entry;
        const item = ITEMS_MAP.get(id);
        if (item !== null && item !== undefined) {
          total = total + item.price.default * count;
        }
      });
      setSubtotal(Math.round(total * 100) / 100);
    }
    refreshData();
  }, [cart]);

  return (
    <Box position="relative" height="100%">
      <Heading as="h1">Checkout</Heading>
      <Stack direction="column" spacing={2} mb={6}>
        <Stack direction="column" spacing={2} borderBottom={`2px solid grey`}>
          <Flex justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>${subtotal}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Delivery</Text>
            <Text>Free</Text>
          </Flex>
        </Stack>
        <Flex justifyContent="space-between">
          <Text>Est. total</Text>
          <Text>${subtotal}</Text>
        </Flex>
        <Flex alignItems="center" onClick={onOpen} role="group">
          <Image
            boxSize="100px"
            src="/graphics/paper-plane.svg"
            mr="20px"
            _groupHover={{
              transform: "scale(1.1)",
              transition: "all 0.8s ease",
            }}
          />
          <Button
            size="lg"
            bg="blue.500"
            color="white"
            minHeight={16}
            width="100%"
            fontSize={24}
            _hover={{
              bg: "teal.400",
            }}
          >
            <Text fontSize="lg">Continue to check out</Text>
          </Button>
        </Flex>
      </Stack>
      <RoutineEssentialsList
        routineEssentials={routineEssentials}
        cart={cart}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Flex zIndex={3}>
          <Confetti colors={CONFETTI_COLORS} />
        </Flex>
        <ModalContent position="fixed" top="calc(50% - 300px)" p={4}>
          <ModalHeader>
            <Heading>Thank you for playing Joymart's demo!</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text>
                Joymart is an imaginary online shopping platform where I
                explored bringing the personal touch of in-person shopping into
                a convenient virtual experience.
              </Text>
              {/* <Text>This includes:</Text>
            <UnorderedList>
              <ListItem>
                Personal interactions with individuals in the shop
              </ListItem>
              <ListItem>
                The exploration aspect (a physical "space" that you can traverse
                and find items)
              </ListItem>
              <ListItem>
                Being able to quickly see at what's in your cart while shopping
              </ListItem>
              <ListItem>The Joy of discovery</ListItem>
            </UnorderedList> */}
              <Text>
                You can learn more about Joymart and my development process{" "}
                <Link
                  target="_blank"
                  href="https://github.com/joyliu-q/joymart"
                  textDecor="underline"
                >
                  here
                </Link>
                .
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              as="a"
              target="_blank"
              href="https://github.com/joyliu-q/joymart"
              variant="ghost"
            >
              See Github
            </Button>
            <Button colorScheme="pink" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
