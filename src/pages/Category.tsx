import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ITEMS_MAP, RoutineEssentialItem } from "../database";
import React from "react";
import ItemRow from "../components/Item/ItemRow";
import ExploreSidebar from "../components/Explore/ExploreSidebar";

import { ItemDetails } from "../constants/item";
import Map from "../components/Explore/Map";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import ShowCartButton from "../components/Explore/ShowCartButton";
import CategoryTour from "../components/Explore/CategoryTour";

export enum Categories {
  All = "all",
  FrozenFood = "frozen-food",
  Fruits = "fruits",
  Vegetables = "vegetables",
  General = "general",
  Furniture = "furniture",
  Electronics = "electronics",
  Clothes = "clothes",
}

const categoryToBgColor: Record<string, string> = {
  [Categories.All]: "orange.200",
  [Categories.FrozenFood]: "#A183E2",
  [Categories.Fruits]: "#8BEFD7",
  [Categories.Vegetables]: "#D3E080",
  [Categories.General]: "#F4A86C",
  [Categories.Furniture]: "#6280CC",
  [Categories.Electronics]: "#EF8BBD",
  [Categories.Clothes]: "#FFE266",
};

export default function Category({
  category,
  cart,
  routineEssentials,
  setCart,
}: {
  category: string;
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
      const item = ITEMS_MAP.get(key) as ItemDetails;
      if (category === "all" ? true : item.category === category) {
        console.log(item);

        newItems.push(
          <ItemRow
            item={value}
            key={key}
            onClick={() => setItemSelected(item)}
            cart={cart}
            routineEssentials={routineEssentials}
          />
        );
      }
    });
    setItems(newItems);
  }, []);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setItemSelected(null);
      }}
      bgColor="orange.100"
    >
      {category === "all" ? null : (
        <Box position="fixed" height="100%" top="80px" left={4} zIndex={5}>
          <Flex position="sticky" top="80px" zIndex={5} alignItems="center">
            <Tooltip
              hasArrow
              label="Back to Layout"
              aria-label="Back to Layout"
            >
              <IconButton
                as="a"
                href="/explore"
                aria-label="Search database"
                icon={<ChevronLeftIcon width="32px" height="32px" />}
                size="lg"
                borderRadius="24px"
                className="backButton"
              />
            </Tooltip>
            <Map isModal />
          </Flex>
        </Box>
      )}
      <GridItem
        className="items"
        colSpan={8}
        px={4}
        pt={6}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setItemSelected(null);
        }}
        bgColor={categoryToBgColor[category]}
      >
        {items.length === 0 ? (
          <Center bgColor="white" minHeight="90%" p={8}>
            <Image boxSize="150px" src="/graphics/flower.svg" mr="20px" />
            <Stack
              direction="column"
              flexDir="column"
              textAlign="left"
              maxWidth="500px"
            >
              <Heading as="h5" size="xl" fontWeight={500}>
                Currently, we have no new{" "}
                <b>{category === "all" ? "" : category}</b> items in stock.
              </Heading>
              <Text>
                Feel free to walk around in other sections for potential
                replacements. Come again next time!
              </Text>
              <Button
                as="a"
                href="/explore"
                maxWidth="150px"
                bgColor={categoryToBgColor[category]}
                _hover={{
                  bgColor: categoryToBgColor[category],
                  color: "black",
                }}
                color="white"
              >
                Back to Layout
              </Button>
            </Stack>
          </Center>
        ) : (
          <Box>{items}</Box>
        )}
      </GridItem>
      <GridItem
        className="itemMeta"
        display="flex"
        flexDirection="column"
        height="calc(100vh - 60px)"
        colSpan={4}
        pt={6}
        px={4}
        position="sticky"
        top="60px"
      >
        <ExploreSidebar itemSelected={itemSelected} />
        <ShowCartButton />
        {category === "all" || items.length === 0 ? null : (
          <CategoryTour category={category} />
        )}
      </GridItem>
    </Grid>
  );
}
