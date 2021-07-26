import {
  useMediaQuery,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { CartItems, RoutineEssentialItems } from "../database/index";
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
  routineEssentials: RoutineEssentialItems;
  setCart: React.Dispatch<React.SetStateAction<CartItems>>;
}): React.ReactElement {
  const [isLargerThanXl] = useMediaQuery("(min-width: 72em)");
  const [tabIndex, setTabIndex] = React.useState(0);

  if (!isLargerThanXl) {
    return (
      <Flex bgColor="#FEF2A8" minHeight="calc(100vh - 60px)">
        <Tabs
          onChange={(index) => setTabIndex(index)}
          variant="enclosed"
          colorScheme="gray"
          px={4}
          pt={6}
        >
          <TabList>
            <Tab
              bgColor={tabIndex === 0 ? "white" : "gray.100"}
              _focus={{ boxShadow: "none" }}
            >
              <b>Cart Items</b>
            </Tab>
            <Tab
              bgColor={tabIndex === 1 ? "white" : "gray.100"}
              _focus={{ boxShadow: "none" }}
            >
              <b>Check out</b>
            </Tab>
          </TabList>
          <TabPanels bgColor="white">
            <TabPanel width="calc(100vw - 35px)">
              <CartResult cart={cart} routineEssentials={routineEssentials} />
            </TabPanel>
            <TabPanel
              width="calc(100vw - 35px)"
              height="calc(100vh - 125px)"
              pb={0}
            >
              <CartSidebar cart={cart} routineEssentials={routineEssentials} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  }
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={3}>
      <GridItem
        colSpan={{ base: 12, lg: 8 }}
        px={4}
        pt={6}
        overflow="scroll"
        maxHeight={isModal ? "calc(100vh - 120px)" : "100vh"}
        bgColor="#FEF2A8"
      >
        <CartResult cart={cart} routineEssentials={routineEssentials} />
      </GridItem>
      <GridItem
        display="flex"
        flexDirection="column"
        height={isModal ? "calc(100vh - 120px)" : "calc(100vh - 60px)"}
        colSpan={{ base: 12, lg: 4 }}
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
