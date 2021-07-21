import { Grid, GridItem } from "@chakra-ui/react";
import { useCart, useRoutineEssentals } from "../database/index";
import React from "react";
import CartResult from "../components/Cart/CartResult";
import CartSidebar from "../components/Cart/CartSidebar";

export default function Cart(): React.ReactElement {
  const [cart, setCart] = React.useState<[string, number][]>([]);
  const [routineEssentials, setRoutineEssentials] = React.useState<
    [string, {}][]
  >([]);

  const { get: getCart } = useCart();
  const { get: getRoutineEssentals } = useRoutineEssentals();

  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: [string, number][] = Object.entries(cartData);
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: [string, {}][] = Object.entries(routineData);
      setRoutineEssentials(routineArray);
      console.log("cart");
      console.log(cart);
    }
    refreshData();
  }, []);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={3} px={4}>
      <GridItem colSpan={8} pr={4} pt={6}>
        <CartResult cart={cart} />
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
