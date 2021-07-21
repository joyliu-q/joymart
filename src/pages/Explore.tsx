import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ITEMS_MAP, useCart, useRoutineEssentals } from "../database";
import React from "react";
import ItemRow from "../components/Item/ItemRow";
import { ItemDetails } from "../constants/item";
import Rating from "react-rating";

export default function Explore(): React.ReactElement {
  const [cart, setCart] = React.useState<[string, number][]>([]);
  const [items, setItems] = React.useState<React.ReactElement[]>([]);
  const { add: addToCart } = useCart();

  const [routineEssentials, setRoutineEssentials] = React.useState<
    [string, {}][]
  >([]);

  const [itemSelected, setItemSelected] =
    React.useState<ItemDetails | null>(null);

  const { get: getCart } = useCart();
  const { add: addToRoutineEssentals, get: getRoutineEssentals } =
    useRoutineEssentals();

  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: [string, number][] = Object.entries(cartData);
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: [string, {}][] = Object.entries(routineData);
      setRoutineEssentials(routineArray);
    }
    refreshData();
  }, []);

  // Make return items
  React.useEffect(() => {
    let newItems = items;
    ITEMS_MAP.forEach((value, key: string) => {
      newItems.push(
        <ItemRow
          item={value}
          key={key}
          onClick={() => setItemSelected(ITEMS_MAP.get(key) as ItemDetails)}
        />
      );
    });
    setItems(newItems);
  }, [items, setItems]);

  const addItemToCart = () => {
    if (itemSelected !== null) {
      addToCart({ itemId: itemSelected.id, count: 0 });
    }
  };
  const addItemToRoutineEssentials = () => {
    if (itemSelected !== null) {
      addToRoutineEssentals({ itemId: itemSelected.id });
    }
  };

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
          <>
            <Flex>
              <Image src={itemSelected.image} boxSize="100px" mr={4} />
              <Flex
                flexDir="column"
                textAlign="left"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Heading as="h5" size="md" fontWeight={500}>
                  {itemSelected.name}
                </Heading>
                <Rating
                  readonly
                  initialRating={itemSelected.rating}
                  emptySymbol={
                    <img
                      src="/empty-star.svg"
                      className="icon"
                      width={24}
                      height={24}
                      alt="O"
                    />
                  }
                  fullSymbol={
                    <img
                      src="/solid-star.svg"
                      className="icon"
                      width={24}
                      height={24}
                      alt="X"
                    />
                  }
                />
                <Flex justifyContent="space-between">
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      ${itemSelected.price.default}
                    </Text>
                    <Text color={"gray.600"}>{itemSelected.price.unit}</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>

            <Stack spacing={2} my={5}>
              <Heading as="h5" size="sm" textAlign="left">
                About This Item
              </Heading>
              <Text textAlign="left">{itemSelected.details.description}</Text>
              <Button onClick={addItemToCart}>Add to Cart</Button>
              <Button onClick={addItemToRoutineEssentials}>
                Add to Routine Essential
              </Button>
            </Stack>
          </>
        )}
      </GridItem>
    </Grid>
  );
}
