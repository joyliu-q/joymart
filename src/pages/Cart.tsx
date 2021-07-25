import { Grid, GridItem } from "@chakra-ui/react";
import { CartItems, RoutineEssentialItem } from "../database/index";
import React from "react";
import CartResult from "../components/Cart/CartResult";
import CartSidebar from "../components/Cart/CartSidebar";

export default function Cart({
  isModal = false,
  cart,
  routineEssentials,
  setCart,
}: {
  isModal?: boolean;
  cart: CartItems;
  routineEssentials: RoutineEssentialItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItems>>;
}): React.ReactElement {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={3}>
      <GridItem
        colSpan={8}
        px={4}
        pt={6}
        overflow="scroll"
        maxHeight={isModal ? "calc(100vh - 120px)" : "100vh"}
        bgColor="pink.100"
      >
        <CartResult
          cart={cart}
          setCart={setCart}
          routineEssentials={routineEssentials}
        />
      </GridItem>
      <GridItem
        display="flex"
        flexDirection="column"
        height={isModal ? "calc(100vh - 120px)" : "calc(100vh - 60px)"}
        colSpan={4}
        px={4}
        pt={6}
        position="sticky"
        top="60px"
      >
        <CartSidebar cart={cart} routineEssentials={routineEssentials} />
      </GridItem>
    </Grid>
  );
}
