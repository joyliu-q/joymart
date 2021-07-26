import { Text, Heading, Button, Box, Flex, Checkbox } from "@chakra-ui/react";
import {
  CartItems,
  ITEMS_MAP,
  RoutineEssentialItems,
  useCart,
} from "../../database/index";
import React from "react";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

export default function RoutineEssentialsList({
  cart,
  routineEssentials,
}: {
  cart: CartItems;
  routineEssentials: RoutineEssentialItems;
}): React.ReactElement {
  // Initialize variables
  const [routineIsCollapsed, setRoutineIsCollapsed] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState<
    Record<string, boolean>
  >({});

  // Mark items already in cart as checked
  React.useEffect(() => {
    const checked: Record<string, boolean> = {};
    Object.entries(cart).forEach((entry) => {
      const [id] = entry;
      checked[id] = true;
    });

    setCheckedItems(checked);
  }, [cart]);

  // Create helper functions specific for single add
  const { add: addToCart } = useCart();
  const addItemToCart = (id: string) => {
    addToCart({ itemId: parseInt(id) ?? -1, count: 1 });
  };

  const handleAddSelectedToCart = () => {
    // Check # of selected items. If all items are checked, we can just add all to cart instead of iterating & checking each elemeent.
    if (
      returnNumOfCheckedItems() === 0 ||
      returnNumOfCheckedItems() === routineEssentials.length
    ) {
      Object.entries(routineEssentials).forEach((entry) => {
        const [id] = entry;
        addItemToCart(id);
      });
    } else {
      Object.entries(routineEssentials).forEach((entry, index) => {
        const [id] = entry;
        if (checkedItems[index] === true) {
          addItemToCart(id);
        }
      });
    }
    window.location.reload();
  };

  // Return the # of items that are checked
  const returnNumOfCheckedItems = () => {
    let count = 0;
    Object.entries(checkedItems).forEach((entry) => {
      const [_id, checked] = entry;
      if (checked) {
        count += 1;
      }
    });
    return count;
  };

  return (
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
        {/* Expanding routine essentials & add-all button */}
        {Object.entries(routineEssentials).length === 0 ? null : (
          <Flex
            flexDir="row"
            justifyContent={
              Object.entries(routineEssentials).length === 0
                ? "flex-end"
                : "space-between"
            }
          >
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
                {returnNumOfCheckedItems() ===
                  Object.entries(routineEssentials).length ||
                returnNumOfCheckedItems() === 0
                  ? "All "
                  : `${returnNumOfCheckedItems()} Items `}
                to Cart
              </b>
            </Button>
            {routineIsCollapsed ? (
              <ChevronDownIcon w={10} h={10} />
            ) : (
              <ChevronUpIcon w={10} h={10} />
            )}
          </Flex>
        )}
      </Flex>
      {/* Dogear style */}
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
      {/* Empty View of Routine Essentials List */}
      {Object.entries(routineEssentials).length === 0 ? (
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
          {/* Nonempty View of Routine Essentials List */}
          {Object.entries(routineEssentials)
            .slice(
              0,
              routineIsCollapsed
                ? Math.min(3, Object.keys(routineEssentials).length)
                : Object.keys(routineEssentials).length
            )
            .map((entry, index) => {
              const [id] = entry;
              const item = ITEMS_MAP.get(id);
              if (item == null) {
                return null;
              }
              return (
                <Checkbox
                  key={id}
                  isChecked={checkedItems[`${id}`]}
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
  );
}
