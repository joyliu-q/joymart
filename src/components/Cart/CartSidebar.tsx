import {
  Text,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import { ITEMS_MAP } from "../../database/index";
import React from "react";
import { QuestionIcon } from "@chakra-ui/icons";

export default function CartSidebar({
  cart,
  routineEssentials,
}: {
  cart: [string, number][];
  routineEssentials: [string, {}][];
}): React.ReactElement {
  const [subtotal, setSubtotal] = React.useState(0);
  const [routineIsCollapsed, setRoutineIsCollapsed] = React.useState(true);

  // Calculate subtotal based on cart
  React.useEffect(() => {
    async function refreshData() {
      let total = 0;

      cart.forEach((entry) => {
        const [id, count] = entry;
        const item = ITEMS_MAP.get(id);
        if (item !== null && item !== undefined) {
          total = total + item.price.default * (count as number);
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
        <Button
          size="lg"
          bg="#FD9500"
          color="orange.800"
          minHeight={16}
          fontSize={24}
          _hover={{
            bg: "#FFBF2F",
          }}
        >
          Continue to check out
        </Button>
      </Stack>
      <Center
        display="flex"
        flexDir="column"
        bgColor="orange.100"
        minHeight={24}
        maxHeight="100%"
        width="100%"
        position="absolute"
        pt={8}
        pb={20}
        bottom={0}
        transition="all .2s ease"
        _hover={{
          bgColor: "red.100",
          cursor: "pointer",
          pb: 24,
          transition: "all .3s ease",
        }}
      >
        <Box
          width={0}
          height={0}
          borderBottom="50px solid #FEB2B2"
          borderRight="50px solid transparent"
          position="absolute"
          top={0}
          right={0}
        />
        <Box
          width={0}
          height={0}
          borderTop="50px solid white"
          borderLeft="50px solid transparent"
          position="absolute"
          top={0}
          right={0}
        />
        <Heading as="h3">Routine Essentials</Heading>
        {routineEssentials.length < 1 ? (
          <>
            <Text mb={4}>Got items? Add them to Routine Essentials!</Text>
            <Button size="sm" variant="link" leftIcon={<QuestionIcon />}>
              What are Routine Essentials?
            </Button>
          </>
        ) : (
          <>
            {routineIsCollapsed ? (
              <>
                <Button variant="ghost">Add All to Cart</Button>
                {routineEssentials.slice(0, 3).map((entry) => {
                  const [id] = entry;
                  const item = ITEMS_MAP.get(id);
                  if (item == null) {
                    return (
                      <Box key={id} as="span">
                        Not Found: Item#{id}
                      </Box>
                    );
                  }
                  return <Button key={id}>Add {item.name}</Button>;
                })}
              </>
            ) : (
              <>
                <Button variant="ghost">Add All to Cart</Button>
                {Object.entries(routineEssentials).map((entry) => {
                  const [id] = entry;
                  const item = ITEMS_MAP.get(id);
                  if (item == null) {
                    return <>Not Found: Item#{id}</>;
                  }
                  return <Button>Add {item.name}</Button>;
                })}
              </>
            )}
          </>
        )}
      </Center>
    </Box>
  );
}
