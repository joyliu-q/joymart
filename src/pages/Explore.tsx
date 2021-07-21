import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import {
  ITEMS_MAP,
  RoutineEssentialItem,
  useCart,
  useRoutineEssentals,
} from "../database";
import React from "react";
import ItemRow from "../components/Item/ItemRow";
import ExploreSidebar from "../components/Explore/ExploreSidebar";

import { ItemDetails } from "../constants/item";

export default function Explore({
  cart,
  routineEssentials,
  setCart,
}: {
  cart: Record<string, { count: number }>;
  routineEssentials: RoutineEssentialItem[];
  setCart: React.Dispatch<
    React.SetStateAction<Record<string, { count: number }>>
  >;
}): React.ReactElement {
  const [items, setItems] = React.useState<React.ReactElement[]>([]);
  const [itemSelected, setItemSelected] =
    React.useState<ItemDetails | null>(null);

  // Make return items
  React.useEffect(() => {
    let newItems = items;
    ITEMS_MAP.forEach((value, key: string) => {
      newItems.push(
        <ItemRow
          item={value}
          key={key}
          onClick={() => setItemSelected(ITEMS_MAP.get(key) as ItemDetails)}
          cart={cart}
          routineEssentials={routineEssentials}
        />
      );
    });
    setItems(newItems);
  }, []);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={3}
      px={4}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setItemSelected(null);
      }}
      bgColor="orange.100"
    >
      <GridItem
        colSpan={8}
        pr={4}
        pt={6}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setItemSelected(null);
        }}
      >
        {items}
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
        {itemSelected == null ? null : (
          <ExploreSidebar itemSelected={itemSelected} />
        )}
      </GridItem>
    </Grid>
  );
}
