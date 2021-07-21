import { Text, Flex, Heading, Stack, Button, Box } from "@chakra-ui/react";
import { ITEMS_MAP } from "../../database/index";
import React from "react";
import RoutineEssentialsList from "./RoutineEssentialsList";

export default function CartSidebar({
  cart,
  routineEssentials,
}: {
  cart: Record<string, { count: number }>;
  routineEssentials: [string, {}][];
}): React.ReactElement {
  const [subtotal, setSubtotal] = React.useState(0);

  // Calculate subtotal based on cart
  React.useEffect(() => {
    async function refreshData() {
      let total = 0;

      Object.entries(cart).forEach((entry) => {
        const [id, { count }] = entry;
        const item = ITEMS_MAP.get(id);
        if (item !== null && item !== undefined) {
          total = total + item.price.default * count;
          console.log(count);
          console.log(item);
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
      <RoutineEssentialsList routineEssentials={routineEssentials} />
    </Box>
  );
}
