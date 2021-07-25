import { Text, Flex, Heading, Stack, Image, Button } from "@chakra-ui/react";
import ItemRow from "../Item/ItemRow";
import {
  ITEMS_MAP,
  CartItems,
  RoutineEssentialItems,
} from "../../database/index";
import React from "react";

export default function CartResult({
  cart,
  routineEssentials,
  setCart,
}: {
  cart: CartItems;
  routineEssentials: RoutineEssentialItems;
  setCart: React.Dispatch<React.SetStateAction<CartItems>>;
}): React.ReactElement {
  return (
    <>
      <Heading as="h1" textAlign="left">
        My Cart
      </Heading>
      {Object.entries(cart).length === 0 ? (
        <Stack
          p={12}
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          direction={{ base: "column", lg: "row" }}
          bgColor="gray.100"
          alignItems="center"
        >
          <Image
            boxSize={{ base: "50%", lg: "33%" }}
            objectFit="cover"
            src="/graphics/window.svg"
            alt="Cart Empty"
          />
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h2">Your Cart is Empty</Heading>
            <Text>
              Visit the explore page to find more items or add from your{" "}
              <b>Routine Essentials</b> list.
            </Text>
            <Button
              as="a"
              href="/explore"
              size="lg"
              maxWidth="250px"
              bgColor="white"
              _hover={{ bgColor: "gray.50", color: "blue.500" }}
            >
              Explore More Items
            </Button>
          </Stack>
        </Stack>
      ) : null}
      {Object.entries(cart).map((entry) => {
        const [id, { count }] = entry as [string, { count: number }];
        const item = ITEMS_MAP.get(id);
        if (item == null) {
          return <Flex key={id}>Not Found: Item#{id}</Flex>;
        }
        return (
          <ItemRow
            key={id}
            item={item}
            count={count as number}
            cart={cart}
            routineEssentials={routineEssentials}
            hideOnDelete
          />
        );
      })}
    </>
  );
}
