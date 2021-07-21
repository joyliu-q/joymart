import { Grid, GridItem } from "@chakra-ui/react";
import {
  CartItem,
  RoutineEssentialItem,
  useCart,
  useRoutineEssentals,
} from "../database/index";
import React from "react";
import CartResult from "../components/Cart/CartResult";
import CartSidebar from "../components/Cart/CartSidebar";

export default function Cart({
  cart,
  routineEssentials,
  setCart,
}: {
  cart: Record<string, number>;
  routineEssentials: RoutineEssentialItem[];
  setCart: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}): React.ReactElement {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={3} px={4}>
      <GridItem colSpan={8} pr={4} pt={6}>
        <CartResult
          cart={cart}
          setCart={setCart}
          routineEssentials={routineEssentials}
        />
      </GridItem>
      <GridItem
        display="flex"
        flexDirection="column"
        height="calc(100vh - 60px)"
        colSpan={4}
        borderLeft={`2px solid gray`}
        pl={4}
        pt={6}
        position="sticky"
        top="60px"
      >
        <CartSidebar cart={cart} routineEssentials={routineEssentials} />
      </GridItem>
    </Grid>
  );
}
