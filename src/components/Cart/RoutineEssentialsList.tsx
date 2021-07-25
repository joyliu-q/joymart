import { Text, Heading, Button, Box, Flex, Checkbox } from "@chakra-ui/react";
import { ITEMS_MAP, RoutineEssentialItem, useCart } from "../../database/index";
import React from "react";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionIcon,
} from "@chakra-ui/icons";
import { clear } from "idb-keyval";

export default function RoutineEssentialsList({
  cart,
  routineEssentials,
}: {
  cart: Record<string, { count: number }>;
  routineEssentials: RoutineEssentialItem[];
}): React.ReactElement {
  const [routineIsCollapsed, setRoutineIsCollapsed] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState(
    new Array(routineEssentials.length).fill(false)
  );

  const { add: addToCart } = useCart();

  const addItemToCart = (id: string) => {
    addToCart({ itemId: parseInt(id) ?? -1, count: 1 });
  };

  const handleAddSelectedToCart = () => {
    if (
      numOfCheckedItems() === 0 ||
      numOfCheckedItems() === routineEssentials.length
    ) {
      routineEssentials.forEach((entry) => {
        const [id] = entry;
        addItemToCart(id);
      });
    } else {
      routineEssentials.forEach((entry, index) => {
        const [id] = entry;
        if (checkedItems[index] === true) {
          addItemToCart(id);
        }
      });
    }
    window.location.reload();
  };

  const numOfCheckedItems = () => {
    let count = 0;
    checkedItems.forEach((value) => {
      if (value === true) {
        count += 1;
      }
    });
    return count;
  };

  React.useEffect(() => {
    const newCheckedItems = checkedItems;

    Object.entries(routineEssentials).map((entry, index) => {
      const [id] = entry;
      if (cart[id] !== null && cart[id] !== undefined) {
        newCheckedItems[index] = true;
      }
    });
    setCheckedItems(newCheckedItems);
  }, []);
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="flex-start"
        bgColor="orange.100"
        minHeight={routineIsCollapsed ? 12 : "calc(100% - 75px)"}
        width="100%"
        position="absolute"
        pt={8}
        pb={12}
        bottom={0}
        transition="all .3s ease"
        _hover={{
          pb: routineIsCollapsed ? 24 : 12,
          cursor: "pointer",
        }}
        onClick={() => setRoutineIsCollapsed(!routineIsCollapsed)}
      >
        <Flex
          flexDir="column"
          bgColor="white"
          position="relative"
          top="-115px"
          width="100%"
        >
          <Heading as="h3" textAlign="center">
            Routine Essentials
          </Heading>
          <Flex
            flexDir="row"
            justifyContent={
              routineEssentials.length === 0 ? "flex-end" : "space-between"
            }
          >
            {routineEssentials.length === 0 ? null : (
              <Button
                variant="ghost"
                _hover={{ bgColor: "none", color: "blue.500" }}
                leftIcon={<AddIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddSelectedToCart();
                }}
              >
                <b>
                  Add{" "}
                  {numOfCheckedItems() === routineEssentials.length ||
                  numOfCheckedItems() === 0
                    ? "All "
                    : `${numOfCheckedItems()} Items `}
                  to Cart
                </b>
              </Button>
            )}
            {routineIsCollapsed ? (
              <ChevronDownIcon w={10} h={10} />
            ) : (
              <ChevronUpIcon w={10} h={10} />
            )}
          </Flex>
        </Flex>
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

        {routineEssentials.length < 1 ? (
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            width="100%"
            position="absolute"
            top={"20px"}
            right={0}
          >
            <Text mb={4}>Got items? Add them to Routine Essentials!</Text>
            <Button size="sm" variant="link" leftIcon={<QuestionIcon />}>
              What are Routine Essentials?
            </Button>
          </Flex>
        ) : (
          <>
            {Object.entries(routineEssentials)
              .slice(0, routineIsCollapsed ? 3 : routineEssentials.length)
              .map((entry, index) => {
                const id = entry[1][0];
                const item = ITEMS_MAP.get(id);
                if (item == null) {
                  return null;
                }
                console.log(entry);
                return (
                  <Checkbox
                    key={id}
                    isChecked={checkedItems[index]}
                    onChange={(e) => {
                      e.stopPropagation();
                      let checkedItemsCopy = checkedItems;
                      checkedItemsCopy[index] = e.target.checked;
                      setCheckedItems(checkedItemsCopy);
                    }}
                    mx={5}
                    textAlign="left"
                  >
                    Add {item.name}
                  </Checkbox>
                );
              })}
          </>
        )}
      </Flex>
    </>
  );
}
